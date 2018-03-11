import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AddformComponent } from './Add/addform/addform.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { UpdateformComponent } from './Update/updateform/updateform.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { ComplaintsService } from './Shared/complaints.service';
import { TypePipe } from './Shared/type.pipe';
import { StatusPipe } from './Shared/status.pipe';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SearchComponent } from './search/search.component';
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: 'add', component: AddformComponent},
  { path: 'update', component: UpdateformComponent},
  { path: 'update/:id', component: UpdateformComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    TableComponent,
    HomeComponent,
    UpdateformComponent,
    TypePipe,StatusPipe, SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TooltipModule.forRoot(),
     
    
  ],
  providers: [
    ComplaintsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
