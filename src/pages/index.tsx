import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Waste Management Landing Page Design | Eco-Friendly UI Concept
        </title>
        <meta
          name="description"
          content="Clean and modern waste management landing page UI. Eco-friendly design concept for environmental services, sustainability, and green business websites."
        />
        <meta
          name="keywords"
          content="waste management landing page, eco-friendly website design, sustainability UI design, green business web template, environmental services website, clean energy landing page, corporate sustainability design"
        />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="My Website" />
        <meta
          property="og:title"
          content="Waste Management Landing Page Design | Eco-Friendly UI Concept"
        />
        <meta
          property="og:description"
          content="Clean and modern waste management landing page UI. Eco-friendly design concept for environmental services, sustainability, and green business websites."
        />
        <meta property="og:url" content="https://www.mywebsite.example/" />
        <meta property="og:image" content="/favicon.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Waste Management Landing Page Design | Eco-Friendly UI Concept"
        />
        <meta
          name="twitter:description"
          content="Clean and modern waste management landing page UI. Eco-friendly design concept for environmental services, sustainability, and green business websites."
        />
        <meta name="twitter:image" content="/favicon.png" />
        <meta name="twitter:creator" content="@mywebsite" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.mywebsite.example/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <div className="h-svh pt-34 text-center text-3xl">
        Welcome to Waste management
      </div>
    </>
  );
}
