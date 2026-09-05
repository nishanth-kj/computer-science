import { DestroyRef, inject, signal } from "@angular/core";

export class Sim {
  readonly step = signal(0);
  readonly playing = signal(false);
  readonly speed = signal(3);
  private id: number | null = null;
  private readonly maxFn: () => number;

  constructor(max: number | (() => number), initialSpeed = 3) {
    this.maxFn = typeof max === "number" ? () => max : max;
    this.speed.set(initialSpeed);
  }

  play = () => {
    this.playing.set(true);
    this.schedule();
  };

  pause = () => {
    this.playing.set(false);
    this.clear();
  };

  next = () => {
    const max = this.maxFn();
    this.step.update((s) => {
      if (s >= max) {
        this.pause();
        return s;
      }
      return s + 1;
    });
  };

  reset = () => {
    this.pause();
    this.step.set(0);
  };

  setSpeed = (n: number) => {
    this.speed.set(n);
    if (this.playing()) this.schedule();
  };

  destroy() {
    this.clear();
  }

  private schedule() {
    this.clear();
    if (!this.playing()) return;
    const ms = [900, 650, 450, 280, 140][this.speed() - 1] ?? 450;
    this.id = window.setTimeout(() => {
      this.next();
      if (this.playing()) this.schedule();
    }, ms);
  }

  private clear() {
    if (this.id != null) {
      window.clearTimeout(this.id);
      this.id = null;
    }
  }
}

export function useSim(max: number | (() => number), initialSpeed = 3): Sim {
  const sim = new Sim(max, initialSpeed);
  inject(DestroyRef).onDestroy(() => sim.destroy());
  return sim;
}
