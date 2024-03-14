import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {  // class

  // Properties
   /* private name:String;
   private age:number;
   private email:String; */


    name:String;
    age:number;
    email:String;



// Constructor
  constructor(){
    this.name = 'kenneth';
    this.age = 21;
    this.email = 'kenneth@gmail.com';

  }

  // Method
  greet(){

    console.log("chamando a função greeter");

  }


}

// Acessing properties
const estudent = new StudentComponent();
console.log(estudent.name); // output: kenneth
console.log(estudent.age);
console.log(estudent.email);

estudent.greet();


