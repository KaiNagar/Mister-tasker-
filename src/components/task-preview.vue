<template>
  <section class="task-preview flex column align-center">
    <h3>Card preview</h3>
    <h1>{{ task.title }}</h1>
    <span>Status: {{ task.status }}</span>
    <p>{{ task.description }}</p>
    <span v-if="task.doneAt">{{ task.doneAt }}</span>
    <span>Importance: {{ task.importance }}</span>
    <span>Created at: {{ task.createdAt }}</span>
    <div class="flex space-between">
      <router-link :to="'/task/' + task.id">Read more</router-link>
      <button @click="removeTask(task.id)">Remove task</button>
    </div>
  </section>
</template>

<script>
import { firebaseService } from '@/services/firebase.service.js'
export default {
  props: {
    task: Object,
  },
  components: {},
  data() {
    return {}
  },
  methods: {
    removeTask(taskId) {
      firebaseService.removeTask(taskId)
    },
  },
  computed: {},
  created() {},
}
</script>

<style></style>
