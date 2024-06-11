import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { SortExampleComponent } from './sort-example/sort-example.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentByCardComponent } from './payment-by-card/payment-by-card.component';
import { PaymentByWireTransferComponent } from './payment-by-wire-transfer/payment-by-wire-transfer.component';
import { PaymentByPaypalComponent } from './payment-by-paypal/payment-by-paypal.component';
import { PaymentByApplepayComponent } from './payment-by-applepay/payment-by-applepay.component';
import { checkPaymentsGuard } from './check-payments.guard';
import { AuthGuard } from 'src/Guards/AuthGuard';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { UsersManageComponent } from './users-manage/users-manage.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, 
    canActivate: [AuthGuard] 
   },
  { path: 'register', component: RegisterComponent },
  { path: 'api', component: UsersManageComponent, canActivate:[AuthGuard] },
  { path: 'search', component: ProductSearchComponent, canActivate: [AuthGuard] },
  { path: 'sortPage', component: SortExampleComponent, canActivate: [AuthGuard] },
  { path: 'product-manage', component: ProductManageComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'product-details/:pId', component: ProductDetailsComponent, canActivate: [AuthGuard]   },
  
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'paymentByCard', component: PaymentByCardComponent },
      { path: 'paymentByWireTransfer', component: PaymentByWireTransferComponent },
      { path: 'paymentByPayPal', component: PaymentByPaypalComponent },
      { path: 'paymentByApplePay', component: PaymentByApplepayComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
