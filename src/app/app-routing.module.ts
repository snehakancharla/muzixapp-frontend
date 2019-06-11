import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { MyWishListComponent } from './my-wish-list/my-wish-list.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home-page' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'result/:name', component: SearchComponentComponent },
  { path: 'favs', component: MyWishListComponent },
  { path: 'delete/:myVal', component:DeleteComponent},
  { path: 'dt/:name/:comment', component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
