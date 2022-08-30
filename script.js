let todos = {};
let STORAGE_KEY = 'passwd-todo';
let todoBox = document.getElementById('todo');
            
            // ============================================================================================================================
            // =============================================== L O C A L  S T O R A G E ====================================================
            // =============================================================================================================================
            // 1. cek ketersediaan local storage
            // 2. membuat fungsi pada local storage

            


            // Check if localStorage API is available
            if(typeof(Storage) != 'undefined') {
                console.log('Yeayy, LocalStorage tersedia');
            }else {
                console.log('Maaf, LocalStorage di browser anda tidak tersedia !')
            }
            
            // read localStorage on first load
            if(todofromLocal = localStorage.getItem(STORAGE_KEY)) {
                todos = JSON.parse(todofromLocal);
            
                // loop isi object todos, bikin listnya
                for(let key in todos){
                    createList(key, todos[key]);
                }
            }
                
            
            // Make function on localStorage
            function syncLocalStorage(activity, item, status = false) {
                switch (activity) {
                    case 'ADD':
                    case 'UPDATE':
                        todos[item] = status;
                        break;
                    case 'DELETE':
                        delete todos[item];
                    default:
                        break;
                }

                console.log(todos);

                localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
            }

            
        // ============================================================================================================================
        // =============================================== T O D O  F U N C T I O N ========================================================
        // ============================================================================================================================
       
        // 1. Menambahkan 
        // 2. Coret kalau sudah selesai
        // 3. Menghapus jika sudah selesai

        function add() {

        // ambil niai dari element
        let newText = document.getElementById('newText');
        
        // 1. Menambahkan
        // cara 1 | tambahkan li baru kedalam ul
            // let li = document.createElement('li');
            // let txt = document.createTextNode(newText.value);

            // li.appendChild(txt);

            // todo.appendChild(li);

        // cara 2 | tambahkan li baru kedalam ul 
        createList(newText.value);
        
        // sinkronasi data todo ke local storage
        syncLocalStorage('ADD', newText.value);
        
        // fitur kosongkan field setelah user melakukan add todo
        newText.value = '';
        
    }

        function createList(text, status = false) {
            let icon = `<i class="fa-solid fa-xmark fa-xl" style="color: red"></i>`;

            let isDone = (status) ? 'done' : '';
            let newTodo = `<li>
                                <span class='${isDone}' onclick="toggle(this)">${text}</span>
                                <span onclick="removeItem(this)">${icon}</span>
                           </li>`;

            todoBox.insertAdjacentHTML('afterbegin', newTodo);
        }

        // 2. Coret jika sudah selesai
        function toggle(el) {
            let status = el.classList.toggle('done');
            syncLocalStorage('ADD', el.innerText, status);
        }
        
        // 3. Hapus jika sudah selesai
        function removeItem(el) {
            el.parentElement.remove();
            syncLocalStorage('DELETE', el.previousElementSibling.innerText.trim());
        }

        