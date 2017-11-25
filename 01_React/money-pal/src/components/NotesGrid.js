import React, { Component } from 'react';

import Note from './Note';

import './NotesGrid.css';

const masonryOptions = {
    columnWidth: 250,
    gutter: 10,
    isFitWidth: true
};

export default class NotesGrid extends Component {
    render() {
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <div
                className='grid'
                options={masonryOptions}
            >
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            onDelete={onNoteDelete}
                            text={note.text}
                            category={note.category}
                        >
                        </Note>
                    )
                }
            </div>
        );
    }
}
