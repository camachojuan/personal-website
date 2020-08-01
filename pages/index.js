import Head from "next/head";
import GithubCorner from 'react-github-corner';
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";

const Home = () => (
  <div>
    <Head>
      <title>juanandrescamacho.com</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap" rel="stylesheet" />
    </Head>
    <HeroSection />
    <SkillsSection />
    <ContactSection />
    <GithubCorner href="https://github.com/camachojuan/personal-website" />
    <style jsx global>{`
      html {
        scroll-behavior: smooth;
      }
      a, a:hover {
        text-decoration: none;
        color: inherit;
      }
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
