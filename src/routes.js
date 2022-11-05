const {
  postHandler,
  homeHandler,
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");
const notes = require("./notes");
const { noteSchema } = require("./validation");
const routes = [
  {
    method: "GET",
    path: "/",
    handler: homeHandler,
  },
  {
    method: "POST",
    path: "/post",
    handler: postHandler,
    options: {
      validate: {
        payload: noteSchema,
      },
    },
  },
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
