<template lang="pug">
  div
    div#informationForm.d-flex.flex-column.justify-content-center.pt-4
      b-container
        b-row
          b-col
            b-form-group#form_group_full_name(label='Full Name' label-for='full_name')
              b-form-input#full_name(v-model='student.formData.fullName' placeholder='Enter your Full Name' trim=true v-bind:disabled="isDisabled")
        b-row
          b-col
            b-form-group#form_group_roll_number(label='Roll Number' label-for='roll_number')
              b-form-input#roll_number(v-model='student.formData.rollNumber' placeholder='Enter your Roll Number' trim=true v-bind:disabled="isDisabledPk")
          b-col
            b-form-group#form_group_course(description='Choose your course' label='Course' label-for=course)
              b-form-select#course(v-model='student.formData.course' :options='student.courseOptions' )
          b-col
            b-form-group#form_group_department(description='Choose your Department' label='Department' label-for='department')
              b-form-select#department(v-model='student.formData.department' :options='student.departmentOptions' v-bind:disabled="isDisabled")
        b-row
          b-col
            b-form-group#form_group_date_of_birth(label='Date of Birth' label-for='date_of_birth')
              b-form-datepicker#date_of_birth(v-model='student.formData.dateOfBirth' placeholder='Enter your Date of Birth' v-bind:disabled="isDisabled")
          b-col
            b-form-group#form_group_phone_number(label='Phone Number' label-for='phone_number')
              b-form-input#phone_number(v-model='student.formData.phone' placeholder='Enter your Phone Number' type='number' trim=true  no-wheel=true v-bind:disabled="isDisabled")
        b-row
          b-col
            b-form-group#form_group_institutedateOfBirthSettings_e_mail(label='Institute E-mail' label-for='institute_e_mail')
              b-form-input#institute_e_mail(v-model='student.formData.instituteEmail' placeholder='Enter your Institutional E-mail ID' type='email' trim=true v-bind:disabled="isDisabled")
        b-row
          b-col
            b-form-group#form_group_permanent_address(label='Permanent Address' label-for='permanent_address')
              b-form-textarea#permanent_address(v-model='student.formData.permanentAddress' placeholder='Enter your Permanent Address' trim=true v-bind:disabled="isDisabled")
</template>

<script>

export default {
  name: 'Form',
  props: {
    student: Object,
    isDisabled: Boolean,
    isDisabledPk: Boolean
  }
}
</script>

<style scoped>
#informationForm {
  height: 100%;
  width: 100%;
}
</style>
