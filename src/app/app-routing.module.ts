import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './@feature/to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/toDoList',
    pathMatch: 'full'
  },
  {
    path: 'toDoList',
    component: ToDoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
