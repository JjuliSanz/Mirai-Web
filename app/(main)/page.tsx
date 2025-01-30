import {
  Hero,
  About,
  Service,
  Templates,
  Contact,
} from "@/components/sections";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

import SnapScroll from "./SnapContainer";
import SnapContainer from "./SnapContainer";


export default async function Home() {
  return (
    <SnapContainer/>
  );
}
