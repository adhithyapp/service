import { Component, OnInit } from '@angular/core';
import { Serv } from '../model/serv';
import { from } from 'rxjs';
import { TestserviceService } from '../service/testservice.service';
@Component({
  selector: 'signcom',
  templateUrl: './signcom.component.html',
  styleUrls: ['./signcom.component.css']
})
export class SigncomComponent {
signobj:Serv=new Serv();
signupList:Array<Serv>=[];

constructor(private testserviceservice:TestserviceService) {

  this.signupList = testserviceservice.list();

}

errorEmail="";
errorCellPhone="";
errorFirstName="";
errorAddress1="";



 addPhysician(){ 
  this.stringEmpty();
  this.emailValidation();
  this.cellPhoneValidation(); 
  this.physicianPush();
  
 }
 
 stringEmpty()
 {
   try{
  
  if(this.signobj.fname=="")
  {
    this.errorFirstName="First name Can't be empty ";
  }
   
  
  
 
  if(this.signobj.address1=="")
  {
    this.errorAddress1="Address Line1 Can't be empty ";
  }
  
  if(this.signobj.email=="")
  {
    this.errorEmail="Email can't be empty";
  }
  if(this.signobj.cnumber=="")
  {
    this.errorCellPhone="Cellphone number  Can't be empty ";
  }
  
 
   }

catch(error){
  console.log("error");
}
 }
 emailValidation()
  {
    try{
    var pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    if(this.signobj.email.match(pattern))
    {
      return true;
    }
    else{
      this.errorEmail="Invalid Email address!!";
    }
  }
    catch(error){
console.log("error");
    }
  }
  cellPhoneValidation()
 {  
   try{
  var phoneNumber=/[0-9\+\-\ ]/;
  if(this.signobj.cnumber.match(phoneNumber)&&this.signobj.cnumber.length==10)
  {
return true;
  }
  else
  {
    this.errorCellPhone="Invalid Phone Number";
  }}
  catch(error){
    console.log("error");
  }
 }



 physicianPush()
 {
   try{
this.signupList.push(this.signobj);
console.log(this.signobj);
 }
 catch(error)
 {
   console.log("error");
 }
}


}