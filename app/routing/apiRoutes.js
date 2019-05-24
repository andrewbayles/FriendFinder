// Loads all friend data
var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    // API GET Requests
    // ---------------------------------------------------------------------------

    // Displays all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friendData);
    });

    // Displays a single friend, or returns false
    app.get("/api/friends/:friend", function(req, res) {
        for (var i = 0; i < friend.length; i++) {
            if (req.params.friend === friend[i].routeName) {
                return res.json(friend[i]);
            }
        }
        return res.json(false);
    });
    
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object) the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------
    
    // req.body is available since we're using the body parsing middleware
    app.post("/api/friends", function(req, res) {
        if (friendData.length < 10) {
            friendData.push(req.body);
            res.json(true);
        }
    });

    // Empty out the arrays of data
    // ---------------------------------------------------------------------------
    app.post("/api/clear", function(req, res) {
        friendData.length = 0;
        res.json({ ok: true });
    });

};