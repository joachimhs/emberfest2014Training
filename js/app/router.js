PhotoApp.Router.map(function() {
    this.resource('albums', {path: "/"}, function() {
        this.resource('album', {path: "/album/:album_id"}, function() {
            this.route('photo', {path: "/photo/:photo_id"});
        });
    });
});