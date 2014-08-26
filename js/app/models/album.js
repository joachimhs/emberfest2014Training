PhotoApp.Album = DS.Model.extend({
   name: DS.attr('string'),
   sortIndex: DS.attr('number'),
    photos: DS.hasMany('photo', {async: true})
});