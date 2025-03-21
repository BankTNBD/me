import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "thai"],
  weight: "400"
});

export const metadata = {
  title: "IamBanky",
  description: "IamBanky's Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baiJamjuree.className} antialiased`}
      >
        <TopBar />
        {children}
      </body>
    </html>
  );
}
