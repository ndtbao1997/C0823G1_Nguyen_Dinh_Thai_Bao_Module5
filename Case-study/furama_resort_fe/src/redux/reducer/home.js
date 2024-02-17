import {GET_HOME} from "../action/type";

export const homeReducer = (home = [], action) => {
    switch (action.type){
        case GET_HOME:
            return action.payload.content;
        default:
            return home;
    }
}

export const totalPagesHomeReducer = (totalPagesHome = [],action) => {
    switch (action.type){
        case GET_HOME:
            return [action.payload.totalPages, action.payload.number];
        default:
            return totalPagesHome;
    }
}