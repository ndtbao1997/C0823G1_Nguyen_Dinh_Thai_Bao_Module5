import request from "../http_common";
const findAll = async (page) => {
    return request.get(`/room?page=${page}`);
}

export const roomService = {
    findAll
}