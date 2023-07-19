<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Create Company</h2>
    </div>
    <form>
      <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-6">
          <!-- BEGIN: Form Layout -->
          <div class="intro-y box p-5">
            <div>
              <label for="crud-form-1" class="form-label">Company Name</label>
              <input
                id="crud-form-1"
                type="text"
                class="form-control w-full"
                placeholder="name"
                required
              />
            </div>

            <div class="mt-3">
              <label for="crud-form-3" class="form-label">Brand</label>
              <div class="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  class="form-control"
                  placeholder="brand"
                  aria-describedby="input-group-1"
                  required
                />
              </div>
            </div>
            <div class="mt-3">
              <label for="crud-form-3" class="form-label"
                >Account Manager</label
              >
              <div class="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  class="form-control"
                  placeholder="manager"
                  aria-describedby="input-group-1"
                  required
                />
              </div>
            </div>
            <div class="mt-3">
              <label for="crud-form-3" class="form-label">Email</label>
              <div class="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  class="form-control"
                  placeholder="email"
                  aria-describedby="input-group-1"
                />
              </div>
            </div>
            <div class="mt-3">
              <label for="crud-form-3" class="form-label">Plan</label>
              <div class="input-group">
                <select
                  v-model="selectedPlans"
                  multiple
                  class="form-control mt-2 sm:mr-2"
                  aria-label="Default select example"
                >
                  <option
                    v-for="planItem in plans"
                    :key="planItem._id"
                    :value="planItem._id"
                  >
                    {{ planItem.planName }} - {{ planItem.planPrice }}
                  </option>
                </select>
              </div>
            </div>

            <div class="mt-3">
              <label class="form-label">Contacts</label>
              <div class="sm:grid grid-cols-3 gap-2">
                <div class="input-group">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="contact 1"
                    aria-describedby="input-group-3"
                  />
                </div>
                <div class="input-group mt-2 sm:mt-0">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="contact 2"
                    aria-describedby="input-group-4"
                  />
                </div>
              </div>
            </div>

            <div class="text-right mt-5">
              <button type="button" class="btn btn-outline-secondary w-24 mr-1">
                Cancel
              </button>
              <button type="button" class="btn btn-primary w-24">Save</button>
            </div>
          </div>
          <!-- END: Form Layout -->
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";

import axios from "axios";

export default {
  data() {
    return {
      companyName: "",
      brand: "",
      accountManager: "",
      contact1: "",
      contact2: "",
      plans: [],
      selectedPlans: [],
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0]; // Get the selected file

      // Set the file object to the avatar property
      this.avatar = file;
    },
    async getPlans() {
      try {
        const response = await axios.get("/allplans");
        if (response.data.success) {
          this.plans = response.data.plan;
        } else {
          throw new Error("Failed to fetch plans");
        }
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    },

    async onCreateIndivitualCustomer() {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      const token = localStorage.getItem("token");
      const requiredFields = [
        "firstName",
        "lastName",
        "idType",
        "idNumber",
        "dob",
        "enrolmentDate",
        "memberShipID",
        "gender",
        "monthlyFee",
        "plan",
        "email",
        "address",
        "contact1",
      ];

      for (const field of requiredFields) {
        if (this[field] === "") {
          Swal.fire({
            icon: "warning",
            title: "Warning!",
            toast: true,
            text: `${field} cannot be empty`,
            timer: 3000,
            showConfirmButton: false,
            position: "top-end",
          });
          return;
        }
      }

      try {
        const formData = new FormData();
        formData.append("firstName", this.firstName);
        formData.append("lastName", this.lastName);
        formData.append("idType", this.idType);
        formData.append("idNumber", this.idNumber);
        formData.append("dob", this.dob);
        formData.append("enrolmentDate", this.enrolmentDate);
        formData.append("memberShipID", this.memberShipID);
        formData.append("gender", this.gender);
        formData.append("monthlyFee", this.monthlyFee);
        formData.append("plan", this.plan);
        formData.append("email", this.email);
        formData.append("address", this.address);
        formData.append("contact1", this.contact1);
        formData.append("contact2", this.contact2);
        formData.append("avatar", this.avatar);
        formData.append("password", this.password);
        this.btnloading = true;
        const response = await axios.post("/user/invididuals", formData, {
          headers: {
            token: token,
            "Content-Type": "multipart/form-data",
          },
        });
        Toast.fire({
          icon: "success",
          title: "Success!",
          // title: "Error",
          text: "Cusmoter created successfully",
          timer: 3000,
        });

        this.btnloading = false;
        this.$router.push("/viewcustomer"); // Redirect to other page
        this.isSuccess = true;
        console.log(response);
        this.$emit("postcreated");
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          this.errorMessage = error.response.data.error;
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: this.errorMessage,
          });
          console.error("Error creating post:", this.errorMessage);
          window.location.reload();
        } else {
          this.errorMessage = "An error occurred. Please try again.";
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: this.errorMessage,
          });

          console.error("Error creating post:", error.message);
          setTimeout(() => {
            window.location.reload(); // Reload the page
          }, 3000); // 3000 milliseconds = 3 seconds
        }
      }
    },
  },
  created() {
    this.getPlans();
  },
};
</script>
