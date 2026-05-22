import React from "react";
import { Composition } from "remotion";
import { SubtitleScroll } from "./SubtitleScroll";
import { DURATION_SECONDS, FPS } from "./constants";

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
