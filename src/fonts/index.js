import { Lato, Urbanist } from "next/font/google";

export const fontLato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", '900'],
  variable: "--font-lato",
});

export const fontUrbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-urbanist",
});
