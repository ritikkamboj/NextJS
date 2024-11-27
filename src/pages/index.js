import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'

// import greenImg from './../../public/green.jpg'

export default function Home() {

  const session = useSession();
  console.log('session is ', session);

  if (session.data == null) {
    return <button onClick={signIn}>Login </button>
  }

  return (
    <div>
      <h1> {session.data.user.name}</h1>
      <button onClick={signOut}>logout</button>
    </div>
  );
}
