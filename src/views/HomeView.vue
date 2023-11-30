<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PageView msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageView from '@/views/PageView.vue'

export default {
  name: 'HomeView',
  components: {
    PageView
  }
}
</script>
