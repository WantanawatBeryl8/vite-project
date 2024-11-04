import { createColumnHelper, GroupColumnDef } from '@tanstack/react-table';

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

export const mockColumnss = [
  columnHelper.group({
    id: 'tv_show',
    header: () => <span>TV Show</span>,
    //now define all columns within this group
    columns: [
      columnHelper.accessor('show.name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.type', {
        header: 'Type',
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
        header: 'Language',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.genres', {
        header: 'Genres',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.runtime', {
        header: 'Runtime',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.status', {
        header: 'Status',
        cell: info => info.getValue(),
      }),
    ],
  }),
];

export const mockColumns: GroupColumnDef<Show, any>[] = [
  {
    id: 'show.name',
    header: 'Name',
    cell: info => info.getValue(),
  },
  {
    id: 'show.type',
    header: 'Type',
    cell: info => info.getValue(),
  },
  {
    id: 'show.language',
    header: 'Language',
    cell: info => info.getValue(),
  },
  {
    id: 'show.genres',
    header: 'Genres',
    cell: info => info.getValue(),
  },
  {
    id: 'show.runtime',
    header: 'Runtime',
    cell: info => info.getValue(),
  },
  {
    id: 'show.status',
    header: 'Status',
    cell: info => info.getValue(),
  },
  columnHelper.group({
    id: 'tv_show',
    header: () => <span>TV Show</span>,
    //now define all columns within this group
    columns: [
      columnHelper.accessor('show.name', {
        header: 'Name',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.type', {
        header: 'Type',
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
        header: 'Language',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.genres', {
        header: 'Genres',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.runtime', {
        header: 'Runtime',
        cell: info => info.getValue(),
      }),
      columnHelper.accessor('show.status', {
        header: 'Status',
        cell: info => info.getValue(),
      }),
    ],
  }),
];
