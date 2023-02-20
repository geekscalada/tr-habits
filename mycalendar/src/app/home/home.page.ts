// https://github.com/leifermendez/example-calendar

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  week: any = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ];


  monthSelect: any[] | undefined
  dateSelect: any;
  
  //Today
  dateValue: any;
 

  constructor() {

  }

  ngOnInit(): void {
    
    const today = new Date();    
    this.getDaysFromDate(today.getMonth()+1, today.getFullYear());

  }

  getDaysFromDate(month :any, year :any) {

    const startDate = moment.utc(`${year}/${month}/01`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a) + 1;
      const dayObject = moment(`${year}-${month}-${a}`); 

      let myMoment= moment(new Date());

      const checkIfIsToday = Math.round(dayObject.diff(myMoment, 'days', true)) == -1         
      
      
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday(),
        isToday: checkIfIsToday
      };
    });

    this.monthSelect = arrayDays;
    this.clickDay(new Date().getDate());
    
    
  }

  changeMonth(flag : any) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(dayValue :any) {


    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${dayValue}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;

    console.log('monthSelect', this.monthSelect);
    console.log('dateSelect', this.dateSelect);
    console.log('dateValue', this.dateValue);
  }



}