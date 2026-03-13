import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Course } from './course/course';
import { Contact } from './contact/contact';
import { Products } from './products/products';

export const routes: Routes = [
    {
        path: '',component: Home
    },
    {
        path: 'courses', component:Course
    },
    {
        path: 'contact', component:Contact
    },
    {
        path: 'products', component:Products
    }

];
