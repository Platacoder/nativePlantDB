import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PlantFilterComponent } from './components/plant-filter/plant-filter.component';
import { PlantListContainerComponent } from './components/plant-list-container/plant-list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent,
    WelcomeCardComponent,
    PlantFilterComponent,
    PlantListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
