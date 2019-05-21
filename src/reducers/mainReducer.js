import { cloneDeep } from "lodash";

const defaultState = {};

export default (state = cloneDeep(defaultState), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
