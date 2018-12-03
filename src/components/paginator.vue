<template>
  <ul class="paginator d-flex justify-content-center align-items-center" v-if="meta.last_page > 1">
    <template v-if="centerStart != 1">
      <li class="paginator-item" :class="{active: 1 == meta.current_page}"><a href="javascript:;" @click="change(1)">1</a></li>
      <li class="paginator-item"><a disabled class="text-muted" v-html="'&ctdot;'"></a></li>
    </template>
    <li class="paginator-item" :class="{active: i == meta.current_page}" v-for="i in range(centerStart, centerEnd)" :key="i"><a href="javascript:;" @click="change(i)">{{ i }}</a></li>
    <template v-if="centerEnd != meta.last_page">
      <li class="paginator-item"><a disabled class="text-muted" v-html="'&ctdot;'"></a></li>
      <li class="paginator-item" :class="{active: meta.last_page == meta.current_page}"><a href="javascript:;" @click="change(meta.last_page)">{{ meta.last_page }}</a></li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'paginator',
  props: {
    meta: {
      type: Object,
      default () {
        return {
          total: 0,
          per_page: 10,
          from: 0,
          to: 1,
          last_page: 1,
          current_page: 1
        }
      }
    }
  },
  computed: {
    centerStart () {
      if (this.meta.last_page <= 10) {
        return 1
      }

      let count =
        this.meta.last_page - this.meta.current_page <= 4
          ? 9 - (this.meta.last_page - this.meta.current_page)
          : 4

      return this.meta.current_page - count > 1
        ? this.meta.current_page - count
        : 1
    },
    centerEnd () {
      if (this.meta.last_page <= 10) {
        return this.meta.last_page
      }

      let count =
        this.meta.current_page <= 4 ? 9 - (this.meta.current_page - 1) : 4

      return this.meta.current_page + count < this.meta.last_page - 1
        ? this.meta.current_page + count
        : this.meta.last_page
    }
  },
  methods: {
    range (start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx)
    },
    change (page) {
      this.meta.current_page = page
      this.$emit('change', page)
    }
  }
}
</script>

<style scoped lang="scss">
.paginator {
  list-style: none;
  padding: 1em 0;

  .paginator-item {
    a {
      display: inline-block;
      height: 32px;
      width: 32px;
      text-align: center;
      border-radius: 100%;
      line-height: 32px;
      font-size: 14px;
      margin: 0 0.2em;
    }

    &.active a {
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
