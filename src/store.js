export const reducer = (state, action) => {
  const store = {
    setPosts() {
      console.log("setPosts", action);
      return { posts: action.data };
    }
  };

  //   switch (action.type) {
  //     case "setPosts":
  //       return store.setPosts();
  //     default:
  //       return state;
  //   }
  console.log("dispatch", state, action);
  return (
    (action && action.type && store[action.type] && store[action.type]()) ||
    state
  );
};
