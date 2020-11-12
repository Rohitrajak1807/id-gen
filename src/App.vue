<template lang="pug">
  #app
    b-navbar(variant="dark" type="dark")#header
      b-container#header
        b-navbar-brand(to="/") ID-Gen
        b-navbar-nav.ml-auto
          b-nav-item(to="/information-form") Add Student
          b-nav-item(to="/search") Search Student
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
