<template>
    <form></form>
    id:{{ taskToEdit._id }}
    <input type="checkbox" @change="changeTaskStatus">Status: {{ taskToEdit.status }}
    Description:<input type="text" v-model="taskToEdit.description">
    Title:<input type="text" v-model="taskToEdit.title">
    Importance:<input min="1" max="3" type="number" v-model="taskToEdit.importance">
    Done at:{{ taskToEdit.doneAt ? new Date(taskToEdit.doneAt).toLocaleTimeString('en-US') : 'Incomplete' }}
</template>

<script>
import { firebaseService } from '../services/firebase.service'
export default {
    async created() {
        const { _id } = this.$route.params
        this.taskToEdit = _id ?
            await firebaseService.getById(_id) : this.getEmptyTask
    },
    data() {
        return { taskToEdit: null, }
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
        }
    },
    computed: {
        getEmptyTask() {
            return {
                title: '',
                description: '',
                importance: 1,
                status: 'in-progress',
                createdAt: Date.now(),
                doneAt: null,
            }
        }

    }
}
</script>