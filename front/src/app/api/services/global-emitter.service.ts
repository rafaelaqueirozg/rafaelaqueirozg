import { EventEmitter } from "@angular/core";

export interface EventData {
  event: string;
  data?: any;
}

export class GlobalEmitterService {
  private static emitters: {
    [x: string]: EventEmitter<EventData>;
  } = {};

  static get(emitter: string): EventEmitter<EventData> {
    if (!this.emitters.hasOwnProperty(emitter)) {
      this.emitters[emitter] = new EventEmitter<EventData>();
    }
    return this.emitters[emitter];
  }
}
