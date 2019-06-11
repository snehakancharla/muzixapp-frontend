import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule}  from '@angular/forms';
import { SearchComponentComponent } from './search-component/search-component.component';
import { GetAllTracksComponent } from './get-all-tracks/get-all-tracks.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule }    from '@angular/common/http';
import {MuzixService} from './muzix.service'
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyWishListComponent } from './my-wish-list/my-wish-list.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    GetAllTracksComponent,
    DeleteComponent,
    UpdateComponent,
    HomePageComponent,
    NavigationComponent,
    DashboardComponent,
    MyWishListComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MuzixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
