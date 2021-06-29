/*Prepariamo un array in data che rappresenta una lista di cose da fare (un array di stringhe).
Nell’html stampate per ciascun elemento, l’icona
<i class="far fa-check-circle"></i>
con a lato il testo/stringa dell’elemento (il task da eseguire)*/

//BONUS: solo gli elementi dispari nell’elenco, avranno invece che la spunta, l’icona X
new Vue(
    {
        el: '#app',
        data: {
            taskList :[
                'Uscire il cane',
                'Fare la spesa',
                'Pagare boolean'
            ],
            newTask: "",
        },
        methods:{
            addTask: function() {
                this.taskList.push(this.newTask);
                this.newTask = "";
            },
            deleteItem: function(index) {
                this.taskList.splice(index,1);
            }, 
        },
    }
)