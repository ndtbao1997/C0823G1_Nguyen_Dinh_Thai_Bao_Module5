import req from "../http-common.js"
const findAll = async () => {
    return req.get("/product");

}

const findById = async (id) => {
    return req.get(`/product/${id}`)
}

const updateProduct = async (value,id) => {
    return req.patch(`/product/${id}`,value)
}

const searchProduct = async (value,value1) => {
    if (value !== "" && value1 === 0){
        return req.get(`/product?name_like=${value}`)
    } else if (value === "" && value1 !== 0){
        return req.get(`/product?typeId=${value1}`);
    } else if (value !== "" && value1 !== 0){
        return req.get(`/product?name_like=${value}&typeId=${value1}`)
    }

}

export const productsService = {
    findAll,
    findById,
    updateProduct,
    searchProduct
}