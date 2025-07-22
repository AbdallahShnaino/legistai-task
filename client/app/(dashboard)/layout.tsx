import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "../../components/Sidebar/Sidebar";
import AuthGuard from "../../components/auth/AuthGuard";

const geistSans = Poppins({
  variable: "--font-poppins",
  weight: "300",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LegistAI Dashboard",
  description: "Legal AI Dashboard Application",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <div className={`${geistSans.variable} h-screen flex bg-gray-100`}>
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </AuthGuard>
  );
}
