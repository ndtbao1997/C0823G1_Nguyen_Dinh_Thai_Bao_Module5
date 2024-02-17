import {GET_HOME, GET_ROOM} from "./type";
import {roomService} from "../../service/roomService";

export const getRoom = (page = 0) => {
    return async (dispatch) => {
        try{
            const res = await roomService.findAll(page);
            dispatch({
                type: GET_ROOM,
                payload: res.data
            })
        }catch (err){
            console.log(err)
        }
    }
}