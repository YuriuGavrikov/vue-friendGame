const App = {
   data() {
      return {
         placeholderString: 'Введите текст',
         userNameValue: '',
         inputValue: '',
         noteItem: {},
         notes: [],
      }
   },
   methods: {
      addNewNote() {

         if (this.inputValue !== '') {
            let obj = {
               visible: false,
               text: this.inputValue
            }

            this.notes.push(obj)

            this.inputValue = ''

            localStorage.setItem('notes', JSON.stringify(this.notes))
         }

         
      },
      removeNote(i, event) {
         this.notes.splice(i, 1)
         localStorage.setItem('notes', JSON.stringify(this.notes))
      }
   },
   mounted() {
      const data = localStorage.getItem('notes')
      if (data) {
         this.notes = JSON.parse(data)
      }
   },
   watch: {

   }
}

Vue.createApp(App).mount('#app')
