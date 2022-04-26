export const User = {
    todos: ({id}, args, { db }, info) => {
        // obtenir toutes les todo d'un user
        const todos = db.todos.filter((todo) => todo.userId === id);
        return todos
    }
  };