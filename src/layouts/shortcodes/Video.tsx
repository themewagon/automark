import React from "react";
import { withBase } from "@/lib/utils/url";

function Video({
  title,
  width = 500,
  height = "auto",
  src,
  ...rest
}: {
  title: string;
  width: number;
  height: number | "auto";
  src: string;
  [key: string]: any;
}) {
  return (
    <video
      className="overflow-hidden rounded-lg"
      width={width}
      height={height}
      controls
      {...rest}
    >
      <source
        src={src.match(/^http/) ? src : withBase(`/videos/${src}`)}
        type="video/mp4"
      />
      {title}
    </video>
  );
}

export default Video;
