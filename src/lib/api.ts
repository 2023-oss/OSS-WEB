import axios from "axios";
import { Block } from "../components/CustomBlocks";

// const api = axios.create({
//   baseURL: "http://localhost:8000",
//   withCredentials: true,
// });
const api = axios.create({
  //baseURL: "http://15.164.213.210:8000",
  baseURL: "http://api.customsign.shop:8000",
  withCredentials: true,
});

export const login = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) =>
  api.post("/auth/login", {
    username: username,
    password: password,
  });

export const logout = () => api.post("/auth/logout");

export const signUp = (formData: FormData) =>
  api.post("/user/join", formData, {
    headers: {
      "Content-type": "multipart/form-data",
    },
  });
export const identify = async ({
  userId,
  pw,
  userName,
  company,
  companyType,
  email,
}: {
  userId: string;
  pw: string;
  userName: string;
  company: string;
  companyType: string;
  email: string;
}) => {
  try {
    const response = await api.post("/auth/identify", {
      userId: userId,
      pw: pw,
      userName: userName,
      company: company,
      companyType: companyType,
      email: email,
    });
    return response.data;
  } catch (error) {
    console.error("Error in identify:", error);
    // throw error; // 호출자에게 예외 다시 던지기
  }
};

// export const registerTemplate = ({
//   default,
//   personalinfo,
//   safety,
//   responsibility :,
//   payment,
//   etc,
// } : {
//   default : [],
//   personalinfo: [],
//   safety: [],
//   responsibility: [],
//   payment: [],
//   etc: [],
// })(selectedBlocks: string) =>
//   api.post("/template/make", selectedBlocks);
export const registerTemplate = ({
  defaultBlock,
  personalinfoBlock,
  safetyBlock,
  responsibilityBlock,
  paymentBlock,
  etcBlock,
}: {
  defaultBlock: any[];
  personalinfoBlock: any[];
  safetyBlock: any[];
  responsibilityBlock: any[];
  paymentBlock: any[];
  etcBlock: any[];
}) => {
  // API 호출을 수행하고 결과를 반환합니다.
  return api.post("/template/make", {
    defaultBlock: defaultBlock,
    personalinfoBlock: personalinfoBlock,
    safetyBlock: safetyBlock,
    responsibilityBlock: responsibilityBlock,
    paymentBlock: paymentBlock,
    etcBlock: etcBlock,
  });
};

export const registerForm = (data: FormData, templateId: number) =>
  api.post(`/form/make/${templateId}`, data);

export const viewForms = (templateId: number, page: number) =>
  api.get(`/form/viewAll?page=${page}`);

// export const searchForms = (templateId: number, page: number, vpId: string) =>
export const searchForms = (page: number, vpId: string) =>
  api.get(`/form/viewAll?page=${page}&search=${vpId}`);
export const searchFormsAll = () => api.get(`/form/viewAll?page=1&search=`);
