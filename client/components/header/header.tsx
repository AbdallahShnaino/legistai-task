"use client";
import Image from "next/image";
import Profile from "../profile/profile";
import SelectLang from "../select-lang/selectLan";
import HeaderSearch from "../headerSearch/headerSearch";
import Notify from "../notify/notify";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-100">
      <div className="flex-1 max-w-md">
        <HeaderSearch />
      </div>

      <div className="flex items-center gap-4">
        <SelectLang />
        <Notify />
        <Profile />
      </div>
    </header>
  );
}
