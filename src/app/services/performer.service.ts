import { Injectable } from "@angular/core";

export interface Performer {
  id: number;
  name: string;
}

@Injectable({ providedIn: "root" })
export class PerformersService {
  public performers: Performer[] = [];

  removePerformer(id: number) {
    this.performers = this.performers.filter((t) => t.id !== id);
  }
  addPerformer(performer: Performer) {
    this.performers.unshift(performer);
  }
}
