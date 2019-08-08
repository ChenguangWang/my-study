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

    this.counter$.subscribe(date => {
      console.log("subscribe===>>>", date);
    });
  }

  ngOnInit() {}

  plus() {
    this.counter$.dispatch({ type: "plus", num: 1 });
  }

  minus() {
    this.counter$.dispatch({ type: "minus", num: 2 });
  }
}
