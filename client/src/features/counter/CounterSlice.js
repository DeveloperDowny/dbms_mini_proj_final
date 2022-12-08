import { createSlice, current } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    gameHistory: [],
    gameTree: 0,
    squares: 0,
    player: 1,
    sourceSelection: -1,
    status: "",
    turn: "white",
    currMovNum: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addToHistory: (state, move) => {
      state.gameHistory.push(move);
    },

    dupdateLastNodeAndHistory: (state, payload) => {
      const { node, index } = payload["payload"];
      state.gameTree.lastNode = node;
      state.gameHistory = state.gameHistory.slice(0, index + 1);
      state.value = 1;
    },
    dupdateHistoryAndResetBoard: (state, payload) => {
      const { indexOfGameHistory, linksIndex } = payload["payload"];
      console.log(
        `ffdffd ${indexOfGameHistory} ${linksIndex} ${state.gameHistory[indexOfGameHistory]}`
      );
      let currNode = state.gameHistory[indexOfGameHistory].links[linksIndex];

      state.gameHistory = state.gameHistory.slice(0, indexOfGameHistory + 1);

      state.gameHistory.push(currNode);
      while (
        currNode != undefined &&
        currNode.links != undefined &&
        currNode.links.lenght != 0
      ) {
        state.gameHistory.push(currNode.links[0]);
        currNode = currNode.links[0];
      }
      console.log(state.gameHistory.pop());

      state.value = 1;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addToHistory,

  dupdateLastNodeAndHistory,
  dupdateHistoryAndResetBoard,
} = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;
export const selectGameHistory = (state) => state.counter.gameHistory;

export default counterSlice.reducer;
