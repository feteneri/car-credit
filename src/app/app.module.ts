import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarPreviewComponent } from './car-preview/car-preview.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarCreditComponent } from './car-credit/car-credit.component';
import { CarCreditCalcComponent } from './car-credit-calc/car-credit-calc.component';
import { LabeledValueComponent } from './labeled-value/labeled-value.component';
import { CreditRangeComponent } from './credit-range/credit-range.component';
import { QuestionsComponent } from './questions/questions.component';
import { PopupComponent } from './popup/popup.component';
import { RublesPipe } from './rubles.pipe';
import { PeriodPipe } from './period.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarPreviewComponent,
    CarListComponent,
    CarCreditComponent,
    CarCreditCalcComponent,
    LabeledValueComponent,
    CreditRangeComponent,
    QuestionsComponent,
    PopupComponent,
    RublesPipe,
    PeriodPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
