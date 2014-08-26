PhotoApp.Photo = DS.Model.extend({
    href: DS.attr('string'),

    thumb: function() {
        //images/photo.jpg
        //images/photo_thumb.jpg

        var thumbnail = this.get('href');

        if (thumbnail) {
            thumbnail = thumbnail.replace(".jpg", "_thumb.jpg");
        }

        return thumbnail;

    }.property('href')
});