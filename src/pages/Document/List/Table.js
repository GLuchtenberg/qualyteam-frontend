import React from 'react';
import DocumentRow from './DocumentRow';
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    TableHead,
    Typography,
} from '@material-ui/core';
const DocumentTable = (props) => {
    const {
        documents
    } = props
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Cód.</TableCell>
                    <TableCell>Título</TableCell>
                    <TableCell>Departamento</TableCell>
                    <TableCell>Categorias</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    documents.length ?
                        documents.map(document => <DocumentRow document={document} key={document.id} />) :
                        <TableRow> <TableCell colSpan="4"><Typography align="center">Não existem cadastros de documentos.</Typography></TableCell></TableRow>
                }
            </TableBody>

        </Table>
    )
}

export default DocumentTable