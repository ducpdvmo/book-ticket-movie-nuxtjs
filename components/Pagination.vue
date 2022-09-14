<template>
  <div class="wrap-pagination">
    <div class="topbar-filter">
      <div class="pagination2">
        <span
          v-if="showPreviousLink()"
          class="link-pagination"
          @click="updatePage(currentPage - 1)"
          ><font-awesome-icon icon="fa-solid fa-angles-left"
        /></span>
        <span> {{ currentPage + 1 }} of {{ totalPage() }}:</span>
        <span
          v-if="showNextLink()"
          class="link-pagination"
          @click="updatePage(currentPage + 1)"
          ><font-awesome-icon icon="fa-solid fa-angles-right"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      required: true,
    },
  },
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber)
    },
    totalPage() {
      return Math.ceil(this.data.length / this.pageSize)
    },
    showPreviousLink() {
      // eslint-disable-next-line eqeqeq
      return this.currentPage != 0
    },
    showNextLink() {
      // eslint-disable-next-line eqeqeq
      return this.currentPage != this.totalPage() - 1
    },
  },
}
</script>

<style>
.pagination2 span {
  cursor: context-menu;
}
.topbar-filter .pagination2 a.link-pagination {
  cursor: context-menu;
}
.pagination2 i {
  font-size: 18px;
}
</style>

