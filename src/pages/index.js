import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";

// import greenImg from './../../public/green.jpg'

export default function Home() {
  return (
    <div>
      <Image
        src={
          "https://images.pexels.com/photos/6074050/pexels-photo-6074050.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        width={200}
        height={200}
        alt="Geen tree image"
      />
    </div>
  );
}
