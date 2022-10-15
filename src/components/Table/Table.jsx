/* eslint-disable react/prop-types */
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from '../../data/data';
import { formatUsersData } from '../../utils/formatter';
import { tableStyle } from '../../utils/style';

const Table = ({users}) => {
  const rows = formatUsersData(users); 
  console.log('rows', rows,columns)
  return (
    <div style={tableStyle}>
      <div style={{ height: 400, width: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          loading={!users && users?.length>0?true:false}
          showColumnRightBorder
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
          />
      </div>
    </div>
  )
}

export default Table