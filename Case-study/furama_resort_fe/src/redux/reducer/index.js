import {combineReducers} from "redux";
import {totalPagesVillaReducer, villaByIdReducer, villaReducer} from "./villa";
import {homeByIdReducer, homeReducer, totalPagesHomeReducer} from "./home";
import {roomReducer, totalPagesRoomReducer} from "./room";

const rootReducer = combineReducers({
    villa: villaReducer,
    totalPagesVilla: totalPagesVillaReducer,
    home: homeReducer,
    totalPagesHome: totalPagesHomeReducer,
    room: roomReducer,
    totalPagesRoom: totalPagesRoomReducer,
    villaById: villaByIdReducer,
    homeById: homeByIdReducer
})
export default rootReducer;