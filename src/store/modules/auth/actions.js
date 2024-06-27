import { SIGNUP_ACTION } from "@/store/storeconstants";
import axios from "axios";

export default {
  async [SIGNUP_ACTION](_, payload) {
    let posData = {
      firstName: "Mario",
      lastName: "Mario",
      password: payload.password,
    //   returnSecureToken: true,
    };

    try {
      let response = await axios.post(
        `http://localhost:8000/api/signup`,
        posData
      )
      if(response.status === 200){
  console.log('')
      }
    } catch (error) {
      console.error(error);
    }
  },
};
