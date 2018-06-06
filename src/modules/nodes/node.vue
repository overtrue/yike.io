<template>
  <div class="page-node-show">
    <header class="page-header bg-grey-blue py-4 text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 d-flex align-items-center">
            <div class="px-md-4">
              <h4>{{ node.title }}</h4>
              <p>{{ node.description }}</p>
            </div>
          </div>
          <div class="col-md-6 d-flex justify-content-end">
            <subscribe-btn :node="node" />
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-9">
          <div class="box box-flush">
            <div class="box-body">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link" :class="{active: currentThreadsTab == 'default'}" href="javascript:;" @click="currentThreadsTab = 'default'">综合讨论</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{active: currentThreadsTab == 'featured'}" href="javascript:;" @click="currentThreadsTab = 'featured'">精选</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{active: currentThreadsTab == 'zeroComment'}" href="javascript:;" @click="currentThreadsTab = 'zeroComment'">零回复</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{active: currentThreadsTab == 'recent'}" href="javascript:;" @click="currentThreadsTab = 'recent'">最新发布</a>
                </li>
              </ul>
            </div>

            <threads-list :threads="threads[currentThreadsTab]" @page-changed="handlePageChanged"></threads-list>
          </div>
        </div>
        <div class="col-md-3">
          <hot-tags></hot-tags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HotTags from "@components/hot-tags"
  import ThreadsList from "@components/threads-list"
  import SubscribeBtn from '../../components/subscribe-btn'

  export default {
    components: {SubscribeBtn, HotTags, ThreadsList},
    data() {
      return {
        node: {},
        threads: {
          default: {},
          featured: {},
          zeroComment: {},
          recent: {},
        },
        currentThreadsTab: 'default'
      }
    },
    computed: {
      ...mapGetters(['currentUser'])
    },
    created() {
      this.getNode()
      this.loadThreads()
    },
    watch:{
      currentThreadsTab() {
        this.loadThreads(1)
      }
    },
    methods: {
      loadThreads(page = 1) {
        this.api(`nodes/${this.$route.params.id}/threads`)
          .get('?page='+page)
          .then(threads => this.threads[this.currentThreadsTab] = threads)
      },
      handlePageChanged(page) {
        this.loadThreads(page)
      },
      getNode() {
        this.api('nodes')
          .find(this.$route.params.id)
          .then((data) => {
            this.node = data
          })
      }
    }
  }
</script>
