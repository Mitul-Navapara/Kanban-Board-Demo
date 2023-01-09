import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardViewComponent } from './kanban-board-view/kanban-board-view.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FirstLetterWordPipe } from './pipes/firstLetterWord.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FirstLetterWordPipe,
    KanbanBoardViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    DragDropModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
