import {
  faHouse,
  faGear,
  faUser,
  faMagnifyingGlass,
  faBell,
  faBars,
  faXmark,
  faArrowLeft,
  faArrowRight,
  faUpload,
  faDownload,
  faPenToSquare,
  faTrash,
  faCheck,
  faCircleExclamation,
  faCircleInfo,
  faCircleQuestion,
  faPlus,
  faMinus,
  faLock,
} from "@fortawesome/sharp-regular-svg-icons";
import { Iconset, iconsetRegistry } from "./iconset-registry.ts";

const extractIconData = (faIcon: any) => {
  const [width, height, , , svgPathData] = faIcon.icon;
  return {
    width,
    height,
    paths: Array.isArray(svgPathData) ? svgPathData : [svgPathData],
  };
};

const icons = {
  brand: {
    width: 24,
    height: 24,
    paths: [
      "M11.7566 8.91121H10.4535V17.6281H11.7566V8.91121Z",
      "M9.15087 8.91121H7.84792V17.6281H9.15087V8.91121Z",
      "M6.54528 8.91121H5.24222V17.6281H6.54528V8.91121Z",
      "M3.93969 8.91121H2.63663V17.6281H3.93969V8.91121Z",
      "M14.3622 8.91121H13.0592V17.6281H14.3622V8.91121Z",
      "M16.9679 8.91121H15.6648V17.6281H16.9679V8.91121Z",
      "M19.5735 8.91121H18.2704V17.6281H19.5735V8.91121Z",
      "M20.9075 20.3144H1.30254V18.9707H20.9075V20.3144Z",
      "M19.5735 7.56824H2.63662L1.33398 6.22578H20.8761L19.5735 7.56824Z",
      "M22.2101 23H0V21.6561H22.2101V23Z",
      "M22.2101 4.05379L11.1049 2.75547e-06L0 4.05379V5.47958L11.1049 1.42667L22.2101 5.47958V4.05379Z",
    ],
  },
  home: extractIconData(faHouse),
  settings: extractIconData(faGear),
  user: extractIconData(faUser),
  search: extractIconData(faMagnifyingGlass),
  notifications: extractIconData(faBell),
  menu: extractIconData(faBars),
  close: extractIconData(faXmark),
  back: extractIconData(faArrowLeft),
  forward: extractIconData(faArrowRight),
  upload: extractIconData(faUpload),
  download: extractIconData(faDownload),
  edit: extractIconData(faPenToSquare),
  delete: extractIconData(faTrash),
  confirm: extractIconData(faCheck),
  warning: extractIconData(faCircleExclamation),
  information: extractIconData(faCircleInfo),
  help: extractIconData(faCircleQuestion),
  add: extractIconData(faPlus),
  remove: extractIconData(faMinus),
  lock: extractIconData(faLock),
};

iconsetRegistry.registerIconset("default", new Iconset(icons));
