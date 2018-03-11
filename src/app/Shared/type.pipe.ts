import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  public transform(type: number): string {
    if(type == 1){
    	return 'Low';
    }
    else if(type==2){
    	return "Medium";
    }
    else if(type==3){
    	return "High";
    }
  }

}
