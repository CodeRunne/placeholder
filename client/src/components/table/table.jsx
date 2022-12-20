import React from 'react';
import PropTypes from 'prop-types';
import { TableWrapper, TableContainer, TableHead } from './table.styles';

function Table({ tableHead=[], children }) {
	return (
      <TableWrapper className="table-wrapper">
   		<TableContainer>
   			{/* Table Head (thead) */}
   			 <TableHead>
                  <tr>
                     {tableHead.map(head => ( <th key={head}>{head}</th> ))}
                  </tr>
               </TableHead>

               <tbody>
               	{children}
               </tbody>
   		</TableContainer>
      </TableWrapper>
	)
}

Table.propTypes = {
   tableHead: PropTypes.array.isRequired
}

export default Table