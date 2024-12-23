(function todoList() {
    const taskInput = document.querySelector("#taskInput");
    const addButton = document.querySelector("#addTask");
    const taskList = document.querySelector("#taskList");
    function renderTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.innerHTML = "";
        tasks.forEach((task, index)=>{
            const li = document.createElement("li");
            li.textContent = task.name;
            li.classList.toggle("completed", task.completed);
            li.addEventListener("click", ()=>{
                task.completed = !task.completed;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks();
            });
            taskList.appendChild(li);
        });
    }
    addButton.addEventListener("click", ()=>{
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({
            name: taskInput.value,
            completed: false
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        renderTasks();
    });
    renderTasks();
})();
(function loginForm() {
    const loginInput = document.querySelector("#login");
    const passwordInput = document.querySelector("#password");
    const saveButton = document.querySelector("#saveLogin");
    const loadButton = document.querySelector("#checkLogin");
    saveButton.addEventListener("click", ()=>{
        const user = {
            login: loginInput.value,
            password: passwordInput.value
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("\u0414\u0430\u043D\u0456 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E!");
    });
    loadButton.addEventListener("click", ()=>{
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser && storedUser.login === loginInput.value && storedUser.password === passwordInput.value) alert("\u0412\u0445\u0456\u0434 \u0443\u0441\u043F\u0456\u0448\u043D\u0438\u0439!");
        else alert("\u041B\u043E\u0433\u0456\u043D \u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456.");
    });
})();
(function bookmarks() {
    const urlInput = document.querySelector("#bookmarkUrl");
    const addBookmarkButton = document.querySelector("#addBookmark");
    const bookmarksList = document.querySelector("#bookmarksList");
    function renderBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        bookmarksList.innerHTML = "";
        bookmarks.forEach((bookmark, index)=>{
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = bookmark;
            link.href = bookmark;
            link.target = "_blank";
            li.appendChild(link);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438";
            deleteButton.addEventListener("click", ()=>{
                bookmarks.splice(index, 1);
                localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
                renderBookmarks();
            });
            li.appendChild(deleteButton);
            bookmarksList.appendChild(li);
        });
    }
    addBookmarkButton.addEventListener("click", ()=>{
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        bookmarks.push(urlInput.value);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        urlInput.value = "";
        renderBookmarks();
    });
    renderBookmarks();
})();
(function contacts() {
    const nameInput = document.querySelector("#contactName");
    const surnameInput = document.querySelector("#contactSurname");
    const phoneInput = document.querySelector("#contactPhone");
    const emailInput = document.querySelector("#contactEmail");
    const addContactButton = document.querySelector("#addContact");
    const contactsList = document.querySelector("#contactsList");
    function renderContacts() {
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contactsList.innerHTML = "";
        contacts.forEach((contact, index)=>{
            const li = document.createElement("li");
            li.textContent = `${contact.name} ${contact.surname}, ${contact.phone}, ${contact.email}`;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438";
            deleteButton.addEventListener("click", ()=>{
                contacts.splice(index, 1);
                localStorage.setItem("contacts", JSON.stringify(contacts));
                renderContacts();
            });
            li.appendChild(deleteButton);
            contactsList.appendChild(li);
        });
    }
    addContactButton.addEventListener("click", ()=>{
        const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push({
            name: nameInput.value,
            surname: surnameInput.value,
            phone: phoneInput.value,
            email: emailInput.value
        });
        localStorage.setItem("contacts", JSON.stringify(contacts));
        nameInput.value = "";
        surnameInput.value = "";
        phoneInput.value = "";
        emailInput.value = "";
        renderContacts();
    });
    renderContacts();
})();

//# sourceMappingURL=index.de158e3a.js.map
