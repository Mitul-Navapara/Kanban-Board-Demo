import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardViewComponent } from './kanban-board-view/kanban-board-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'kanban-board' },
  { path: 'kanban-board', pathMatch: 'full', component: KanbanBoardViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
