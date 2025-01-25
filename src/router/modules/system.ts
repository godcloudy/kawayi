import { $t } from "@/plugins/i18n";

// const Layout = () => import("@/layout/index.vue");

const systemManagementRouter = {
  path: "/system",
  name: "System",
  meta: {
    icon: "ri:settings-3-line",
    title: $t("menus.pureSysManagement"),
    rank: 1
  },
  children: [
    {
      path: "/system/user/index",
      name: "SystemUser",
      component: () => import("@/views/system/user/index.vue"),
      meta: {
        icon: "ri:admin-line",
        title: $t("menus.pureUser"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "SystemRole",
      component: () => import("@/views/system/role/index.vue"),
      meta: {
        icon: "ri:admin-fill",
        title: $t("menus.pureRole"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/menu/index",
      name: "SystemMenu",
      component: () => import("@/views/system/menu/index.vue"),
      meta: {
        icon: "ep:menu",
        title: $t("menus.pureSystemMenu"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "SystemDept",
      component: () => import("@/views/system/dept/index.vue"),
      meta: {
        icon: "ri:git-branch-line",
        title: $t("menus.pureDept"),
        roles: ["admin"]
      }
    }
  ]
};

export default systemManagementRouter satisfies RouteConfigsTable;
