import IconGithub from "~/assets/icons/github.svg";
import IconLinkedin from "~/assets/icons/linkedin.svg";
import IconSun from "~/assets/icons/sun.svg";
import IconMoon from "~/assets/icons/moon.svg";
import IconComputer from "~/assets/icons/computer.svg";
import IconJavascript from "~/assets/icons/javascript.svg";
import IconMail from "~/assets/icons/mail.svg";
import IconPhone from "~/assets/icons/phone.svg";
import IconDownload from "~/assets/icons/download.svg";
import IconCode from "~/assets/icons/code.svg";
import IconLocation from "~/assets/icons/location.svg";
import IconLink from "~/assets/icons/link.svg";

export const icons = [
  { iconName: "icon-github", component: IconGithub },
  { iconName: "icon-linkedin", component: IconLinkedin },
  { iconName: "icon-sun", component: IconSun },
  { iconName: "icon-moon", component: IconMoon },
  { iconName: "icon-computer", component: IconComputer },
  { iconName: "icon-javascript", component: IconJavascript },
  { iconName: "icon-mail", component: IconMail },
  { iconName: "icon-phone", component: IconPhone },
  { iconName: "icon-download", component: IconDownload },
  { iconName: "icon-code", component: IconCode },
  { iconName: "icon-location", component: IconLocation },
  { iconName: "icon-link", component: IconLink },
];

export default defineNuxtPlugin((nuxtApp) => {
  const iconConfig = [...icons];
  iconConfig.forEach((el) => {
    nuxtApp.vueApp.component(el.iconName, el.component);
  });
});
