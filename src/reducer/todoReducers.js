/* eslint-disable default-case */
// it holds current state and actions
// const [list, setList] = useState([])

// initial data
const initialData = {
  list: [],
};

// set state
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    }
    case "DELETE_TODO": {
      // checking current id and data id are equal or not
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };
    }

    case "REMOVE_TODO": {
      return {
        ...state,
        list: [],
      };
    }

    default:
      return state;
  }
};

export default todoReducers;
