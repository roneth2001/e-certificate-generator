import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Verifypage } from './pages/verifypage/verifypage';
import { Ourservices } from './pages/ourservices/ourservices';
import { Contactus } from './pages/contactus/contactus';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
    {
        path: '',
        component: Verifypage
    },
    {
        path:"ourservices",
        component: Ourservices
    },
    {
        path:"contactus",
        component: Contactus
    },
    {
        path:"login",
        component: Login
    },
    {
        path:"signup",
        component: Signup
    },
];
