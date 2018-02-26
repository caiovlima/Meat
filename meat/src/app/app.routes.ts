/*Criamos um arquivo de rotas dentro do nosso app
onde fazemos uma const para exportar um array de rotas, as rotas de sobre e home

Eu devo importar os nossos components
*/

import { Route, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes = [
    // quando a url estiver vazia irá direcionar para o home
    {path: '', component: HomeComponent},
    // quando a url estiver com o parametro about, irá direcionar para o about
    {path: 'about', component: AboutComponent}

    // depois declaramos no app.module.ts
]