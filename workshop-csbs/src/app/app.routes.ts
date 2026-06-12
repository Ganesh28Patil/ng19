import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Auth } from './component/auth/auth';
import { Dashboard } from './component/dashboard/dashboard';
import { Students } from './component/students/students';
import { PageNotFound } from './component/page-not-found/page-not-found';
import { About } from './component/about/about';
import { Courses } from './component/courses/courses';

export const routes: Routes = [
    {path:'auth',component:Auth},
    {path:'home',component:Home},
    {path:'dashboard',component:Dashboard},
    {path:'students',component:Students},
    {path:'courses',component:Courses},
    {path:'about',component:About},
    {path:'page-notfound',component:PageNotFound},
];
