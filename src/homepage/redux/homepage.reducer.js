// import HomepageTypes from './homepage.types';

const INITIAL_STATE = {
sections: ['portfolio', 'cv', 'contact'],
}

const homepageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case HomepageTypes.WHATEVER:
        //     return {
        //         ...state
        //     }
            
        default:
            return state;
    }
}

export default homepageReducer;