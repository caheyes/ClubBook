import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
    children: [
      { path: 'livros', component: LivrosComponent },
      { path: 'registros', component: RegistrosComponent },
    ]
  },
  // { path: '**', redirectTo: '/login' }
];