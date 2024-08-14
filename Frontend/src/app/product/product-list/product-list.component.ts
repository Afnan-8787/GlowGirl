import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products : Array <any> = [{
    "Id":1,
    "makeup-OR-skincare":1,
    "brand":"KIKO MILANO",
    "description":"3D Hydra Lip Gloss 020",
    "price":"SAR " + 33.00 
    },
    {
      "Id":2,
      "makeup-OR-skincare":1,
      "brand":"KIKO ",
      "description":"3D Hydra Lip Gloss 020",
      "price":"SAR " + 33.00 
      },
      {
        "Id":3,
        "makeup-OR-skincare":1,
        "brand":" MILANO",
        "description":"3D Hydra Lip Gloss 020",
        "price":"SAR " + 33.00 
        },
        {
          "Id":4,
          "makeup-OR-skincare":2,
          "brand":"KIKO MILANO",
          "description":"3D Hydra Lip Gloss 020",
          "price":"SAR " + 33.00 
          },
          {
            "Id":5,
            "makeup-OR-skincare":2,
            "brand":"KIKO MILANO",
            "description":"3D Hydra Lip Gloss 020",
            "price":"SAR " + 33.00 
            },
            {
              "Id":6,
              "makeup-OR-skincare":2,
              "brand":"KIKO MILANO",
              "description":"3D Hydra Lip Gloss 020",
              "price":"SAR " + 33.00 
              },
  ]
}
