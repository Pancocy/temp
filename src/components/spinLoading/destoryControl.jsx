import React from "react";
import ReactDOM from "react-dom/client";
import SpinLoading from "@/components/spinLoading/Index";
let ajaxCount = 0;
export const createElement = () => {
  if (ajaxCount == 0) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loadingBox");
    document.body.appendChild(dom);
    ReactDOM.createRoot(dom).render(<SpinLoading />);
  }
  ajaxCount++;
};
export const removeElement = () => {
  ajaxCount--;
  if (ajaxCount == 0) {
    document.body.removeChild(document.getElementById("loadingBox"));
  }
};
