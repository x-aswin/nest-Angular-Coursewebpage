import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];
  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {


  }
  ngOnInit(){
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }
}
