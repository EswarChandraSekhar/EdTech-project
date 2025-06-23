import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
     let search_input = args[0]
     console.log(value)
     console.log(args[0])
     let result_array = value.filter( 
                              (obj)=>{
                                if(obj.title.toLowerCase().includes(search_input.toLowerCase())){
                                  return true;
                                }
                                else{
                                  return false;
                                }
                              }
                            )
     return result_array;
  }

}
