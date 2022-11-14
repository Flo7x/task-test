import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, startWith, Observable, switchMap } from 'rxjs';
import { iUser } from 'src/app/models/user';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  filterForm: FormGroup = this.fb.group({
    email: new FormControl(this.route.snapshot.queryParamMap.get('email')),
    gender: new FormControl(this.route.snapshot.queryParamMap.get('gender')),
  });

  users$!: Observable<any>;
  formText = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private PostsService: PostsService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.users$ = this.getUsers();
  }

  getUsers(): Observable<iUser> {
    console.log(this.users$);
    return this.filterForm.valueChanges.pipe(
      debounceTime(500),
      switchMap(() => {
        this.router.navigate([], {
          queryParams: {
            email: this.filterForm.controls['email'].value,
            gender: this.filterForm.controls['gender'].value,
          },
        });
        this.formText = this.filterForm.controls['email'].value == null ? '' : this.filterForm.controls['email'].value;
        return this.PostsService.getUsers(
          this.filterForm.controls['email'].value == null ? '' : this.filterForm.controls['email'].value,
          this.filterForm.controls['gender'].value == 'all' ? '' : this.filterForm.controls['gender'].value,
        );
      }),
    );
  }
}
