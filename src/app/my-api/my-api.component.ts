import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-my-api',
  templateUrl: './my-api.component.html',
  styleUrls: ['./my-api.component.css']
})
export class MyApiComponent implements OnInit {

  api: any = {};


  constructor(private apiServices: AnimalService) {
    this.apiServices.getAPI().subscribe(data => {
      this.api = data;
    });
  }


  ngOnInit(): void {
  }

}
