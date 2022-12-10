import handleArr from "./index";

const ArrReducer = (
  state = { ...handleArr.state },
  action: { type: string; value: number }
) => {
  const newState = JSON.parse(JSON.stringify(state));

  for (const key of Object.keys(handleArr.action)) {
    if (key === action.type) {
      handleArr.action[key](newState, action);
    }
  }

  return newState;
};

export default ArrReducer;
