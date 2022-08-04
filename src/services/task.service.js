export const taskService = {
    getEmptyTask
}


function getEmptyTask(){
    return {
        title:'',
        description:'',
        createdAt: Date.now(),
        doneAt:null,
        importance:null,
        status:'in-progress'
    }
}