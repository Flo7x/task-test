import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
];

export const PostsRoutes = RouterModule.forChild(routes);
