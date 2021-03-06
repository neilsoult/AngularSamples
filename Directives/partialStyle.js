  angular.module('testApp', []).
    /*
     directive to inject <link> elements into the head of the page from
     anywhere within html templates.  This works in conjunction with the
     factory 'removePartialStyles' so that previous partial styles are
     removed with each route.

     Usage:
     <partial-style>
     <link href="foo.css" rel="stylesheet">
     </partial-style>

     Result:
     any <link> tags will be injected into the <head> element of the
     page, with a css class of 'partial' added, for easy removal by
     the 'removePartialStyles' factory.
     The <partial-style> element itself will be removed from
     the DOM.
     */
    directive('partialStyle', ['version',
        function (version) {
            return {
                restrict: 'E',
                link: function (scope, elem, attrs) {
                    var children = elem.children(), head = angular.element(document).find('head');
                    angular.forEach(children,
                        function iterate (e) {
                            if (e.nodeName === 'LINK') { // make sure all elements are links
                                head.append(angular.element(e).addClass('partial'));
                            }
                        }
                    );
                    elem.remove();
                }
            };
        }
    ]);
