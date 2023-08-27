import axios from "axios";

const api = axios.create({ url: "http://localhost:8080" });

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
