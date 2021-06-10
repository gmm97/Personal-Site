const reducer = (state, action) => {
  switch (action.type) {
    case "about":
      return {
        ...state,
        aboutHeight: action.payload,
      };
    case "work":
      return {
        ...state,
        workHeight: action.payload,
      };
    case "projects":
      return {
        ...state,
        projectsHeight: action.payload,
      };
    case "contact":
      return {
        ...state,
        contactHeight: action.payload,
      };
    case "homepage":
      return {
        ...state,
        bottomHeight: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
