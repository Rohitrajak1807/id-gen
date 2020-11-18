<template lang="pug">
  div
    b-table(hover striped :items="items")

</template>
<!--  this will render a table in a separate vue component-->
<!--having rows: roll_no, name, course, dept, email-->
<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      items: [
        { roll_no: 40, name: 'Dickerson', course: 'Macdonald', dept: '', email: '' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
