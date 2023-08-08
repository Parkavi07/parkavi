import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isDisabled:boolean=true;

  btnclick()
  {
    alert("Successfully login");
  }

  dynamicNo:String='0';

}
