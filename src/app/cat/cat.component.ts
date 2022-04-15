import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  cats:any = [];

  constructor(private catsService:AnimalService) {
    this.catsService.getCat().subscribe(data => {
      this.cats = data;
    });
  
   }

  ngOnInit(): void {
  }

}
