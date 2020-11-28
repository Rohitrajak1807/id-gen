<template lang="pug">
  div#search
    nav-bar
    b-container(fluid='sm').py-4
      b-row
        b-form-group#form_group_roll_number(label='Roll Number' label-for='roll_number')
          b-form-input#roll_number(v-model='search.rollNumber' placeholder='Enter your Roll Number' trim='')
      b-row.ml-1.py-2
        b-button(type='submit' variant='primary' v-on:click='onSubmit') Search
      b-row.m-3.py-3(v-show="hasData")
        b-table(:items="result" striped=true hover=true :fields="studentDataHeader" id="inf-table")
        b-row
          b-button(v-on:click="showDetails()" v-show="hasData") More Details...
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'

export default {
  name: 'Search',
  components: {
    'nav-bar': NavLoggedIn
  },
  data () {
    return {
      search: {
        rollNumber: ''
      },
      studentDataHeader: ['name', 'roll_no.', 'department'],
      departmentOptions: {
        cse: 'Computer Science and Engineering',
        ece: 'Electronics and Communication Engineering',
        eee: 'Electric and Electronics Engineering',
        me: 'Mechanical Engineering',
        ce: 'Civil Engineering'
      },
      result: [],
      hasData: false
    }
  },
  methods: {
    onSubmit: async function () {
      this.result = []
      console.log(this.search.rollNumber)
      const response = await this.axios.get('http://localhost:3000/search', {
        params: this.search
      })
      this.result = response.data
      console.log(this.result)
      this.result[0].department = this.departmentOptions[this.result[0].department]
      this.result[0].roll_no = this.result[0].roll_no.toUpperCase()
      this.hasData = true
    },
    showDetails: function () {
      this.$router.push({path: `/id-card/${this.result[0].roll_no.toLowerCase()}`})
    }
  }
}
</script>

<style scoped>
#search {
  height: 100vh;
  width: 100%;
}
</style>
