<template lang="pug">
  div
    nav-bar
    data-form(v-bind:student="student")
    b-container
      b-button(type='submit' variant='primary' v-on:click='onSubmit') Submit
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'
import Student from '../models/student'
import Form from './subcomponents/Form'

export default {
  name: 'InformationForm',
  components: {
    'nav-bar': NavLoggedIn,
    'data-form': Form
  },

  data () {
    const model = new Student()
    return {
      student: model
    }
  },
  methods: {
    onSubmit: async function () {
      console.log(this.student.formData)
      const response = await this.axios.post('http://localhost:3000/students', this.student.formData)
      if (response.status === 200) {
        await this.$router.go()
      }
    }
  }
}
</script>

<style scoped>
</style>
