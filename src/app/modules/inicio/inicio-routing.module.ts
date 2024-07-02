import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPrincipalComponent } from './pages/inicio-principal/inicio-principal.component';

const routes: Routes = [
  {
    path:'',component:InicioPrincipalComponent
  },
  {
    path:'inicio', component:InicioPrincipalComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
