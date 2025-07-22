import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import FilterSelect from "../FilterSelect/FilterSelect";
import HeaderSearch from "../headerSearch/headerSearch";

export default function BillingHistory() {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Billing History</h2>
        <div className="flex gap-2">
          <HeaderSearch />
          <FilterSelect />
          <button className="text-black text-sm font-medium flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:bg-gray-50 transition">
            <Image
              src="/icons/download.svg"
              alt="edit icon"
              width={16}
              height={16}
            />
            Download All
          </button>
        </div>
      </div>
      <Table>
        <TableHeader className=" bg-white">
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox />
            </TableHead>
            <TableHead className=" text-gray-700">Invoice</TableHead>
            <TableHead className=" text-gray-700">Billing Date</TableHead>
            <TableHead className=" text-gray-700">Description</TableHead>
            <TableHead className="text-gray-700 text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2 text-black font-bold">
                <Image
                  src="/icons/pdf.svg" // change to your SVG file path
                  alt="Invoice Icon"
                  width={16}
                  height={16}
                />
                Invoice March 2024
              </div>
            </TableCell>{" "}
            <TableCell className=" text-black font-bold">Mar 6, 2024</TableCell>
            <TableCell className=" text-black font-bold">
              Government Fees
            </TableCell>
            <TableCell className="text-right flex items-center justify-evenly gap-2">
              <button className="text-black text-sm font-medium flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 hover:bg-gray-100 transition bg-gray-100">
                <Image
                  src="/icons/eye.svg"
                  alt="eye icon"
                  width={16}
                  height={16}
                />
                View
              </button>
              <button className="text-black text-sm font-medium flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 hover:bg-gray-100 transition bg-gray-100">
                <Image
                  src="/icons/download-pdf.svg"
                  alt="download pdf icon"
                  width={16}
                  height={16}
                />
                Download
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2 text-black font-bold">
                <Image
                  src="/icons/pdf.svg" // change to your SVG file path
                  alt="Invoice Icon"
                  width={16}
                  height={16}
                />
                Invoice March 2024
              </div>
            </TableCell>{" "}
            <TableCell className=" text-black font-bold">Mar 6, 2024</TableCell>
            <TableCell className=" text-black font-bold">
              Government Fees
            </TableCell>
            <TableCell className="text-right flex items-center justify-evenly gap-2">
              <button className="text-black text-sm font-medium flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 hover:bg-gray-100 transition bg-gray-100">
                <Image
                  src="/icons/eye.svg"
                  alt="eye icon"
                  width={16}
                  height={16}
                />
                View
              </button>
              <button className="text-black text-sm font-medium flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 hover:bg-gray-100 transition bg-gray-100">
                <Image
                  src="/icons/download-pdf.svg"
                  alt="download pdf icon"
                  width={16}
                  height={16}
                />
                Download
              </button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2 text-black font-bold">
                <Image
                  src="/icons/pdf.svg" // change to your SVG file path
                  alt="Invoice Icon"
                  width={16}
                  height={16}
                />
                Invoice March 2024
              </div>
            </TableCell>{" "}
            <TableCell className=" text-black font-bold">Mar 6, 2024</TableCell>
            <TableCell className=" text-black font-bold">
              Government Fees
            </TableCell>
            <TableCell className="text-right flex items-center justify-evenly gap-2">
              <button className="text-black text-sm font-medium flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 hover:bg-gray-100 transition bg-gray-100">
                <Image
                  src="/icons/eye.svg"
                  alt="eye icon"
                  width={16}
                  height={16}
                />
                View
              </button>
              <button className="text-black text-sm font-medium flex items-center gap-2 border border-gray-200 rounded-2xl px-3 py-2 hover:bg-gray-100 transition bg-gray-100">
                <Image
                  src="/icons/download-pdf.svg"
                  alt="download pdf icon"
                  width={16}
                  height={16}
                />
                Download
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
