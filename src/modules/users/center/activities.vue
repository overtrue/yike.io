<template>
  <ul class="timeline pb-2">
      <li class="timeline-item" v-for="activity in activities.data">
        <div class="timeline-heading">
          <div class="d-flex">
            <router-link :to="{name:'users.show', params: {username: $parent.user.username}}">
              <img :src="$parent.user.avatar" class="avatar-40" :alt="$parent.user.name"/>
            </router-link>
            <div class="ml-2">
              <div>
                <router-link :to="{name:'users.show', params: {username: $parent.user.username}}">
                  <h6 class="mb-0 text-16 d-inline-block">{{ $parent.user.name }}</h6>
                </router-link>
                <span class="text-gray-70 ml-1">
                  <template v-if="activity.log_name == 'commented.thread'">
                    评论了 <a href="#">《{{ activity.subject.title }}》</a>
                  </template>
                  <template v-else-if="activity.log_name == 'published.thread'">
                    发布了 <a href="#">《{{ activity.subject.title }}》</a>
                  </template>
                  <template v-else-if="activity.log_name == 'like.thread'">
                    赞了 <a href="#">《{{ activity.subject.title }}》</a>
                  </template>
                  <template v-else-if="activity.log_name == 'follow.user'">
                    关注了 <router-link :to="{name:'users.show', params: {username: activity.subject.username}}"></router-link>
                  </template>
                </span>
              </div>
              <div class="text-12 text-gray-70"><small class="text-muted">{{ activity.created_at }}</small></div>
            </div>
          </div>
        </div>
        <div class="timeline-body">
          <user-card :user="activity.subject" v-if="activity.log_name == 'follow.user'"></user-card>
          <div class="box cursor-pointer text-gray-50" v-else>{{ activity.properties['content'] || '无' }}</div>
        </div>
      </li>
      <li class="timeline-item" v-if="activities.meta.current_page < activities.meta.last_page">
        <div class="timeline-heading">
          <div class="d-flex">
            <button class="btn btn-secondary btn-icon text-20" @click="loadActivities"><arrow-down-icon></arrow-down-icon></button>
          </div>
        </div>
      </li>
  </ul>
</template>

<script>
  import UserCard from "@components/user-card"
  import ArrowDownIcon from '@icons/arrow-down'

  export default {
    data() {
      return {
        activities: {
          data: [],
          meta: {
            current_page: 0,
            last_page: 0,
          }
        }
      }
    },
    components: {UserCard, ArrowDownIcon},
    methods: {
      loadActivities() {
        let page = this.activities.meta.current_page + 1
        this.api(`user/${this.$route.params.username}/activities?per_page=2&page=${page}`).get().then(activities => {
          this.activities.data = this.activities.data.concat(activities.data)
          this.activities.meta = activities.meta
        })
      }
    },
    mounted() {
      this.loadActivities()
    }
  }
</script>
