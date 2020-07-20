<template>
  <div class="container">
    <div class="mb-3">
      <v-card>
        <h1 class="textCenter">Staff Data</h1>
        <v-data-table
          :headers="headers1"
          :items="staff"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </div>
    <v-spacer />
    <v-card>
      <h1 class="textCenter">Manager Data</h1>
      <v-data-table
        :headers="headers2"
        :items="managers"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      data: {},
      headers1: [
        { text: 'Id', value: 'id_st' },
        { text: 'Name', value: 'name' },
        { text: 'Manager Id', value: 'id_mg' }
      ],
      headers2: [
        { text: 'Id', value: 'id_mg' },
        { text: 'Name', value: 'name' },
        { text: 'Company', value: 'company' }
      ],
      staff: [],
      managers: []
    }
  },
  methods: {
    fetchData () {
      axios
        .get('http://www.json-generator.com/api/json/get/cfsuOQnJaq?indent=2')
        .then(({ data }) => {
          console.log(data)
          this.staff = data.staf
          this.managers = data.Manager
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
  .textCenter {
    text-align: center;
  }
</style>
