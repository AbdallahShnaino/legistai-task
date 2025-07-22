"use client";

import { FC } from "react";
import { useLogout } from "@/lib/auth/hooks";
import { useAuth } from "@/lib/auth/context";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar: FC = () => {
  const { logout } = useLogout();
  const { isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="w-64 h-screen bg-white text-black  flex flex-col justify-between px-4 py-6">
      <div>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src={`/logo.svg`}
              alt={"Legistai Logo"}
              width={200}
              height={70}
              className="inline-block"
            />
          </div>
        </div>

        <h2 className="text-2xl text-black mb-6">Welcome to the Legistai!</h2>

        <nav className="flex flex-col gap-2">
          <SidebarItem iconName="dashboard" label="Dashboard" href="/" />
          <SidebarItem iconName="drive" label="Drive" href="/drive" />
          <SidebarItem iconName="profile" label="Profile" href="/profile" />
          <SidebarItem iconName="calendar" label="Calendar" href="/calendar" />
          <SidebarItem iconName="law" label="Law Firm Options" href="/law" />
          <SidebarItem iconName="settings" label="Settings" href="/settings" />
        </nav>
      </div>

      <button
        onClick={handleLogout}
        disabled={isLoading}
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition w-full text-left text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Icon name="logout" alt="Logout icon" size={18} />
        {isLoading ? "Logging out..." : "Log Out"}
      </button>
    </aside>
  );
};

interface SidebarItemProps {
  iconName: string;
  label: string;
  href?: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ iconName, label, href }) => {
  const path = usePathname();
  const router = useRouter();

  const isActive = path === href;
  const iconFileName = isActive ? `${iconName}-l` : iconName;

  return (
    <button
      onClick={() => router.push(href || "/")}
      className={`flex items-center gap-3 px-3 py-2 rounded-2xl text-sm font-medium transition w-full text-left ${
        isActive
          ? "bg-black text-white"
          : "text-black hover:bg-gray-200 hover:text-black"
      }`}
    >
      <Icon name={iconFileName} alt={`${label} icon`} size={18} />
      {label}
    </button>
  );
};

interface IconProps {
  name: string;
  alt?: string;
  size?: number;
}

const Icon = ({ name, alt = "", size = 18 }: IconProps) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt}
      width={size}
      height={size}
      className="inline-block"
    />
  );
};

export default Sidebar;
