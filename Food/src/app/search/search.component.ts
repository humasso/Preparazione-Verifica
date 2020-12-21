import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodFactsService } from '../food-facts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cibo: string;
  num: string;
  obs: Observable<Object>;
  results: any;
  constructor(public spotify: FoodFactsService) {

  }
  ngOnInit(): void {
  }

  Gino(cibo: HTMLInputElement, num: HTMLInputElement): void {

    this.cibo = cibo.value;
    this.num = num.value;
    this.obs = this.spotify.cercaFood(this.cibo, this.num);
    this.obs.subscribe(this.getData);
  }
  getData = (data) => {
     this.results = data;
     console.log(this.results)
    }
}
