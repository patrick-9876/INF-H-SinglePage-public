app.controller("NoteController", function ($scope, $cookies, $location, NotebookFactory, NoteFactory) {
    if ($cookies.get('LogedIn') !== "true") {
        $location.url('/login');
    }

    console.log("NoteController");
    var userID = parseInt($cookies.get('UserId'));

    $scope.activeNotebook = 0;
    $scope.activeNote;

    $scope.NoteBooks = NotebookFactory.getNotebooksByUser(userID);
    $scope.Notes = NoteFactory.getNotesByUser(userID);

    $scope.changeNotebook = function (id) {
        $scope.activeNotebook = id;
    };

    $scope.changeNote = function (id) {
        $scope.activeNote = id;
    };

    $scope.saveNewNotebook = function () {
        NotebookFactory.createNotebook($scope.newNotebook.title, userID);
        $scope.NoteBooks = NotebookFactory.getNotebooksByUser(userID);

        $("#NotebookModal").modal("hide");
        $scope.newNotebook = '';
    };

    $scope.saveNewNote = function () {
        NoteFactory.createNote($scope.newNote.title, '', $scope.activeNotebook, userID);
        $scope.Notes = NoteFactory.getNotesByUser(userID);

        $("#NoteModal").modal("hide");
        $scope.newNote = '';
    };

    $scope.updateNote = function () {
        NoteFactory.createNote($scope.Notes);
        $scope.Notes = NoteFactory.getNotesByUser(userID);
    };
});