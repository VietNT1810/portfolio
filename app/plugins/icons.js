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
import IconCopy from "~/assets/icons/copy.svg";
import IconCheck from "~/assets/icons/check.svg";
import IconTypescript from "~/assets/icons/typescript.svg";
import IconVue from "~/assets/icons/vue.svg";
import IconNuxt from "~/assets/icons/nuxt.svg";
import IconReact from "~/assets/icons/react.svg";
import IconTailwind from "~/assets/icons/tailwind.svg";
import IconBuefy from "~/assets/icons/buefy.svg";
import IconSass from "~/assets/icons/sass.svg";
import IconGsap from "~/assets/icons/gsap.svg";
import IconMui from "~/assets/icons/mui.svg";
import IconNodejs from "~/assets/icons/nodejs.svg";
import IconExpressjs from "~/assets/icons/expressjs.svg";
import IconMongo from "~/assets/icons/mongo.svg";
import IconGit from "~/assets/icons/git.svg";
import IconBitbucket from "~/assets/icons/bitbucket.svg";
import IconVercel from "~/assets/icons/vercel.svg";
import IconFigma from "~/assets/icons/figma.svg";
import IconPostman from "~/assets/icons/postman.svg";
import IconCalendar from "~/assets/icons/calendar.svg";

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
  { iconName: "icon-copy", component: IconCopy },
  { iconName: "icon-check", component: IconCheck },
  { iconName: "icon-typescript", component: IconTypescript },
  { iconName: "icon-vue", component: IconVue },
  { iconName: "icon-nuxt", component: IconNuxt },
  { iconName: "icon-react", component: IconReact },
  { iconName: "icon-tailwind", component: IconTailwind },
  { iconName: "icon-buefy", component: IconBuefy },
  { iconName: "icon-sass", component: IconSass },
  { iconName: "icon-gsap", component: IconGsap },
  { iconName: "icon-material-ui", component: IconMui },
  { iconName: "icon-nodejs", component: IconNodejs },
  { iconName: "icon-expressjs", component: IconExpressjs },
  { iconName: "icon-mongodb", component: IconMongo },
  { iconName: "icon-git", component: IconGit },
  { iconName: "icon-bitbucket", component: IconBitbucket },
  { iconName: "icon-vercel", component: IconVercel },
  { iconName: "icon-figma", component: IconFigma },
  { iconName: "icon-postman", component: IconPostman },
  { iconName: "icon-calendar", component: IconCalendar },
];

export default defineNuxtPlugin((nuxtApp) => {
  const iconConfig = [...icons];
  iconConfig.forEach((el) => {
    nuxtApp.vueApp.component(el.iconName, el.component);
  });
});
