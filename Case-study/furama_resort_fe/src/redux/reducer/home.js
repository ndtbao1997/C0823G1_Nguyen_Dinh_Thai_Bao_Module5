import {GET_HOME, GET_HOME_BY_ID} from "../action/type";

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

export const homeByIdReducer = (homeById = {}, action) => {
    switch (action.type){
        case GET_HOME_BY_ID:
            return action.payload;
        default:
            return homeById;
    }
}