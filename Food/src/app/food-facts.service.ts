import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodFactsService {

  constructor(private http: HttpClient) { }

  cercaFood(cibo: string, num: string){
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${cibo}&page_size=${num}&json=true`
    let obs = this.http.get(url);
    return obs;
  }
  cercaIngredienti(id: string){
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`
    let obs = this.http.get(url);
    return obs;
  }
}
