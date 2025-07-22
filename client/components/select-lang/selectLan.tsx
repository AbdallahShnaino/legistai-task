"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", short: "ENG", flag: "/icons/us.png" },
  { code: "fr", name: "Français", short: "FRA", flag: "/icons/france.png" },
];

export default function LanguageSelect() {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <Select
      value={selectedLang.code}
      onValueChange={(code) => {
        const lang = languages.find((l) => l.code === code);
        if (lang) setSelectedLang(lang);
      }}
    >
      <SelectTrigger className="h-12 px-4 bg-gray-50 rounded-full border border-gray-200">
        <SelectValue asChild>
          <div className="flex items-center gap-2 text-sm">
            <Image
              src={selectedLang.flag}
              alt={selectedLang.name}
              width={20}
              height={14}
              className="rounded-sm"
            />
            <span>{selectedLang.short}</span>
          </div>
        </SelectValue>
      </SelectTrigger>

      <SelectContent className="w-24" align="start" sideOffset={5}>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className="flex items-center gap-1 text-sm">
              <Image
                src={lang.flag}
                alt={lang.name}
                width={18}
                height={12}
                className="rounded-sm"
              />
              <span>{lang.short}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
