import Image from "next/image";

export default function Notify() {
  return (
    <Image
      className="cursor-pointer"
      width={20}
      height={20}
      alt="Notification icon"
      src="/icons/notify.svg"
    />
  );
}
