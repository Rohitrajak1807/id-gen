<template lang="pug">
  div
<!--    this page contains the login form, simply an input form with ID and password-->
    b-container(fluid='sm')
      b-col(align-self='center' cols="5")
        b-form-group(label='Login ID:' label-for='login')
          b-form-input#login(v-model='form.id' type='text' required=true placeholder='Login')
        b-form-group(label='Password:' label-for='password')
          b-form-input#password(v-model='form.password' required=true placeholder='Password')
        b-button(type='submit' variant='primary') Submit
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      form: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      // do some validation and go to next page
    }
  }
}
</script>

<style scoped>

</style>
