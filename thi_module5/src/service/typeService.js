import req from "../http-common.js"
const findAll = async () => {
    return req.get("/type");
}

export const typeService = {
    findAll
}