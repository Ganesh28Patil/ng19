import { Routes } from '@angular/router';
import { Home } from './component/home/home';
import { Auth } from './component/auth/auth';
import { Dashboard } from './component/dashboard/dashboard';
import { Students } from './component/students/students';
import { PageNotFound } from './component/page-not-found/page-not-found';
import { About } from './component/about/about';
import { Courses } from './component/courses/courses';
// import { Courses } from './component/admin/courses';
import { Login } from './component/auth/login/login';
import { Register } from './component/auth/register/register';
import { ForgotPassword } from './component/auth/forgot-password/forgot-password';
import { Admin } from './component/admin/admin';
import { Users } from './component/admin/users/users';
import { Payments } from './component/admin/payments/payments';
import { SystemSettings } from './component/admin/system-settings/system-settings';
import { Settings } from './component/dashboard/settings/settings';
import { Reports } from './component/dashboard/reports/reports';
import { Analytics } from './component/dashboard/analytics/analytics';
import { Overview } from './component/dashboard/overview/overview';
import { Backend } from './component/courses/backend/backend';
import { Java } from './component/courses/backend/java/java';
import { Nodejs } from './component/courses/backend/nodejs/nodejs';
import { Flutter } from './component/courses/mobile-development/flutter/flutter';
import { ReactNative } from './component/courses/mobile-development/react-native/react-native';
import { MobileDevelopment } from './component/courses/mobile-development/mobile-development';
import { Vue } from './component/courses/web-development/vue/vue';
import { React } from './component/courses/web-development/react/react';
import { Angular } from './component/courses/web-development/angular/angular';
import { WebDevelopment } from './component/courses/web-development/web-development';
import { Create } from './component/admin/courses/create/create';
import { Manage } from './component/admin/courses/manage/manage';
import { Edit } from './component/admin/courses/edit/edit';
import { AdminCourses } from './component/admin/courses/courses';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'auth',component:Auth,
        children:[
            {path:'login',component:Login},
            {path:'register',component:Register},
            {path:'forget-password',component:ForgotPassword},
        ]
    },
    {path:'home',component:Home},
    {path:'admin',component:Admin,
         children:[
            {path:'users',component:Users},
            {path:'courses',component:AdminCourses,
                    children:[
            {path:'create',component:Create},
            {path:'edit',component:Edit},
            {path:'manage',component:Manage},
        ]
            },
            {path:'payments',component:Payments},
            {path:'system-settings',component:SystemSettings},
        ]

    },
    {path:'dashboard',component:Dashboard,
        children:[ 
            {path:'overview',component:Overview},
            {path:'analytics',component:Analytics},
            {path:'reports',component:Reports},
            {path:'settings',component:Settings},
        ]
    },
    {path:'students',component:Students},
    {path:'courses',component:Courses,
         children:[
            {path:'web-development',component:WebDevelopment,
                  children:[
            {path:'angular',component:Angular},
            {path:'react',component:React},
            {path:'vue',component:Vue},
        ]
            },
            {path:'mobile-development',component:MobileDevelopment,
                  children:[
            {path:'react-native',component:ReactNative},
            {path:'flutter',component:Flutter},
        ]
            },
            {path:'backend',component:Backend,
                  children:[
            {path:'nodejs',component:Nodejs},
            {path:'java',component:Java},
        ]
            },
        ]
    },
    {path:'about',component:About},
    {path:'**',component:PageNotFound},
];
/*

 -s --skip-tests && ng g c  

 ng g c overview -s --skip-tests && ng g c analytics -s --skip-tests && ng g c reports -s --skip-tests && ng g c settings -s --skip-tests
 ng g c login -s --skip-tests && ng g c register -s --skip-tests && ng g c forgot-password -s --skip-tests 
 ng g c users -s --skip-tests && ng g c courses -s --skip-tests && ng g c payments -s --skip-tests && ng g c system-settings -s --skip-tests

  ng g c login -s --skip-tests && ng g c register -s --skip-tests && ng g c forgot-password -s --skip-tests 
  

 Routing Tree Structure
/
├── home
│
├── about
│
├── courses
│   ├── web-development
│   │   ├── angular
│   │   ├── react
│   │   └── vue
│   │
│   ├── mobile-development
│   │   ├── react-native
│   │   └── flutter
│   │
│   └── backend
│       ├── nodejs
│       └── java
│
├── students
│   ├── student-list
│   ├── student-details/:id
│   └── student-progress/:id
│
├── dashboard
│   ├── overview
│   ├── analytics
│   ├── reports
│   └── settings
│
├── auth
│   ├── login
│   ├── register
│   └── forgot-password
│
├── admin
│   ├── users
│   ├── admin-courses 
|   |    ├── create
|   |    ├── edit/:id
|   |    └── manage
│   ├── payments
│   └── system-settings
│
└── page-not-found

*/