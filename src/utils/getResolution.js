import { SCREEN_LG } from "./constants";
export function isResponsive() {
  if (window.screen.availWidth < SCREEN_LG) {
    return true;
  }
}
