import { Injectable } from "@angular/core";

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  deadline: any;
}

@Injectable({ providedIn: "root" })
export class TasksService {
  public tasks: Task[] = [];
  onToggle(id: number) {
    const idx = this.tasks.findIndex((t) => t.id === id);
    this.tasks[idx].completed = !this.tasks[idx].completed;
  }
  removeTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
  addTask(task: Task) {
    this.tasks.unshift(task);
  }
}
