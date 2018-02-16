import { Injectable } from '@angular/core';

import { IProduct } from './product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '../../../node_modules/_@angular_common@4.4.6@@angular/common/http/src/response';

@Injectable()
export class ProductService {
    private _productUrl='./api/products/products.json';
    constructor(private _http:HttpClient){

    }
    getProducts(){
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data=>console.log('All: '+JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
    // getProducts(): IProduct[] {
    //     return [{
    //         "productId": 1,
    //         "productName": "Leaf Rake",
    //         "productCode": "GDN-0011",
    //         "releaseDate": "March 19, 2016",
    //         "description": "Leaf rake with 48-inch wooden handle.",
    //         "price": 19.95,
    //         "starRating": 3.2,
    //         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    //     },
    //     {
    //         "productId": 2,
    //         "productName": "Garden Cart",
    //         "productCode": "GDN-0023",
    //         "releaseDate": "March 18, 2016",
    //         "description": "15 gallon capacity rolling garden cart",
    //         "price": 32.99,
    //         "starRating": 4.2,
    //         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    //     }];
    // }
}