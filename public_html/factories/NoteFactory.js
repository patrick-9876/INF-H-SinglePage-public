app.factory('NoteFactory', function () {
    var localItems = JSON.parse(localStorage.getItem("Notes"));
    if (localItems != undefined && localItems.length > 0) {
        var Notes = localItems;
    } else {
        var Notes = [
            {id: 1, title: "Note 1", tekst: "", notebook: 1, user: 1},
            {id: 2, title: "Note 2", tekst: "", notebook: 1, user: 1},
            {id: 3, title: "Note 3", tekst: "", notebook: 2, user: 1},
            {id: 4, title: "Note 4", tekst: "", notebook: 2, user: 1},
            {id: 5, title: "Note 5", tekst: "", notebook: 1, user: 1}
        ];
        localStorage.setItem("Notes", angular.toJson(Notes));
    }

    function getNotesByUser(id) {
        var userNotes = [];
        Notes.forEach(function (e) {
            if (e.user === id) {
                userNotes.push(e);
            }
        });
        return userNotes;
    }

    function getAllNotes() {
        return Notes;
    }

    function createNote(NoteTitle, NoteTekst, NotebookID, UserID) {
        Notes.push({id: Notes.length + 1, title: NoteTitle, tekst: NoteTekst, notebook: NotebookID, user: UserID});

        localStorage.setItem('Notes', angular.toJson(Notes));
    }

    function saveNotes(uNotes) {
        localStorage.setItem('Notes', angular.toJson(uNotes));
    }

    return {
        getAllNotes: getAllNotes,
        getNotesByUser: getNotesByUser,
        createNote: createNote,
        saveNotes: saveNotes
    };
});