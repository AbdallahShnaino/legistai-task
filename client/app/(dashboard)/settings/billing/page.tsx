import Image from "next/image";
import BillingHistory from "@/components/BillingHistory/BillingHistory";

export default function BillingSettingsPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Billing Settings
      </h2>

      <div className="mb-8 bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">My Card</h3>

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
          <Image src="/card2.png" alt="card 2" width={311} height={200} />
          <Image src="/card1.png" alt="card 1" width={311} height={200} />
          <Image src="/card3.png" alt="card 3" width={311} height={200} />
        </div>
      </div>

      <BillingHistory />
    </div>
  );
}
