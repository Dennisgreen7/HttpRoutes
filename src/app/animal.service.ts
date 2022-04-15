import { Injectable } from '@angular/core';
import { Dog } from './interfaces/animal';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AnimalService {
dog:Dog = {message:'',status:''};
  constructor(private animalHttp:HttpClient) { }
  getDog() {   return this.animalHttp.get('https://dog.ceo/api/breeds/image/random'); }
  getCat() {   return this.animalHttp.get('https://cat-fact.herokuapp.com/facts'); }
  getAPI(){return this.animalHttp.get('https://randomfox.ca/floof/?ref=apilist.fun');}
}
