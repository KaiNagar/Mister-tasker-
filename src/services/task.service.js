export const taskService = {
    getEmptyTask
}


function getEmptyTask() {

    return {
        title: '',
        description: '',
        createdAt: Date.now(),
        doneAt: null,
        importance: 1,
        status: 'in-progress'
    }
}