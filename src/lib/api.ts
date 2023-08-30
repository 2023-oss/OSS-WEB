import axios from "axios";
import { Block } from "../components/CustomBlocks";



// const api = axios.create({ url: "http://34.64.210.115:8080" });
const api = axios.create({ baseURL: "http://localhost:8080" });


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

export const signUp = ({
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
}) =>
  api.post("/auth/join", {
    userId: userId,
    pw: pw,
    userName: userName,
    company: company,
    companyType: companyType,
    email: email,
  });

export const registerTemplate = (selectedBlocks: Block[]) =>
  api.post("/template/make", selectedBlocks);

export const registerForm = (data: FormData, templateId: number) =>
  api.post(`/form/make/${templateId}`, data);

export const viewForms = (templateId: number, page: number) =>
  api.get(`/form/viewAll/${templateId}?page=${page}`);
