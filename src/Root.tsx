import React from "react";
import { Composition } from "remotion";
import { SubtitleScroll } from "./SubtitleScroll";

const DURATION_SECONDS = 300; // must match SubtitleScroll.tsx
const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SubtitleScroll"
      component={SubtitleScroll}
      durationInFrames={DURATION_SECONDS * FPS}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
