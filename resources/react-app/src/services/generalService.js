import axiosInstance from "../utils/axiosClient";

const getProducts = async (value) => {
    const result = await axiosInstance.get(`get-products/${value}`);
    return result.data;
};

const getPage = async (slug) => {
    const result = await axiosInstance.get(`get-page/${slug}`);
    return result.data;
};

//Home Slider
const getHomeSlider = async (slug) => {
    const result = await axiosInstance.get(`get-slider`);
    return result.data;
};

//Home Product Slider
const getHomeProductSlider = async (slug) => {
    const result = await axiosInstance.get(`get-prodcut-slider`);
    return result.data;
};
const contactPost = async (data) => {
    const result = await axiosInstance.post(`contact`,data);
    return result.data;
};
const exportFunction = {
    getProducts,
    getHomeProductSlider,
    getPage,
    contactPost,
    getHomeSlider,
};

export default exportFunction;
