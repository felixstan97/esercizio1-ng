import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() user : string

  usero : string ;

  today:Date;

  money: number;

  show : boolean = false

  lista:string[] = ["Lezione1", "Lezione 2", "Lezione 3"];

  color:string = "black";

  size : string = "none";

  @ViewChild('about', { static: false}) aboutElement : ElementRef;


  selectField : FormControl = new FormControl("amish");

  form : FormGroup;

  send():void{
    console.log("send")
    if(!this.form.valid){
      alert("Campi non validi")
      return;
    } 
    console.log(
      this.form.controls['user'].value,
      this.form.controls['email'].value,
      this.form.controls['password'].value,
      this.form.controls['number'].value
      )
      
    let temp = this.form.controls['password'].value;
    this.vecchio = temp
      console.log(this.vecchio)
  }

  vecchio : string;

  checkUser(): void {
    let user = this.form.controls['user'].value;
    if(!(user.length >= 8)){
      this.form.controls['user'].setErrors({ incorrect: true});
    } else {
      this.form.controls['user'].setErrors(null);
    }
  }

  constructor(public fb : FormBuilder, public http: HttpClient) {
    this.today = new Date();

    let money1 = 32;
    let money2 = 424;
    this.money = this.sum(money1, money2);

    console.log("constructor");

    this.form = fb.group({
      'user': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'number': ['']
    })

   }

   loadingGet = false;
  
   loadingLoad = false;

    valore1= "http://127.0.0.1:5000/"
    valore = "http://127.0.0.1:5000/"
    valore3 = "http://127.0.0.1:5000/"

   loadUsers(): void{
    this.loadingGet = true;
    this.http.get(this.valore).subscribe(res =>{
      this.loadingGet = false;
      console.log(this.loadingGet)
      console.log(res)
    });
   }

   getter():void{
     this.loadUsers();
    // this.oldLoadUsers().subscribe(this.callBack);
     console.log("ciao")
   }

   lollo(){
     this.http.get(this.valore).subscribe({
      next: res => console.log("ho " + res),
      error: error => {                              //Error callback
        console.error('error caught in component')
        console.log(error)
      }
     });
   }

   loader(){
     this.lollo();
    }


   //vecchio modo
  //  callBack = (res) => {
  //   console.log(res)
  //  }
  //  oldLoadUsers():Observable<Object>{
  //   return this.http.get(this.valore3);
  //  }
   

  ngOnInit(): void {
    console.log("onInit");
    this.checkUser
  }

  ngAfterViewInit():void{
    //codice che viene letto dopo il cricamento della pagina
    document.getElementById("button").style.backgroundColor = "red";
  }

  sum(n1:number, n2:number): number{
    return n1+n2;
  }

  showHidden(): void{
    this.show = !this.show;
  }

  printElement():void {
    console.log(this.aboutElement.nativeElement);
  }

  hello(field:HTMLSelectElement):void{
    if(field.value == "1"){
      alert("Ciao allert!")
    } else {
      console.log("Ciao console")
    }
  }

  colorChange(field : HTMLSelectElement) : void {
    if(field.value == "1"){
      this.color = "red";
    } else if (field.value == "2") {
      this.color = "blue";
    } else if (field.value == "3") {
      this.color = "green";
    } else {
      this.color = "black";
    }
  }

  sizeChange(field : HTMLSelectElement): void {
    if(field.value == "1"){
      this.size = "big";
    } else if (field.value == "2") {
      this.size = "small";
    } else {
      this.size = "none";
    }
  }


}
