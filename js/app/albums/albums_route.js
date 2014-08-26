PhotoApp.AlbumsRoute = Ember.Route.extend({
    model: function() {
        var albums = [];

        albums.pushObject(Ember.Object.create({"id": "Album One"}));
        albums.pushObject(Ember.Object.create({"id": "Album Two"}));

        return albums;
    }
});