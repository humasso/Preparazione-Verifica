import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { IngredientiComponent } from './ingredienti/ingredienti.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'ingredienti/:id', component: IngredientiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
