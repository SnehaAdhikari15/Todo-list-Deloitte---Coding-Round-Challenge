import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from '../app/components/overview/overview.component';
import { TodoListComponent } from '../app/components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path : '', 
    component : TodoListComponent,
  },
  {
    path : 'todo',
    component : TodoListComponent
  },
  {
    path : 'overview',
    component : OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
