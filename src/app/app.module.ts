import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent} from './product-list/product-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SortExampleComponent } from './sort-example/sort-example.component';
import { SearchPipe } from './search.pipe';
import { DisplayArrayPipe } from './display-array.pipe';
import { ProductSearchComponent } from './product-search/product-search.component';
import { SortArrPipe } from './sort-arr.pipe';
import { DemoExampleComponent } from './demo-example/demo-example.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproddComponent } from './editprodd/editprodd.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CheckStartDateDirective } from './check-start-date.directive';
import { MatchPasswordsDirective } from './match-passwords.directive';
import { RegisterReactiveFormComponent } from './register-reactive-form/register-reactive-form.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentByCardComponent } from './payment-by-card/payment-by-card.component';
import { PaymentByWireTransferComponent } from './payment-by-wire-transfer/payment-by-wire-transfer.component';
import { PaymentByPaypalComponent } from './payment-by-paypal/payment-by-paypal.component';
import { PaymentByApplepayComponent } from './payment-by-applepay/payment-by-applepay.component';
import { WorkWithProductsService } from './work-with-products.service';
import { AuthGuard } from 'src/Guards/AuthGuard';
import { AuthService } from './auth.service';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UsersManageComponent } from './users-manage/users-manage.component';
import { TalkWithServerService } from './talk-with-server.service';
import { HttpClientModule } from '@angular/common/http';
import { DebouncingExampleComponent } from './debouncing-example/debouncing-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    AddToCartComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    CartComponent,
    SortExampleComponent,
    SearchPipe,
    DisplayArrayPipe,
    ProductSearchComponent,
    SortArrPipe,
    DemoExampleComponent,
    RegisterFormComponent,
    ProductManageComponent,
    EditProductComponent,
    EditproddComponent,
    RegisterComponent,
    LoginComponent,
    CheckStartDateDirective,
    MatchPasswordsDirective,
    RegisterReactiveFormComponent,
    MenuComponent,
    MainComponent,
    ProductDetailsComponent,
    ProductList2Component,
    PaymentsComponent,
    PaymentByCardComponent,
    PaymentByWireTransferComponent,
    PaymentByPaypalComponent,
    PaymentByApplepayComponent,
    ManageUsersComponent,
    UsersManageComponent,
    DebouncingExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WorkWithProductsService,AuthGuard,AuthService ,TalkWithServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
