import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPrincipalComponent } from './modules/inicio/pages/inicio-principal/inicio-principal.component';
import { SharedModule } from './modules/shared/shared.module';

const routes: Routes = [

  // Ruta hacia el modulo inicio (ruta padre = modulo,
  // rutas hijas = inicio, producto, autentificacion.)
  { path: '', component: InicioPrincipalComponent },
  { path: "", loadChildren: () => import('./modules/producto/producto.module').then(m => m.ProductoModule) },
  { path: "", loadChildren: () => import('./modules/autentificacion/autentificacion.module').then(m => m.AutentificacionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
