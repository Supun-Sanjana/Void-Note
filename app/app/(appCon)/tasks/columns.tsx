import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { CircleMinus } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner";
import axios from "axios";
import { useDeleteTask } from "@/app/hooks/useDeleteTask";


export type TasksTable = {
  id: number;
  title: string;
  status: "InProgress" | "Completed" | "Pause";
  priority: "Low" | "Mid" | "High";
  due_date: string;
};



const statusColors: Record<string, string> = {
  Completed: "bg-green-900",
  Pause: "bg-yellow-900",
  InProgress: "bg-blue-900",
}

const priorityColors: Record<string, string> = {
  High: "bg-red-900",
  Mid: "bg-yellow-900",
  Low: "bg-blue-900",
}

const allStatus = ["InProgress", "Completed", "Pause"];
const allPriority = ["High", "Mid", "Low"];

export const columnsWithoutDelete: ColumnDef<TasksTable>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <select className={`px-2 py-1 rounded text-white ${statusColors[status] || "bg-gray-500"}`}>
          {allStatus.map((status, index) => <option key={index}>{status}</option>)}
        </select>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <span className="text-white block max-w-[200px] truncate" title={row.original.title}>{row.original.title}</span>,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string;
      return (
        <select className={`px-2 py-1 rounded text-white ${priorityColors[priority] || "bg-gray-500"}`}>
          {allPriority.map((priority, index) => <option key={index}>{priority}</option>)}
        </select>
      );
    },
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => <span className="text-white">{row.original.due_date}</span>,
  },
  {
    accessorKey: "update",
    header: "",
    cell: ({ row }) => (
      <button className="bg-[#242424] cursor-pointer border border-gray-400 hover:bg-white hover:text-[#242424] rounded w-22 h-7 text-gray-400">
        Update
      </button>
    ),
  },
];

export const getColumnsWithDelete = (deleteTask: (id: number) => void): ColumnDef<TasksTable>[] => [
  ...columnsWithoutDelete,
  {
    accessorKey: "delete",
    header: "",
    cell: ({ row }) => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <CircleMinus className="text-red-700 cursor-pointer" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your task.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="text-red-300 bg-red-800 hover:bg-red-900 cursor-pointer"
              onClick={() => deleteTask(row.original.id)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
  },
];
