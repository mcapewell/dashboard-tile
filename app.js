require.config({
    paths: {
        "knockout": "externals/knockout-3.4.0",
    },
    urlArgs : "v=" + new Date().getTime()
});

requirejs(["knockout"], function(ko) {
    
    function AppViewModel() {
        this.showHeader = ko.observable(true);
        this.title = ko.observable("Title");
        this.subtitle = ko.observable("Subtitle");
    }

    ko.applyBindings(new AppViewModel());

});