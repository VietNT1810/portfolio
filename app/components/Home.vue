<template>
  <main>
    <section id="home" class="hero section">
      <div class="hero-grid container">
        <div class="hero-info">
          <p class="hero-welcome">Welcome to my portfolio</p>
          <h1 class="hero-name">
            Nguyen Tuan Viet
            <span>Frontend Developer</span>
          </h1>
          <div class="code-card">
            <div class="code-header">
              <icon-javascript class="code-icon icon-fill-current" />
              <span class="code-title">profile.js</span>
            </div>
            <div class="code-block" v-html="infoHTML"></div>
          </div>
          <ui-button class="mt-5">
            <span class="flex items-center gap-2">
              Get my CV
              <icon-download class="w-4.5 h-4.5" />
            </span>
          </ui-button>
        </div>
        <div class="hero-visual">
          <div class="hero-profile">
            <div class="avatar-shadow">
              <nuxt-img
                src="/images/avatar.jpg"
                alt="Nguyen Tuan Viet profile picture"
                width="300"
                height="300"
                class="hero-profile__image"
              />
            </div>
            <div class="profile-info">
              <h2>Frontend Developer</h2>
              <p>VueJS | ReactJS | HTML | CSS</p>
            </div>
            <div class="profile-contact">
              <ui-tooltip text="tuanviet19xx@gmail.com" placement="top">
                <div class="profile-contact-btn">
                  <icon-mail class="w-4.5 h-4.5" />
                </div>
              </ui-tooltip>
              <ui-tooltip text="+84 868 402 367" placement="top">
                <div class="profile-contact-btn">
                  <icon-phone class="w-4.5 h-4.5" />
                </div>
              </ui-tooltip>
              <ui-tooltip text="Tuan Viet Nguyen" placement="top">
                <nuxt-link
                  to="https://www.linkedin.com/in/tuan-viet-nguyen-681b35237"
                  target="_blank"
                  class="profile-contact-btn"
                >
                  <icon-linkedin class="w-4.5 h-4.5" />
                </nuxt-link>
              </ui-tooltip>
              <ui-tooltip text="VietNT1810" placement="top">
                <nuxt-link
                  to="https://github.com/VietNT1810"
                  target="_blank"
                  class="profile-contact-btn"
                >
                  <icon-github class="w-4.5 h-4.5" />
                </nuxt-link>
              </ui-tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ui-stripe-divider />
    <!-- About -->
    <section id="about" class="about section">
      <div class="container">
        <h2 class="home-title">About me</h2>
        <nav class="about-tabs flex items-center">
          <button
            v-for="tab in aboutTabs"
            :key="tab.key"
            class="about-tab"
            :class="{ 'is-active': currentAboutTab === tab.key }"
            @click="currentAboutTab = tab.key"
          >
            {{ tab.title }}
          </button>
        </nav>
        <div class="about-tab__content">
          <template v-if="currentAboutTab === 'overview'">
            <div class="overview-content">
              <p class="max-w-150">
                I'm Việt, a frontend developer obsessed with the details. I
                bring designs to life with pixel-perfect precision, fluid
                animations, sharp typography, and clean, readable code.
              </p>
              <div class="about-grid">
                <div
                  v-for="(item, index) in aboutItems"
                  :key="index"
                  class="about-grid__item"
                >
                  <div class="about-grid__icon">
                    <component :is="item.icon" class="w-4 h-4" />
                  </div>
                  <nuxt-link
                    v-if="item.href"
                    :to="item.href"
                    target="_blank"
                    class="hover:underline"
                  >
                    <p class="about-grid__text">{{ item.content }}</p>
                  </nuxt-link>
                  <p v-else class="about-grid__text">{{ item.content }}</p>
                  <span v-if="item.isTime" class="time-diff"
                    >// {{ timeCompare }}</span
                  >
                  <button
                    v-if="item.copyContent"
                    class="copy-btn"
                    @click="handleCopy(item.copyContent, index)"
                  >
                    <Transition name="icon-fade" mode="out-in">
                      <icon-check
                        v-if="copied && copiedIndex === index"
                        class="w-4 h-4"
                      />
                      <icon-copy v-else class="w-4 h-4" />
                    </Transition>
                  </button>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="currentAboutTab === 'education'">
            <div class="education-content">
              <div class="education-item">
                <div class="education-item__icon">
                  <icon-education class="w-4 h-4" />
                </div>
                <dl>
                  <dt class="education-item__title">
                    University of Transport and Technology
                  </dt>
                  <dd class="education-item__info">
                    Electronics and telecommunication | Graduated | 2017 - 2022
                  </dd>
                </dl>
                <!-- <icon-open class="w-4 h-4 ml-auto" /> -->
              </div>
              <div class="education-item">
                <div class="education-item__icon">
                  <icon-education class="w-4 h-4" />
                </div>
                <dl>
                  <dt class="education-item__title">Codegym Vietnam</dt>
                  <dd class="education-item__info">
                    Frontend development | Graduated | 2021 - 2022
                  </dd>
                </dl>
                <!-- <icon-open class="w-4 h-4 ml-auto" /> -->
              </div>
            </div>
          </template>
          <template v-else-if="currentAboutTab === 'certifications'">
            <div class="certification-content">
              <nuxt-link
                to="https://drive.google.com/drive/folders/1yM4TgK-bn6Kacv-xkacatek5yz8t6493?usp=sharing"
                target="_blank"
                class="certification-item"
              >
                <div class="certification-item__icon">
                  <icon-verified class="w-4 h-4" />
                </div>
                <dl>
                  <dt class="certification-item__title">
                    Frontend Development Certificate
                  </dt>
                  <dd class="certification-item__info">
                    Codegym Vietnam | 2022
                  </dd>
                </dl>
                <icon-open class="w-4 h-4 ml-auto" />
              </nuxt-link>
              <nuxt-link
                to="https://drive.google.com/file/d/1IbYnha9sHd5IA9WW481FcjCgJLSPiiMk/view?usp=sharing"
                target="_blank"
                class="certification-item"
              >
                <div class="certification-item__icon">
                  <icon-verified class="w-4 h-4" />
                </div>
                <dl>
                  <dt class="certification-item__title">
                    Test of English for International Communication (TOEIC)
                  </dt>
                  <dd class="certification-item__info">IGG Vietnam | 2021</dd>
                </dl>
                <icon-open class="w-4 h-4 ml-auto" />
              </nuxt-link>
            </div>
          </template>
        </div>
      </div>
    </section>
    <ui-stripe-divider />
    <!-- Stack -->
    <section id="stack" class="stack section">
      <div class="container">
        <h2 class="home-title">
          Tech Stack
          <p class="text-center">
            Technologies and modern tools I leverage to bring concepts to life.
          </p>
        </h2>
        <div class="stack-grid">
          <div
            v-for="(stack, index) in groupedTechStack"
            :key="stack.category"
            class="stack-row"
          >
            <p class="stack-category">{{ stack.category }}</p>
            <div class="stack-list">
              <nuxt-link
                v-for="item in stack.items"
                :key="item.key"
                :to="item.href"
                target="_blank"
                class="stack-pill"
                :style="{ '--pill-main-color': item.color }"
              >
                <component :is="item.icon" class="stack-pill__icon" />
                <span class="stack-pill__title">{{ item.title }}</span>
                <span v-if="item.experience" class="stack-asterisk">*</span>
              </nuxt-link>
            </div>
          </div>
        </div>
        <span class="text-[12px] text-muted font-mono"
          ><span class="stack-asterisk">*</span> Hands-on experience</span
        >
      </div>
    </section>
    <ui-stripe-divider />

    <!-- Experience -->
    <section id="experience" class="experience section">
      <div class="container">
        <h2 class="home-title">Experience</h2>
        <div class="experience-grid">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="experience-card"
          >
            <ui-separator
              v-if="index > 0"
              orientation="horizontal"
              class="my-4"
            />
            <div class="experience-header">
              <h2 class="experience-company">{{ experience.company }}</h2>
              <span class="experience-location">{{ experience.location }}</span>
            </div>
            <div class="experience-subheader">
              <h3 class="experience-title">
                {{ experience.title }}
                <ui-separator orientation="vertical" class="mx-2" />
                <span class="experience-employment-type">
                  {{ experience.employmentType }}
                </span>
              </h3>
              <div class="experience-period">
                <icon-calendar class="w-4 h-4" />
                <span>{{ experience.period }}</span>
              </div>
            </div>
            <ul class="experience-highlights">
              <li
                v-for="(highlight, hIndex) in experience.highlights"
                :key="hIndex"
              >
                {{ highlight }}
              </li>
            </ul>
            <div class="experience-skills">
              <span
                v-for="(skill, sIndex) in experience.skills"
                :key="sIndex"
                class="skill-pill"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ui-stripe-divider />

    <!-- Education -->
    <section id="education" class="education section">
      <div class="container">
        <h2 class="home-title">Education</h2>
        <div class="education-grid">
          <div class="education-card">
            <div class="education-header">
              <h2 class="education-school">
                University of Transport and Technology
              </h2>
              <span class="education-location">Hanoi, Vietnam</span>
            </div>
            <div class="education-subheader">
              <h3 class="education-degree">
                Bachelor's Degree
                <ui-separator orientation="vertical" class="mx-2" />
                <span class="education-status">Graduated</span>
              </h3>
              <div class="education-period">
                <icon-calendar class="w-4 h-4" />
                <span>2015 - 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import IconClock from "~/components/icon/clock.vue";
import { useClipboard } from "@vueuse/core";
import type { TechStack as TechStackType } from "~/types/tech-stack";
import { TECH_STACK_LIST } from "~/data/tech-stack";
import { EXPERIENCES_LIST } from "~/data/experiences";

// Time compare
const { formatted } = useLocalTime("Asia/Ho_Chi_Minh");
const visitorOffset = -new Date().getTimezoneOffset() / 60; // hours from UTC
const yourOffset = 7; // e.g. UTC+7 for Hanoi

const timeCompare = computed(() => {
  const diff = visitorOffset - yourOffset;
  if (diff === 0) return "same";
  return `${Math.abs(diff)}h ${diff > 0 ? "ahead" : "behind"}`;
});

// Copy to clipboard
const { copy, copied } = useClipboard({ copiedDuring: 1500 });
const copiedIndex = ref<number | null>(null);

function handleCopy(text: string, index: number) {
  copy(text);
  copiedIndex.value = index;
}

// Highlight code
const code = `const user = {
  name: "Nguyen Tuan Viet",
  role: ["Frontend developer"],
  orientation: "Fullstack developer",
};

const education = {
  university: "University of Transport and Technology",
  status: "Graduated",
};

const coreFocus = [
  "UI Engineering",
  "Component-Driven Development",
  "Performance Optimization",
  "Cross-Browser Compatibility",
];`;

const { data: infoHTML } = await useAsyncData("code-user", () =>
  highlightCode(code, "javascript")
);

// About items
const currentAboutTab = useState("aboutTab", () => "overview");

const aboutItems = [
  {
    icon: "icon-code",
    content: "Frontend Developer",
  },
  {
    icon: "icon-location",
    content: "Hanoi, Vietnam",
    href: "https://www.google.com/maps/place/Ha+Noi,+Viet+Nam",
  },
  {
    icon: "icon-phone",
    content: "+84 868 402 367",
    href: "tel:+84868402367",
    copyContent: "+84868402367",
  },
  {
    icon: IconClock,
    content: formatted,
    href: "",
    isTime: true,
  },
  {
    icon: "icon-link",
    content: "tuanviet.com",
    href: "https://tuanviet.com/",
  },
  {
    icon: "icon-mail",
    content: "tuanviet19xx@gmail.com",
    href: "mailto:tuanviet19xx@gmail.com",
    copyContent: "tuanviet19xx@gmail.com",
  },
];

const aboutTabs = ref([
  {
    key: "overview",
    title: "Overview",
  },
  {
    key: "education",
    title: "Education",
  },
  {
    key: "certifications",
    title: "Certifications",
  },
]);

// Tech stack
function groupByCategory(
  items: TechStackType[]
): Record<string, TechStackType[]> {
  return items.reduce<Record<string, TechStackType[]>>((acc, item) => {
    for (const category of item.categories) {
      (acc[category] ??= []).push(item);
    }
    return acc;
  }, {} as Record<string, TechStackType[]>);
}

const groupedTechStack = computed(() =>
  Object.entries(groupByCategory(TECH_STACK_LIST)).map(([category, items]) => ({
    category,
    items,
  }))
);

// experience
const experiences = ref(EXPERIENCES_LIST);
</script>

<style scoped></style>
