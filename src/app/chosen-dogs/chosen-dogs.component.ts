import { Component, OnInit } from '@angular/core';
import { LikedDogsService } from '../liked-dogs.service';

@Component({
  selector: 'app-chosen-dogs',
  templateUrl: './chosen-dogs.component.html',
  styleUrls: ['./chosen-dogs.component.css']
})
export class ChosenDogsComponent implements OnInit {

  constructor(public dogService: LikedDogsService) { }

  ngOnInit() {
  }

}
