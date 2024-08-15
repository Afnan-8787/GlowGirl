import { Component, OnInit } from '@angular/core';
import { GlowGirlService } from '../../services/glow-girl.service';
import { IProduct } from '../IProduct.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  makeupORskincare = 3;
  products!: IProduct[];

  constructor(private route: ActivatedRoute, private glowGirlService: GlowGirlService) { }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      const currentRoute = urlSegments.map(segment => segment.path).join('/');

      if (currentRoute === 'makeUp-products') {
        this.makeupORskincare = 1;
      } else if (currentRoute === 'skinCare-products') {
        this.makeupORskincare = 2;
      } else {
        this.makeupORskincare = 3;
      }

      this.loadProducts();
    });
  }

  private loadProducts(): void {
    if (this.makeupORskincare === 3) {
      this.glowGirlService.getAllProduct().subscribe(
        data => {
          this.products = data;
          console.log('All products:', data);
        },
        error => console.log('Error loading all products:', error)
      );
    } else {
      this.glowGirlService.getProduct(this.makeupORskincare).subscribe(
        data => {
          this.products = data;
          console.log('Filtered products:', data);
        },
        error => console.log('Error loading filtered products:', error)
      );
    }
  }
}

