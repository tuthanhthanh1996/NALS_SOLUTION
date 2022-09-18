<template>
  <div class="blog-detail">
    <Loading v-if="isLoading" />
    <div v-if="blog" class="container quilWrapper">
      <h2>{{ blog.title }}</h2>
      <h4>
        Posted On :
        {{ stringDate }}
      </h4>
      <img :src="blog.image.url" alt="" />
      <div class="post-content ql-editor">{{ blog.content }}</div>
    </div>
  </div>
</template>

<script setup>
import CallAPI from "@/common/api";
import Loading from "@/components/Loading.vue";
</script>

<script>
export default {
  name: "blogDetail",
  components: {
    Loading,
  },
  data() {
    return {
      blog: null,
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    this.routerId = this.$route.params.id;
    const url = `https://api-placeholder.herokuapp.com/api/v2/blogs/${this.routerId}`;
    const { data } = await CallAPI.getAPI(url, "OK");
    if (data) {
      this.blog = data;
    }
    this.isLoading = false;
  },
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
};
</script>

<style lang="scss" scoped>
.blog-detail {
  min-height: 100%;

  .container {
    max-width: 1000px;
    padding: 60px 25px;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 16px;
    font-weight: 300;
    font-size: 32px;
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }

  img {
    height: 700px;
    min-height: 700px;
    width: 100%;
    margin-bottom: 32px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  }

  .ql-editor {
    padding: 0;
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>
