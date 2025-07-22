"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

export default function FilterSelect() {
  const [value, setValue] = useState("");

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="flex items-center gap-2 border  rounded w-32 bg-white hover:bg-gray-50 transition ">
        <Image
          src="/icons/filter.svg"
          alt="filter icon"
          width={16}
          height={16}
          className="inline-block"
        />
        <SelectValue placeholder="Filter" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  );
}
