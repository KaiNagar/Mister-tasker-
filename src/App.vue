<template>
  <section>
    <h1>this is app</h1>
    <task-list :tasks="tasks" />
    <router-view />
  </section>
</template>

<script>
import { firebaseService } from './services/firebase.service'
import taskList from './components/task-list.vue'

export default {
  components: { taskList },
  data() {
    return {
      tasks: null,
    }
  },
  methods: {
    update(tasks) {
      console.log(tasks);
      this.tasks = tasks
    },
  },
  computed: {
    // async tasks() {
    //   const tasks = await firebaseService.query()
    //   console.log(tasks)
    //   return tasks
    // },
  },
  async created() {
    this.tasks = await firebaseService.query()
    this.update = firebaseService.onInit(this.update)
    console.log(this.update);
  },
}
</script>
