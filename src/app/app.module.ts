import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FactListComponent } from './fact-list/fact-list.component';
import { FactComponent } from './fact/fact.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FactService } from './services/fact.service';
import { HttpClientModule } from '@angular/common/http'; 
import { StoreModule } from '@ngrx/store';
import { factsReducer } from './facts.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FactListComponent,
    FactComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ facts: factsReducer })
  ],
  providers: [FactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
