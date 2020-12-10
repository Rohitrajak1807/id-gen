export default class Student {
  formData = {
    fullName: '',
    rollNumber: '',
    phone: '',
    instituteEmail: '',
    permanentAddress: '',
    course: null,
    department: null,
    dateOfBirth: ''
  }

  courseOptions = [
    {value: 'phd', text: 'PhD'},
    {value: 'mtech', text: 'M.Tech'},
    {value: 'btech', text: 'B.Tech'}
  ]
  departmentOptions = [
    {value: 'cse', text: 'Computer Science and Engineering'},
    {value: 'ece', text: 'Electronics and Communication Engineering'},
    {value: 'eee', text: 'Electric and Electronics Engineering'},
    {value: 'me', text: 'Mechanical Engineering'},
    {value: 'ce', text: 'Civil Engineering'}
  ]
}
