import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';
import { IncomeComponent } from './income/income.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

{path:'home', component:HomeComponent},

{path:'register', component:RegisterComponent},
{path:'income', component:IncomeComponent},
{path:'expenses',component:ExpensesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
