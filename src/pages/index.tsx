import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Services />
      </main>
    </>
  );
}
