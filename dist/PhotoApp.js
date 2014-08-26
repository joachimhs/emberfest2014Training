var PhotoApp = Ember.Application.create({

});
PhotoApp.AlbumsRoute = Ember.Route.extend({
    model: function() {
        var albums = [];

        albums.pushObject(Ember.Object.create({"id": "Album One"}));
        albums.pushObject(Ember.Object.create({"id": "Album Two"}));

        return albums;
    }
});
PhotoApp.Router.map(function() {
    this.resource("albums", {path: "/"}, function() {

    });
});