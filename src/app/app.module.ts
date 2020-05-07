import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { PerformerFormComponent } from './performer-form/performer-form.component';
import { PerformerComponent } from './performer/performer.component';

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskFormComponent, PerformerFormComponent, PerformerComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
