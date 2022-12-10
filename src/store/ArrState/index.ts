export default {
  state: {
    arr: [1, 2, 3],
  },
  action: {
    push(state: { arr: number[] }, action: { value: number }) {
      state.arr.push(action.value);
    },
  },
  actionNames: {
    push: "push",
  },
};
