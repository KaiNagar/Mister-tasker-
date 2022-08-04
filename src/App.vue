<script setup></script>

<template>
  <section>
    <h1>this is app</h1>
  </section>
</template>

<script>
import { firebaseService } from './services/firebase.service'

export default {
  components: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  created() {
    firebaseService.onInit()
  },
}
</script>
