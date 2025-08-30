import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"


export type TasksTable = {
  id: number;
  title: string;
  status: "InProgress" | "Completed" | "Pause";
  priority: "Low" | "Mid" | "High";
  due_date: string;
};

const statusColors: Record<string, string> = {
  Completed: "bg-green-500",
  Pause: "bg-yellow-500",
  InProgress: "bg-blue-500",
}

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
    cell: ({ row } ) => (
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
        <span className={`px-2 py-1 rounded text-white ${statusColors[status] || "bg-gray-500"}`}>
          {status}
        </span>
      )
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <span className="text-white">{row.original.title}</span>,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => (
      <span className="text-white">{row.original.priority}</span>
    ),
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    cell: ({ row }) => (
      <span className="text-white">{row.original.due_date}</span>
    ),
  },
];
