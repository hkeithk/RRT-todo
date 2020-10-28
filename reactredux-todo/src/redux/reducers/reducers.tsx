import {VisibilityFilters, ADD_TODO, SET_VISIBILITY_FILTER} from 'redux/actions'
import {AppState, TodoActionTypes} from 'types'

//reducers show how the state changes in response to an action
//reducers must remain PURE, no side Effects, no api calls, no mutations, just calculations



const initialState : AppState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todo: []
}


function todoApp(state: AppState = initialState , action: TodoActionTypes){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return{
                ...state, 
                visibilityFilter: action.filter,
            }
        case ADD_TODO:
            return {
                ...state,
                todo:[...state.todo,
                    {text: action.text, completed: false}
                ]
            }
        default: 
            return state
    }
}

export default todoApp