import { ModelComponent } from './pages/rifa/model/model.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgPaymentCardModule } from 'ng-payment-card';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxMaskModule } from 'ngx-mask';
import { CallingComponent } from './admin/calling/calling.component';
import { LoginPageComponent } from './admin/dashboard/pages/loginPage/loginPage.component';
import { ReportPageComponent } from './admin/dashboard/pages/reportPage/reportPage.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavComponent } from './componentes/nav/nav.component';
import { DefaultComponent } from './pages/default/default.component';
import { HomeComponent } from './pages/home/home.component';
import { RegulamentoComponent } from './pages/regulamento/regulamento.component';
import { CheckoutComponent } from './pages/rifa/model/pagamentos/checkout/checkout.component';
import { RifaComponent } from './pages/rifa/rifa.component';
import { LoginComponent } from './pages/userAcess/login/login.component';
import { RecoveryPasswordComponent } from './pages/userAcess/recoveryPassword/recoveryPassword.component';
import { RegisterComponent } from './pages/userAcess/register/register.component';
import { UserAcessComponent } from './pages/userAcess/userAcess.component';
import { ExtractComponent } from './pages/userMain/extract/extract.component';
import { ProfileComponent } from './pages/userMain/profile/profile.component';
import { UserMainComponent } from './pages/userMain/userMain.component';
import { MatButtonModule } from '@angular/material/button';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, } from '@angular/core';
import { TokenInterceptorService } from './shared/interceptors/http.interceptor';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EmprestimoComponent } from './pages/rifa/model/pagamentos/emprestimo/emprestimo.component';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    UserAcessComponent,
    FooterComponent,
    RifaComponent,
    CallingComponent,
    RecoveryPasswordComponent,
    UserMainComponent,
    ExtractComponent,
    ProfileComponent,
    ReportPageComponent,
    LoginPageComponent,
    DefaultComponent,
    RegulamentoComponent,
    CheckoutComponent,
    ModelComponent,
    EmprestimoComponent
  ],
  imports: [
    CollapseModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CollapseModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    CurrencyMaskModule,
    NgPaymentCardModule,
    MatTabsModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
