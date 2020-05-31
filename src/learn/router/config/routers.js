import {About, Home, PassgaeDetail, PassgaeList} from "../test/TestRouter";
import {ABOUT, HOME, PASSAGE_DETAIL, PASSAGE_LIST} from "./RouterConst";

let routes = [
  {
    path: HOME,
    component: Home,
    exact: true
  },
  {
    path: ABOUT,
    component: About,
  },
  {
    path: PASSAGE_LIST,
    component: PassgaeList,
    exact: true
  },
  {
    // path: '/passage-list/passage-detail/:id',
    path: PASSAGE_DETAIL + ':id',
    component: PassgaeDetail,
  }
];

export default routes;
