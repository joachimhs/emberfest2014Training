PhotoApp.AlbumPhotoController = Ember.ObjectController.extend({
    needs: ['album'],

    transitionToPhoto: function(nextPhoto) {
        this.transitionToRoute('album.photo', nextPhoto);
    }
});