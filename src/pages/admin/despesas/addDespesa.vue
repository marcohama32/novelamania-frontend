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
            'Authorization': 'Bearer rfNjFso4uJbzhwl8E9vizqmHEuD7XDmPqfsRx1L62UoTmURGGLAGgJSl9lCPbgy03Q7NwozFYD4r9BFQY5QpvErHximBDU8HE25urVahm0HnB8VyCIobs684XGSN4GjdequePDrG6xUAxxpvmhqZRlGt1tUjUBeBg6kYqp4EnKHsiaBtvd0THGLZbefpT6UaShASQWYNiEPwEon5wtUMaDwnyQEazDu1H2ieN3r8cCVM3hsak59J/1MP07FQjdFbxdCLfA0DuxgpeKpvLs7WrA767WJSB1QZy7hcP1igSGRfd7Zrp6E7gIukdpC0DApqPKa4XsNTo2AMpG4AwiET2WeKvHn539gbwREXf79kZlYdFDCgTc0Zs7OfDx5ZXMCBKHOS/H3tVFJqXTfEfIF5LOzrFU5pPE0HeNBV0Q2vm8qRwQX0RijnvMOGpdcmXb0qoph4oy8Mj+vjRfFRboMAafttDozBhRmWEmeBB3EjYASm1fToQp5ey6ltCiEt8rjL5PlexxB0u3u2LVJQcDzMVNiiq10t1xyw8qtc6BMOyrKVlIANWglRYOKr9saVBVvDFUcCfsghMjUTDeAwHom4A3cSDWmVlNF9Vs/WqCoUzjQCV0BFPDzeAUbQqt7h7OgFno/+D9n5j1eMro0aXbbHNx71u8YmgPJhdixzFhxM1Pw=', // Replace with your actual bearer token
            'Origin': '*'

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
