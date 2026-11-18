import React from "react";
import { Navbar } from "@/components/sections/01-Navbar";
import { Hero } from "@/components/sections/02-Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
