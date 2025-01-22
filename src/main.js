import "./sass/style.scss";
import { footer } from "./components/footer";
import { header } from "./components/header";
import { mainContent } from "./components/mainContent";

(() => {
  $("header").html(header);
  $("main").html(mainContent);
  $("footer").html(footer("test"));
})();
