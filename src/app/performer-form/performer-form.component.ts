import { Component, OnInit } from "@angular/core";
import { PerformersService, Performer } from "../services/performer.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-performer-form",
  templateUrl: "./performer-form.component.html",
  styleUrls: ["./performer-form.component.css"],
})
export class PerformerFormComponent implements OnInit {
  form: FormGroup;
  constructor(private performersService: PerformersService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
    });
  }
  addPerformer() {
    const formData = { ...this.form.value };

    const performer: Performer = {
      name: formData.name,
      id: Date.now(),
    };
    this.form.reset();

    this.performersService.addPerformer(performer);
  }
}
