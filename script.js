const App = {
   data() {
      return {
         title: 'Game',
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
         }
      },
      removeNote(i, event) {
         this.notes.splice(i, 1)
      }
   },
   computed: {

   },
   watch: {

   }
}

Vue.createApp(App).mount('#app')
