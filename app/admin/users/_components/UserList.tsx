import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, ChevronLeft, ChevronRight } from "lucide-react";

interface User {
  id: number;
  userId: string;
  fullName: string;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripeStatus: string;
  plan: string;
  credits: number;
  minutes: number;
}

interface UserListProps {
  users: User[];
  onDeleteUser: (userId: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function UserList({
  users,
  onDeleteUser,
  currentPage,
  totalPages,
  onPageChange,
}: UserListProps) {
  return (
    <div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow className="rounded-t-lg">
              <TableHead className="font-semibold text-black">
                User ID
              </TableHead>
              <TableHead className="font-semibold text-black">
                Full Name
              </TableHead>
              <TableHead className="font-semibold text-black">
                Customer Stripe/Subscription ID
              </TableHead>
              <TableHead className="font-semibold text-black">Status</TableHead>
              <TableHead className="font-semibold text-black">Plan</TableHead>
              <TableHead className="font-semibold text-black">
                Credits
              </TableHead>
              <TableHead className="font-semibold text-black">
                Minutes
              </TableHead>
              <TableHead className="font-semibold text-black">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="bg-white">
                <TableCell>{user.userId}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>
                  {user.stripeCustomerId || user.stripeSubscriptionId}
                </TableCell>
                <TableCell>{user.stripeStatus}</TableCell>
                <TableCell>{user.plan}</TableCell>
                <TableCell>{user.credits}</TableCell>
                <TableCell>{user.minutes}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDeleteUser(user.userId)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          size="sm"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          size="sm"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
