<template lang="pug">
.home
  img(alt='Vue logo', src='../assets/logo.png')
  hello-world(msg='Welcome to Your Vue.js + TypeScript App')
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld
  }
})
</script>

