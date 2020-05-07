import { Component, OnInit } from "@angular/core";
import { PerformersService } from "../services/performer.service";

@Component({
  selector: "app-performer",
  templateUrl: "./performer.component.html",
  styleUrls: ["./performer.component.css"],
})
export class PerformerComponent implements OnInit {
  constructor(public performersService: PerformersService) {}

  ngOnInit() {}

  removePerformer(id: number) {
    this.performersService.removePerformer(id);
  }
}
