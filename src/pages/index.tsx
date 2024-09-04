import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ProductCatalog from "@/pages/products/product_catalog";
import Footer from "./components/footer";
import Banner from "./components/banner";
import InfoScreenPage from "./components/Infopage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <></>
        {/* Add any metadata or links to additional stylesheets here */}
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.bannerAndCatalog}>
          <Banner /> {/* Banner component */}
          <ProductCatalog /> {/* ProductCatalog component */}
        </div>
        <div className={styles.wavyAnimation}>
          <InfoScreenPage /> {/* InfoScreenPage with wavy animation */}
        </div>
        <Footer />
      </main>
    </>
  );
}
