import { SnackbarService } from './../services/snackbar.service';
import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private snackbar: SnackbarService){}

  share() {
    this.snackbar.open('O produto foi compartilhado');
    window.alert('O produto foi compartilhado');
  }

  onNotify() {
    window.alert('Você será notificado quando o produto estiver a venda');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/