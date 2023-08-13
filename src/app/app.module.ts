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

import { MatNativeDateModule } from '@angular/material/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RegionsAddComponent } from './regions/regions-add/regions-add.component';
import { RegionsEditComponent } from './regions/regions-edit/regions-edit.component';
import { RegionsComponent } from './regions/regions.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: RegionsComponent
  },
  {
    path: 'regions',
    component: RegionsComponent
  },
  {
    path: 'regions/:id/edit',
    component: RegionsEditComponent
  },
  {
    path: 'regions/add',
    component: RegionsAddComponent
  },
  // {
  //   path: '',
  //   component: AssignmentsComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'home',
  //   component: AssignmentsComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'add',
  //   component: AddAssignmentComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'assignments/:id',
  //   component: AssignmentDetailComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'assignments/:id/edit',
  //   component: EditAssignmentComponent,
  //   canActivate: [RoleGuard]
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // }
]
// const jwtOptions: JwtModuleOptions = {
//   config: {
//     tokenGetter: () => localStorage.getItem('token'),
//     allowedDomains: ['http://localhost:8010'],
//     disallowedRoutes: ['http://localhost:8010/api/login']
//   }
// };
@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    RegionsEditComponent,
    RegionsAddComponent
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
    // JwtModule.forRoot(jwtOptions)
  ],
  providers: [
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
