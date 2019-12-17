<template>
  <div id="app">
    <Header />
    <vue-page-transition name="zoom">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body {
  min-height: 95vh;
}
</style>