import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  users=[
    {Username:'kavi',Email:'kavi@123',Role:'User'},
    {Username:'Vani',Email:'Vani@234',Role:'Admin'},
    {Username:'Devi',Email:'Devi@123',Role:'User'},
    {Username:'Ram',Email:'Ram@178',Role:'User'},
    {Username:'Sri',Email:'Sri@756',Role:'Admin'}
  ];

}
