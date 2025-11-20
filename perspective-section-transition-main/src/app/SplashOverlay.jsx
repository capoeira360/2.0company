"use client";

import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

export default function SplashOverlay() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onLoad = () => setVisible(false);
    window.addEventListener("load", onLoad, { once: true });
    const id = setTimeout(() => setVisible(false), 3000);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(id);
    };
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black">
      <Spinner variant="ring" size={72} className="text-[#8BC7DB]" />
    </div>
  );
}

