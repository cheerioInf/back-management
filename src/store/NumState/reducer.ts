import handleNum from "./index";

const numReducer = (
  state = { ...handleNum.state },
  action: { type: string }
) => {
  const newState = JSON.parse(JSON.stringify(state));

  for (const key of Object.keys(handleNum.action)) {
    if (key === action.type) {
      handleNum.action[key](newState, action);
    }
  }

  return newState;
};

export default numReducer;
