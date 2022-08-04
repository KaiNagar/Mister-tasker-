<template>
  <section v-if="tasks" class="task-list">
    <h1>this is task list</h1>
    <button @click="addTaskForm = !addTaskForm">
      {{ !addTaskForm ? 'show task form' : 'Hide task form' }}
    </button>
    <form @submit.prevent="addTask" v-if="addTaskForm" class="flex column align-center">
      <label for="task-title">Task title</label>
      <input
        v-model="newTask.title"
        type="text"
        id="task-title"
        placeholder="enter task title..."
      />
      <label for="task-desc">Task description</label>
      <textarea
        v-model="newTask.description"
        type="text"
        placeholder="Enter task description"
      />
      <label for="task-importance">Importance</label>
      <select v-model="newTask.importance" id="task-importance">
        <option v-for="i in 5" :value="i" :key="i">{{ i }}</option>
      </select>
      <button>Submit</button>
    </form>
    <div class="tasks-preview" v-for="task in tasks" :key="task.id">
      <task-preview :task="task" />
    </div>
  </section>
</template>

<script>
import taskPreview from './task-preview.vue'
import { taskService } from '../services/task.service.js'
import { firebaseService } from '@/services/firebase.service.js'

export default {
  props: {
    tasks: Array,
  },
  components: { taskPreview },
  data() {
    return {
      addTaskForm: false,
      newTask: taskService.getEmptyTask(),
    }
  },
  methods: {
    addTask() {
        firebaseService.addTask(this.newTask)
    },
  },
  computed: {},
  created() {},
}
</script>

<style></style>
