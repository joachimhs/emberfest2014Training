DS.RESTAdapter.reopen({
    namespace: 'json/data'
});

PhotoApp.Adapter = DS.RESTAdapter.extend();

PhotoApp.ApplicationStore = DS.Store.extend({
    adapter:  "PhotoApp.Adapter"
});