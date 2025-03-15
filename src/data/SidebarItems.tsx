import { faDashcube } from "@fortawesome/free-brands-svg-icons";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { ICONS } from "./Icon";

// export const SidebatItems = [
//     { id: 1, icon: faDashcube, label: 'Dashboard' },
//     { id: 2, icon: faBoxesStacked, label: 'Product' },
//     { id: 3, icon: faBoxesStacked, label: 'Create Product' },
//     { id: 4, icon: faBoxesStacked, label: 'Expired Products' },
//     { id: 5, icon: faBoxesStacked, label: 'Low Stocks' },
//     { id: 6, icon: faBoxesStacked, label: 'Category' },
//     { id: 7, icon: faBoxesStacked, label: 'Sub Category' },
//     { id: 8, icon: faBoxesStacked, label: 'Brands' },
//     { id: 9, icon: faBoxesStacked, label: 'Units' },
//     { id: 10, icon: faBoxesStacked, label: 'Variant Attributes' },
// ]


export const SidebatItems = [
    {
      id: 1,
      label: "Base",
      icon: ICONS.mail,
      submenu: []
    },
    {
      id: 2,
      label: "Dashboard",
      icon: ICONS.dashboard,
      submenu: [
        { id: 21, label: "Overview", link: "/dashboard/overview" },
        { id: 22, label: "Analytics", link: "/dashboard/analytics" },
        { id: 23, label: "Reports", link: "/dashboard/reports" },
      ]
    },
    {
      id: 3,
      label: "Forms",
      icon: ICONS.dashboard,
      submenu: [
        { id: 31, label: "Form Control", link: "/forms/form-control" },
        { id: 32, label: "Select", link: "/forms/select" },
        { id: 33, label: "Multi Select", link: "/forms/multi-select" },
      ]
    }
  ];