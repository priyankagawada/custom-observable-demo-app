import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  // varaible of type Observable
  myObservable: Observable<string>;
  data: string;

  subscription: Subscription;

  constructor() {
    console.log('CustomObserrvable called');
    this.myObservable = new Observable((observer: Observer<string>) => {

      // aysnchronous function setTimeout(() => {}, time)
      setTimeout(() => {
        observer.next('String 1');
      }, 2000);
      setTimeout(() => {
        observer.next('String 2');
      }, 4000);
      setTimeout(() => {
        observer.next('String 3');
      }, 6000);
      setTimeout(() => {
        observer.error(new Error('error occurred'));
      }, 8000);
      setTimeout(() => {
        observer.complete();
      }, 10000);




    });


    console.log('Observable -', this.myObservable);
  }

  ngOnInit(): void {
  }

  // subscribe(next, error, complete)
  //subscribe(() => {}, () => {}, () =>{} )
  startSubscription() {
  
    this.subscription = this.myObservable.subscribe((data: string) => {
      this.data = data;
      console.log(data);
    },

      (error: Error) => {
        console.log('Error thrown - ', error);
      },

      () => {
        console.log('No data coming further')
      }

    );

  }

  stopSubscription() {

     this.subscription.unsubscribe();

  }
}
