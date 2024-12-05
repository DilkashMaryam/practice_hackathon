import Image from "next/image";
import localFont from "next/font/local";
import Header from "./componenets/Header/header"
import Hero from "./componenets/Hero/hero"
import Sale from "@/pages/Sale/page"
import Categories from "@/pages/Categories/page"
import Bestselling from "@/pages/Bestselling/page"
import Hero2 from "@/pages/Hero2/page"
import Product from "@/pages/Product/page"
import Arrival from "@/pages/Arrival/page"
import Footer from "./componenets/Footer/footer"
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Sale></Sale>
      <Categories></Categories>
      <Bestselling></Bestselling>
      <Hero2></Hero2>
      <Product></Product>
      <Arrival></Arrival>
      <Footer></Footer>
    </div>
  );
}
