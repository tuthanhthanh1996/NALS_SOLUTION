<template>
  <div>
    <Loading v-if="isLoading" />
    <div class="home">
      <BlogAction @searchHandler="searchHandler" @sortHandler="sortHandler" />
      <div class="home__container">
        <BlogCardCassette v-if="arrBlogs.length" :arrBlogs="arrBlogs" />
      </div>
      <Paginate
        v-if="pagination && arrBlogs.length"
        :pagination="pagination"
        @changePage="chanePageHandler"
      />
    </div>
  </div>
</template>

<script setup>
import { mapState, mapActions } from "vuex";
import CallAPI from "@/common/api";
import BlogCardCassette from "@/components/blog/BlogCardCassette.vue";
import BlogAction from "@/components/blog/BlogAction.vue";
import Paginate from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";
</script>

<script>
export default {
  name: "homeView",
  components: {
    BlogCardCassette,
    BlogAction,
    Loading,
  },
  data() {
    return {
      param: {
        isLoading: false,
        url: "https://api-placeholder.herokuapp.com/api/v2/blogs",
        method: "GET",
        params: {
          page: 1,
          offset: 30,
        },
      },
    };
  },
  async created() {
    this.isLoading = true;
    const { data } = await CallAPI.executeAPI(this.param, "OK");
    this.setArrBlogs(data);
    this.isLoading = false;
  },
  methods: {
    ...mapActions(["setArrBlogs"]),
    async searchHandler(search) {
      this.isLoading = true;
      if (search)
        this.param.params = {
          ...this.param.params,
          search: search,
        };

      if (this.param.params && !search) {
        delete this.param.params["search"];
      }

      const { data } = await CallAPI.executeAPI(this.param, "OK");
      this.setArrBlogs(data);
      this.isLoading = false;
    },
    async sortHandler(sortDate) {
      this.isLoading = true;
      this.param.params = {
        ...this.param.params,
        sort_by: "updated_at",
        sort_direction: sortDate,
      };
      const { data } = await CallAPI.executeAPI(this.param, "OK");
      this.setArrBlogs(data);
      this.isLoading = false;
    },
    async chanePageHandler(pageNum) {
      this.isLoading = true;
      this.param.params.page = pageNum;
      const { data } = await CallAPI.executeAPI(this.param, "OK");
      this.setArrBlogs(data);
      this.isLoading = false;
    },
  },
  computed: {
    ...mapState({
      arrBlogs: (state) => state.arrBlogs,
      pagination: (state) => state.pagination,
    }),
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 20px 10px;
  background-color: #f1f1f1;

  &__container {
    position: relative;
    display: grid;
    grid-gap: 15px;
    padding: 22px 0 20px 20px;
    row-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: 960px) {
      padding: 0;
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    }
  }
}
</style>
