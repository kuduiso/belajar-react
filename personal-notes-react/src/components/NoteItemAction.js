import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItemAction({ onDelete, onArchive, id, archived }) {
   return (
      <div className='note-item__action'>
         <DeleteButton  onDelete={onDelete} id={id} />
         <ArchiveButton  onArchive={onArchive} id={id} archived={archived} />
      </div>
   );
}

export default NoteItemAction;