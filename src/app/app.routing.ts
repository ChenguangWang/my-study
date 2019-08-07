import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "g6",
    pathMatch: "full"
  },

  {
    path: "editor",
    loadChildren: "./ck-editor/editor.module#EditorModule"
  },

  {
    path: "g6",
    loadChildren: "./g6/g6.module#G6Module"
  },
  {
    path: "dynamic-load",
    loadChildren: "./dynamic-load/dynamic-load.module#DynamicLoadModule"
  },
  {
    path: "redux",
    loadChildren: "./redux/redux.module#ReduxModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
