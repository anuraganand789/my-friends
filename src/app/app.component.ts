import { Component, OnInit } from '@angular/core';
import { Person    } from './person';

@Component({
  selector       :     'app-root',
  templateUrl    :     './app.component.html',
  styleUrls      :     ['./app.component.css']
})
export class AppComponent implements OnInit{
    nameOfMyApplication : string;
    myPerson            : Person;
    myFriends           : Array<Person>    = [];

    ngOnInit() : void {
       this.nameOfMyApplication     =    "Phone Directory";

       this.myPerson                = new Person("Anurag", "Anand", "Bihar, India", "9993939399");

       this.myFriends.push( new Person("Lex", "Fridman", "Russia", "00000-000")          );
       this.myFriends.push( new Person("Joey", "Diaz", "USA", "00000-000")               );
       this.myFriends.push( new Person("Joe", "Rogan", "Delhi, India", "00000-000")      );
       this.myFriends.push( new Person("Jeremey", "Micheal", "Delhi, India", "00000-000"));


    }
}
