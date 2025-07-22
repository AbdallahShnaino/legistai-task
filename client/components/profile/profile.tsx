import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-full cursor-default">
      <Image
        width={32}
        height={32}
        alt="person image"
        src="/person.png"
        className="w-8 h-8 rounded-full object-cover"
      />
      <div className="flex flex-col justify-center leading-tight text-black">
        <h2 className="text-sm font-semibold m-0">Majd Malki</h2>
        <h4 className="text-xs font-normal text-gray-600 m-0">
          Product Manager
        </h4>
      </div>
    </div>
  );
}
