import React from 'react';
import './DetailTable.scss';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import tasks from './data';

export default function DetailTable(props: any) {
  const getTasks = (key: number) =>
    new DataSource({
      store: new ArrayStore({
        data: tasks,
        key: 'ID',
      }),
      filter: ['EmployeeID', '=', key],
    });

  return (
    <React.Fragment>
      <div className={'detail-table-title'}>Task Details</div>
      <DataGrid
        dataSource={getTasks(props.data.key)}
        showBorders={true}
        columnAutoWidth={true}
      >
        <Column dataField="Subject" />
        <Column dataField="StartDate" dataType="date" />
        <Column dataField="DueDate" dataType="date" />
        <Column dataField="Priority" />
        <Column dataField="Status" />
      </DataGrid>
    </React.Fragment>
  );
}
