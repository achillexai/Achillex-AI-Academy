import { Suspense } from "react";
import UserManagement from "./_components/UserManagement";
import { UserManagementSkeleton } from "./_components/UserManagementSkeleton";

export default function UsersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User Management</h1>
      <Suspense fallback={<UserManagementSkeleton />}>
        <UserManagement />
      </Suspense>
    </div>
  );
}
