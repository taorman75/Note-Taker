const noteData = require("../data/noteData");

module.exports = app => {

    app.get("", (req, res) => {
        res.json(noteData);
    });
}