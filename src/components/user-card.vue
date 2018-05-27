<template>
    <div class="user-card box d-inline-block">
        <user-media>
          <template slot="appends">
            <button class="btn btn-ghost ml-auto"><plus-icon></plus-icon> 关注</button>
          </template>
          <template slot="name-appends"><a href="#" class="ml-1">@overtrue</a></template>
        </user-media>
        <div class="text-gray-70 py-2">Keep calm and coding.</div>
        <div><map-maker-icon></map-maker-icon> Beijing, China</div>
    </div>
</template>

<script>
  import UserMedia from "@components/user-media"
  import MapMakerIcon from "@icons/map-marker"
  import PlusIcon from "@icons/plus"

  export default {
    name: 'UserCard',
    components: {UserMedia, MapMakerIcon, PlusIcon}
  }
</script>

<style scoped>
  .user-card { min-width: 25vw; }
</style>
