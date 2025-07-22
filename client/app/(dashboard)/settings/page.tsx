"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BillingHistory from "@/components/BillingHistory/BillingHistory";
import SettingsHeader from "@/components/SettingHeader/SettingHeader";
import MyCard from "@/components/MyCard/MyCard";

export default function SettingsScreen() {
  return (
    <div className="flex- py-4 pl-4 bg-white">
      <SettingsHeader />

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
              <MyCard />
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
