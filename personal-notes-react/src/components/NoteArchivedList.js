import React from 'react';
import NoteItem from './NoteItem';

function NoteArchivedList({ notes, onDelete, onArchive }) {
   const archivedNotes = notes.filter((note) => note.archived === true);

   if (archivedNotes.length === 0 ) {
      return <div className='notes-list__empty-message'>Tidak ada catatan</div>;
   }   

   return (
      <div className='notes-list'>
         {archivedNotes.map((note) => (
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

export default NoteArchivedList;