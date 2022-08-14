import React from 'react';

class SearchInput extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         search: ''
      }

      this.onSearchChangeEvent = this.onSearchChangeEvent.bind(this);
      this.onSearchKeyupEvent = this.onSearchKeyupEvent.bind(this);
   }

   onSearchChangeEvent(event) {
      this.setState(() => {
         return {
            search: event.target.value
         };
      });
   }

   onSearchKeyupEvent() {
      this.props.searchNotes(this.state);
   }

   render() {
      return (
         <div className='note-search'>
            <input type='text' placeholder='Cari catatan ...' onChange={this.onSearchChangeEvent} onKeyUp={this.onSearchKeyupEvent} value={this.state.search}/>
         </div>
      )
   }
}

export default SearchInput;