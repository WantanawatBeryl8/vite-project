// src/Table.tsx
//extra code removed for brevity..
import {
  flexRender,
  getCoreRowModel,
  GroupColumnDef,
  SortingTableState,
  Updater,
  useReactTable,
} from '@tanstack/react-table';
import { TPagingResponse } from './type';

interface DataTableProps<TData> {
  columns: GroupColumnDef<TData>[];
  data: TData[];
  pagination?: TPagingResponse;
  onPageChange?: (pageIndex: number) => void;
  className?: string;
  sort?: SortingTableState;
  onSort?: (sorting: Updater<SortingTableState>) => void;
  hasPagination?: boolean;
  // selection
  enableRowSelection?: boolean;
  rowSelection?: any;
  onRowSelectionChange?: (selection: any) => void;
  // search
  // Indicates whether the initial search is still pending.
  initialSearchPending?: boolean;
  paginationType?: 'default' | 'more';
}

export default function Table<TData>({ columns, data }: DataTableProps<TData>) {
  //use the useReact table Hook to build our table:
  const table = useReactTable({
    //pass in our data
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // Table component logic and UI come here
  return (
    <div>
      <table>
        <thead className="border">
          {/*use the getHeaderGRoup function to render headers:*/}
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  className="border-x"
                  key={header.id}
                  colSpan={header.colSpan}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {/*Now render the cells*/}
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td className="border" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
