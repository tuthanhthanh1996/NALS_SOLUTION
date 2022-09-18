<template>
  <div class="vlog-card" v-if="blog">
    <div v-if="editBlog" class="icons">
      <div @click="updateBlogHandler" class="icon">
        <IconEdit class="edit" />
      </div>
      <div @click="deleteBlogHandler" class="icon">
        <IconDelete class="delete" />
      </div>
    </div>
    <img
      v-if="blog.image"
      class="lazy"
      :data-src="blog.image.url"
      src="https://via.placeholder.com/350x150"
      alt=""
    />
    <div class="vlog-card__infor">
      <h4>{{ blog.title }}</h4>
      <p>{{ blog.content }}</p>
      <h6>Posted On : {{ stringDate }}</h6>
      <router-link
        class="link"
        :to="{ name: 'BlogDetail', params: { id: this.blog.id } }"
        >Read More <IconArrow class="arrow"
      /></router-link>
    </div>
  </div>
</template>

<script setup>
import IconDelete from "@/components/icons/IconDelete.vue";
import IconEdit from "@/components/icons/IconEdit.vue";
import IconArrow from "@/components/icons/IconArrow.vue";
import lazyImageObserverFunc from "@/common/lazyLoadImg";
</script>

<script>
export default {
  name: "blogCard",
  components: {
    IconDelete,
    IconEdit,
    IconArrow,
  },
  props: {
    blog: {
      type: Object,
      require: true,
    },
    editBlog: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  emits: ["updateBlogHandler", "deleteBlogHandler"],
  computed: {
    stringDate() {
      return new Date(Date.parse(this.blog.created_at)).toLocaleString(
        "en-us",
        {
          dateStyle: "long",
        }
      );
    },
  },
  methods: {
    updateBlogHandler() {
      this.$emit("updateBlogHandler", this.blog.id);
    },
    deleteBlogHandler() {
      this.$emit("deleteBlogHandler", this.blog.id);
    },
  },
  mounted() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      if (lazyImages.length) {
        lazyImageObserverFunc(lazyImages);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.vlog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: all 0.5s ease;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    height: 200px;
    object-fit: cover;
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.5s ease;

      &:hover {
        background: #383838;
        .edit,
        .delete {
          color: #fff;
        }
      }

      &:nth-child(1) {
        margin-right: 8px;
      }

      .edit,
      .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  &__infor {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;

    h4 {
      padding-bottom: 8px;
      font-size: 20px;
      font-weight: 300;
      word-break: break-all;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    p {
      word-break: break-all;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      color: #ff514e;
      transition: all 0.5s ease-in;
    }

    .arrow {
      width: 10px;
      margin-left: 10px;
    }
  }
}
</style>
