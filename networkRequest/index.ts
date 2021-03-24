import axios from 'axios'


const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number,
    title: string;
    completed: boolean;
}
axios.get(url).then(response => {
    // const todo = response.data;
    // with this typescript make sure that we use proper variable name
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;
    // the line below gives errors as it expect logTodo to receive `number`, `string`, `boolean`. 
    // and we are sending `number`, `boolean`, `string`-----> this is beauty of typescript.
    // logTodo(id, finished, title); 
    logTodo(id, title, finished);

});

const logTodo = (id: number, title : string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of : ${title}
    is it finished? ${completed}
`)
}