import icon1 from "../../Assets/icons/Group 104 (1).svg";
import icon2 from "../../Assets/icons/Vector (2).svg";
import icon3 from "../../Assets/icons/badge-percent 1.svg";
import icon4 from "../../Assets/icons/briefcase 1 (1).svg";
import icon5 from "../../Assets/icons/chart-bar 2.svg";
import icon6 from "../../Assets/icons/coins-solid 1.svg";
import icon7 from "../../Assets/icons/galaxy 1.svg";
import icon8 from "../../Assets/icons/handshake-regular 1.svg";
import icon9 from "../../Assets/icons/home 1.svg";
import icon10 from "../../Assets/icons/icon.svg";
import icon11 from "../../Assets/icons/np_bank_148501_000000 1.svg";
import icon12 from "../../Assets/icons/piggy-bank 1.svg";
import icon13 from "../../Assets/icons/sack 1.svg";
import icon14 from "../../Assets/icons/scroll 1.svg";
import icon15 from "../../Assets/icons/sliders-h 1.svg";
import icon16 from "../../Assets/icons/user-check 1.svg";
import icon17 from "../../Assets/icons/user-cog 1.svg";
import icon18 from "../../Assets/icons/user-friends 1.svg";
import icon19 from "../../Assets/icons/user-times 1.svg";
import icon20 from "../../Assets/icons/users 1.svg";

export const menu = [
  {
    id: 1,
    title: "",
    routes: [
      {
        id: 1,
        name: "Dashboard",
        href: "/dashboard/home",
        icon: icon9,
      },
    ],
  },
  {
    id: 2,
    title: "Users",
    routes: [
      {
        id: 1,
        name: "Users",
        href: "/dashboard/customers",
        icon: icon18,
      },
      {
        id: 2,
        name: "Guarantors",
        href: "/dashboard/users",
        icon: icon20,
      },
      {
        id: 3,
        name: "Loans",
        href: "/dashboard/users",
        icon: icon13,
      },
      {
        id: 4,
        name: "Decision Model",
        href: "/dashboard/users",
        icon: icon8,
      },
      {
        id: 5,
        name: "Savings",
        href: "/dashboard/users",
        icon: icon12,
      },
      {
        id: 6,
        name: "Loan Request",
        href: "/dashboard/users",
        icon: icon1,
      },

      {
        id: 7,
        name: "Whitelist",
        href: "/dashboard/users",
        icon: icon16,
      },
      {
        id: 8,
        name: "Karma",
        href: "/dashboard/users",
        icon: icon2,
      },
    ],
  },
  {
    id: 4,
    title: "Business",
    routes: [
      {
        id: 1,
        name: "Organization",
        href: "/dashboard/users",
        icon: icon4,
      },
      {
        id: 2,
        name: "Loan Products",
        href: "/dashboard/users",
        icon: icon1,
      },
      {
        id: 3,
        name: "Savings Products",
        href: "/dashboard/users",
        icon: icon11,
      },
      {
        id: 4,
        name: "Fees And Charges",
        href: "/dashboard/users",
        icon: icon6,
      },
      {
        id: 5,
        name: "Transactions",
        href: "/dashboard/users",
        icon: icon10,
      },
      {
        id: 6,
        name: "Services",
        href: "/dashboard/users",
        icon: icon7,
      },

      {
        id: 7,
        name: "Service Accounts",
        href: "/dashboard/users",
        icon: icon17,
      },
      {
        id: 8,
        name: "Settlements",
        href: "/dashboard/users",
        icon: icon14,
      },
      {
        id: 9,
        name: "Reports",
        href: "/dashboard/users",
        icon: icon5,
      },
    ],
  },
  {
    id: 4,
    title: "Customers",
    routes: [
      {
        id: 1,
        name: "Preference",
        href: "/dashboard/users",
        icon: icon15,
      },
      {
        id: 2,
        name: "Fees and Pricing",
        href: "/dashboard/users",
        icon: icon3,
      },
      {
        id: 3,
        name: "Audit",
        href: "/dashboard/users",
        icon: icon19,
      },
    ],
  },
];
