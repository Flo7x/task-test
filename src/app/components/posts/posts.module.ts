import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutes } from './posts.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { emailPipe } from 'src/app/pipes/changeEmail.pipe';
import { SelectionPipe } from 'src/app/pipes/selection.pipe';

@NgModule({
  imports: [CommonModule, PostsRoutes, ReactiveFormsModule, FormsModule],
  declarations: [PostsComponent, emailPipe, SelectionPipe],
})
export class PostsModule {}
