import { Component, OnInit } from '@angular/core';
import {Observable, interval} from 'rxjs'

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      let isResolved = true;
      let promise1 = new Promise((resolve, reject)=> {  
        console.log('promise is executing')
          if(isResolved){
            setTimeout(()=> {
              resolve('1'); //return 
              resolve('2'); // unreachable
            }, 1000);

          }
          else {
            reject('rejected');
          }
          
      });

      fetch('https://localhost:4200');

      // promise1.then((response)=> console.log(response, 'promise'));
      

      let observable1 = new Observable((subscriber)=> {
        console.log('observable is executing')

          subscriber.next('1'); //emit value
          subscriber.next('2'); 
          setTimeout(()=> {
            subscriber.next('after 2 seconds');
          },2000)
      });

      observable1.subscribe((response)=> {
          console.log(response, 'obs from first subscriber');
          //ui manipulation
          
      })
      observable1.subscribe((response)=> {
        console.log(response, 'obs from second subscriber');
        //loggin
        
    })
    

    let intervalObservable = interval(1000);
    intervalObservable.subscribe((reponse)=> {
      console.log(reponse);
    })
    let subscription2 = intervalObservable.subscribe((reponse)=> {
      console.log(reponse,'second subscriber');
    })  

    setTimeout(()=> subscription2.unsubscribe(), 5000);
    
  }

  displayedColumns: string[] = ['position1', 'name', 'weight'];
  data1 = ELEMENT_DATA;
  title = 'material';



}
