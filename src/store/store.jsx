import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { setLocalStorage } from "utils/localStorage";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index"
const composeEnhancers = composeWithDevTools({
    realtime: true,
    name: 'Your Instance Name',
    hostname: 'localhost',
    port: 5173 // the port your remotedev server is running at
})

const store = createStore(rootReducer, {}, composeEnhancers(
    applyMiddleware(thunk)
));
store.subscribe(() => {

    setLocalStorage('store', store.getState().favoriteReducer)
})
export default store;