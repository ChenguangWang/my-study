import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-redux",
  templateUrl: "./redux.component.html",
  styleUrls: ["./redux.component.less"]
})
export class ReduxComponent implements OnInit {
  counter$: any;

  constructor(public store: Store<any>) {
    this.counter$ = store.select("counter");
    console.log("this.counter$ ====>>>", this.counter$);
  }

  ngOnInit() {}
}
