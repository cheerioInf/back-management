export default {
  state: {
    num: 20,
  },
  action: {
    add(state: { num: number }, action: { type: string }) {
      state.num++;
    },
  },
  actionNames: {
    add: "add",
  },
};
