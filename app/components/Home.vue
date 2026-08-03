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
              <icon-javascript class="code-icon" />
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
    <div class="stripe-divider">
      <div class="stripe-divider__top" data-box-decoration="top"></div>
      <div class="stripe-divider__bottom" data-box-decoration="bottom"></div>
    </div>
    <!-- About -->
    <section id="about" class="about section">
      <div class="container">
        <h2 class="home-title">About me</h2>
        <div class="flex items-baseline gap-8">
          <p class="mb-8 max-w-150">
            I'm Việt, a frontend developer obsessed with the details. I bring
            designs to life with pixel-perfect precision, fluid animations,
            sharp typography, and clean, readable code.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
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
const aboutItems = [
  {
    icon: "icon-code",
    content: "Frontend Developer",
    href: "",
    copyable: false,
  },
  {
    icon: "icon-location",
    content: "Hanoi, Vietnam",
    href: "https://www.google.com/maps/place/Ha+Noi,+Viet+Nam",
    copyable: false,
  },
  {
    icon: "icon-phone",
    content: "+84 868 402 367",
    href: "tel:+84868402367",
    copyable: true,
  },
  {
    icon: "icon-link",
    content: "tuanviet.com",
    href: "https://tuanviet.com/",
    copyable: false,
  },
  {
    icon: "icon-link",
    content: "tuanviet.com",
    href: "https://tuanviet.com/",
    copyable: false,
  },
  {
    icon: "icon-link",
    content: "tuanviet.com",
    href: "https://tuanviet.com/",
    copyable: false,
  },
];
</script>

<style scoped></style>
