import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TasksService } from "../services/tasks.service";
@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  constructor(public tasksService: TasksService) {}

  ngOnInit() {}

  onChange(id: number) {
    this.tasksService.onToggle(id);
  }
  removeTask(id: number) {
    this.tasksService.removeTask(id);
  }
}
