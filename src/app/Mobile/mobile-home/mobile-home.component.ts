import { Component, OnInit } from '@angular/core';
import {Product} from '../../domain/product';
import {ProductService} from '../../product.service';
import {MenuItem, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss']
})
export class MobileHomeComponent implements OnInit {
  products: Product[];
  items: MenuItem[];
  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProductsSmall().then(data => this.products = data);

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.items = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-home',
      },
      {
        label: 'ProductForm',
        routerLink: '/mobileForm',
        icon: 'pi pi-fw pi-plus',
      }
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
