"use client";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import logo from "@/resource/logo.jpg";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen/2 w-full bg-white">
      <div className="relative flex items-center justify-center">
        {/* Circular Loader (background spinner) */}
        <Loader2 className="size-40 animate-spin text-orange-600" />

        {/* Logo in center */}
        <Image
          src={logo}
          alt="Box Craft Logo"
          width={120}
          height={120}
          className="absolute object-contain rounded-full bg-white p-2"
        />
      </div>
    </div>
  );
}
