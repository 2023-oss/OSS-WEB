import axios from "axios";
import { Block } from "../components/CustomBlocks";

// const api = axios.create({ url: "http://34.64.210.115:8080" });
const api = axios.create({ baseURL: "http://15.164.213.210:8000" });

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/login", {
      username: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Error in login:", error);
    throw error; // 호출자에게 예외 다시 던지기
  }
};

export const signUp = async ({
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
    const response = await api.post("/auth/join", {
      userId: userId,
      pw: pw,
      userName: userName,
      company: company,
      companyType: companyType,
      email: email,
    });
    return response.data;
  } catch (error) {
    console.error("Error in signUp:", error);
    throw error; // 호출자에게 예외 다시 던지기
  }
};
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
