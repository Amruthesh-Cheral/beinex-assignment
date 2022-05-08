import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BankComponent } from './bank/bank.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';

const routes: Routes = [
  {path : '' , redirectTo : 'index', pathMatch: 'full'},
  {path : 'index' , component: BankComponent}
];

@NgModule({
  declarations: [
    BankComponent,
    SearchFilterPipe
  ],
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule


],
  exports: [RouterModule]
})
export class AppRoutingModule { }
