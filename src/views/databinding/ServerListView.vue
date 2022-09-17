<template>
  <h1>Server List View</h1>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.name">
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <button @click="getUserList">눌러</button>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getUserList() {
      const tempList = [
        { name: 'lan', company: 'Bespin', gender: 'F' },
        { name: 'won', company: 'Bespin', gender: 'M' },
        { name: 'hoon', company: 'Bespin', gender: 'M' }
      ]
      this.userList = this.userList.concat(tempList)
    }
  }
}
</script>
