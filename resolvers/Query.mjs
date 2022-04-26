export const Query = {
    getUsers: (parent, args, { db }, info) => {
        return db.users;
    },
    getUserById: (parent, { id }, { db }, info) => {
        const user = db.users.find((user) => user.id === id);
        if (!user) {
            throw new Error(`l'utilisateur d'id ${id} n existe pas`);
        }
        else {
            return user;
        }
    },
    getTodos: (parent, args, { db }, info) => {
      return db.todos;
    },
    getTodoById: (parent, { id }, { db }, info) => {
      const todo = db.todos.find((todo) => todo.id === id);
      if (!todo) {
        throw new Error(`l'utilisateur d'id ${id} n existe pas`);
      }
      else {
          return todo;
      }
    }
  };