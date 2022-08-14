import React from 'react';
import NoteActiveList from './NoteActiveList';
import NoteArchivedList from './NoteArchivedList';

function NoteList({ notes, onDelete, onArchive, search }) {
   let filterNotes = notes;
   const regex = new RegExp(search, 'gi')
   if (search !== '') {
      filterNotes = notes.filter((note) => {
         if (note.title.match(regex)) {
            return note;
         }
         return null;
      });
   }

   return (
      <>
         <h2>Catatan Aktif</h2>
         <NoteActiveList notes={filterNotes} onDelete={onDelete} onArchive={onArchive} />
         <h2>Arsip</h2>
         <NoteArchivedList notes={filterNotes} onDelete={onDelete} onArchive={onArchive} />
      </>
   )
}

export default NoteList;