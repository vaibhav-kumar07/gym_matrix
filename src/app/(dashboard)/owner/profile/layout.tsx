import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../../globals.css";
import { ToastProvider } from "@/components/hooks/use-toast";
import OwnerNavbar from "@/components/navbar/owner/OwnerNavbar";
import OwnerProfileInfo from "@/components/profile/owner/OwnerProfileInfo";
import { getOwnerProfile } from "@/lib/owner";
import { IOwner } from "@/types/owner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EliteFit",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const ownerData = await getOwnerProfile();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
      >
        <ToastProvider />
        <OwnerNavbar />
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
          {/* Left section (non-scrollable) */}
          <div className="w-full lg:w-1/3 xl:w-2/5 p-4 lg:p-6 lg:border-r border-gray-200 overflow-hidden">
            <div className="h-full overflow-y-auto no-scrollbar">
              <OwnerProfileInfo owner={ownerData.data as IOwner} />
            </div>
          </div>

          {/* Right section (scrollable) */}
          <div className="w-full lg:w-2/3 xl:w-3/5 overflow-y-auto no-scrollbar">
            <div className="p-4 lg:p-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
