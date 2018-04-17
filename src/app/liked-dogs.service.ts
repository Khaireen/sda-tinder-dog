import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DogCeoResponse } from './DogCeoResponse';

@Injectable()
export class LikedDogsService {
  currentDogImageUrl: string;
  chosenDogsImagesUrls: string[] = [];
  constructor(private httpClient: HttpClient) {
  }

  drawRandomDog() {
    this.httpClient.get<DogCeoResponse>('https://dog.ceo/api/breed/hound/images/random').subscribe((result) => {
      this.currentDogImageUrl = result.message;
    });
  }

  addCurrentDogToChosenDogs() {
    this.chosenDogsImagesUrls.push(this.currentDogImageUrl);

  }

}
