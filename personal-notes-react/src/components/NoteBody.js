import React from 'react';
import NoteInput from './NoteInput';
// import NoteActiveList from './NoteActiveList';
// import NoteArchivedList from './NoteArchivedList';
import NoteList from './NoteList';

function NoteBody({ notes, onDelete, onArchive, addNotes, search }) {
   return(
      <div className='note-app__body'>
         <NoteInput addNotes={addNotes} />
         <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} search={search} />
      </div>
   );
}

export default NoteBody;