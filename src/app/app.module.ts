import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpServicesExampleComponent } from './http-services-example/http-services-example.component';
import { JsonLocalDataComponent } from './json-local-data/json-local-data.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from './http-services-example/services/user.services';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HttpServicesExampleComponent, JsonLocalDataComponent ],
  providers: [ UsersService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
