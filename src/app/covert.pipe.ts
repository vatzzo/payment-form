import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'covert'
})
export class CovertPipe implements PipeTransform {

  transform(value: string, target: string): any {
    switch (target) {
      case 'credit': 
        let str  = '';
        let currentStr = '';
        
        for(let i=0; i < value.length; i++) {
          str += value[i];
          currentStr += value[i];
    
          if(currentStr.length === 2) {
            str += '-'; 
            console.log('now');
          }
          
          if(currentStr.length%4 === 2 && currentStr.length > 2 && currentStr.length !== 26) {
            str += '-';
          }
        }
        return str;
        break;
      case 'exdate':
        let date = '';
        if(value.length !== 0) {
          date = value.substring(0,2) + '/' + value.substring(2,value.length);
        }
        return date;
        break;
      default:
        return new Error('Not supported.');
        break;
    }
  }
}