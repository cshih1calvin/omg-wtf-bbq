import React from "react";
import { Composition } from "remotion";
import { SubtitleScroll } from "./SubtitleScroll";
import { SCROLL_SECONDS, TAIL_SECONDS, FPS } from "./constants";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SubtitleScroll"
      component={SubtitleScroll}
      durationInFrames={(SCROLL_SECONDS + TAIL_SECONDS) * FPS}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
