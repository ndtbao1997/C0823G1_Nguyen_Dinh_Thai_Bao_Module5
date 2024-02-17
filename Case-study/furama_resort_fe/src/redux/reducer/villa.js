import {GET_VILLA, GET_VILLA_BY_ID} from "../action/type";

export const villaReducer = (villa = [], action) => {
    switch (action.type){
        case GET_VILLA:
            return action.payload.content;
        default:
            return villa;
    }
}

export const totalPagesVillaReducer = (totalPagesVilla = [],action) => {
    switch (action.type){
        case GET_VILLA:
            return [action.payload.totalPages, action.payload.number];
        default:
            return totalPagesVilla;
    }
}

export const villaByIdReducer = (villaById = {}, action) => {
    switch (action.type){
        case GET_VILLA_BY_ID:
            return action.payload;
        default:
            return villaById;
    }
}