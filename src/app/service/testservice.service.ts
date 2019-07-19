import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  signupList = [{  lname: 'jack',fname: 'GEORGE', address1: 'trsr', address2: 'kd;r', cnumber: '3354353454', email: 'anilgmail.com' },
  {  lname: 'P',fname: 'parva', address1: 'ujhtgg', address2: 'ekm', cnumber: '3354353454', email: 'anilgmail.com' },
  {  lname: 'Arun',fname: 'Anil', address1: 'tvm', address2: 'hjkj', cnumber: '3354353454', email: 'anilgmail.com' },

 

  ];

  constructor()

  {}

 

  list()

  {

    return this.signupList;

  }
}
