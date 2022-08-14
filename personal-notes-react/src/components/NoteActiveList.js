import React from 'react';
import NoteItem from './NoteItem';

function NoteActiveList({ notes, onDelete, onArchive }) {
   const activeNotes = notes.filter((note) => note.archived === false);

   if (activeNotes.length === 0 ) {
      return <div className='notes-list__empty-message'>Tidak ada catatan</div>;
   }   

   return (
      <div className='notes-list'>
         {activeNotes.map((note) => (
            <NoteItem 
               title={note.title}
               createdAt={note.createdAt}
               body={note.body}
               archived={note.archived}
               id={note.id}
               onDelete={onDelete}
               onArchive={onArchive}
               key={note.id}
            />
         ))}
      </div>
   );
}

export default NoteActiveList;