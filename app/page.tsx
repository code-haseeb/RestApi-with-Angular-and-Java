import Image from "next/image";
import {UserButton} from "@clerk/nextjs"
export default function Home() {
  return (
    <main>authenticated users only

    <UserButton/></main>
  );
}
