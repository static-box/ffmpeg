import * as os from "os";
const arch = os.arch();
const platform = os.platform();

import { osx64 } from "@static-box/ffmpeg-osx";
import { win32, win64 } from "@static-box/ffmpeg-win";
import { linux32, linux64 } from "@static-box/ffmpeg-linux";
import { arm64, armhf32, armel32 } from "@static-box/ffmpeg-linux-arm";

export const ffmpegMap = {
  osx64,
  win64,
  win32,
  linux64,
  linux32,
  armel32,
  armhf32,
  arm64,
};

const getStaticPath = () => {
  if (platform === "darwin") {
    return ffmpegMap.osx64.path;
  } else if (platform === "linux") {
    if (arch === "arm" || arch === "arm64") {
      return ffmpegMap.arm64.path;
    } else {
      return ffmpegMap.linux64.path;
    }
  } else if (platform === "win32") {
    if (arch === "x32") {
      return ffmpegMap.win32.path;
    } else {
      return ffmpegMap.win64.path;
    }
  } else {
    return "";
  }
};

export const ffmpeg = getStaticPath();
