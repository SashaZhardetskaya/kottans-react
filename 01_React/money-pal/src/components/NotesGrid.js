import React, { Component } from 'react';

import Note from './Note';

import './NotesGrid.css';


export default class NotesGrid extends Component {
    render() {
        const {
            accounts,
            onAccountDelete
        } = this.props;

        return (
            <div
                className='grid'
            >
                {
                    accounts.map(account =>
                        <Note
                            key={account.date}
                            id={account.date}
                            onDelete={onAccountDelete}
                            amount={account.amount}
                            category={account.category}
                            date={account.date}
                        >
                        </Note>
                    )
                }
            </div>
        );
    }
}
