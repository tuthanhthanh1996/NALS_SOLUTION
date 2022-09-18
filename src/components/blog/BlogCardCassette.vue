<template>
  <BlogCard
    v-for="blog in arrBlogs"
    :blog="blog"
    :key="blog.id"
    :editBlog="editBlog"
    @deleteBlogHandler="deleteBlogHandler"
    @updateBlogHandler="updateBlogHandler"
  ></BlogCard>
</template>

<script setup>
import BlogCard from "./BlogCard.vue";
</script>

<script>
export default {
  name: "blogCardCassette",
  props: {
    arrBlogs: {
      type: Array,
      require: true,
    },
    editBlog: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  emits: ["updateBlogHandler", "deleteBlogHandler"],
  methods: {
    updateBlogHandler(id) {
      this.$emit("updateBlogHandler", id);
    },
    deleteBlogHandler(id) {
      this.$emit("deleteBlogHandler", id);
    },
  },
};
</script>
