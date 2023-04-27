import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { BuyerListProvider } from "@/contexts/buyerContext";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <BuyerListProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </BuyerListProvider>
    </>
  );
}
