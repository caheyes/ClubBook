import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { OrganismListaLivrosComponent } from './components/organisms/organism-lista-livros/organism-lista-livros.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
    children: [
      { path: 'livros', component: LivrosComponent },
      { path: 'usuario', component: UsuarioComponent,
        children: [
          { path: 'lista', component: OrganismListaLivrosComponent },
        ]
      },
    ]
  },
  { path: 'usuario', component: UsuarioComponent },
  { path: '**', redirectTo: '/login' }
];