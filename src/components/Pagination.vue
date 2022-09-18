<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <paginate
    :page-count="pagination.total"
    :click-handler="changePage"
    :container-class="'blogCardPagination'"
    :page-class="'page-item'"
  >
  </paginate>
</template>

<script setup>
import Paginate from "vuejs-paginate-next";
</script>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "pagination",
  props: {
    pagination: {
      tye: Object,
      required: true,
    },
  },
  components: {
    Paginate,
  },
  methods: {
    changePage(pageNum) {
      this.$emit("changePage", pageNum);
    },
  },
};
</script>

<style lang="scss">
.blogCardPagination {
  text-align: center;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.page-item {
  margin: 0 6px;
  display: inline-block;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 15%);
  height: 100%;
  background-color: #fff;
  transition: all 0.2s ease;
  cursor: pointer;

  &.active {
    color: #fff;
    background-color: #ff514e;
  }

  .page-link {
    padding: 8px 15px;
    display: inline-block;
    font-size: 14px;
    @media (max-width: 500px) {
      padding: 4px 5px;
    }
  }
}
</style>
