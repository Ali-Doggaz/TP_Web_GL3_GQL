export const Todo = {
    user: ({ userId }, args, { db }, info) => {
        // obtenir le user d'une todo
        const user = db.users.find((user) => user.id === userId);
        if (!user) {
            // Normalement il est impossible de se retrouver dans ce cas de figure
            // Si on s'y trouve, c'est qu'une erreur inconnue a eu lieu
            throw new Error(`une erreur inconnue a eu lieu`);
        }
        return user
    }
  };

  