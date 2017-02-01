'use strict';

// Declare app level module which depends on views, and components
angular.module('app', ['ui.router']);

angular.module('app').config(function($stateProvider) {
    // An array of state definitions
    var states = [
        {
            name: 'example',
            url: '/example',
            // Using component: instead of template:
            component: 'example'
        }
    ]

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});
