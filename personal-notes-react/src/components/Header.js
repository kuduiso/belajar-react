import React from 'react';
import SearchInput from './SearchInput';

function Header({ searchNotes }) {
   return (
      <header className='note-app__header'>
         <h1>Notes</h1>
         <SearchInput searchNotes={searchNotes} />
      </header>
   );
}

export default Header;