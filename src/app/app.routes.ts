import { Routes } from '@angular/router';
import { Splash } from './pages/splash/splash';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { AuthLayout } from './core/layouts/auth-layout/auth-layout';
import { Home } from './pages/home/home';
import { MyCourses } from './pages/my-courses/my-courses';
import { CourseDetail } from './pages/course-detail/course-detail';
import { ModulesLessons } from './pages/modules-lessons/modules-lessons';
import { VideoPlayer } from './pages/video-player/video-player';
import { authGuard } from './core/guards/auth.guard/auth.guard';



export const routes: Routes = [
  { path: '',  component: Splash },
  { path: 'login',component: Login  },
  { path: 'signup', component: Signup },

  {
    path: '',
     component: AuthLayout,
      canActivate: [authGuard],
    children: [
      { path: 'home', component: Home },
      { path: 'courses', component: MyCourses },
      { path: 'course/:id', component: CourseDetail },
      { path: 'modules/:id', component: ModulesLessons },
      { path: 'video/:id', component: VideoPlayer },
    ]
  }
  
];

