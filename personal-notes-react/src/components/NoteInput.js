import React from 'react';

class NoteInput extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         title: '',
         body: '',
         titleLimit: 50,
      };

      this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
      this.onNoteBodyChangeEventHandler = this.onNoteBodyChangeEventHandler.bind(this);
      this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
   }

   onTitleChangeEventHandler(event) {
      this.setState((prevState) => {
         if (event.target.value.length > 50) {
            return {
               titleLimit: prevState.titleLimit,
            }
         }
         return {
            title: event.target.value,
            titleLimit: 50 - event.target.value.length,
         };
      });
   }

   onNoteBodyChangeEventHandler(event) {
      this.setState(() => {
         return {
            body: event.target.value
         };
      });
   }

   onSubmitEventHandler(event) {
      event.preventDefault();
      this.props.addNotes(this.state);
   }

   render() {
      return (
         <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <h2 className='note-input__title'>Buat catatan</h2>
            <div className='note-input__title__char-limit'>Sisa karakter: {this.state.titleLimit}</div>
            <input type='text' placeholder='Ini adalah judul ...' onChange={this.onTitleChangeEventHandler} value={this.state.title} />
            <textarea rows="8" placeholder='Tuliskan catatanmu di sini ...' onChange={this.onNoteBodyChangeEventHandler}  value={this.state.body} ></textarea>
            <button type='submit'>Buat</button>
         </form>
      )
   }
}

export default NoteInput;