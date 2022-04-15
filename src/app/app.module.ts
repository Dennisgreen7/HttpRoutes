import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MyApiComponent } from './my-api/my-api.component';

const appRoutes: Routes = [
  { path: 'dog', component:DogComponent},
  { path: 'cat', component:CatComponent},
  { path: 'myApi', component:MyApiComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    MenuComponent,
    MyApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
