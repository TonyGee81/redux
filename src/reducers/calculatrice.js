import {action_types} from '../actions/numbers';

// Définition du state d'origine
let stateInit = {total : 0};

// Définition du Reducer
let usersReducer = (state = stateInit, action = {}) => {
    console.log('### action')
    console.log(action)
    console.log('### fin action')
    // gestion des actions du Reducer
    switch(action.type){

        //Action type = addition
        case action_types.addition:
            // On retourne une copie du state modifié :
            return { ...state, total : parseInt(action.number1) };
        //Action type = add question

        case action_types.multiple:

            return { ...state, total : parseInt(action.number2) };

        default:
            // Si aucun changement de state
            return state;
    }
}

export const mapStateToProps = (state) => {
    return({
        total : state.total
    })
}

//On export le reducer
export default usersReducer;