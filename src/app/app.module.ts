import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { CounterReducer } from "./redux/reducer/counter-reducer";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: CounterReducer })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
