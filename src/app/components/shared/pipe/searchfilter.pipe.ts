import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Products: Product[], searchValue: string): Product[] {
    if(!Products || !searchValue){
      return Products;
    }
    return Products.filter(function(search){
      return search.name.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) > -1
    });
  }
}
