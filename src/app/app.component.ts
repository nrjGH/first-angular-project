import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data:any [] = [];
  constructor(private ds: DataService){}

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.ds.getData().subscribe((response)=>{
      this.data = response.users;

    }, (error) => {console.log(error)});
  }
}
