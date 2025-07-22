import { Bell, Search } from "lucide-react";
import Profile from "../Profile/Profile";
import SelectLanguage from "../SelectLanguage/SelectLanguage";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6 py-4 pl-4 bg-white">
      <div className="flex-1 max-w-xl bg-gray-50 relative">
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={24}
        />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-12 pr-4 py-3 text-base border rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-100"
        />
      </div>

      <div className="flex items-center gap-4 pr-4">
        <SelectLanguage />

        <div className="relative inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full">
          <Bell className="w-6 h-6 text-black fill-black" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full" />
        </div>

        <Profile />
      </div>
    </div>
  );
}
