import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpconfigInterceptorService } from '../app/services/httpconfig-interceptor.service';
import { SearchComponent } from './shared/search/search.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { OverviewComponent } from './components/overview/overview.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    SearchComponent,
    FilterPipe,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpconfigInterceptorService,
      multi : true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
