app.filter('NoteFilter', function () {
    return function (note, activeNotebook) {
        result = [];

        note.forEach(function (e, i) {
            if (activeNotebook !== 0) {
                if (e.notebook === activeNotebook) {
                    result.push(e);
                }
            } else {
                result.push(e);
            }
        });
        return result;

    };
});