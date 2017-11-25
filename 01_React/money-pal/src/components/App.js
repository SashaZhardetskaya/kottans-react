import React, { Component } from 'react';

import AccountEditor from './AccountEditor';
import NotesGrid from './NotesGrid';

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: []
        };

        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this.handleAccountAdd = this.handleAccountAdd.bind(this);
    }


    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if (savedNotes) {
            this.setState({ notes: savedNotes });
        }
    }

    componentDidUpdate() {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes', notes);
    }

    handleNoteDelete(noteId) {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    }

    handleAccountAdd(newAccount) {
        this.setState({
            notes: [newAccount, ...this.state.notes]
        });
    }

    render() {
        return (
            <div className="app">
                <h2 className="app__header">App</h2>

                <AccountEditor onAccountAdd={this.handleAccountAdd} />

                <NotesGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        );
    }
}
