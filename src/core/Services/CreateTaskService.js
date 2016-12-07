import TaskType from "../../Model/TaskType";
import {pickedType, selectedDay, unSelectedDay} from "../actions/CreateTaskActions";
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
}

export const createTaskServiceShared = new CreateTaskService();