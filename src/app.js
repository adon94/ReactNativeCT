import { Navigation } from 'react-native-navigation';
import registerScreens from './register';

import { createStore} from 'redux';

const reducer = function(state, action){
    if(action.type === "INC" ){
        return state+action.payload;
    }
    if(action.type === "DEC"){
        return state-action.payload;
    }
    return state;
}

const store = createStore(reducer, 0);

registerScreens();

export default class App {
    constructor() {

        Navigation.startSingleScreenApp({
            screen: {
                screen: 'example.HomeList', // unique ID registered with Navigation.registerScreen
                title: 'Home', // title of the screen as appears in the nav bar (optional)
                navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            }
        })

    }
}

store.subscribe(() => {
    console.log("store changed", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "DEC", payload: 1000})


