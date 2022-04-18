import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
// export class DatePipe implements PipeTransform {

//   transform(value: any): any{
//     let valueArr = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig,"$1 $2 $3").split(" ");
//     let dateCreated = new Date(valueArr[0],valueArr[1]-1, valueArr[2]);
//     let now = new Date() ;
//     let diff = now.getTime() - dateCreated.getTime();
//     diff/=(1000 * 60 * 60 * 24);
//     return Math.floor(diff);
//   }

// }

export class DatePipe implements PipeTransform {

  transform(value: any): number {
      let today:Date = new Date();
      let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
      var dateDifference =Math.abs(todayWithNoTime - value)
      const secondsInADay= 86400;
  
      var dateDifferenceSeconds=dateDifference*0.001; 
      var dateCounter = dateDifferenceSeconds/secondsInADay;
  
      if (dateCounter >= 1 && todayWithNoTime > value){
        return dateCounter;
    }else{
        return 0;
    }
    }
  
  }

