import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProduct } from '../product/IProduct.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlowGirlService {

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<IProduct[]>{
    return this.http.get('/Data/products.json').pipe(
    map(data =>{
      const productArray: Array<IProduct> =[];
      for (const id in data ){
        if(data.hasOwnProperty(id) ){
          productArray.push(data[id as keyof object]);
        }
      }
      return productArray;
    })
    );
  }

  getProduct(makeupORskincare:number): Observable<IProduct[]> {
  return this.http.get("/Data/products.json").pipe(
    map(data => {
      const productArray: Array<IProduct> =[];
      for (const id in data) {
        if (data.hasOwnProperty(id) && data[id as keyof object]['makeupORskincare'] === makeupORskincare) {
          productArray.push(data[id as keyof object]);
        }
      }
      return productArray;
    })
  )
}
getAllPrand(): Observable<string[]>{
return this.http.get<string[]>("http://localhost:8000/api/Prand")
}

}
