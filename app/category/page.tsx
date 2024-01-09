"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "c@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "e@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-end ">
        {/* Button Add New */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="destructive"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
            >
              Add New
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 shadow-md"
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="container mx-auto py-10 bg-white shadow-xl rounded-xl">
        {/* Data */}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
