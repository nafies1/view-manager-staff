<template>
  <v-card>
    <v-footer
      absolute
      class="font-weight-medium primary text-center white--text"
    >
      <v-col class="text-center pointer" cols="12">
        {{ new Date().getFullYear() }} — <strong>Manager</strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'nFooter'
}
</script>

<style></style>
