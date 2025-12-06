import type { IVideoPlayerUI } from "../../types/ui";

export const VideoPlayer = ({
  className = "",
  trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  ...props
}: IVideoPlayerUI) => {
  return (
    <video
      src={trailer}
      controls
      className={
        "w-130 h-70 rounded-[20px] overflow-hidden object-cover " + className
      }
      {...props}
    ></video>
  );
};
