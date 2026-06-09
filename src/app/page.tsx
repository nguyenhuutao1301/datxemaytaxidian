// app/blogs/[slug]/Home.tsx

import { Box, Container, Grid, Typography } from "@mui/material";
import GetReviewBlogsWithTags from "@/components/Blogs/GetBlogs/GetReviewWithTag";
import TrackUserLocation from "@/components/TrackLocation";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";
import SlideHero from "@/components/Home/Slide/SlideHero";
import TaxiServiceIntro from "@/components/Home/Intro/IntroService";
import PriceTable from "@/components/Home/PriceTable/PriceTable";
import BookingGuide from "@/components/Home/BookingGuide/BookingGuide";
import ServiceList from "@/components/Home/ServiceList/ServiceList";
import StaticSection from "@/components/Home/StaticSection/StaticSection";
import TopDrivers from "@/components/Home/TopDrivers/TopDrivers";
import { featureData, siteConfig } from "@/config/default.config";

import { Feature } from "@/types/Home"; // Import types
import Link from "next/link";
//components
import ActionButton from "@/components/ActionButton";
import LabelBottomNavigation from "@/components/BottomNavigation";
import About1 from "@/components/Home/About";
import Header from "@/components/Header/Header";
import CallPrompt from "@/components/CallPrompt";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: siteConfig.keywords.split(","),
    alternates: {
      canonical: siteConfig.domain,
    },
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.logo}`],
      url: siteConfig.domain,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.logo}`],
    },
  };
}
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: siteConfig.name,
            image: `${siteConfig.logo}`,
            telephone: siteConfig.contactInfo.phone,
            areaServed: "Việt Nam",
            url: siteConfig.domain,
            description: siteConfig.description,
          }),
        }}
      />
      <Header />
      {/* Main content */}
      <main>
        <Container className="mt-4 md:mt-6 mb-4 md:mb-8">
          <SlideHero />
        </Container>

        {/* Introduction Section */}
        <Container>
          <TaxiServiceIntro />
        </Container>

        {/* Feature Section - Professional Design */}
        <Container sx={{ py: { xs: 3, md: 6 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#1f2937",
                mb: 1,
              }}
            >
              Tại Sao Chọn Chúng Tôi?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#6b7280",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Chúng tôi cam kết cung cấp dịch vụ tốt nhất với giá cạnh tranh
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {featureData.map((feature: Feature, index: number) => (
              <Grid key={index} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "30px 20px",
                    color: "#fff",
                    height: "100%",
                    width: "100%",
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: 70,
                      height: 70,
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "rgba(255,255,255,0.2)",
                      borderRadius: "12px",
                    }}
                  >
                    <Image
                      src={feature.src}
                      alt={feature.alt}
                      width={50}
                      height={50}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        marginBottom: "10px",
                        fontWeight: "bold",
                        fontSize: "16px",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        opacity: 0.95,
                      }}
                    >
                      {feature.desc}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container>
          <PriceTable />
        </Container>

        <Container>
          <About1 />
        </Container>

        {/* BookingGuide  */}
        <Container>
          <BookingGuide />
        </Container>

        {/* Main Content */}
        <Container>
          <ServiceList />
        </Container>

        {/* static section  */}
        <Container>
          <StaticSection />
        </Container>

        {/* Featured Drivers Section */}
        <Container>
          <TopDrivers />
        </Container>

        {/* Blog Section */}
        <Container sx={{ mx: "auto", px: { xs: 2, md: 0 }, mt: 6, mb: 6 }}>
          <Box sx={{ mb: 4 }}>
            <Link href={"/bai-viet"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#1f2937",
                  "&:hover": {
                    color: "#2563eb",
                  },
                }}
              >
                Bài Viết Gần Nhất
              </Typography>
            </Link>
          </Box>
          <GetReviewBlogsWithTags tags={siteConfig.keywords.split(",")} limit={16} />
        </Container>

        <LabelBottomNavigation />
        <ActionButton />
        <TrackUserLocation />
        <CallPrompt />
      </main>
      <Footer />
    </>
  );
}
