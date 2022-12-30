const TaskReducer = (state = { task : [
    {Num_task : "1", Description : "T-1", Status : "open"},
    {Num_task : "2", Description : "T-2", Status : "open"}]}, action) => {
        switch(action.type){
            case 'ADD' :
                return {...state, task : state.task.push(action.value)}
            case 'DELETE' :
                return {...state, task : state.task.filter(task => task.Num_task !== action.value)}
            case 'RESET' :
                return {...state, task : state.task.map(task => task.Status = "open")}
            case 'DELETEALL' :
                return {...state, task : []}
            case 'UPDATE' :
                return {...state, task : state.task.map(task => task.Num_task === action.value.Num_task?task = action.value : task)}
            default :
                return state
        }
    }

export default TaskReducer;