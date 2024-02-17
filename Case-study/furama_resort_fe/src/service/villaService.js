import request from "../http_common";

const findAll = async (page) => {
    return request.get(`/villa?page=${page}`);
}

const findById = async (id) => {
    return request.get(`/villa/${id}`);
}

const deleteById = async (id) => {
    return request.delete(`villa/${id}`);
}
export const villaService = {
    findAll,
    findById,
    deleteById
}