import {villaService} from "../../service/villaService";
import {GET_VILLA, GET_VILLA_BY_ID} from "./type";
import {toast} from "react-toastify";

export const getVilla = (page = 0) => {
    return async (dispatch) => {
        try{
            const res = await villaService.findAll(page);
            dispatch({
                type: GET_VILLA,
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

export const deleteVillaById = (id) => {
    return async (dispatch) => {
        await villaService.deleteById(id);
    }
}