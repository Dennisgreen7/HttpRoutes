import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  
  dogs:any = {};
  show:boolean = false;
  constructor(private dogService:AnimalService) {
    this.dogService.getDog().subscribe(data => {
      this.dogs = data;
    });
  }
  showDoggo(){
    this.show = !this.show;
  }
  ngOnInit(): void {
  }

}
