import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AddTodoItemComponent } from './components/add-todo-item/add-todo-item.component';
import { ShowTodoItemsComponent } from './components/show-todo-items/show-todo-items.component';

import { DatePipe } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AddTodoItemComponent,
    AppComponent,
    FilterPipe,
    ShowTodoItemsComponent,
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
