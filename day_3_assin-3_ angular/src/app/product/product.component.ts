import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(){}

inputValue:any="rithik"
name:string="edureka"
value= "edit"



  id="1"
  fname="Rithik"
  lname="Kuvvarau"
  salary="50000"
  dob="18-9-2001"
  email="rithik@gmail.com"

ngOnInit():void{

}
onClick(){
  this.value="submit"
  console.log("sumbit")
}
onClick2(){
  this.value="edit"
  console.log("edit")
}


}
