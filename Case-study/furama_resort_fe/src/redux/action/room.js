import {GET_ROOM, GET_VILLA_BY_ID} from "./type";
import {roomService} from "../../service/roomService";
import {villaService} from "../../service/villaService";

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
export const getVillaById = (id) => {
    return async (dispatch) => {
        try{
            const res = await villaService.findById(id);
            console.log(res);
            dispatch({
                type: GET_VILLA_BY_ID,
                payload: res.data
            })
        }catch (err){
            console.log(err)
        }
    }
}