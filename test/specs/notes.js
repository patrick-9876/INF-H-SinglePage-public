/* global expect */

'use strict';

describe('test for testing', function () {
    var UserService, NotebookFactory, NoteFactory;

    beforeEach(function () {
        module('scrumboard-app');
        inject(function (_UserService_, _NotebookFactory_, _NoteFactory_) {
            UserService = _UserService_
            NotebookFactory = _NotebookFactory_
            NoteFactory = _NoteFactory_
        });
    });
    it('succesful login', function () {
        expect(UserService.Login(1234)).toBeTruthy();
    });
    it('Faild login', function () {
        expect(UserService.Login(5678)).toBeFalsy();
    });
    it('should return userID', function () {
        expect(UserService.GetUserId(1234)).toBe(1);
    });
    it('Should get all notebooks', function () {
        var mockNotebooks = [
            {id: 0, title: "All Notes", user: 1},
            {id: 1, title: "travel", user: 1},
            {id: 2, title: "work", user: 1}
        ];
        var Notebooks = NotebookFactory.getAllNotebooks();
        for (var i = 0; i < mockNotebooks.length; i++) {
            expect(Notebooks[i].title).toBe(mockNotebooks[i].title);
        }
    });
    it('Should create a new notebook', function () {
        NotebookFactory.createNotebook('test', 1);
        expect(NotebookFactory.getAllNotebooks().length).toBe(4);
    });
    it('Should get all notes', function () {
        var mockNotes = [
            {id: 0, title: "Note 1", tekst: "", notebook: 1, user: 1},
            {id: 1, title: "Note 2", tekst: "", notebook: 2, user: 1},
            {id: 2, title: "Note 3", tekst: "", notebook: 1, user: 1},
            {id: 3, title: "Note 4", tekst: "", notebook: 2, user: 1}
        ];
        var Notes = NoteFactory.getAllNotes();
        for (var i = 0; i < mockNotes.length; i++) {
            expect(Notes[i].title).toBe(mockNotes[i].title);
        }
    });
    it('Should create a new note', function () {
        NoteFactory.createNote('test title', '', 1, 1);
        expect(NoteFactory.getAllNotes().length).toBe(5);
    });
});