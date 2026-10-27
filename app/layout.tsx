import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Shrinivas Boddhul | Senior Databricks Data Engineer",
  description:
    "Senior Data Engineer with 5+ years of experience designing and building scalable data platforms using Databricks, Apache Spark, and AWS. Expertise in high-performance ETL/ELT pipelines, lakehouse architectures, and distributed data systems.",
  keywords: [
    "Databricks",
    "Data Engineer",
    "PySpark",
    "Delta Lake",
    "Apache Spark",
    "ClickHouse",
    "Rockset",
    "AWS",
    "Azure",
    "Unity Catalog",
    "Medallion Architecture",
    "Akshay Boddhul",
    "Fission Labs",
    "LangChain",
    "RAG",
  ],
  openGraph: {
    title: "Akshay Shrinivas Boddhul | Senior Databricks Data Engineer",
    description:
      "Engineering data at the speed of thought. 5+ years of distributed computing, Medallion Architecture, and real-time streaming analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
