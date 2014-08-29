PhotoApp.AlbumRoute = Ember.Route.extend({
    model: function(album) {
        return this.store.find('album', album.album_id);
    }
});

