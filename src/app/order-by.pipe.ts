import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(!args){
     return value;
   }
   else{
     args=args.toUpperCase();
   }
  return value.filter(items=>{
    return items.Kategorija.startsWith(args)==true;
   })
  }

}
