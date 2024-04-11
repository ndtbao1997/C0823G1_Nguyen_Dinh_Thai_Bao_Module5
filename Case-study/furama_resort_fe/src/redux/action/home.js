import {GET_HOME, GET_HOME_BY_ID, GET_VILLA_BY_ID} from "./type";
import {homeService} from "../../service/homeService";
import {villaService} from "../../service/villaService";

export const getHome = (page = 0) => {
    return async (dispatch) => {
        try{
            const res = await homeService.findAll(page);
            dispatch({
                type: GET_HOME,
                payload: res.data
            })
        }catch (err){
            console.log(err)
        }
    }
}
export const getHomeById = (id) => {
    return async (dispatch) => {
        try{
            const res = await homeService.findById(id);
            console.log(res);
            dispatch({
                type: GET_HOME_BY_ID,
                payload: res.data
            })
        }catch (err){
            console.log(err)
        }
    }
}

export const deleteHomeById = (id) => {
    return async (dispatch) => {
        await homeService.deleteById(id);
    }
}