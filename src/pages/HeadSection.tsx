import Head from "next/head";

export default function HeadSection() {
  return (
    <Head>
      <title>Roman Stakhiv | Web Developer</title>
      <meta
        name="description"
        content="Web Developer Portfolio Website ➱ Web Developer specialized in Javascript, React, Typescript ☝ Check out my Github repositories and my projects - https://github.com/RomchikSt"
      />
      <meta name="author" content="Roman Stakhiv" />
      <meta property="og:title" content="Roman Stakhiv | Web Developer" />
      <meta
        property="og:description"
        content="Web Developer Portfolio Website - Specialized in Javascript, React, Typescript. Check out my Github repositories and my projects - https://github.com/RomchikSt"
      />
      <meta property="og:url" content="https://romchikst.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/RomchikSt/Portfolio/master/Websites/portfolio-page/public/img/socialImg.png"
      />
      <link rel="canonical" href="https://romchikst.vercel.app/" />
    </Head>
  );
}
