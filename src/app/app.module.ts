import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { DatePipe } from './date.pipe';
import { RepositoryComponent } from './components/repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormSearchComponent,
    MainPageComponent,
    DatePipe,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
