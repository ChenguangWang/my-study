import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReduxComponent } from "./redux.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ReduxComponent }])
  ],
  declarations: [ReduxComponent]
})
export class ReduxModule {}
