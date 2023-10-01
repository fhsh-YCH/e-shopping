import { createRouter, createWebHashHistory } from "vue-router";
import signup from "./page/Signup-User.vue";
import loginuser from "./page/Login-User.vue";
import loginadmin from "./page/Login-Admin.vue";
import material from "./page/Material.vue";
import hint from "./page/Hint.vue";
import shoppingcart from "./page/shopping-cart.vue";
import adminfrontpage from "./page/AdminFrontpage.vue";
import edit from "./page/Edit.vue";
import reserve from "./page/Reserve.vue";
import shopadmin from "./page/ShopAdmin.vue";
import shopuser from "./page/ShopUser.vue";
import ShoppingCart from "./page/shopping-cart.vue";
import failedpurchase from "./page/FailedPurchase.vue";
import hintmobile from "./page/HintMobile.vue";
import purchase from "./page/Purchase.vue";

const routes = [
  { path: "/signup", component: signup },
  { path: "/loginuser", component: loginuser },
  { path: "/loginadmin", component: loginadmin },
  { path: "/material", component: material },
  { path: "/hint", component: hint },
  { path: "/shoppingcart", component: shoppingcart },
  { path: "/adminfrontpage", component: adminfrontpage },
  { path: "/edit", component: edit },
  { path: "/reserve", component: reserve },
  { path: "/shopadmin", component: shopadmin },
  { path: "/", component: shopuser },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: ShoppingCart,
  },
  { path: "/failedpurchase", component: failedpurchase },
  { path: "/hintmobile", component: hintmobile },
  { path: "/purchase", component: purchase },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
