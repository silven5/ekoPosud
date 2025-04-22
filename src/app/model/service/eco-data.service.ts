import { inject, Injectable } from '@angular/core';

import { combineLatest, map, Observable } from 'rxjs';
import { Product } from '../product';
import { Material } from '../material';
import { DishType } from '../dish-type';
import { Database, listVal, ref } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class EcoDataService {
  private db: Database = inject(Database);

  getProducts(): Observable<Product[]> {
    const productsRef = ref(this.db, 'products');
    return listVal<Product>(productsRef, { keyField: 'id' }); // додаємо id з ключа
  }

  getMaterials(): Observable<Material[]> {
    const materialsRef = ref(this.db, 'materials');
    return listVal<Material>(materialsRef, { keyField: 'id' });
  }

  getDishTypes(): Observable<DishType[]> {
    const typesRef = ref(this.db, 'types');
    return listVal<DishType>(typesRef, { keyField: 'id' });
  }

  getProductsWithFullInfo(): Observable<
    (Product & {
      material?: Material;
      type?: DishType;
    })[]
  > {
    return combineLatest([
      this.getProducts(),
      this.getMaterials(),
      this.getDishTypes(),
    ]).pipe(
      map(([products, materials, types]) =>
        products.map((product) => ({
          ...product,
          material: materials.find((m) => m.id === product.materialId),
          type: types.find((t) => t.id === product.typeId),
        }))
      )
    );
  }
}
