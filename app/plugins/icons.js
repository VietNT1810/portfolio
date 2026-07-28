import IconGithub from "~/assets/icons/github.svg";
import IconLinkedin from "~/assets/icons/linkedin.svg";
import IconSun from "~/assets/icons/sun.svg";
import IconMoon from "~/assets/icons/moon.svg";
import IconComputer from "~/assets/icons/computer.svg";

export const icons = [
  { iconName: "icon-github", component: IconGithub },
  { iconName: "icon-linkedin", component: IconLinkedin },
  { iconName: "icon-sun", component: IconSun },
  { iconName: "icon-moon", component: IconMoon },
  { iconName: "icon-computer", component: IconComputer },
];

export default defineNuxtPlugin((nuxtApp) => {
  const iconConfig = [...icons];
  iconConfig.forEach((el) => {
    nuxtApp.vueApp.component(el.iconName, el.component);
  });
});
