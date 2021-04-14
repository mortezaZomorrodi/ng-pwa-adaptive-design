import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as moment from 'jalali-moment';
import {ECalendarValue, IDatePickerDirectiveConfig} from 'ng2-jalali-date-picker';

@Component({
  selector: 'app-desktop-form',
  templateUrl: './desktop-form.component.html',
  styleUrls: ['./desktop-form.component.scss']
})
export class DesktopFormComponent implements OnInit {
  items: MenuItem[];
  selectedState: any = null;
  dateObject = moment('1399-06-17','jYYYY,jMM,jDD');

  states: any[] = [
    {name: 'کیلو', code: 'K'},
    {name: 'لیتر', value: 'L'},
    {name: 'متر', code: 'M'},
  ];

  datePickerConfig: IDatePickerDirectiveConfig = {
    format: 'jYYYY/jMM/jDD',
    firstDayOfWeek: 'sa',
    returnedValueType: ECalendarValue.String,
    disableKeypress: false,
    showMultipleYearsNavigation: true
  };

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: '/',
        icon: 'pi pi-home',
      },
      {
        label: 'ProductForm',
        routerLink: '/desktopForm',
        icon: 'pi pi-fw pi-plus',
      }
    ];
  }

}
