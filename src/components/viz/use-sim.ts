"use client";

import { useCallback, useEffect, useState } from "react";

export function useSim(max: number, initialSpeed = 3) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(initialSpeed);

  const reset = useCallback(() => {
    setPlaying(false);
    setStep(0);
  }, []);

  const next = useCallback(() => {
    setStep((s) => {
      if (s >= max) {
        setPlaying(false);
        return s;
      }
      return s + 1;
    });
  }, [max]);

  useEffect(() => {
    if (!playing) return;
    const ms = [900, 650, 450, 280, 140][speed - 1] ?? 450;
    const id = window.setInterval(next, ms);
    return () => window.clearInterval(id);
  }, [playing, speed, next]);

  return {
    step,
    setStep,
    playing,
    play: () => setPlaying(true),
    pause: () => setPlaying(false),
    next,
    reset,
    speed,
    setSpeed,
  };
}
