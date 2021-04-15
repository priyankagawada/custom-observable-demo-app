import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom1-observable',
  templateUrl: './custom1-observable.component.html',
  styleUrls: ['./custom1-observable.component.css']
})
export class Custom1ObservableComponent implements OnInit {

  myObservable: Observable<number>;
  subscription: Subscription;
  data:number;
  constructor() { 
    this.myObservable = interval(1000);
  }

  ngOnInit(): void {
  }

  startSubscription(){
    this.subscription = this.myObservable.subscribe((data: number) => {
      this.data = data;
      console.log(data);
    });
  }

  stopSubscription(){
    this.subscription.unsubscribe();
  }
}
