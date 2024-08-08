import { Component } from "@angular/core";

@Component({
    selector: 'app-product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.css']
})
export class ProductCardComponent{
product : any = {
"Id":1,
"brand":"KIKO MILANO",
"description":"3D Hydra Lip Gloss 020",
"price":"SAR " + 33.00 
}

}