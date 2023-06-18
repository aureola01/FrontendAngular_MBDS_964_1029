import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule, JWT_OPTIONS, JwtModuleOptions } from '@auth0/angular-jwt';


import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';
import { LoginComponent } from './login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';


const routes: Routes = [
  {
    path: '',
    component: AssignmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: AssignmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: AddAssignmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'assignments/:id',
    component: AssignmentDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'assignments/:id/edit',
    component: EditAssignmentComponent,
    canActivate: [RoleGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
const jwtOptions: JwtModuleOptions = {
  config: {
    tokenGetter: () => localStorage.getItem('token'),
    allowedDomains: ['http://localhost:8010'],
    disallowedRoutes: ['http://localhost:8010/api/login']
  }
};
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, RouterModule.forRoot(routes),
    HttpClientModule,
    MatNativeDateModule, ScrollingModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatInputModule, MatFormFieldModule, MatDatepickerModule,
    MatListModule, MatCardModule, MatCheckboxModule, MatSlideToggleModule,
    MatTableModule, MatPaginatorModule,
    MatToolbarModule,
    JwtModule.forRoot(jwtOptions)
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
