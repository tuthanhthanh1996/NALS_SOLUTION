<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="contanier">
      <RouterLink class="contanier__title" to="/">Blog</RouterLink>
      <div class="nav-links" v-show="!mobile">
        <RouterLink class="nav-links__item" to="/">Home</RouterLink>
        <RouterLink class="nav-links__item" to="/createBlog"
          >Create Blog</RouterLink
        >
        <RouterLink class="nav-links__item" to="/editBlog"
          >Edit Blog</RouterLink
        >
      </div>
    </nav>
    <IconMenu v-show="mobile" class="menu-icon" @click="toggleMobileNav" />
    <transition name="mobile-app">
      <ul class="mobile-app" v-show="mobileNav">
        <li>
          <RouterLink class="mobile-app__item" to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink class="mobile-app__item" to="/createBlog"
            >CreateBlog</RouterLink
          >
        </li>
        <li>
          <RouterLink class="mobile-app__item" to="/editBlog"
            >EditBlog</RouterLink
          >
        </li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
import IconMenu from "./icons/IconMenu.vue";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "navigation",
  components: {
    IconMenu,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  z-index: 99;
}

.contanier {
  display: flex;
  padding: 25px 0;
  max-width: 1440px;
  margin: 0 auto;

  &__title {
    font-size: 24px;
    color: #000;
    text-decoration: none;
    font-weight: 600;
  }
}

.branding {
  display: flex;
  align-items: center;
}

.nav-links {
  position: relative;
  min-height: 40px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__item {
    margin-right: 32px;
    color: #000;
    font-weight: 500;
    padding: 0 8px;
    text-transform: uppercase;
    transition: color 0.3s ease;

    &:hover {
      color: #1eb8b8;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 25px;
  height: 25px;
  width: auto;
}

.mobile-app {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;

  & > li {
    padding: 15px 0;
  }
  &__item {
    color: #fff;
    font-weight: 500;
    transition: color 0.3s ease;
  }
}

.mobile-app-enter-active,
.mobile-app-leave-active {
  transition: all 1s ease;
}

.mobile-app-enter-from {
  transform: translateX(-250px);
}

.mobile-app-enter-to {
  transform: translateX(0);
}

.mobile-app-leave-to {
  transform: translateX(-250px);
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
