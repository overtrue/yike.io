<template>
  <div class="page-node-show">
    <div class="row mt-3">
      <div class="col-md-12">
        <div class="box mb-3" v-for="node in nodes" :key="node.id">
          <div class="box-heading">
            {{node.title}}
          </div>
          <div class="box-body">
            <ul class="nav nav-pills">
              <li class="nav-item mr-2 mb-1" v-for="child in node.children" :key="child.id">
                <router-link :to="{name: 'nodes.node', params: {id: child.id}}" class="btn text-gray-40 btn-outline-light">
                  {{child.title}}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nodes: []
    }
  },
  created () {
    this.getNodes()
  },
  methods: {
    getNodes () {
      this.$http.get('nodes?all=yes').then(({ data }) => {
        this.nodes = data
      })
    }
  }
}
</script>
