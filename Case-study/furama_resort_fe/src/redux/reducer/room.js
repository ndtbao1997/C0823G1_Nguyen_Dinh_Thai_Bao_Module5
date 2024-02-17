import {GET_ROOM} from "../action/type";
export const roomReducer = (room = [], action) => {
    switch (action.type){
        case GET_ROOM:
            return action.payload.content;
        default:
            return room;
    }
}

export const totalPagesRoomReducer = (totalPagesRoom = [],action) => {
    switch (action.type){
        case GET_ROOM:
            return [action.payload.totalPages, action.payload.number];
        default:
            return totalPagesRoom;
    }
}