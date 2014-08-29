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