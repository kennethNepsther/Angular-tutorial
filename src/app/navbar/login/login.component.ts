import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  globalVar:any =23 // variavel global

  constructor(){
    let num:number = 13;
    let num2:number = 24;
    let bool:boolean = false;
    let nome:String ="Kenneth";
    let sobrenome:String ="Luzolo";

    const valueNew:number =21;

    let value:null; // Não tem valor definido
    value=null;

    let vector:number[]=[1,2,3,4,5]
    let vector2:number[]=[1,2,3,4,5] // Array
    let person:{name: String, age:number} ={name: "John", age: 20}; // Object

    /*
      console.log("Null", value);
      console.log("Nome Completo: ",nome, sobrenome);
      console.log("Boolean:", bool);
      console.log("Number =", num2+num);

      console.log("Array", vector);

      console.log("person", person);
    */


      //======= operators================

      let a:number= 10;
      let b:number =10;

      let sum: number = a+b
      let sub: number = a-b
      let mult: number = a*b
      let divisao: number = a/b
      let modulus: number = a%b

      console.log("Soma = ", sum);
      console.log("Subtração = ", sub);
      console.log("multiplicação = ", mult);
      console.log("diivisão = ", divisao);
      console.log("Modulu = ", modulus);

      let lessThan:boolean;
      lessThan =(a==b)

      console.log("not equal = ", lessThan);

      //Ternary(condition? true:false)
      let age = 18;

      let checkAge =(age>18) ? 'Adult': 'Child';
      console.log('Check Age',checkAge);


  }

}
