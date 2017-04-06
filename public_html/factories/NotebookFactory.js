app.factory('NotebookFactory', function () {
    var Notebooks;
    var localItems = JSON.parse(localStorage.getItem("Notebooks"));
    if (localItems != undefined && localItems.length > 0) {
        var Notebooks = localItems;
    } else {
        setDefaultNotebooks();
    }

function setDefaultNotebooks(){
    var Notebooks = [
            {id: 0, title: "All Notes", user: 1},
            {id: 1, title: "travel", user: 1},
            {id: 2, title: "work", user: 1}
        ];
        localStorage.setItem("Notebooks", JSON.stringify(Notebooks));
}

    function getAllNotebooks() {
        return Notebooks;
    }

    function getNotebooksByUser(id) {
        var userBooks = [];
        Notebooks.forEach(function (e) {
            if (e.user === id) {
                userBooks.push(e);
            }
        });
        return userBooks;
    }

    function createNotebook(BookName, BookUser) {
        Notebooks.push({id: Notebooks.length, title: BookName, user: BookUser});

        localStorage.setItem('Notebooks', JSON.stringify(Notebooks));
    }

    return {
        setDefaultNotebooks: setDefaultNotebooks,
        getAllNotebooks: getAllNotebooks,
        getNotebooksByUser: getNotebooksByUser,
        createNotebook: createNotebook
    };
}); 
