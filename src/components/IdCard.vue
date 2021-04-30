<template lang="pug">
  div
    nav-bar
    data-form(:student="student" :is-disabled="isDisabled" :is-disabled-pk="isDisabledPk")
    b-container
      b-button(v-b-modal="'deleteModal'" variant="danger") Delete
      b-button#submit-changes(variant="primary" v-show="!isDisabled" v-on:click="updateStudent") Submit Changes
      b-button#update-btn(variant="success" v-on:click="enableUpdate") Update
    b-modal#deleteModal(hide-header).pt-3
      | Are You Sure You want to delete this ID.
      template(#modal-footer="{ ok, cancel}")
        b-button(variant="danger" @click="deleteId(ok)") Yes
        b-button(variant="success" @click="cancel()") No
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'
import Form from './subcomponents/Form'
import Student from '../models/student'

export default {
  name: 'IdCard',
  components: {
    'nav-bar': NavLoggedIn,
    'data-form': Form
  },
  async created () {
    this.data = (await this.axios.get(`http://localhost:3000/students/${this.$route.params.rollNumber}`)).data[0]
    this.student.formData.fullName = this.data.name
    this.student.formData.rollNumber = this.data.roll_no
    this.student.formData.course = this.data.course
    this.student.formData.department = this.data.department
    this.student.formData.dateOfBirth = new Date(this.data.date_of_birth)
    this.student.formData.phone = this.data.phone
    this.student.formData.instituteEmail = this.data.ins_email
    this.student.formData.permanentAddress = this.data.perma_address
  },
  mounted () {
    document.querySelector('#roll_number').setAttribute('disabled', true)
    document.querySelector('#course').setAttribute('disabled', true)
  },
  data () {
    const m = new Student()
    return {
      student: m,
      isDisabled: true,
      isDisabledPk: true,
      data: {}
    }
  },
  methods: {
    deleteId: async function (ok) {
      const res = await this.axios.delete(`http://localhost:3000/students/${this.$route.params.rollNumber}`)
      if (res.status === 200) {
        await this.$router.push({name: 'Search'})
      }
      ok()
    },
    enableUpdate: function () {
      this.isDisabled = false
    },
    updateStudent: async function () {
      const jsDate = new Date(this.student.formData.dateOfBirth)
      console.log(jsDate)
      console.log(`${jsDate.getFullYear()}-${Number(jsDate.getMonth()) + 1}-${jsDate.getDate()}`)
      this.student.formData.dateOfBirth = `${jsDate.getFullYear()}-${Number(jsDate.getMonth()) + 1}-${jsDate.getDate()}`
      const res = await this.axios.put(`http://localhost:3000/students/${this.$route.params.rollNumber}`, this.student.formData)
      if (res.status === 200) {
        await this.$router.push({name: 'Search'})
      }
    },
    show: function () {
      console.log(this.data.date_of_birth)
    }
  }
}
</script>

<style scoped>
#update-btn {
  float: right;
  margin-right: 20%;
  margin-top: 2px;
}

#submit-changes {
  margin-left: 50%;
}
</style>
