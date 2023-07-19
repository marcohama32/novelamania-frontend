<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">All Members</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2"
      >
        <div class="flex w-full sm:w-auto">
          <div class="w-48 relative text-slate-500">
            <input
              type="text"
              class="form-control w-48 box pr-10"
              placeholder="Search by invoice..."
            />
            <i
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              data-lucide="search"
            ></i>
          </div>
          <select class="form-select box ml-2">
            <option>Status</option>
            <option>Waiting Payment</option>
            <option>Confirmed</option>
            <option>Packing</option>
            <option>Delivered</option>
            <option>Completed</option>
          </select>
        </div>
        <div class="hidden xl:block mx-auto text-slate-500">
          Showing 1 to 10 of 150 entries
        </div>
        <div class="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
          <button class="btn btn-primary shadow-md mr-2" @click="exportToExcel">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i> Export to Excel
          </button>
          <button class="btn btn-primary shadow-md mr-2" @click="exportToPDF">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i> Export to PDF
          </button>
          <div class="dropdown">
            <button
              class="dropdown-toggle btn px-2 box"
              aria-expanded="false"
              data-tw-toggle="dropdown"
            >
              <span class="w-5 h-5 flex items-center justify-center">
                <i class="w-4 h-4" data-lucide="plus"></i>
              </span>
            </button>
            <div class="dropdown-menu w-40">
              <ul class="dropdown-content">
                <li>
                  <a href="#" class="dropdown-item">
                    <i data-lucide="arrow-left-right" class="w-4 h-4 mr-2"></i>
                    Change Status
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item">
                    <i data-lucide="bookmark" class="w-4 h-4 mr-2"></i> Bookmark
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-nowrap">Name</th>
              <th class="whitespace-nowrap">Contact</th>
              <th class="text-center whitespace-nowrap">Gender</th>
              <th class="whitespace-nowrap">Monthlyfee</th>
              <th class="whitespace-nowrap">Membership ID</th>
              <th class="whitespace-nowrap">Plan</th>
              <th class="whitespace-nowrap">Status</th>
              <th class="text-center whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="companymember in companymembers"
              :key="companymember._id"
              class="intro-x"
            >
              <td class="w-40 !py-4">
                <a
                  href="javascript:;"
                  class="decoration-dotted whitespace-nowrap"
                  >{{ companymember.firstName }} {{ companymember.lastName }}</a
                >
              </td>
              <td class="w-40">
                <div v-for="contact in companymember.contacts" :key="contact">
                  <a href="javascript:;" class="font-medium whitespace-nowrap">
                    {{ contact }}
                  </a>
                </div>
              </td>
              <td class="text-center">
                <div class="flex items-center justify-center whitespace-nowrap">
                  {{ companymember.gender }}
                </div>
              </td>
              <td class="w-40 text-right">
                <div class="pr-16">{{ companymember.monthlyFee }}</div>
              </td>
              <td>
                <div class="whitespace-nowrap">
                  {{ companymember.memberShipID }}
                </div>
              </td>
              <td class="w-40">
                <div v-if="companymember.plan && companymember.plan.length > 0">
                  <a href="javascript:;" class="font-medium whitespace-nowrap">
                    {{ companymember.plan[0].planName }}
                  </a>
                </div>
                <div v-else>No Plan add</div>
              </td>

              <td>
                <div
                  class="whitespace-nowrap"
                  :class="getStatusClass(companymember.status)"
                >
                  {{ companymember.status }}
                </div>
              </td>
              <td class="table-report__action">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center text-primary whitespace-nowrap mr-5"
                    href="javascript:;"
                  >
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
                      class="w-4 h-4 mr-1 lucide lucide-check-square"
                    >
                      <polyline points="9 11 12 14 22 4" />
                      <path
                        d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                      />
                    </svg>

                    <router-link :to="`/customerprofile/${companymember._id}`">Details</router-link>
                  </a>

                  <a
                    class="flex items-center text-primary whitespace-nowrap"
                    href="javascript:;"
                    data-tw-toggle="modal"
                    data-tw-target="#delete-confirmation-modal"
                  >
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
                      class="w-4 h-4 mr-1 lucide lucide-arrow-left-right"
                    >
                      <path d="M8 3 4 7l4 4" />
                      <path d="M4 7h16" />
                      <path d="m16 21 4-4-4-4" />
                      <path d="M20 17H4" />
                    </svg>

                    Status
                  </a>
                  <a
                    class="flex items-center text-primary whitespace-nowrap mr-5 ml-5"
                    href="javascript:;"
                  >
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
                      class="w-4 h-4 mr-1 lucide lucide-check-square"
                    >
                      <polyline points="9 11 12 14 22 4" />
                      <path
                        d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                      />
                    </svg>

                    <router-link :to="`/createdependent/${companymember._id}`"
                      >Add</router-link
                    >
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
      >
        <nav class="w-full sm:w-auto sm:mr-auto">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" @click="previousPage">
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
                  class="w-4 h-4 lucide lucide-chevrons-left"
                >
                  <path d="m11 17-5-5 5-5" />
                  <path d="m18 17-5-5 5-5" />
                </svg>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
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
                  class="w-4 h-4 lucide lucide-chevron-left"
                >
                  <path d="m11 17-5-5 5-5" />
                  <path d="m18 17-5-5 5-5" />
                </svg>
              </a>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }"><a class="page-link" href="#" @click="goToPage(page)">
            {{ page }}
          </a></li>
           
            <li class="page-item">
              <a class="page-link" href="#" @click="nextPage">
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
                  class="w-4 h-4 lucide lucide-chevron-rigth"
                >
                  <path d="m11 17-5-5 5-5" />
                  <path d="m18 17-5-5 5-5" />
                </svg>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" @click="nextPage">
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
                  class="w-4 h-4 lucide lucide-chevrons-rigth"
                >
                  <path d="m11 17-5-5 5-5" />
                  <path d="m18 17-5-5 5-5" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <select class="w-20 form-select box mt-3 sm:mt-0" v-model="perPage" @change="updatePerPage">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
    <!-- BEGIN: Delete Confirmation Modal -->
    <div
      id="delete-confirmation-modal"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <i
                data-lucide="x-circle"
                class="w-16 h-16 text-danger mx-auto mt-3"
              ></i>
              <div class="text-3xl mt-5">Are you sure?</div>
              <div class="text-slate-500 mt-2">
                Do you really want to delete these records?
                <br />
                This process cannot be undone.
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-tw-dismiss="modal"
                class="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-danger w-24">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Delete Confirmation Modal -->

    <!-- END: Content -->
  </div>
</template>
<script>
import { utils, writeFile } from "xlsx";
import axios from "axios";
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      companymembers: [],
      currentPage: 1, // Current page number
      perPage: 10, // Items per page
      totalItems: 0, // Total number of items
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.perPage); // Calculate the total number of pages
    },
  },
  methods: {
    async getCompanyUsers() {
      try {
        const companyId = this.$route.params.id;
        if (!companyId) {
          this.$router.go("/viewcompany");
        } else {
          const response = await axios.get(`allcompanyuser/${companyId}`);
          // Update the component's data with the received response
          this.companymembers = response.data.allUsers;
          console.log(response.data.allUsers);
        }
      } catch (error) {
        this.errorMessage =
          "Error retrieving this Company members. Please try again."; // Set the error message
        console.error("Error retrieving Company members:", error);
      }
    },
    getStatusClass(status) {
      if (status === "Active") {
        return "text-success";
      } else if (status === "Inactive") {
        return "text-danger";
      } else {
        return ""; // Default class if no match
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page; // Update the current page
        // Perform data fetching or update the displayed data based on the current page
        this.fetchData();
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.goToPage(this.currentPage - 1); // Go to the previous page
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.goToPage(this.currentPage + 1); // Go to the next page
      }
    },
    updatePerPage() {
      this.currentPage = 1; // Reset the current page when changing items per page
      // Perform data fetching or update the displayed data based on the new items per page
      this.getCompanyUsers();
    },

    exportToExcel() {
      // Select the table element
      const table = document.querySelector("table");

      // Convert the table to a workbook object
      const workbook = utils.table_to_book(table);

      // Generate Excel file
      writeFile(workbook, "service_list.xlsx");
    },
    exportToPDF() {
      // Select the table element
      const table = document.querySelector("table");

      // Delay the PDF generation until the table data is rendered
      setTimeout(() => {
        // Create a new html2pdf instance
        const element = document.createElement("div");
        element.appendChild(table);
        html2pdf()
          .set({ filename: "transactinos_list.pdf" })
          .from(element)
          .save();
      }, 500);
    },
  },
  created() {
    this.getCompanyUsers();
  },
};
</script>
