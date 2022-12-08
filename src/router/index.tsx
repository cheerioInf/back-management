import useLazy from "@/hooks/useLazy";
const Home = useLazy(import("@/pages/Home"));
const Abstract = useLazy(import("@/pages/Abstract"));
const DataFirst = useLazy(import("@/pages/Data/First"));
const DataSecond = useLazy(import("@/pages/Data/Secend"));
const DataThird = useLazy(import("@/pages/Data/Third"));
const AnalyseFirst = useLazy(import("@/pages/Analyse/First"));
const AnalyseSecond = useLazy(import("@/pages/Analyse/Second"));
const About = useLazy(import("@/pages/About"));
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="./abstract" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/abstract",
        element: <Abstract />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/data/first",
        element: <DataFirst />,
      },
      {
        path: "/data/second",
        element: <DataSecond />,
      },
      {
        path: "/data/third",
        element: <DataThird />,
      },
      {
        path: "/analyse/first",
        element: <AnalyseFirst />,
      },
      {
        path: "/analyse/second",
        element: <AnalyseSecond />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
