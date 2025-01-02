import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function UserManagementSkeleton() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-10 w-24" />
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow className="rounded-t-lg">
              <TableHead className="font-semibold text-black">
                <Skeleton className="h-4 w-full" />
              </TableHead>
              <TableHead className="font-semibold text-black">
                <Skeleton className="h-4 w-full" />
              </TableHead>
              <TableHead className="font-semibold text-black">
                <Skeleton className="h-4 w-full" />
              </TableHead>
              <TableHead className="font-semibold text-black">
                <Skeleton className="h-4 w-full" />
              </TableHead>
              <TableHead className="font-semibold text-black">
                <Skeleton className="h-4 w-full" />
              </TableHead>
              <TableHead className="font-semibold text-black">
                <Skeleton className="h-4 w-full" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index} className="bg-white">
                <TableCell>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-10 w-10" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
