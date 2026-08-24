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
              <ui-tilt-badge
                imageUrl="/images/avatar.jpg"
                :size="250"
                :maxTilt="15"
                :scale="1.1"
                :shadowRadius="128"
                :borderRadius="9999"
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
      <div>
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
        <div class="about-tab__content container">
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
                  <ui-copy-button
                    v-if="item.copyContent"
                    :content="item.copyContent"
                  />
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
                <icon-open class="w-4 h-4 ml-auto shrink-0" />
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
                <icon-open class="w-4 h-4 ml-auto shrink-0" />
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
              class="my-6"
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

    <!-- Projects -->
    <section id="projects" class="projects section">
      <div class="container">
        <h2 class="home-title">
          Projects
          <p class="text-center">
            A showcase of my work, highlighting my skills and expertise in
            frontend development.
          </p>
        </h2>
        <div class="project-grid">
          <nuxt-link
            v-for="project in projects"
            :key="project.key"
            :to="project.link"
            target="_blank"
            class="project-card"
          >
            <div class="project-card__image">
              <ClientOnly>
                <nuxt-img :src="project.image" :alt="project.title" />
              </ClientOnly>
            </div>
            <h3 class="project-card__title">{{ project.title }}</h3>
            <p class="project-card__des">{{ project.description }}</p>
            <ul class="project-card__stacks">
              <li
                v-for="(stack, index) in project.techStack"
                :key="index"
                class="project-card__stack"
              >
                {{ stack }}
              </li>
            </ul>
            <div class="project-card__actions">
              <button
                class="project-card__open-btn"
                @click.stop="goToLink(project.link)"
              >
                Open project
                <icon-open class="w-4 h-4" />
              </button>
              <button
                class="project-card__github-btn"
                @click.stop="goToLink(project.github)"
              >
                <icon-github class="w-4 h-4" />
              </button>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
    <ui-stripe-divider />

    <!-- Contact -->
    <section id="contact" class="contact section">
      <div class="container">
        <h2 class="home-title">
          Contact
          <p class="text-center">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
        </h2>
        <div class="contact-grid">
          <div class="contact-information">
            <div class="flex flex-col gap-4">
              <div class="contact-item">
                <div class="contact-icon">
                  <icon-mail class="w-4 h-4" />
                </div>
                <nuxt-link to="mailto:tuanviet19xx@gmail.com" target="_blank">
                  tuanviet19xx@gmail.com
                </nuxt-link>
                <ui-copy-button content="tuanviet19xx@gmail.com" />
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <icon-phone class="w-4 h-4" />
                </div>
                <nuxt-link to="tel:+84868402367" target="_blank">
                  +84 868 402 367
                </nuxt-link>
                <ui-copy-button content="+84868402367" />
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <icon-location class="w-4 h-4" />
                </div>
                <nuxt-link
                  to="https://www.google.com/maps/place/Ha+Noi,+Viet+Nam"
                  target="_blank"
                >
                  Hanoi, Vietnam
                </nuxt-link>
              </div>
            </div>
            <ui-button class="mt-5">
              <span class="flex items-center gap-2">
                Get my CV
                <icon-download class="w-4.5 h-4.5" />
              </span>
            </ui-button>
          </div>
          <div class="contact-form">
            <Transition mode="out-in" name="fade">
              <!-- success state -->
              <ui-conner-box
                v-if="status === 'success'"
                key="success"
                data-slot="contact-form-success"
                class="contact-form__success"
              >
                <p class="text-2xl font-medium">
                  Message sent — thanks for reaching out.
                </p>
                <p class="text-4xl text-muted-foreground font-handwriting">
                  I'll get back to you as soon as I can.
                </p>
              </ui-conner-box>

              <!-- form state -->
              <form
                v-else
                key="form"
                data-slot="contact-form-fields"
                class="flex flex-col gap-4"
                novalidate
                @submit.prevent="submit"
              >
                <!-- honeypot: visually hidden, kept out of tab order-->
                <div class="sr-only" aria-hidden="true">
                  <label for="website">Website</label>
                  <input
                    id="website"
                    v-model="form.website"
                    type="text"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </div>

                <div class="contact-form__field">
                  <label for="name" class="font-medium">Your name</label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    maxlength="100"
                    placeholder="Your name"
                    data-slot="contact-form-input"
                    :aria-invalid="!!fieldErrors.name"
                    :class="fieldErrors.name && 'is-error'"
                    :disabled="status === 'loading'"
                    @blur="validateField('name')"
                  />
                  <div class="field-error__container">
                    <Transition name="error-slide" mode="out-in">
                      <div v-if="fieldErrors.name" class="field-error__text">
                        <icon-error class="w-4 h-4" />
                        <span>{{ fieldErrors.name }}</span>
                      </div>
                    </Transition>
                  </div>
                </div>

                <div class="contact-form__field">
                  <label for="email" class="font-medium">Your email</label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="you@example.com"
                    data-slot="contact-form-input"
                    :aria-invalid="!!fieldErrors.email"
                    :class="fieldErrors.email && 'is-error'"
                    :disabled="status === 'loading'"
                    @blur="validateField('email')"
                  />
                  <div class="field-error__container">
                    <Transition name="error-slide" mode="out-in">
                      <div v-if="fieldErrors.email" class="field-error__text">
                        <icon-error class="w-4 h-4" />
                        <span>{{ fieldErrors.email }}</span>
                      </div>
                    </Transition>
                  </div>
                </div>

                <div class="contact-form__field">
                  <label for="message" class="font-medium">Message</label>
                  <textarea
                    id="message"
                    class="hide-scroll"
                    ref="messageTextarea"
                    v-model="form.message"
                    maxlength="2000"
                    rows="5"
                    placeholder="What's on your mind?"
                    data-slot="contact-form-input"
                    :aria-invalid="!!fieldErrors.message"
                    :class="fieldErrors.message && 'is-error'"
                    :disabled="status === 'loading'"
                    style="height: 120px"
                    @input="autoResizeMessage"
                    @blur="validateField('message')"
                  />
                  <div class="field-error__container">
                    <Transition name="error-slide" mode="out-in">
                      <div v-if="fieldErrors.message" class="field-error__text">
                        <icon-error class="w-4 h-4" />
                        <span>{{ fieldErrors.message }}</span>
                      </div>
                    </Transition>
                  </div>
                </div>

                <p v-if="status === 'error'" class="text-sm text-destructive">
                  {{ errorMessage }}
                </p>
                <ui-button
                  buttonType="submit"
                  :disabled="status === 'loading'"
                  :loading="status === 'loading'"
                  class="max-w-50 w-full"
                >
                  Submit
                </ui-button>
              </form>
            </Transition>
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
import { PROJECT_LIST } from "~/data/projects";
import TiltBadge from "./ui/TiltBadge.vue";

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

// projects
const projects = ref(PROJECT_LIST);

function goToLink(link: string) {
  window.open(link, "_blank");
}

// Contact
const { form, status, errorMessage, fieldErrors, validateField, submit } =
  useContactForm();

const messageTextarea = ref<HTMLTextAreaElement | null>(null);

function autoResizeMessage() {
  const textarea = messageTextarea.value;
  if (!textarea) return;

  textarea.style.height = "120px";
  textarea.style.height = `${Math.max(120, textarea.scrollHeight)}px`;
}

onMounted(() => {
  autoResizeMessage();
});

watch(
  () => form.message,
  () => {
    nextTick(() => {
      autoResizeMessage();
    });
  }
);
</script>

<style scoped></style>
