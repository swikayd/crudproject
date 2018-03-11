import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  public transform(status: number): string {
    if(status == 1){
    	return 'To Do';
    }
    else if(status==2){
    	return "On Progress";
    }
    else if(status==3){
    	return "Done";
    }
  }

}
