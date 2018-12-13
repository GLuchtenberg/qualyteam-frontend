import React, { Component, Fragment } from 'react';
import DocumentItem from './DocumentItem';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            documents: [
                {
                    id: 1, code: 'A845B', title: 'First document', department: 'RH',
                    categories: [
                        { id: 1, name: 'Teste' },
                        { id: 2, name: 'Teste 2' },
                    ]
                },
                {
                    id: 2, code: 'A846B', title: 'Second document', department: 'RH',
                    categories: [
                        { id: 1, name: 'Teste' },
                        { id: 3, name: 'Teste 3' },
                    ]
                },
                {
                    id: 3, code: 'A849B', title: 'Third document', department: 'RH',
                    categories: [
                        { id: 1, name: 'Teste' },
                        { id: 2, name: 'Teste 2' },
                        { id: 3, name: 'Teste 3' },
                    ]
                }
            ]
        };
    }

    render () {
        const {
            documents
        } = this.state;
        return (
            <Fragment>
                {documents.length
                    && documents.map(document => <DocumentItem key={document.id} document={document} />)
                }
            </Fragment>
        );
    }
}
export default Index