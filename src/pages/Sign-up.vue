<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <h3>Signup</h3>
        <hr />
      </div>
      <form @submit.prevent="onSignup()">
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Email"
            v-model.trim="email"
          />
          <div class="error" v-if="errors.email">{{ errors.email }}</div>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
            v-model.trim="password"
          />
          <div class="error" v-if="errors.password">{{ errors.password }}</div>
        </div>
        <button type="submit" class="btn btn-primary">Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
import SignupValidations from "../services/SignupValidations";
import { mapActions } from "vuex";
import { SIGNUP_ACTION } from "../store/storeconstants";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {},
    };
  },

  methods: {
    ...mapActions("auth", {
      signup: SIGNUP_ACTION,
    }),
    onSignup() {
      console.log('Ola')
      let validations = new SignupValidations(this.email, this.password);
      this.errors = validations.checkValidations();
      if ("email" in this.errors || "password" in this.errors) {
        return false;
      }
      this.signup({ 
        email: this.email, 
        password: this.password,
      });
    },
  },
};
</script>
