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

export const columns: ColumnDef<TasksTable>[] = [
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
      const status = row.getValue("status") as string
      return (
        <select className={`px-2 py-1 rounded text-white ${statusColors[status] || "bg-gray-500"}`}>
          {allStatus.map((status, index) => <option key={index} >{status}</option>)}
        </select>
      )
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className="text-white block max-w-[200px] truncate" title={row.original.title}>
        {row.original.title}
      </span>
    ),
  },

  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string
      return (
        <select className={`px-2 py-1 rounded text-white ${priorityColors[priority] || "bg-gray-500"}`}>
          {allPriority.map((priority, index) => <option key={index} >{priority}</option>)}
        </select>
      )
    },
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => (
      <span className="text-white">{row.original.due_date}</span>
    ),
  },
  {
    accessorKey: "update",
    header: "",
    cell: ({ row }) => (
      <button className="bg-[#242424] cursor-pointer border border-[#ffffff] hover:bg-transparent rounded w-22 h-7 text-white ">Update</button>
    ),
  },

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
            This action cannot be undone. This will permanently delete your task from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

];
