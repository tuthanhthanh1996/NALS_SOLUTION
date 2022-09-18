<template>
  <div class="blogAction">
    <input
      class="blogAction__inputSearch"
      type="text"
      placeholder="Please search"
      v-model="search"
      @change="searchHandler"
    />
    <select
      class="blogAction__sortDate"
      v-model="sortDate"
      @change="sortHandler"
    >
      <option disabled value="">Sort by Date</option>
      <option value="asc">Sort by ascending Date</option>
      <option value="desc">Sort by decrease Date</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "blogAction",
  data() {
    return {
      sortDate: "",
      search: "",
    };
  },
  methods: {
    searchHandler() {
      this.$emit("searchHandler", this.search);
    },
    sortHandler() {
      this.$emit("sortHandler", this.sortDate);
    },
  },
};
</script>

<style lang="scss" scoped>
.blogAction {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &__inputSearch {
    font-size: 16px;
    line-height: 1.5;
    background: #e9eef0;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'><path fill='%238C92A0' d='M11.44 10.73l4.41 4.42a.5.5 0 1 1-.7.7l-4.42-4.41a6.5 6.5 0 1 1 .7-.7v-.01zM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z'></path></svg>");
    background-repeat: no-repeat;
    background-position: 8px 8px;
    background-size: 15px 20px;
    border-radius: 100px;
    padding: 5px 10px 5px 28px;
    margin-right: 10px;

    &::placeholder {
      color: #838d99;
    }

    &:focus {
      outline: none;
      background-color: #fff;
      border: 1px solid #84a2fa;
    }
  }

  &__sortDate {
    outline: none;
    border-radius: 100px;
    padding: 5px 10px 5px 10px;
    font-size: 14px;
    cursor: pointer;
    min-width: 140px;
    width: 200px;
    border: 1px solid rgba(0, 0, 0, 0.15);

    &:focus {
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.329);
    }

    &:hover {
      outline: none;
      border: 1px solid rgba(0, 0, 0, 0.329);
    }
  }
}
</style>
