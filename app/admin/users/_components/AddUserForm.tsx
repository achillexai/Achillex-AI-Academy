import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddUserFormProps {
  onAddUser: (user: any) => void;
}

export function AddUserForm({ onAddUser }: AddUserFormProps) {
  const [newUser, setNewUser] = useState({
    userId: "",
    fullName: "",
    stripeCustomerId: "",
    stripeSubscriptionId: "",
    stripePriceId: "",
    stripeStatus: "active",
    plan: "free",
    credits: 10000,
    minutes: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddUser(newUser);
    setNewUser({
      userId: "",
      fullName: "",
      stripeCustomerId: "",
      stripeSubscriptionId: "",
      stripePriceId: "",
      stripeStatus: "active",
      plan: "free",
      credits: 10000,
      minutes: 0,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]:
        name === "credits" || name === "minutes" ? parseInt(value) : value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 mb-8 p-4 border rounded-lg bg-gray-50"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="userId">User ID</Label>
          <Input
            id="userId"
            name="userId"
            value={newUser.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={newUser.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="stripeCustomerId">Stripe Customer ID</Label>
          <Input
            id="stripeCustomerId"
            name="stripeCustomerId"
            value={newUser.stripeCustomerId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="stripeSubscriptionId">Stripe Subscription ID</Label>
          <Input
            id="stripeSubscriptionId"
            name="stripeSubscriptionId"
            value={newUser.stripeSubscriptionId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="stripePriceId">Stripe Price ID</Label>
          <Input
            id="stripePriceId"
            name="stripePriceId"
            value={newUser.stripePriceId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="stripeStatus">Stripe Status</Label>
          <Select
            name="stripeStatus"
            value={newUser.stripeStatus}
            onValueChange={(value) =>
              setNewUser((prev) => ({ ...prev, stripeStatus: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="plan">Plan</Label>
          <Select
            name="plan"
            value={newUser.plan}
            onValueChange={(value) =>
              setNewUser((prev) => ({ ...prev, plan: value }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="credits">Credits</Label>
          <Input
            id="credits"
            name="credits"
            type="number"
            value={newUser.credits}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="minutes">Minutes</Label>
          <Input
            id="minutes"
            name="minutes"
            type="number"
            value={newUser.minutes}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Add User
      </Button>
    </form>
  );
}
