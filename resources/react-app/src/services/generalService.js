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
    const result = await axiosInstance.post(`contact`, data);
    return result.data;
};

//About us
const getAboutUs = async () => {
    const result = await axiosInstance.get(`get-aboutus`);
    return result.data;
};
//Home Slogan
const getHomeSlogan = async () => {
    const result = await axiosInstance.get(`get-slogan`);
    return result.data;
};
//Catalog

const getCatalog = async () => {
    const result = await axiosInstance.get(`get-catalog`);
    return result.data;
};
//Certificate
const getCertificate = async () => {
    const result = await axiosInstance.get(`get-certificate`);
    return result.data;
};
const exportFunction = {
    getProducts,
    getCatalog,
    getCertificate,
    getHomeProductSlider,
    getHomeSlogan,
    getPage,
    contactPost,
    getHomeSlider,
    getAboutUs,
};

export default exportFunction;
