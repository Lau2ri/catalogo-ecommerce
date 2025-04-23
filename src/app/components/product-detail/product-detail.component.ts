import { Component, OnInit, Input, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { PricePipe } from '../../pipes/price.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PricePipe,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() productData: Product | undefined;
  product = signal<Product | undefined>(undefined);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Si no hay input, cargar desde la ruta
    if (!this.productData) {
      const productId = Number(this.route.snapshot.paramMap.get('id'));
      this.product.set(this.productService.getProductById(productId));
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Si hay cambios en el input, actualizar el producto
    if (changes['productData'] && this.productData) {
      this.product.set(this.productData);
    }
  }
} 