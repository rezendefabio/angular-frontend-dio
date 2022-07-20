import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/components/shared/models/book';

@Component({
  selector: 'mkt-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() book!: Book;

  constructor() {}

  ngOnInit(): void {}
}
