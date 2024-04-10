import axiosInstance from "../utils/axiosClient";

const getProducts = async (value) => {
    const result = await axiosInstance.get(`get-products/${value}`);
    return result.data;
};
const exportFunction = {
    getProducts,
};

export default exportFunction;
