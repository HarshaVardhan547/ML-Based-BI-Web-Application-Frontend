import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Upload",
    path: "/Upload",
    icon: <AiIcons.AiOutlineCloudUpload />,
    cName: "nav-text",
  },
  {
    title: "EDA",
    path: "/EDA",
    icon: <AiIcons.AiOutlineDatabase />,
    cName: "nav-text",
  },
  {
    title: "Insights",
    path: "/Insights",
    icon: <MdIcons.MdModelTraining />,
    cName: "nav-text",
  },
  {
    title: "DataModeling",
    path: "/DataModeling",
    icon: <MdIcons.MdOutlineAnalytics />,
    cName: "nav-text",
  },
];
