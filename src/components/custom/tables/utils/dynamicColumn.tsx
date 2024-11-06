import { createColumnHelper, GroupColumnDef } from '@tanstack/react-table';
import {
  HeaderWithoutSubHeader,
  SubHeader,
} from '@/components/custom/tables/Header';
import TextCell from '../Cell/TextCell';

interface IDynamicColumn {
  label?: string; // label of the column
  value: string; // accessor
  order: number; // order of the column
  format: 'text' | 'date'; // format of the cell like date, number, etc
  // group of the colum like 'tv_show', 'details'
  // if same group is passed then it will be added to the same group
  group: {
    label: string;
    value: string;
  };
}

interface IGroup {
  accessor: string;
  header: string;
  order: number;
  format: 'text' | 'date';
  columns: {
    id: string;
    header: string;
  }[];
}

const mockColumns: IDynamicColumn[] = [
  {
    label: 'Name',
    value: 'show.name',
    order: 1,
    format: 'text',
    group: {
      label: 'TV Show',
      value: 'tv_show',
    },
  },
  {
    label: 'Type',
    value: 'show.type',
    order: 2,
    format: 'text',
    group: {
      label: 'TV Show',
      value: 'tv_show',
    },
  },
  {
    label: 'Language',
    value: 'show.language',
    order: 3,
    format: 'text',
    group: {
      label: 'Details',
      value: 'details',
    },
  },
  {
    label: 'Genres',
    value: 'show.genres',
    order: 4,
    format: 'text',
    group: {
      label: 'Details',
      value: 'details',
    },
  },
  {
    label: 'Runtime',
    value: 'show.runtime',
    order: 5,
    format: 'text',
    group: {
      label: 'Details',
      value: 'details',
    },
  },
  {
    value: 'show.status',
    order: 6,
    format: 'text',
    group: {
      label: 'Runtime',
      value: 'status',
    },
  },
];

function dynamicGroupColumn(columns: IDynamicColumn[]): GroupColumnDef<any>[] {
  const columnHelper = createColumnHelper<any>();
  const groupColumns: IGroup[] = [];
  const groups: { [key: string]: GroupColumnDef<any> } = {};

  //  grouping the columns return to groupColumns
  columns.forEach(column => {
    const groupColumnsIndex = groupColumns.findIndex(
      group => group.accessor === column.group.value,
    );
    if (groupColumnsIndex === -1) {
      groupColumns.push({
        accessor: column.group.value,
        header: column.group.label,
        order: column.order,
        format: column.format,
        columns: [
          {
            id: column.value,
            header: column.label,
          },
        ],
      });
    } else {
      groupColumns[groupColumnsIndex].columns.push({
        id: column.value,
        header: column.label,
      });
    }
  });

  // creating the group columns defination
  const result: GroupColumnDef<any>[] = groupColumns.map(group => {
    const groupColumn = columnHelper.group({
      id: group.accessor,
      header: () =>
        group.columns.length > 1 ? (
          <span>{group.header}</span>
        ) : (
          <HeaderWithoutSubHeader>{group.header}</HeaderWithoutSubHeader>
        ),
      columns: group.columns.map(column => {
        return columnHelper.accessor(column.id, {
          header: () =>
            group.columns.length > 1 ? (
              <SubHeader>{column.header}</SubHeader>
            ) : null,
          cell: info => {
            switch (group.format) {
              case 'text':
              default:
                return <TextCell value={info.getValue()} />;
            }
          },
        });
      }),
    });

    groups[group.accessor] = groupColumn;
    return groupColumn;
  });

  return result;
}

export { mockColumns };

export default dynamicGroupColumn;
