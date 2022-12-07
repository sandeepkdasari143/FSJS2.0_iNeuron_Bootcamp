// TODO: Ice Cream Application
console.log("This is the Ice Cream Shop Application.");

// TODO: Import the 'redux' from the 'react'
const redux = require("redux")
const createStore = redux.createStore;

// TODO: Defining the ACTIONS 
const ACTIONS = {
    CAKE_ORDERED : 'CAKE_ORDERED',
}

//TODO: Specify what action the function should be performed.
const orderCake = () => {
    return {
        type: ACTIONS.CAKE_ORDERED,
        noOfCakesOrdered: 1,
    }
}

// TODO: Initialise the state. 
const initialState = {
    noOfCakes: 100,
}

//TODO: Defining the function which representing the REDUCER.
const iceCreamReducer = (state = initialState, action) = {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1,
            }
            break;
        default: return state;
    }
}

// TODO: Creating the Store. 