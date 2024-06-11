"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat =()=>{
    useEffect(()=>{
        Crisp.configure("1ed73162-5690-4068-a075-4d3532ab2e69");
      
    },[]);

    return null;
}