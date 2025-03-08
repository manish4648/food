import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';

export function initializeApp(appService: AppService): () => Promise<void> {
  return () => appService.loadConfig();
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    NotFoundComponent,
    LoginComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ {
    provide: APP_INITIALIZER, 
    useFactory: initializeApp, // Ensure this function is called first
    deps: [AppService], 
    multi: true // Ensures that the app waits for the initializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
