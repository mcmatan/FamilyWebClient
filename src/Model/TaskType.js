import brushTeeth from '../../public/brushTeeth.png';
import food from '../../public/food.png';
import drugs from '../../public/drugs.png';
import goToWork from '../../public/goToWork.png';
import wakeUp from '../../public/wakeUp.png';
import goToGym from '../../public/goToGym.png';

const TaskType = {

    brushTeeth: {
        key: "brushTeeth",
        display: "Brush your teeth",
        src: brushTeeth
    },
    food: {
        key: "food",
        display: "Eat food",
        src: food,
    },
    drugs: {
        key: "drugs",
        display: "Take your pills",
        src: drugs,
    },
    goToWork: {
        key: "goToWork",
        display: "Go to work",
        src: goToWork,
    },
    goToGym: {
        key: "goToGym",
        display: "Go to the GYM",
        src: goToGym,
    },
    wakeUp: {
        key: "wakeUp",
        display: "Wake up",
        src: wakeUp,
    },

    all() {
        return [TaskType.brushTeeth, TaskType.food, TaskType.drugs, TaskType.goToWork, TaskType.goToGym, TaskType.wakeUp];
    }
};

export default TaskType;