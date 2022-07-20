import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'mkt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  books: any;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBook().subscribe((data) => {
      this.books = data;
    });
  }
}
