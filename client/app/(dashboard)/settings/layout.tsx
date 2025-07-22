"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const settingsTabs = [
  { name: "General", href: "/settings" },
  { name: "Security", href: "/settings/security" },
  { name: "Billing", href: "/settings/billing" },
  { name: "Notifications", href: "/settings/notifications" },
  { name: "Refer with Friend", href: "/settings/refer" },
];

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="py-4 pl-4 bg-white">
      <div className="bg-white rounded-lg p-6">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Megi Maki
              </h1>
              <p className="text-gray-600">
                Manage your details and personal preferences here
              </p>
            </div>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <nav className="flex gap-6">
              {settingsTabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                  <Link
                    key={tab.name}
                    href={tab.href}
                    className={`text-lg px-4 py-4 rounded-lg transition ${
                      isActive
                        ? "bg-gray-100 text-black font-medium"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
