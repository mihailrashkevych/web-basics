import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { Dog } from './dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']

})
export class DogComponent implements OnInit {

  constructor(private dogService: DogService) { }

  dogs: Dog[];
  editDog: Dog;

  ngOnInit() {
    this.dogService.get().subscribe(data => {
      this.dogs = data;
    });
  }

  add(name: string, age: number): void {
    this.editDog = undefined;
    name = name.trim();
    var age: number = +age;
    if (!name || !age) {
      return;
    }


    const newDog: Dog = { name, age } as Dog;
    this.dogService
      .addDog(newDog)
      .subscribe(dog => this.dogs.push(dog));
  }

  edit(dog: Dog) {
    this.editDog = dog;
  }
}
