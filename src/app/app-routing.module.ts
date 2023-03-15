import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesingPageComponent } from './components/desing-page/desing-page.component';

const routes: Routes = [
  {path:'', component: DesingPageComponent,pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
