import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
// for reactive forms
userForm:any;
isFormVisible:boolean = true;
userRole:string ='admin';
items:string[]=['item 1','item 2','item 3'];

constructor(public formbuilder:FormBuilder){


}

ngOnInit(){
  this.userForm = this.formbuilder.group({
    name:['',Validators.required],
    email:['']

  })


}

onSubmit(){
  console.log("User Details",this.userForm.value);
}



}







/* export class StudentComponent {  // class

  // Properties
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

// Object
const estudent = new StudentComponent();

// Acessing properties
console.log(estudent.name); // output: kenneth
console.log(estudent.age);
console.log(estudent.email);

estudent.greet();
 */


