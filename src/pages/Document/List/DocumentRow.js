import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
const DocumentRow = (props) => {
    const { document, history } = props
    return (
        <TableRow onClick={() => history.push(`/document/${document.id}`)} hover>
            <TableCell>
                {document.code}
            </TableCell>
            <TableCell>
                {document.title}
            </TableCell>
            <TableCell>
                {document.department}
            </TableCell>
            <TableCell>

            </TableCell>
        </TableRow>
    )
}

export default withRouter(DocumentRow)