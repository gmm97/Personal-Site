import { ReducerState, ActionTypes } from "../pages/Home";

const reducer = (state: ReducerState, action: ActionTypes): ReducerState => {
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
    case "bottom":
      return {
        ...state,
        bottomHeight: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
