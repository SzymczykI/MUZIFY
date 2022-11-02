import { defineStore } from "pinia";

// good practice - split state into multiple stores for easier manageability.
export default defineStore("modal", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
