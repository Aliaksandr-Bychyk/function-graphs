import "./styles/styles.css";
import "./assets/svg/favicon.svg"
import navigationButtons from "./scripts/navigationButtons.js";
import favicon from "./assets/svg/favicon.svg";

navigationButtons();
let faviconLink = document.createElement('link');
faviconLink.setAttribute('rel', 'shortcut icon');
faviconLink.setAttribute('href', favicon);
faviconLink.setAttribute('type', 'image/x-icon');
document.head.append(faviconLink)