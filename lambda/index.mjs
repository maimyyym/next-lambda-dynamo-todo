import { createTask } from "./createTask.mjs";
import { doneTask } from "./doneTask.mjs";
import { updateTaskTitle } from "./updateTaskTitle.mjs";
import { deleteTask } from "./deleteTask.mjs";
import { updateTaskDate } from "./updateTaskDate.mjs"
import { getTasks } from "./getTasks.mjs"

export const handler = async (event) => {

    const { httpMethod, path } = event;

    if (httpMethod ==='POST' && path === '/tasks') {
        return createTask(event);
    } else if (httpMethod === 'GET' && path === '/tasks' ) {
        return getTasks(event);
    } else if (httpMethod === 'PUT' && path === '/tasks/done/{id}' ) {
        return doneTask(event);
    } else if (httpMethod === 'PUT' && path === '/tasks/updateTaskTitle/{id}' ) {
        return updateTaskTitle(event);
    } else if (httpMethod === 'PUT' && path === '/tasks/updateTaskDate/{id}' ) {
        return updateTaskDate(event);
    } else if (httpMethod === 'DELETE' && path === '/tasks/deleteTask/{id}' ) {
        return deleteTask(event);
    } else {

        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Failed...Error:400' })
        };
    }

    };

