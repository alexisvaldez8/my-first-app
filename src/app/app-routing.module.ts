import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionsPageComponent } from './definitions-page/definitions-page.component';
import { ExamplesComponent } from './examples/examples.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component:HomePageComponent, pathMatch:"full"},
  {path: 'definitions-page', component:DefinitionsPageComponent, pathMatch:"full"},
  {path: 'examples-page', component:ExamplesComponent, pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
