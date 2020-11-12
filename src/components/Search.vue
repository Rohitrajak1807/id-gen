<template lang="pug">
  div#search
    b-container(fluid='sm').py-4
      b-row
        b-col
          b-form-group#form_group_full_name(label='Search By :' label-for='search_by')
            b-form-select#course(v-model='searchType' :options='searchOption')
      b-row
        b-col(v-if="searchType==1")
          b-form-group#form_group_roll_number(label='Roll Number' label-for='roll_number')
            b-form-input#roll_number(v-model='search.rollNumber' placeholder='Enter your Roll Number' trim='')
        template(v-if="searchType==2")
          b-col
            b-form-group#form_group_course(label='Course' label-for='course')
              b-form-select#course(v-model='search.course' :options='courseOptions')
          b-col
            b-form-group#form_group_department(label='Department' label-for='department')
              b-form-select#department(v-model='search.department' :options='departmentOptions')
      b-row(v-if="searchType").ml-1.py-2
        b-button(type='submit' variant='primary' v-on:click='onSubmit') Search
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      search: {
        department: '',
        course: '',
        rollNumber: ''
      },
      departmentOptions: [
        {value: 'cse', text: 'Computer Science and Engineering'},
        {value: 'ece', text: 'Electronics and Communication Engineering'},
        {value: 'eee', text: 'Electric and Electronics Engineering'},
        {value: 'me', text: 'Mechanical Engineering'},
        {value: 'ce', text: 'Civil Engineering'}
      ],
      courseOptions: [
        {value: 'phd', text: 'PhD'},
        {value: 'mtech', text: 'M.Tech'},
        {value: 'btech', text: 'B.Tech'}
      ],
      searchType: '',
      searchOption:
      [
        { value: '1', text: 'Search By Roll No.' },
        { value: '2', text: 'List by Courses' }
      ]
    }
  },
  methods: {
    onSubmit: function (event) {
      event.preventDefault()
      // do some validation and go to next page
      // Handle Search here
    }
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
    width: 100%;
  }
</style>
