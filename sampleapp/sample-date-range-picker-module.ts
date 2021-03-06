import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MyDateRangePickerApp}  from './sample-date-range-picker-app';
import {SampleDateRangePickerNormal} from './sample-date-range-picker-normal/index';
import {SampleDateRangePickerInline} from './sample-date-range-picker-inline/index';
import {MyDateRangePickerModule} from '../src/my-date-range-picker/my-date-range-picker.module';

@NgModule({
    imports:      [ BrowserModule, MyDateRangePickerModule ],
    declarations: [ MyDateRangePickerApp, SampleDateRangePickerNormal, SampleDateRangePickerInline ],
    bootstrap:    [ MyDateRangePickerApp ]
})
export class SampleDateRangePickerModule { }