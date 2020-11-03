import { locationsAcationsTypes } from './actions'
import { initialState } from "../store/initialState";

export const locationsReducer = ( state = initialState.locations, action ) => {
    switch (action.type) {
        case locationsAcationsTypes.LOCATIONS_IMPORT:
            return {
                ...state,
                selectedLocations: action.payload,
            };

        default:
            return state;
    }
};