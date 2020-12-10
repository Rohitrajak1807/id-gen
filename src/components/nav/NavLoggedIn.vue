<template lang="pug">
  div
    b-navbar(variant="dark" type="dark")#header
      b-container#header
        b-navbar-brand(to="/") ID Card Generation System
        b-navbar-nav.ml-auto
          b-nav-item(to="/information-form") Add Student
          b-nav-item(to="/search") Search Student
</template>

<script>
export default {
  name: 'NavLoggedIn'
}
</script>

<style scoped>

</style>
