import { createColumnHelper, GroupColumnDef } from '@tanstack/react-table';
import {
  HeaderWithoutSubHeader,
  SubHeader,
} from '@/components/custom/tables/Header';

export type Show = {
  show: {
    status: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    runtime: number;
  };
};

const columnHelper = createColumnHelper<Show>();

export const mockColumns: GroupColumnDef<Show, any>[] = [
  columnHelper.group({
    id: 'no',
    header: () => <HeaderWithoutSubHeader>No</HeaderWithoutSubHeader>,
    columns: [
      columnHelper.display({
        id: 'index',
        cell: info => info.row.index + 1,
      }),
    ],
  }),
  columnHelper.group({
    id: 'tv_show',
    header: () => <span className="text-center">TV Show</span>,
    //now define all columns within this group
    columns: [
      columnHelper.accessor('show.name', {
        header: () => <SubHeader>Name</SubHeader>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.type', {
        header: () => <SubHeader>Type</SubHeader>,
        cell: info => info.getValue(),
      }),
    ],
  }),
  //create another group:
  columnHelper.group({
    id: 'details',
    header: () => <span> Details</span>,
    columns: [
      columnHelper.accessor('show.language', {
        header: () => <SubHeader>Language</SubHeader>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.genres', {
        header: () => <SubHeader>Genres</SubHeader>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.runtime', {
        header: () => <SubHeader>Runtime</SubHeader>,
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.status', {
        header: () => <SubHeader>Status</SubHeader>,
        cell: info => info.getValue(),
      }),
    ],
  }),
];
