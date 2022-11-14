import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsGuard } from './guards/posts.guard';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule),
    canActivate: [PostsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
