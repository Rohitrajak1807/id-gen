<template lang="pug">
  div
    nav-bar
    data-form( v-bind:is-disabled='this.formDisabled')
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
      student: model,
      formDisabled: false
    }
  },
  methods: {
    onSubmit: async function () {
      const response = await this.axios.post('http://localhost:3000/students', this.student.formData)
      console.log(response)
    }
  }
}
</script>

<style scoped>
/*#informationForm {*/
/*  height: 100%;*/
/*  width: 100%;*/
/*}*/
</style>
