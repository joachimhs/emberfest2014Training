var PhotoApp = Ember.Application.create({

});


PhotoApp.AlbumController = Ember.ObjectController.extend({
    needs: ['albumPhoto']
});
PhotoApp.AlbumRoute = Ember.Route.extend({
    model: function(album) {
        return this.store.find('album', album.album_id);
    }
});


PhotoApp.AlbumPhotoController = Ember.ObjectController.extend({
    needs: ['album'],

    transitionToPhoto: function(nextPhoto) {
        this.transitionToRoute('album.photo', nextPhoto);
    }
});
PhotoApp.AlbumPhotoRoute = Ember.Route.extend({
    model: function(photo) {
        return this.store.find('photo', photo.photo_id);
    }
});
PhotoApp.AlbumPhotoView = Ember.View.extend({
    actions: {
        prevPhoto: function() {
            console.log('prevPhoto');

            var currPhoto = this.get('controller.model');
            var indexOfCurrPhoto = this.get('controller.controllers.album.model.photos').indexOf(currPhoto);

            if (indexOfCurrPhoto > 0) {
                indexOfCurrPhoto--;
            } else if (indexOfCurrPhoto <= 0) {
                indexOfCurrPhoto = this.get('controller.controllers.album.photos.length') - 1;
            }

            var nextPhoto = this.get('controller.controllers.album.photos').objectAt(indexOfCurrPhoto);

            this.animateBeforeTransition(nextPhoto);
            //this.transitionToRoute('album.photo', nextPhoto);
        },

        nextPhoto: function() {
            console.log('nextPhoto');

            var currPhoto = this.get('controller.model');
            var indexOfCurrPhoto = this.get('controller.controllers.album.model.photos').indexOf(currPhoto);


            var lastIndex = this.get('controller.controllers.album.model.photos.length') - 1;

            if (indexOfCurrPhoto < lastIndex) {
                indexOfCurrPhoto++;
            } else if (indexOfCurrPhoto >= lastIndex) {
                indexOfCurrPhoto = 0;
            }

            var nextPhoto = this.get('controller.controllers.album.photos').objectAt(indexOfCurrPhoto);

            this.animateBeforeTransition(nextPhoto);
            //this.transitionToRoute('album.photo', nextPhoto);
        }
    },

    animateBeforeTransition: function(nextPhoto) {
        var elementId = this.get('elementId');

        var view = this;
        $("#" + elementId + " .largePhoto").toggle({width: "toggle"}).fadeOut(function() {
            $("#" + elementId + " .largePhoto").toggle({width: "toggle"}).fadeIn();
            view.get('controller').transitionToPhoto(nextPhoto);
        });
    }
});

PhotoApp.AlbumsIndexController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
PhotoApp.AlbumsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('album');
    }
});
PhotoApp.Album = DS.Model.extend({
    sortIndex: DS.attr('number'),
    photos: DS.hasMany('photo', {async: true}),
    cover: DS.belongsTo('photo', {async: true})
});
PhotoApp.Photo = DS.Model.extend({
    href: DS.attr('string'),

    thumbnail: function() {
        var thumbnail = this.get('href');

        if (thumbnail) {
            thumbnail = thumbnail.replace('.jpg', '_thumb.jpg');
        }

        return thumbnail;
    }.property('href')
});
PhotoApp.Router.map(function() {
    this.resource('albums', {path: "/"}, function() {
        this.resource('album', {path: "/album/:album_id"}, function() {
            this.route('photo', {path: "/photo/:photo_id"});
        });
    });
});
DS.RESTAdapter.reopen({
    namespace: 'json/data'
});

PhotoApp.Adapter = DS.RESTAdapter.extend();

PhotoApp.ApplicationStore = DS.Store.extend({
    adapter:  "PhotoApp.Adapter"
});