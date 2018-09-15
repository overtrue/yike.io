<template>
  <form class="search-form form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" v-model="q" @blur="clear" placeholder="搜索" aria-label="Search">
      <div class="list-group" v-if="threads.length > 0">
        <div class="list-group-item list-group-item-action cursor-pointer" v-for="item of threads" :key="item.id" @click="$router.push({name: 'threads.show', params:{id: item.id}});clear()">
          <div class="d-flex align-items-center">
            <a href="#" class="mr-2"><img src="http://yike.test/storage/avatars/1.png" alt="" class="avatar-30"></a>
            <div class="text-gray-50 text-truncate">{{ item.title }}</div>
          </div>
          <p class="highlights text-gray-60" v-if="highlights" v-html="_.values(item.highlights).join('...')"></p>
        </div>
      </div>
  </form>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'nav-search',
    data() {
      return {
        q: '',
        threads: []
      }
    },
    watch: {
      q() {
        if (this.q.length > 0) {
          this.search()
        } else {
          this.threads = []
        }
      }
    },
    methods: {
      clear() {
        this.q = ''
        this.threads = []
      },
      search() {
        this.$http.get(`/threads/search?q=`+this.q).then((response) => {
          this.threads = response.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-form {
    position: relative;
    .list-group {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 400px;
      z-index: 99;

      .highlights em {
        color: #C67C3B;
      }
    }
  }
</style>
