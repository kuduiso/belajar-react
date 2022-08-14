import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({ title, createdAt, body, archived, onDelete, onArchive, id }) {
   return (
      <div className='note-item'>
         <NoteItemContent title={title} createdAt={createdAt} body={body} />
         <NoteItemAction onDelete={onDelete} onArchive={onArchive} id={id} archived={archived} />
      </div>
   );
}

export default NoteItem;