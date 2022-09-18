<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <RouterLink class="container__title" to="/">Blog</RouterLink>
          <ul>
            <li>
              <a href=""><IconIntagrams /></a>
            </li>
            <li>
              <a href=""><IconLinkedin /></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul class="">
            <li>
              <RouterLink class="link" to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/createBlog">CreateBlog</RouterLink>
            </li>
            <li>
              <RouterLink class="mobile-app__item" to="/editBlog"
                >EditBlog</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
import IconLinkedin from "./icons/IconLinked.vue";
import IconIntagrams from "./icons/IconInstagrams.vue";
</script>

<script>
export default {
  components: {
    IconLinkedin,
    IconIntagrams,
  },
};
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 50px 25px;
  background-color: #303030;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 0;
  }

  &__title {
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
  }

  & > div {
    display: flex;
    flex: 1;
  }

  .left {
    gap: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      flex-direction: row;
      align-items: normal;
      gap: 0;
    }

    ul {
      gap: 16px;
      display: flex;
    }

    .col-1,
    .col-2 {
      gap: 32px;
      display: flex;
      flex: 1;
      @media (min-width: 800px) {
        gap: 0;
      }
    }

    .col-1 {
      flex-direction: column;

      ul {
        margin-top: 10px;
        padding: 0;

        li {
          display: flex;
          align-items: center;
          color: #fff;
          svg {
            width: 24px;
            height: auto;
            color: #fff;
          }
        }
      }
    }

    .col-2 {
      ul {
        height: 100%;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0;

        @media (min-width: 800px) {
          flex-direction: column;
        }

        li {
          color: #fff;
        }
      }

      .link {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
      }
    }
  }

  .right {
    gap: 32px;
    color: #fff;
    align-items: center;
    flex-direction: column;

    @media (min-width: 800px) {
      align-items: flex-end;
      gap: 0;
    }
  }
}

a {
  color: #fff;
  text-decoration: none;
}
</style>
