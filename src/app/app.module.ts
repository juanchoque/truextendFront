import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    RecipesComponent,
    AccountsListComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
