import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Shrinivas Boddhul — Senior Data Engineer",
  description:
    "Senior Data Engineer with 5+ years of experience designing and building scalable lakehouses, distributed data pipelines, and high-performance analytical systems with Databricks, Apache Spark, Delta Lake, and AWS.",
  keywords: [
    "Akshay Shrinivas Boddhul",
    "Senior Data Engineer",
    "Databricks",
    "Apache Spark",
    "Delta Lake",
    "PySpark",
    "Medallion Architecture",
    "Lakehouse",
    "ClickHouse",
    "AWS",
    "Agilisium",
    "Data Pipelines",
    "Data Architecture",
  ],
  authors: [{ name: "Akshay Shrinivas Boddhul" }],
  openGraph: {
    title: "Akshay Shrinivas Boddhul — Senior Data Engineer",
    description:
      "Behind every reliable data product is a thoughtfully engineered system. Explore production lakehouses, pipeline architectures, and engineering principles.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
