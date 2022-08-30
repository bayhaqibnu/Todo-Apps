let todo = document.getElementById('todo');

            // fitur TODO
            // 1. Menambahkan 
            // 2. Coret kalau sudah selesai
            // 3. Menghapus jika sudah selesai
            // 4. Membuat local storage
        
        function add() {

            // ambil niai dari element
            let newText = document.getElementById('newText');
            let icon = `<i class="fa-solid fa-xmark fa-xl" style="color: red"></i>`;
        
        // 1. Menambahkan
        // cara 1 | tambahkan li baru kedalam ul
            // let li = document.createElement('li');
            // let txt = document.createTextNode(newText.value);

            // li.appendChild(txt);

            // todo.appendChild(li);

        // cara 2 | tambahkan li baru kedalam ul 
        let newTodo = `<li><span onclick="toggle(this)">${newText.value}</span> <span onclick="removeItem(this)">${icon}</span> </li>`;

        todo.insertAdjacentHTML('afterbegin', newTodo);

        
        // kosongkan field nya
        newText.value = ""
        }

        // 2. Coret jika sudah selesai
        function toggle(el) {
            el.classList.toggle('done');
        }
        
        // 3. Hapus jika sudah selesai
        function removeItem(el) {
            el.parentElement.remove();
        }

        // 4. Membuat local storage

        // * cek apakah local storage tersedia ?
        if(typeof(Storage) != 'undefined') {
            alert('local storage is available');
        }else {
            alert('local storage is unavailable')
        }