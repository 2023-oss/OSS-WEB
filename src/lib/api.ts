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
