angular.module('app').component('example', {

    template: '<h1>{{$ctrl.text}}</h1>',

    controller: function () {
        this.text = 'ExampleComponent';
    }
})
