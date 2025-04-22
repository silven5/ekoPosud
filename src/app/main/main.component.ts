import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Material } from '../model/material';
import { DishType } from '../model/dish-type';
import { EcoDataService } from '../model/service/eco-data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  productsWithInfo$!: Observable<
    (Product & { material?: Material; type?: DishType })[]
  >;

  constructor(private ecoService: EcoDataService) {}

  ngOnInit(): void {
    this.productsWithInfo$ = this.ecoService.getProductsWithFullInfo();
    this.productsWithInfo$.subscribe((products) => {
      console.log(products);
    });
  }
}
