import {CREATE_TASK_PICKED_TYPE, CREATE_TASK_SELECTED_DAY, CREATE_TASK_UN_SELECTED_DAY, CREATE_TASK_STEP} from "../actions/ActionTypes";


const initialState = {
    stepIndex: 4
};


const CreateTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TASK_PICKED_TYPE:
            return Object.assign({}, state, {
                selectedTaskType: action.payload
            });
        case CREATE_TASK_SELECTED_DAY:
            return Object.assign({}, state, {
                 [action.payload]: true
            });
        case CREATE_TASK_UN_SELECTED_DAY:
            return Object.assign({}, state, {
                [action.payload]: false
            });
        case CREATE_TASK_STEP:
            return Object.assign({}, state, {
                stepIndex: action.payload
            });
        default:
            return state;
    }
};

export default CreateTaskReducer;