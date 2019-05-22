// Displays all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});
  
// Displays a single character, or returns false
app.get("/api/reservations/:reservation", function(req, res) {
    var selected = req.params.reservation;
  
    console.log(selected);
  
    for (var i = 0; i < reservations.length; i++) {
        if (selected === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }
  
    return res.json(false);
});