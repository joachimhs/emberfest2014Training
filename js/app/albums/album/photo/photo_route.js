PhotoApp.AlbumPhotoRoute = Ember.Route.extend({
    model: function(photo) {
        return this.store.find('photo', photo.photo_id);
    }
});