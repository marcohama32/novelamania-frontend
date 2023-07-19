<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Customer Profile</h2>
      <button class="btn btn-primary mt-5">Edit</button>
    </div>
    <!-- BEGIN: Profile Info -->
    <div class="intro-y box px-5 pt-5 mt-5">
      <div
        class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5"
      >
        <div
          class="flex flex-1 px-5 items-center justify-center lg:justify-start"
        >
          <div
            class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative"
          >
            <img
              v-if="avatar"
              :src="getAvatarUrl()"
              alt="profilecustomer"
              class="rounded-full"
            />
            <img
              v-else
              src="../../../../dist/images/logow.png"
              alt="profilecustomer"
              class="rounded-full"
            />
          </div>
          <div class="ml-5">
            <div
              class="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg"
            >
              {{ firstName }} {{ lastName }}
            </div>
            <div class="text-slate-500">Agente de loja</div>
            <div class="text-slate-200 mt-1">2345ds6#fr56</div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-3">
            Contact Details
          </div>
          <div
            class="flex flex-col justify-center items-center lg:items-start mt-4"
          >
            <div class="truncate sm:whitespace-normal flex items-center">
              <i data-lucide="mail" class="w-4 h-4 mr-2"></i>
              joanameque@cdm.com
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <i data-lucide="instagram" class="w-4 h-4 mr-2"></i>
              848562320
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <i data-lucide="twitter" class="w-4 h-4 mr-2"></i>
              212568
            </div>
            <div class="truncate sm:whitespace-normal flex items-center mt-3">
              <i data-lucide="twitter" class="w-4 h-4 mr-2"></i>
              Aeroporto A
            </div>
          </div>
        </div>
        <div
          class="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0"
        >
          <div class="font-medium text-center lg:text-left lg:mt-2">
            Main Member
          </div>
          <div class="flex items-center justify-center lg:justify-start mt-2">
            <div class="">Gender: <span class="ml-3 font-medium">W</span></div>
          </div>
          <div class="flex items-center justify-center lg:justify-start mt-2">
            <div class="">
              DOB: <span class="ml-3 font-medium">22/06/1987</span>
            </div>
          </div>
          <div class="flex items-center justify-center lg:justify-start mt-2">
            <div class="">
              Dependents:
              <span class="ml-3 font-medium text-success"
                ><router-link to="/customerdependents">3</router-link></span
              >
            </div>
          </div>
          <div class="flex items-center justify-center lg:justify-start mt-2">
            <div class="">
              Plan: <span class="ml-3 font-medium">Premium 2</span>
            </div>
          </div>
          <div class="flex items-center justify-center lg:justify-start mt-2">
            <div class="">
              Balance: <span class="ml-3 font-medium">$ 44.58,841</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Profile Info -->
    <div class="tab-content mt-5">
      <div
        id="profile"
        class="tab-pane active"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div class="grid grid-cols-12 gap-6">
          <!-- BEGIN: Latest Uploads -->

          <!-- END: Latest Uploads -->
          <!-- BEGIN: Latest Tasks -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="font-medium text-base mr-auto mt-3 mb-3">
                Latest Transaction
              </h2>
              <div class="dropdown ml-auto sm:hidden">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                  data-tw-toggle="dropdown"
                >
                  <i
                    data-lucide="more-horizontal"
                    class="w-5 h-5 text-slate-500"
                  ></i>
                </a>
              </div>
            </div>
            <div class="p-5">
              <div class="tab-content">
                <div
                  id="latest-tasks-new"
                  class="tab-pane active"
                  role="tabpanel"
                  aria-labelledby="latest-tasks-new-tab"
                >
                  <div class="flex items-center">
                    <div
                      class="border-l-2 border-primary dark:border-primary pl-4"
                    >
                      <a href="#" class="font-medium">Compra de medicacao</a>
                      <div class="text-slate-500">10:00 AM</div>
                    </div>
                    <div class="form-check form-switch ml-auto">$ 1.833</div>
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="border-l-2 border-primary dark:border-primary pl-4"
                    >
                      <a href="#" class="font-medium">Exames medicos</a>
                      <div class="text-slate-500">02:00 PM</div>
                    </div>
                    <div class="form-check form-switch ml-auto">$ 8.721</div>
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="border-l-2 border-primary dark:border-primary pl-4"
                    >
                      <a href="#" class="font-medium"
                        >Consulta com expecialista</a
                      >
                      <div class="text-slate-500">04:00 PM</div>
                    </div>
                    <div class="form-check form-switch ml-auto">$ 5.351</div>
                  </div>
                  <div class="flex items-center mt-5">
                    <div
                      class="border-l-2 border-primary dark:border-primary pl-4"
                    >
                      <a href="#" class="font-medium">Consulta geral</a>
                      <div class="text-slate-500">04:00 PM</div>
                    </div>
                    <div class="form-check form-switch ml-auto">$ 2.356</div>
                  </div>
                </div>
                <a href="#" class="btn btn-secondary block w-40 mx-auto mt-5"
                  >View More</a
                >
              </div>
            </div>
          </div>
          <!-- END: Latest Tasks -->
          <!-- BEGIN: Work In Progress -->
          <div class="intro-y box col-span-12 lg:col-span-6">
            <div
              class="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="font-medium text-base mr-auto mt-3 mb-3">
                Dependents
              </h2>
              <div class="dropdown ml-auto sm:hidden">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                  data-tw-toggle="dropdown"
                >
                  <i
                    data-lucide="more-horizontal"
                    class="w-5 h-5 text-slate-500"
                  ></i>
                </a>
              </div>
            </div>
            <div class="p-5">
              <div class="tab-content">
                <div
                  id="work-in-progress-new"
                  class="tab-pane active"
                  role="tabpanel"
                  aria-labelledby="work-in-progress-new-tab"
                >
                  <div class="intro-y">
                    <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                      <div
                        class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
                      >
                        <img
                          alt="Midone - HTML Admin Template"
                          src="../../../../dist/images/profile-15.jpg"
                        />
                      </div>
                      <div class="ml-4 mr-auto">
                        <div class="font-medium">Piorino Mequicene</div>
                        <div class="text-slate-500 text-xs mt-0.5">
                          13 October 2023
                        </div>
                      </div>
                      <div
                        class="py-1 px-2 rounded-full text-xs bg-dark text-black cursor-pointer font-medium"
                      >
                        $ 250,145
                      </div>
                    </div>
                  </div>
                  <div class="intro-y">
                    <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                      <div
                        class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
                      >
                        <img
                          alt="Midone - HTML Admin Template"
                          src="../../../../dist/images/profile-14.jpg"
                        />
                      </div>
                      <div class="ml-4 mr-auto">
                        <div class="font-medium">Joao Baloi</div>
                        <div class="text-slate-500 text-xs mt-0.5">
                          13 October 2021
                        </div>
                      </div>
                      <div
                        class="py-1 px-2 rounded-full text-xs bg-dark text-black cursor-pointer font-medium"
                      >
                        $55,05
                      </div>
                    </div>
                  </div>
                  <div class="intro-y">
                    <div class="box px-4 py-4 mb-3 flex items-center zoom-in">
                      <div
                        class="w-10 h-10 flex-none image-fit rounded-md overflow-hidden"
                      >
                        <img
                          alt="Midone - HTML Admin Template"
                          src="../../../../dist/images/profile-12.jpg"
                        />
                      </div>
                      <div class="ml-4 mr-auto">
                        <div class="font-medium">Joshua Mequicene</div>
                        <div class="text-slate-500 text-xs mt-0.5">
                          13 October 2021
                        </div>
                      </div>
                      <div
                        class="py-1 px-2 rounded-full text-xs bg-dark text-black cursor-pointer font-medium"
                      >
                        $ 137,145
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Work In Progress -->
          <!-- BEGIN: Latest Uploads -->
          <!-- BEGIN: Latest Uploads -->
          <div class="intro-y box col-span-12 lg:col-span-12">
            <div
              class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400"
            >
              <h2 class="font-medium text-base mr-auto">Uploads</h2>
              <div class="dropdown ml-auto sm:hidden">
                <a
                  class="dropdown-toggle w-5 h-5 block"
                  href="javascript:;"
                  aria-expanded="false"
                  data-tw-toggle="dropdown"
                >
                  <i
                    data-lucide="more-horizontal"
                    class="w-5 h-5 text-slate-500"
                  ></i>
                </a>
              </div>
              <button
                data-tw-toggle="modal"
                data-tw-target="#new-order-modal"
                class="btn btn-outline-secondary hidden sm:flex"
              >
                Add files
              </button>
            </div>
            <div class="p-5" v-if="multipleFiles && multipleFiles.length > 0">
              <!-- Iterate over the files array and display each file -->
              <div
                v-for="file in multipleFiles"
                :key="file"
                class="flex items-center mt-5"
              >
                <div class="file">
                  <a
                    :href="getFilePath(file)"
                    target="_blank"
                    class="w-12 file__icon file__icon--directory"
                  ></a>
                </div>
                <div class="ml-4">
                  <a
                    :href="getFilePath(file)"
                    target="_blank"
                    class="font-medium"
                  >
                    {{ file }}</a
                  >
                  <div class="text-slate-500 text-xs mt-0.5">
                    {{ getFileSize(file) }}
                  </div>
                </div>
                <!-- delete icon -->
                <div class="dropdown ml-auto mouser" style="cursor: pointer">
                  <a class="flex items-center text-danger" href="javascript:;">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-trash-2"
                      @click="deleteFile(file)"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              v-else
              class="intro-y w-full block text-center rounded-md py-4 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
            >
              No files available. Add customer documents
              <a href="#"></a>
            </div>
          </div>

          <!-- END: Latest Uploads -->

          <!-- END: Latest Uploads -->
        </div>
      </div>
    </div>
    <!-- Your form code here -->
    <div id="new-order-modal" class="modal" tabindex="-1" aria-hidden="true">
      <!-- Modal content -->
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal header -->
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">Upload file</h2>
          </div>
          <div
            v-if="loading"
            class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
          ></div>
          <!-- Modal body -->
          <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12">
              <label for="pos-form-1" class="form-label">Name</label>
              <div class="fallback">
                <input
                  ref="fileInput"
                  type="file"
                  multiple
                  required
                  @change="handleFileInputChange"
                />
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer text-right">
            <button
              type="button"
              data-tw-dismiss="modal"
              class="btn btn-outline-secondary w-32 mr-1"
            >
              Cancel
            </button>
            <button
              type="button"
              data-tw-dismiss="modal"
              class="btn btn-primary w-32"
              @click="uploadFiles"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Content -->
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/dist/sweetalert2.css";
export default {
  data() {
    return {
      plan: null,
      errorMessage: "",
      firstName: "",
      lastName: "",
      avatar: "",
      multipleFiles: [],
      files: [],
      loading: false,

      address: "",
      balancePlan: "",
      contact1: "",
      contact2: "",
      dob: "",
      email: "",
      gender: "",
      idNumber: "",
      idType: "",
      monthlyFee: "",
      relation: "",
      enrolmentDate: "",
      status: "",
    };
  },
  watch: {
    id() {
      this.getProfile();
    },
  },
  created() {
    this.getProfile();
  },
  computed: {
    // filesArray() {
    //   const filesString = this.user.multipleFiles;
    //   return filesString.split(",");
    // },
  },
  methods: {
    getProfile() {
      const id = this.$route.params.id;
      const token = localStorage.getItem("token");
      axios
        .get(`/user/${id}`, {
          headers: {
            token: token,
          },
        })
        .then((response) => {
          console.log(response.data);
          // Update the component's data with the received response
          this.plan = response.data.plan;
          this.firstName = response.data.user.firstName;
          this.lastName = response.data.user.lastName;
          this.address= response.data.user.address;
          this.balancePlan= response.data.user.balancePlan;
          this.contact1= response.data.user.contact1;
          this.contact2= response.data.user.contact2;
          this.dob = response.data.user.dob;
          this.email= response.data.user.email;
          this.gender= response.data.user.gender;
          this.idNumber= response.data.user.idNumber;
          this.idType= response.data.user.idType;
          this.monthlyFee= response.data.user.monthlyFee;
          this.relation= response.data.user.relation;
          this.status= response.data.user.status;
          this.enrolmentDate = response.data.user.enrolmentDate
          if (response.data.user.multipleFiles) {
            this.multipleFiles = response.data.user.multipleFiles.split(",");
          } else {
            this.multipleFiles = [];
          }
          // Check if the avatar field exists and construct the full URL
          if (response.data.user.avatar) {
            this.avatar = `${response.data.user.avatar}`; // Replace 'your-image-url' with the actual URL or path to your images
          } else {
            this.avatar = ""; // Set to empty string if there is no avatar
          }
        })
        .catch((error) => {
          this.errorMessage = "Error retrieving this plan. Please try again."; // Set the error message
          console.error("Error retrieving plan:", error);
        });
    },
    handleFileInputChange(event) {
      const selectedFiles = event.target.files;
      const filesArray = Array.from(selectedFiles);

      // Filter out empty files
      this.files = filesArray.filter((file) => file.size > 0);
    },

    uploadFiles() {
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
      const id = this.$route.params.id;
      const token = localStorage.getItem("token");

      const formData = new FormData();

      this.files.forEach((file) => {
        formData.append(`multipleFiles[]`, file);
      });

      // Check if there are any files selected
      if (this.files.length === 0) {
        Toast.fire({
          icon: "error",
          // title: "Error",
          text: "Please select at least one file",
          timer: 3000,
          // showConfirmButton: false,
          // position: "top-end",
        });
        return; // Stop further execution
      }

      // Show loading indicator
      this.loading = true;

      axios
        .put(`/user/uploadmultiplefiles/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            token: token,
          },
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            // Close the modal
            this.$refs.fileInput.value = ""; // Clear the file input
            this.$refs.fileInput.files = null; // Reset the file input
            this.$refs.fileInput.dispatchEvent(new Event("change")); // Trigger change event to clear the selected files
            // Display success message using SweetAlert
            Swal.fire({
              icon: "success",
              title: "Success!",
              toast: true,
              text: "Files uploaded successfully",
              timer: 3000,
              showConfirmButton: false,
              position: "top-end",
            }).then(() => {
              // Perform any additional actions after success, if needed
              // Close the modal
            });
          }
          this.getProfile();
          // Hide loading indicator
          this.loading = false;
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          // Hide loading indicator
          this.loading = false;
        });
    },

    deleteFile(file) {
      // Show loading indicator
      this.loading = true;

      // Display a confirmation dialog using SweetAlert
      Swal.fire({
        title: "Are you sure?",
        text: "You are about to delete the file. This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const token = localStorage.getItem("token");
          axios
            .delete("admin/file/delete", {
              headers: {
                token: token,
              },
              data: {
                userId: this.$route.params.id,
                file: file,
              },
            })
            .then((response) => {
              console.log(response);
              this.getProfile();
              Swal.fire("Deleted!", "The file has been deleted.", "success");
            })
            .catch((error) => {
              console.error("Error deleting file:", error);
              Swal.fire("Error!", "Failed to delete the file.", "error");
            })
            .finally(() => {
              // Hide loading indicator
              this.loading = false;
            });
        } else {
          // Hide loading indicator if the user cancels the deletion
          this.loading = false;
        }
      });
    },

    getFilePath(file) {
      return `http://localhost:8000/${file}`;
    },
    getFileName(file) {
      const fileName = file.split("-")[2];
      return fileName;
    },
    getFileSize(file) {
      if (!file) {
        return "";
      }
      const fileSize = file.split("-")[2];
      return fileSize ? `${fileSize} KB` : "";
    },

    getAvatarUrl() {
      if (this.avatar) {
        // Assuming the base URL is "http://localhost:8000"
        return `http://localhost:8000/${this.avatar.replace("\\", "/")}`;
      }
      // Return a default image URL if the avatar is not available
      return "../../../../dist/images/logow.png";
    },
   
  },
};
</script>
<style></style>
