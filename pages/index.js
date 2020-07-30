import Head from "next/head";
import HeroSection from "../components/HeroSection";
const Home = () => (
  <div>
    <Head>
      <title>juanandrescamacho.com</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
    </Head>
    <HeroSection />

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
          Droid Sans, Helvetica Neue, sans-serif;
      }
      font-size: 16px;
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
