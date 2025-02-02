import { materialsAcationsTypes } from './actions'
import { initialState } from "../store/initialState";

export const materialsReducer = ( state = initialState.materials, action ) => {
    switch (action.type) {
        case materialsAcationsTypes.MATERIALS_IMPORT:
            return {
                ...state,
                idNameType: action.payload,
            };

        case materialsAcationsTypes.MATERIALS_SEARCHFIELD_UPDATE:
            return {
                ...state,
                searchedMaterial: action.payload,
            };

        default:
            return state;
    }
};