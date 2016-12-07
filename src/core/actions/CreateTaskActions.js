import {CREATE_TASK_PICKED_TYPE, CREATE_TASK_SELECTED_DAY, CREATE_TASK_UN_SELECTED_DAY, CREATE_TASK_STEP,
    CREATE_TASK_DATE_CHANGED_AT_INDEX
} from "./ActionTypes";

export function pickedType(key) {
    return {
        type: CREATE_TASK_PICKED_TYPE,
        payload: key
    }
}

export function selectedDay(day) {
    return {
        type: CREATE_TASK_SELECTED_DAY,
        payload: day
    }
}

export function unSelectedDay(day) {
    return {
        type: CREATE_TASK_UN_SELECTED_DAY,
        payload: day
    }
}

export function createTaskStep(index) {
    return {
        type: CREATE_TASK_STEP,
        payload: index
    }
}

export function dateChanged(date , index) {
    return {
        type: CREATE_TASK_DATE_CHANGED_AT_INDEX,
        payload: date,
        index: index
    }
}