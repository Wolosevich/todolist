import { Component, OnInit } from "@angular/core";
import { Task, TasksService } from "../services/tasks.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"],
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl("", Validators.required),
      deadline: new FormControl("", Validators.required),
    });
  }

  addTask() {
    const formData = { ...this.form.value };

    // console.log("title", formData.title);
    const task: Task = {
      title: formData.title,
      id: Date.now(),
      completed: false,
      deadline: formData.deadline,
    };
    this.form.reset();

    this.tasksService.addTask(task);
  }
}
