import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DesktopHomeComponent } from './Desktop/desktop-home/desktop-home.component';
import { DesktopFormComponent } from './Desktop/desktop-form/desktop-form.component';
import { MobileHomeComponent } from './Mobile/mobile-home/mobile-home.component';
import { MobileFormComponent } from './Mobile/mobile-form/mobile-form.component';
import {ApplicationStateService} from './application-state.service';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ProductService} from './product.service';
import {RatingModule} from 'primeng/rating';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import {VersionService} from './versionservice';
import {AppConfigService} from './appconfigservice';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    DesktopHomeComponent,
    DesktopFormComponent,
    MobileHomeComponent,
    MobileFormComponent,
    AppTopBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.development}),
    DpDatePickerModule,
    RatingModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    DataViewModule,
    ButtonModule
  ],
  providers: [ApplicationStateService, ProductService, VersionService, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
