import React, { useRef } from "react";
import Nav from "../componts/nav/nav";
import { Outlet } from "react-router-dom";

function Mainlayout() {
  let home = useRef();
  let browse = useRef();
  let hiw = useRef();
  let faqs = useRef();
  let contact = useRef();
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Mainlayout;
