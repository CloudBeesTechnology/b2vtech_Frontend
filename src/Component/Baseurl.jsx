import axios from "axios";

export const api = () => {
  axios.create({
    baseURL: "https://app-ednc65xvqq-uc.a.run.app",
  });
};
