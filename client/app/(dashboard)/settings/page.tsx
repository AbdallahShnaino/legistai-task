"use client";

import Profile from "@/components/profile/profile";
import SelectLang from "@/components/select-lang/selectLan";
import { Search, Globe, Bell, ChevronDown, Download } from "lucide-react";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import BillingHistory from "@/components/BillingHistory/BillingHistory";

export default function SettingsScreen() {
  return (
    <div className="flex- py-4 pl-4 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1 max-w-xl bg-gray-50 relative">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={24} // ⬅️ made icon slightly bigger
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-12 pr-4 py-3 text-base border rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-100"
          />
        </div>

        <div className="flex items-center gap-4">
          <SelectLang />

          <div className="relative inline-flex items-center justify-center w-12 h-12bg-gray-50 rounded-full">
            <Bell className="w-6 h-6 text-black fill-black" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full" />
          </div>

          <Profile />
        </div>
      </div>

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

          <Tabs
            defaultValue="billing"
            className="flex gap-8 border-b border-gray-200"
          >
            <TabsList className=" bg-white flex items-center gap-6 ">
              <TabsTrigger
                className="text-lg data-[state=active]:bg-gray-100 data-[state=active]:text-black px-4 py-4 rounded-lg transition"
                value="general"
              >
                General
              </TabsTrigger>
              <TabsTrigger
                className="text-lg data-[state=active]:bg-gray-100 data-[state=active]:text-black px-4 py-4 rounded-lg transition"
                value="security"
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                className="text-lg data-[state=active]:bg-gray-100 data-[state=active]:text-black px-4 py-4 rounded-lg transition"
                value="billing"
              >
                Billing
              </TabsTrigger>
              <TabsTrigger
                className="text-lg data-[state=active]:bg-gray-100 data-[state=active]:text-black px-4 py-4 rounded-lg transition"
                value="notifications"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                className="text-lg data-[state=active]:bg-gray-100 data-[state=active]:text-black px-4 py-4 rounded-lg transition"
                value="refer-with-friend"
              >
                Refer with Friend
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              this tab under development go to Billing tab.
            </TabsContent>
            <TabsContent value="security">
              this tab under development go to Billing tab.
            </TabsContent>
            <TabsContent value="billing">
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    My Card
                  </h2>

                  <div>
                    <button className="text-black text-sm font-medium flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition">
                      <Image
                        src="/icons/edit.svg"
                        alt="edit icon"
                        width={16}
                        height={16}
                      />
                      Manage Cards
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Image
                    src="/card2.png"
                    alt="card 2"
                    width={311}
                    height={200}
                  />
                  <Image
                    src="/card1.png"
                    alt="card 1"
                    width={311}
                    height={200}
                  />
                  <Image
                    src="/card3.png"
                    alt="card 3"
                    width={311}
                    height={200}
                  />
                </div>
              </div>
              <BillingHistory />
            </TabsContent>
            <TabsContent value="notifications">
              this tab under development go to Billing tab.
            </TabsContent>
            <TabsContent value="refer-with-friend">
              this tab under development go to Billing tab.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

interface BillingRowProps {
  invoice: string;
  date: string;
  description: string;
  status: "paid" | "pending";
}

const BillingRow: FC<BillingRowProps> = ({
  invoice,
  date,
  description,
  status,
}) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
          </div>
          <span className="font-medium text-gray-900">{invoice}</span>
        </div>
      </td>
      <td className="py-4 px-4 text-gray-600">{date}</td>
      <td className="py-4 px-4 text-gray-600">{description}</td>
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            View
          </button>
          <button className="text-blue-600 hover:text-blue-700 text-sm">
            Download
          </button>
        </div>
      </td>
    </tr>
  );
};
