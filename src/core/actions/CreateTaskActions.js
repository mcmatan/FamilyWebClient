import {CREATE_TASK_PICKED_TYPE, CREATE_TASK_SELECTED_DAY, CREATE_TASK_UN_SELECTED_DAY} from "./ActionTypes";

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