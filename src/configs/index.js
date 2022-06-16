import configStaticFiles from "./configStaticFiles";
import configViewEngine from "./configViewEngine";
export default function config(app) {
  configStaticFiles(app);
  configViewEngine(app);
}
