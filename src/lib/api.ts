import axios from "axios";
import { Block } from "../components/CustomBlocks";

// const api = axios.create({ baseURL: "http://localhost:8000" });
const api = axios.create({ baseURL: "http://15.164.213.210:8000" });

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
    throw error; // 호출자에게 예외 다시 던지기
  }
};

export const registerTemplate = (selectedBlocks: Block[]) =>
  api.post("/template/make", selectedBlocks);

export const registerForm = (data: FormData, templateId: number) =>
  api.post(`/form/make/${templateId}`, data);

export const viewForms = (templateId: number, page: number) =>
  api.get(`/form/viewAll/${templateId}?page=${page}`);
