import { Component, OnInit } from '@angular/core';
import { LikedDogsService } from '../liked-dogs.service';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor(public dogService: LikedDogsService) { }

  ngOnInit() {
    this.dogService.drawRandomDog();
  }

  reject() {
    this.dogService.drawRandomDog();
  }

  approve() {
    this.dogService.addCurrentDogToChosenDogs();
    this.dogService.drawRandomDog();
  }

}
