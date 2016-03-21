(function () {
    "use strict";

    // The application object
    var app = (function() {
        var init = function() {
            navigation.init();
        }
        // Return public functions
        return {
            init: init
        }
    }());

    // Navigation function
    var navigation = (function() {
        var init = function() {
            events();
        };
        var events = function() {
            // Fire url function on hash change and on refresh
            window.addEventListener("hashchange", urlChanged, false);
            window.addEventListener("load", urlChanged, false);
        };
        var urlChanged = function() {
            // If hash is nothing, hash = #home
            var hash = window.location.hash;
            if (!hash) {
                window.location.hash = '#home';
            } else {
                // If hash is home, load feeds
                if (hash == '#home') {
                    api.init();
                } else if(hash.substring(0, 11) == "#appearance") {
                    // If hash is appearance, load that appearance
                    var uuid = hash.replace('#appearance/', '')
                    api.renderAppearance(uuid);
                }
            };
        };
        // Return public functions
        return {
            init: init
        }
    }());

    // The products object
    var products = (function() {
        var init = function() {
            checkProduct();
        }
        var change = function(e) {
            var id = e.currentTarget.attributes[2].value;
            document.querySelector('.main__appearance__img__product-indicator-active').classList.remove('main__appearance__img__product-indicator-active');
            e.currentTarget.classList.add('main__appearance__img__product-indicator-active');
            document.querySelector('.main__appearance__info__products__inner__product-active').classList.remove('main__appearance__info__products__inner__product-active');
            document.querySelector('.main__appearance__info__products__inner__product[data-uuid="' + id + '"]').classList.add('main__appearance__info__products__inner__product-active');
        }
        var checkProduct = function() {
            if ('querySelector' in document  && 'addEventListener' in window) {
        
                if (document.querySelector('.main__appearance__info__products__inner__product')) {
             
                    var product = document.querySelector('.main__appearance__info__products__inner__product'),
                        indicator = document.querySelector('.main__appearance__img__product-indicator[data-uuid="' + product.attributes[1].value + '"]'),
                        indicators = document.getElementsByClassName('main__appearance__img__product-indicator'),
                        i = 0;

                    product.classList.add('main__appearance__info__products__inner__product-active');
                    indicator.classList.add('main__appearance__img__product-indicator-active');

                    for (i; i < indicators.length; i += 1) {
                        indicators[i].addEventListener('click', change, false);
                    }
                }
            }
        }
        // Return public functions
        return {
            init: init
        }
    }());

   
    
    // The api object
    var api = (function() {
        var init = function() {
            renderFeed()
        }
        var feed = function() {
            // Declare new Promise function
            var promise = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();

                xhr.open('GET', '/api/feed', true); // Get data from the url
                xhr.send(null);

                // When the data is received
                xhr.onreadystatechange = function() {
                    // Check if the data is ready
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var status = xhr.status;
                        // Check if the html is received
                        if( (status >= 200 && status < 300) || status === 304 ) {
                            var html = xhr.responseText;
                            // Tell the promise it succeded and return the html
                            resolve(html);
                        } else {
                            // Tell the promise an error occurred
                            reject(html);
                        }
                    }
                }
            })
            return promise;
        };
        var appearance = function(uuid) {
            // Declare new Promise function
            var promise = new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();

                xhr.open('GET', '/api/appearance/'+uuid, true); // Get data from the url
                xhr.send(null);

                // When the data is received
                xhr.onreadystatechange = function() {
                    // Check if the data is ready
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        var status = xhr.status;
                        // Check if the html is received
                        if( (status >= 200 && status < 300) || status === 304 ) {
                            var html = xhr.responseText;
                            // Tell the promise it succeded and return the html
                            resolve(html);
                        } else {
                            // Tell the promise an error occurred
                            reject(html);
                        }
                    }
                }
            })
            return promise;
        };
        var renderFeed = function() {
            // Run feed function and get the data
            feed()
                .then(function (html) {
                    // Load the html in the page
                    document.querySelector('main').innerHTML = html;
                })
                .catch(function() {
                    // If an error occurred, alert there is something wrong
                    alert('Something went wrong')
                });
        };
        var renderAppearance = function(uuid) {
            // Run appearance function and get the data
            appearance(uuid)
                .then(function (html) {
                    // Load the html in the page and fire products
                    document.querySelector('main').innerHTML = html;
                    products.init()
                })
                .catch(function() {
                    // If an error occurred, alert there is something wrong
                    alert('Something went wrong')
                });
        }
        // Return public functions
        return {
            init: init,
            renderAppearance: renderAppearance
        }
    }());

    // Fire app.init
    app.init();
              
}());