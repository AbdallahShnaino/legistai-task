import Image from "next/image";

export default function HeaderSearch() {
  return (
    <div className="relative">
      <input
        className="w-full bg-gray-50 rounded-full outline-none text-sm pl-10 pr-4 py-2 border-0 transition-all duration-300 ease-in-out h-9 focus:border-2 focus:border-gray-300 focus:shadow-[0_0_8px_rgba(0,123,255,0.2)] placeholder:text-gray-500"
        type="text"
        name="search"
        id="search"
        placeholder="Search"
      />
      <Image
        className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-60"
        src="/icons/search.svg"
        alt="Search"
        width={16}
        height={16}
      />
    </div>
  );
}
