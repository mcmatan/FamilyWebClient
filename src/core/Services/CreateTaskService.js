import TaskType from "../../Model/TaskType";
import {pickedType, selectedDay, unSelectedDay, createTaskStep, dateChanged} from "../actions/CreateTaskActions";
class CreateTaskService {

    selectedTaskType(index) {
        return dispatch => {
            const taskType = TaskType.all()[index];
            dispatch(pickedType(taskType))
        }
    }

    daySelected(day, isSelected) {
        return dispatch => {
            if (isSelected) {
                dispatch(selectedDay(day));
            } else {
                dispatch(unSelectedDay(day));
            }
        }
    }

    createTaskStep(index, isFinished) {
        return dispatch => {
            dispatch(createTaskStep(index));
        }
    }

    dateChangedAIndex(date, index) {
        return dispatch => {
            dispatch(dateChanged(date, index));
        }
    }
}

export const createTaskServiceShared = new CreateTaskService();