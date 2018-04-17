import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LikedDogsService {
  currentDogImageUrl: string;
  chosenDogsImagesUrls: string[] = [];
  constructor(private httpClient: HttpClient) {
  }

  drawRandomDog() {
    this.httpClient.get('https://dog.ceo/api/breed/hound/images/random').subscribe((result) => {
      this.currentDogImageUrl = result.message;
    });
  }

  addCurrentDogToChosenDogs() {
    this.chosenDogsImagesUrls.push(this.currentDogImageUrl);

  }

}
