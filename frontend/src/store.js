import { createClient } from "@liveblocks/client";
import { liveblocksEnhancer } from "@liveblocks/redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const client = createClient({
  publicApiKey: "pk_prod_iLqTNBISc8ZHLBaL3noLQr-gedXEurZN57X9UCht6rDTAanyDf7HO0B1yLR8NhuE",
});

const initialState = {};

const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    /* logic will be added here */
  },
});

export function makeStore() {
  return configureStore({
    reducer: slice.reducer,
    enhancers: [
      liveblocksEnhancer({
        client,
      }),
    ],
  });
}

const store = makeStore();

export default store;