import React from 'react';
import Header from './Header';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils';

class NoteApp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         notes: getInitialData(),
         search: '',
      };

      this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
      this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
      this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
      this.onSearchNotesEventHandler = this.onSearchNotesEventHandler.bind(this);
   }

   onDeleteEventHandler(id) {
      const notes = this.state.notes.filter((note) => note.id !== id)
      this.setState({notes: notes});
   }

   onArchiveEventHandler(id) {
      const notes = this.state.notes.map((note) => {
         if (note.id === id && note.archived === false) {
            return {
               id: note.id,
               title: note.title,
               body: note.body,
               archived: true,
               createdAt: note.createdAt
            }
         }

         if (note.id === id && note.archived === true) {
            return {
               id: note.id,
               title: note.title,
               body: note.body,
               archived: false,
               createdAt: note.createdAt
            }
         }

         return {
            ...note
         }
      });
      this.setState({notes: notes});
   }

   onAddNotesHandler({ title, body }) {
      this.setState((prevState) => {
         return {
            notes: [
               ...prevState.notes,
               {
                  id: +new Date(),
                  title,
                  body,
                  archived: false,
                  createdAt: new Date().toISOString()
               }
            ],
         }
      });
   }

   onSearchNotesEventHandler({ search }) {
      this.setState({ search: search });
   }

   render() {
      return (
         <>
            <Header searchNotes={this.onSearchNotesEventHandler} />
            <NoteBody notes={this.state.notes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler} addNotes={this.onAddNotesHandler} search={this.state.search} />
         </>
      );
   }
}

export default NoteApp;