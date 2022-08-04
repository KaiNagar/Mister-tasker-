<template>
  <form v-if="taskToEdit" @submit="saveTask">
    <!-- id:{{ taskToEdit.id }} -->
    <input type="checkbox" @change="changeTaskStatus" />Status:
    {{ taskToEdit.status }} Description:<input
      type="text"
      v-model="taskToEdit.description"
    />
    Title:<input type="text" v-model="taskToEdit.title" /> Importance:<input
      min="1"
      max="3"
      type="number"
      v-model="taskToEdit.importance"
    />
    Done at:{{
      taskToEdit.doneAt
        ? new Date(taskToEdit.doneAt).toLocaleTimeString('en-US')
        : 'Incomplete'
    }}
    <button class="btn-save">Save</button>
  </form>
</template>

<script>
import { firebaseService } from '../services/firebase.service'
import { taskService } from '../services/task.service'
export default {
  async created() {
    const { taskId } = this.$route.params
    this.taskToEdit = taskId
      ? await firebaseService.getById(taskId)
      : taskService.getEmptyTask()
  },
  data() {
    return { taskToEdit: null }
  },
  methods: {
    changeTaskStatus() {
      if (this.taskToEdit.doneAt) {
        this.taskToEdit.status = 'in-progress'
        this.taskToEdit.doneAt = null
      } else {
        this.taskToEdit.status = 'done'
        this.taskToEdit.doneAt = Date.now()
      }
    },
    saveTask() {
      // New task
      !this.taskToEdit._id && firebaseService.addTask(this.taskToEdit)
      // Already exists updating task
      this.taskToEdit._id && firebaseService.updateTask(this.taskToEdit)
    },
  },
}
</script>
