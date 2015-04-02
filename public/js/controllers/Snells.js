    angular.module('SnellsCtrl', []).
    controller('SnellsController', function($scope, $location, angularLoad) {
        $scope.base = 'js/javascript/snells/';
        $scope.wall = true;
        $scope.trail = false;
        $scope.trailText = "Trail";

        /*
        angularLoad.loadCSS('libs/seiyria-bootstrap-slider/dist/css/bootstrap-slider.css').then(function() {
        }).catch(function() {
        });

        ['libs/angular-bootstrap-slider/slider.js'].forEach(function(file) {
            angularLoad.loadScript(file).then(function() {
            }).catch(function() {
            });
        });

        $scope.sliderValue = 0;
        $scope.sliderOptions = {
            min: 1,
            step: 0.01,
            max: 2.42,
            value: 1.33
        };
        */

        ['collider.js',
         'draw.js',
         'Material.js',
         'Particle.js',
         'Trail.js',
         'update.js',
         'World.js'].forEach(function(file) {
            angularLoad.loadScript($scope.base + file).then(function() {
                console.log("loaded " + file);
            }).catch(function() {
            })
        })

        angularLoad.loadScript($scope.base + 'Game.js').then(function() {
            $scope.game = new Game(document.getElementById("world"));
            $scope.game.trail = $scope.trail;
        }).catch(function() {
        })

        //game = new Game();

        /*
        angularLoad.loadScript('libs/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js').then(function() {
            $("#slider").slider({
                formatter : function(value) {
                    $scope.game.world.n2 = value;
                    return 'Current n2 value : ' + value;
                }
            });
        }).catch(function() {
        });
        */

        $scope.addParticle = function(e) {
            console.log("new particle");
            $scope.game.world.addParticle(new Particle($scope.game.world, {
                x: event.offsetX,
                y: e.offsetY
            }))
        };

        $scope.resetCanvas = function(e) {
            console.log("reset");
            $scope.game.world.particles = [];
            $scope.game.world.trails = [];
            for (var i = 0; i < 1; i++) {
                $scope.game.world.addParticle(new Particle($scope.game.world, {
                }))
            }
        }

        $scope.toggleTrails = function(e) {
            if ($scope.trail) {
                $scope.trail = false;
                $scope.game.world.trail = false;
                $scope.game.world.trails = [];
            } else {
                $scope.trail = true;
                $scope.game.world.trail = true;
            }
        }
    });
