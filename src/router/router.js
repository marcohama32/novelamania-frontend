import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Log-in.vue";
import Signup from "../pages/Sign-up.vue";
import Home from "../pages/HomePage.vue";
// plan
import ViewPlan from "../pages/admin/plan/ViewPlan.vue";
import CreatePlan from "../pages/admin/plan/CreatePlan.vue";
import UpdatePlan from "../pages/admin/plan/UpdatePlan.vue";
// service
import ViewService from "../pages/admin/service/ViewService.vue";
import CreateService from "../pages/admin/service/CreateService.vue";
import UpdateService from "../pages/admin/service/UpdateService.vue";
// Customer transactions
import CustomerTransactions from "../pages/admin/transaction/CustomerTransactions.vue";
// Chat
import Chat from "../pages/chat/ChatPage.vue";
// Event
import Event from "../pages/admin/event/CreateEvent.vue";
// Partner
import CreatePartner from "../pages/admin/partner/partner/CreatePartner.vue";
import UpdatePartner from "../pages/admin/partner/partner/UpdatePartner.vue";
import ViewPartner from "../pages/admin/partner/partner/ViewPartner.vue";
// Partner User
import CreatePartnerUser from "../pages/admin/partner/partnerUser/CreatePartnerUser.vue";
import UpdatePartnerUser from "../pages/admin/partner/partnerUser/UpdatePartnerUser.vue";
import ViewPartnerUser from "../pages/admin/partner/partnerUser/ViewPartnerUser.vue";
// Company
import CreateCompany from "../pages/admin/company/CreateCompany.vue";
import UpdateCompany from "../pages/admin/company/UpdateCompany.vue";
import ViewCompany from "../pages/admin/company/ViewCompany.vue";
import CompanyMembers from "../pages/admin/company/members/CompanyMembers.vue"

//customer
import CreateDependent from "../pages/admin/customer/CreateDependent.vue";
import CreateIndividualCustomer from "../pages/admin/customer/individual/CreateIndividualCustomer.vue";
import ViewIndividualCustomer from "../pages/admin/customer/individual/ViewIndividualCustomer.vue";
//dependent
// Profile
import CustomerProfile from '../pages/admin/customer/profile/CustomerProfile.vue'


// not found
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Dashboard",
    meta: { requiresAuth: true, roles: ["1"] },
  },
 
  //   plan
  {
    path: "/viewplan",
    component: ViewPlan,
    name: "View Plan",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/createplan",
    component: CreatePlan,
    name: "Create Plan",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/updateplan/:id",
    component: UpdatePlan,
    name: "Edit Plan",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  //   service
  {
    path: "/viewservice",
    component: ViewService,
    name: "View Service",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/createservice",
    component: CreateService,
    name: "Create Service",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/updateservice/:id",
    component: UpdateService,
    name: "Edit Service",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  //   Customer Transations
  {
    path: "/customertransactions",
    component: CustomerTransactions,
    name: "Customer Transactions",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },

  //   Chat
  {
    path: "/chat",
    component: Chat,
    name: "Chat",
  },

  //   Event
  {
    path: "/event",
    component: Event,
    name: "Event",
  },
  //   Partner
  {
    path: "/createpartner",
    component: CreatePartner,
    name: "Create Partner",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/updatepartner/:id",
    component: UpdatePartner,
    name: "Update Partner",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/viewpartner",
    component: ViewPartner,
    name: "View Partner",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },

//   Partner User
  {
    path: "/createpartneruser",
    component: CreatePartnerUser,
    name: "Create Partner User",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/updatepartneruser/:id",
    component: UpdatePartnerUser,
    name: "Update Partner User",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/viewpartneruser",
    component: ViewPartnerUser,
    name: "View Partner User",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
//  company
{
    path: "/createcompany",
    component: CreateCompany,
    name: "Create Company User",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/updatecompany/:id",
    component: UpdateCompany,
    name: "Update Company",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/viewcompany",
    component: ViewCompany,
    name: "View Company",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/companymembers/:id",
    component: CompanyMembers,
    name: "View Company Members",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  //profile
  {
    path: "/customerprofile/:id",
    component: CustomerProfile,
    name: "Customer Profile",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
 //customer
 {
    path: "/createdependent/:id",
    component: CreateDependent,
    name: "Create Customer Dependent",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },

 {
    path: "/createcustomer",
    component: CreateIndividualCustomer,
    name: "Create Individual Customer",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },
  {
    path: "/viewcustomer",
    component: ViewIndividualCustomer,
    name: "View Individual Customer",
    meta: { requiresAuth: true, roles: ["1","2"] },
  },

  // Login & Logout
  {
    path: "/login",
    name: "Login",
    components: {
        default: Login,
        login: Login,
      },
    meta: { requiresAuth: false }
  },

  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
  
    // Check if authentication is required and the user is not authenticated
    if (to.meta.requiresAuth && !isAuthenticated && to.name !== "Login") {
      next({ name: "Login" });
      return;
    }
  
    // Check if roles are defined and the user role is not included
    if (to.meta.roles && !to.meta.roles.includes(userRole)) {
      next({ name: "NotFound" });
      return;
    }
  
    // Allow navigation to the next route
    next();
  });
  
  
  

export default router;
