// here we create all the actions which require in the application

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id, // same as <payload: id>
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_TODO",
  };
};
