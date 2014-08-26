var PhotoApp = Ember.Application.create({

});
PhotoApp.AlbumsController = Ember.ArrayController.extend({
    sortProperties: ['sortIndex'],
    sortAscending: true
});
PhotoApp.AlbumsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('album');
    }
});
PhotoApp.Album = DS.Model.extend({
   name: DS.attr('string'),
   sortIndex: DS.attr('number'),
    photos: DS.hasMany('photo', {async: true})
});
PhotoApp.Photo = DS.Model.extend({
    href: DS.attr('string')
});
PhotoApp.Router.map(function() {
    this.resource("albums", {path: "/"}, function() {
        this.route('album', {path: "/album/:album_id"});
    });
});
DS.RESTAdapter.reopen({
    namespace: 'json/data'
});

PhotoApp.Adapter = DS.RESTAdapter.extend({});

PhotoApp.ApplicationStore = DS.Store.extend({
    adapter: 'PhotoApp.Adapter'
});