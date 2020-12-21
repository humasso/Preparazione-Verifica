import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { FoodFactsService } from '../food-facts.service';

@Component({
  selector: 'app-ingredienti',
  templateUrl: './ingredienti.component.html',
  styleUrls: ['./ingredienti.component.css']
})
export class IngredientiComponent implements OnInit {

  routeObs: Observable<ParamMap>;
  obs: Observable<any>;
  results : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: FoodFactsService) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let Id = params.get('id');
    console.log (Id);
    this.obs = this.service.cercaIngredienti(Id) ;
    this.obs.subscribe(this.getData)
  }
  getData = (data) => {
     this.results = data;
     console.log(this.results)
  }
}
