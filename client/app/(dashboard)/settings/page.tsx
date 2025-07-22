"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import BillingHistory from "@/components/BillingHistory/BillingHistory";

export default function SettingsScreen() {
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
