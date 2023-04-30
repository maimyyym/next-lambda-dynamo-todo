import { TaskCardProps } from "@/components/molecules/TaskCard";
import { tasks } from "@/components/organisms/TaskList";

export default function filterTasks(tasks: TaskCardProps[], dateFilter: string | '') {
    let filteredTasks = tasks;

    if(dateFilter) {
        filteredTasks = filteredTasks.filter((task) => task.due_date === dateFilter);
    }
}
