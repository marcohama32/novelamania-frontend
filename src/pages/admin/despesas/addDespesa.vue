<template>
  <div>
    <button @click="makeApiRequest">Make API Request</button>
    <div v-if="responseData">
      <h2>Response Data:</h2>
      <pre>{{ responseData }}</pre>
    </div>
    <div v-if="error">
      <h2>Error:</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      responseData: null,
      error: null,
    };
  },
  methods: {
    async makeApiRequest() {
      try {
        // const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const externalApiUrl = 'https://developer.mpesa.vm.co.mz/apis/testapipost/';

        const requestBody = {
          "input_TransactionReference": "T12344C",
          "input_CustomerMSISDN": "258844232354",
          "input_Amount": "10",
          "input_ThirdPartyReference": "RIQ0QR",
          "input_ServiceProviderCode": "171717",
        };

        const response = await axios.post(externalApiUrl, requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer', // Replace with your actual bearer token
            'Origin': 'developer.mpesa.vm.co.mz'

          },
        });

        this.responseData = response.data;
        this.error = null;
      } catch (error) {
        this.responseData = null;
        this.error = error;
      }
    },
  },
};
</script>
