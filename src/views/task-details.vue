<template>
  <section v-if="task" class="task-details flex column">
    <!-- <span class="property">Id</span><span>{{ task.id }}</span> -->
    <span class="property">Title</span><span>{{ task.title }}</span>
    <span class="property">Description</span
    ><span>{{ task.description }}</span> <span class="property">Created at</span
    ><span>{{ task.createdAt }}</span>
    <span class="property">Done at</span>
    <span>{{
      task.doneAt
        ? new Date(task.doneAt).toLocaleTimeString('en-US')
        : 'Incomplete'
    }}</span>
    <span class="property">Status</span><span>{{ task.status }}</span>
  </section>
</template>

<script>
import { firebaseService } from '../services/firebase.service'

export default {
  data() {
    return {
      task: null,
    }
  },
  async created() {
    const { taskId } = this.$route.params
    console.log(taskId);
    this.task = await firebaseService.getById(taskId)
  },
}
</script>
