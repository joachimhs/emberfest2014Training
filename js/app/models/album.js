PhotoApp.Album = DS.Model.extend({
    sortIndex: DS.attr('number'),
    photos: DS.hasMany('photo', {async: true}),
    cover: DS.belongsTo('photo', {async: true})
});