import { Injectable } from '@angular/core';
import { User } from './address-card/user';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  

  printToConsole(args){
    console.log(args);
  }

  createUser(): User{
    let  user : User;
    user=new User();
    user.name="Raghu";
    user.title="Sofware-Developer";
    user.address="Bangalore";
    user.phone=[
       '93485960394',
       '82345677432',
       '72839384984'
    ];
    return user;
  }
}
