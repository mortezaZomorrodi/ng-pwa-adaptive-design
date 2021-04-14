import { Component, OnInit } from '@angular/core';
import {Product} from '../../domain/product';
import {ProductService} from '../../product.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.scss']
})
export class DesktopHomeComponent implements OnInit {
  items: MenuItem[];

  products: Product[];
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getProductsSmall().then(data => this.products = data);

    this.items = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-home',
      },
      {
        label: 'ProductForm',
        routerLink: '/desktopForm',
        icon: 'pi pi-fw pi-plus',
      }
    ];
  }



}
