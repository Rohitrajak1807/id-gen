<template lang="pug">
  div
    nav-bar
    b-container.py-3
      b-jumbotron( header="Rohit Rajak")
        hr
        p Roll Number: {{this.rollNumber}}
        p Course: {{this.course}}
        p Department: {{this.department}}
        p Date of Birth: {{this.dateOfBirth}}
        p Phone Number: {{this.phone}}
        p Institute Email: {{this.instituteEMail}}
        p Permanent Address: {{this.permanentAddress}}
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'

export default {
  name: 'IdCard',
  components: {
    'nav-bar': NavLoggedIn
  },
  data () {
    return {
      fullName: 'Rohit Rajak',
      rollNumber: 'B180020',
      phone: '9475587808',
      instituteEMail: 'b180020@nitsikkim.ac.in',
      permanentAddress: 'Gangtok, Sikkim',
      course: 'B.Tech',
      department: 'Computer Science and Engineering',
      dateOfBirth: '1999-07-18'
    }
  }
}
</script>

<style scoped>

</style>
