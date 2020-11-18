<template lang="pug">
  div
    nav-bar
    div#informationForm.d-flex.flex-column.justify-content-center.pt-4
      b-container
        b-row
          b-col
            b-form-group#form_group_full_name(label='Full Name' label-for='full_name')
              b-form-input#full_name(v-model='formData.fullName' placeholder='Enter your Full Name' trim=true)
        b-row
          b-col
            b-form-group#form_group_roll_number(label='Roll Number' label-for='roll_number')
              b-form-input#roll_number(v-model='formData.rollNumber' placeholder='Enter your Roll Number' trim=true)
          b-col
            b-form-group#form_group_course(description='Choose your course' label='Course' label-for='course')
              b-form-select#course(v-model='formData.course' :options='courseOptions')
          b-col
            b-form-group#form_group_department(description='Choose your Department' label='Department' label-for='department')
              b-form-select#department(v-model='formData.department' :options='departmentOptions')
        b-row
          b-col
            b-form-group#form_group_date_of_birth(label='Date of Birth' label-for='date_of_birth')
              b-form-datepicker#date_of_birth(v-model='formData.dateOfBirth' placeholder='Enter your Date of Birth')
          b-col
            b-form-group#form_group_phone_number(label='Phone Number' label-for='phone_number')
              b-form-input#phone_number(v-model='formData.phone' placeholder='Enter your Phone Number' type='number' trim=true)
        b-row
          b-col
            b-form-group#form_group_institutedateOfBirthSettings_e_mail(label='Institute E-mail' label-for='institute_e_mail')
              b-form-input#institute_e_mail(v-model='formData.instituteEMail' placeholder='Enter your Institutional E-mail ID' type='email' trim=true)
        b-row
          b-col
            b-form-group#form_group_permanent_address(label='Permanent Address' label-for='permanent_address')
              b-form-textarea#permanent_address(v-model='formData.permanentAddress' placeholder='Enter your Permanent Address' trim=true)
        b-row.ml-1
          b-button(type='submit' variant='primary' v-on:click='onSubmit') Submit
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'

export default {
  name: 'InformationForm',
  components: {
    'nav-bar': NavLoggedIn
  },
  data () {
    return {
      formData: {
        fullName: '',
        rollNumber: '',
        phone: '',
        instituteEmail: '',
        permanentAddress: '',
        course: null,
        department: null,
        dateOfBirth: ''
      },
      courseOptions: [
        {value: 'phd', text: 'PhD'},
        {value: 'mtech', text: 'M.Tech'},
        {value: 'btech', text: 'B.Tech'}
      ],
      departmentOptions: [
        {value: 'cse', text: 'Computer Science and Engineering'},
        {value: 'ece', text: 'Electronics and Communication Engineering'},
        {value: 'eee', text: 'Electric and Electronics Engineering'},
        {value: 'me', text: 'Mechanical Engineering'},
        {value: 'ce', text: 'Civil Engineering'}
      ]
    }
  },
  methods: {
    onSubmit: async function () {
      const response = await this.axios.post('http://localhost:3000/students', this.formData)
      console.log(response)
    }
  }
}
</script>

<style scoped>
  #informationForm {
    height: 100%;
    width: 100%;
  }
</style>
