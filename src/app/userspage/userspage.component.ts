import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-userspage',
  templateUrl: './userspage.component.html',
  styleUrl: './userspage.component.css'
})
export class UserspageComponent implements OnInit {
  usersList:any[] = [];
  constructor(private ds: DataService){}

  ngOnInit() : void{
    this.fetchData();
  }
  fetchData(){
    this.ds.getData().subscribe((response) => {
      this.usersList = response.users;
      // console.log(this.usersList[0]);
    }, (error) => {console.log(error)});
  }
}
