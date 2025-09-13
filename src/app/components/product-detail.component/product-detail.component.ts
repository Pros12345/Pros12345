import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  productId: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
