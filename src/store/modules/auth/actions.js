import { SIGNUP_ACTION } from "@/store/storeconstants";
import axios from "axios";

export default {
  async [SIGNUP_ACTION](_, payload) {
    let posData = {
      firstName: "Mario",
      lastName: "Mario",
      gender: "male",
      relation: 1,
      monthlyFee: "15487",
      memberShipID: "sddft4545re",
      idType: "ID",
      idNumber: "3454545656T",
      address: "Aeroporto",
      contact1: "849904322",
      contact2: "841585260",
      partnerLocation: "",
      userType: 5,
      company: "649dd2ec9ed28e0d733bfb1a",
      plan: "649d27687ab4f8c23da44c4c",
      email: payload.email,
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
