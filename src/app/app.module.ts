import { BrowserModule } from '@angular/platform-browser';
import { Component,NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicehttpService } from './servicehttp.service';
import { GuardsGuard } from './guards.guard';
import { UserService } from './user.service';
import { FooterComponent } from './footer/footer.component';
import { SubmitEmployeeComponent } from './submit-employee/submit-employee.component';
import { ShowAllEmployeeComponent } from './show-all-employee/show-all-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubmitEmployeeComponent,
    ShowAllEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {
          path: '',
          component: SubmitEmployeeComponent,
        },
        {
          path: 'allEmployee',
          component: ShowAllEmployeeComponent,
        }
    ])
  ],
  providers: [ServicehttpService, UserService, GuardsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
