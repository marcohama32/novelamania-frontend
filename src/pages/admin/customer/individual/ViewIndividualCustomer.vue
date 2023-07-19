<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">Costomers</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2"
      >
        <div class="flex w-full sm:w-auto">
          <div class="w-48 relative text-slate-500">
            <input
              type="text"
              class="form-control w-48 box pr-10"
              placeholder="Search..."
              v-model="searchTerm"
              @input="applyFilter"
            />
            <i
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              data-lucide="search"
            ></i>
          </div>
       
        </div>

        <div class="hidden xl:block mx-auto text-slate-500">
          Showing {{ firstEntryIndex }} to {{ lastEntryIndex }} of
          {{ count }} entries
        </div>
        <div class="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
          <button class="btn btn-primary shadow-md mr-2" @click="exportToExcel">
            <i data-lucide="file-text" class="w-4 h-4 mr-2"></i> Export to Excel
          </button>
        </div>
      </div>

      <!-- BEGIN: Data List -->

      <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-nowrap">Name</th>
              <th class="whitespace-nowrap">Contacts</th>
              <th class="text-center whitespace-nowrap">Relation</th>
              <th class="whitespace-nowrap">Plan</th>
              <th class="text-right whitespace-nowrap">
                <div class="pr-16">Monthly Fee</div>
              </th>
              <th class="text-center whitespace-nowrap">Status</th>
              <th class="text-center whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="indivUser in indivUsers"
              :key="indivUser._id"
              class="intro-x"
            >
              <td class="w-40 !py-4">
                <a href="#" class="decoration-dotted whitespace-nowrap"
                  >{{ indivUser.firstName }} {{ indivUser.lastName }}</a
                >
              </td>
              <td class="w-40">
                <a href="#" class="font-medium whitespace-nowrap"
                  >{{ indivUser.contact1 }}
                </a>
                <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {{ indivUser.contact2 }}
                </div>
              </td>
              <td class="text-center">
                <div class="flex items-center justify-center whitespace-nowrap">
                  {{ indivUser.relation }}
                </div>
              </td>
              <td>
                <div
                  class="whitespace-nowrap"
                  v-if="indivUser.plan && indivUser.plan.length > 0"
                >
                  {{ indivUser.plan[0].planName }}
                </div>
                <div
                  class="text-slate-500 text-xs whitespace-nowrap mt-0.5"
                  v-if="indivUser.plan && indivUser.plan.length > 0"
                >
                  {{ indivUser.plan[0].planPrice }}
                </div>
              </td>
              <td class="w-40 text-right">
                <div class="pr-16">{{ indivUser.monthlyFee }}</div>
              </td>
              <td class="w-40 !py-4">
                <div
                  class="whitespace-nowrap"
                  :class="getStatusClass(indivUser.status)"
                >
                  {{ indivUser.status }}
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
                    <router-link :to="`/customerprofile/${indivUser._id}`"
                      >Details</router-link
                    >
                  </a>
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
                    <router-link :to="`/createdependent/${indivUser._id}`"
                      >Add</router-link
                    >
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <div
        v-if="loading"
        class="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center"
      >
        <i data-loading-icon="puff" class="w-8 h-8"></i>
        <div class="text-center text-xs mt-2">Loading...</div>
      </div>

      <!-- BEGIN: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
      >
        <nav class="w-full sm:w-auto sm:mr-auto">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" @click="previousPage">
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

            <li class="page-item" v-for="page in totalPages" :key="page">
              <a class="page-link" @click="goToPage(page)">{{ page }}</a>
            </li>

            <li class="page-item">
              <a class="page-link" @click="nextPage">
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
                  class="w-4 h-4 lucide lucide-chevrons-right"
                >
                  <path d="m11 17-5-5 5-5" />
                  <path d="m18 17-5-5 5-5" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <select
          class="w-20 form-select box mt-3 sm:mt-0"
          v-model="pageSize"
          @change="changePageSize"
        >
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
      indivUsers: [],
      currentPage: 1,
      totalPages: 1,
      itemsPerPage: 10,
      loading: false,
      pageSize: 10,
      count: 0,
      firstEntryIndex: 0,
      lastEntryIndex: 0,
      searchTerm: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;

        const token = localStorage.getItem("token");
        const response = await axios.get("/user/invididual/allindividualuser", {
          headers: {
            token: token,
          },
          params: {
            pageNumber: this.currentPage,
            pageSize: this.pageSize,
            searchTerm: this.searchTerm,
          },
        });

        this.indivUsers = response.data.userIndividual;
        this.count = response.data.count;
        this.totalPages = Math.ceil(this.count / this.pageSize);

        // Update the firstEntryIndex and lastEntryIndex values based on the current page and pageSize
        this.firstEntryIndex = (this.currentPage - 1) * this.pageSize + 1;
        this.lastEntryIndex = Math.min(
          this.currentPage * this.pageSize,
          this.count
        );
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    applyFilter() {
      this.currentPage = 1;
      this.fetchData();
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchData();
      }
    },
    goToPage(page) {
      if (page !== this.currentPage) {
        this.currentPage = page;
        this.fetchData();
      }
    },
    async changePageSize() {
      this.currentPage = 1;
      this.itemsPerPage = this.pageSize;
      await this.fetchData();
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
    exportToExcel() {
      const table = document.querySelector("table");
      const workbook = utils.table_to_book(table);
      writeFile(workbook, "service_list.xlsx");
    },
    exportToPDF() {
      const table = document.querySelector("table");
      setTimeout(() => {
        const element = document.createElement("div");
        element.appendChild(table);
        html2pdf()
          .set({ filename: "transactions_list.pdf" })
          .from(element)
          .save();
      }, 500);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
