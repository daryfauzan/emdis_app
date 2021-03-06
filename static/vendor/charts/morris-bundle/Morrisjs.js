(function(window, document, $, undefined) {
    "use strict";
    $(function() {

        if ($('#morris_area').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Area({
                element: 'morris_area',
                behaveLikeLine: true,
                data: [
                    { x: '2011 Q1', y: 4, z: 3 },
                    { x: '2011 Q2', y: 2, z: 1 },
                    { x: '2011 Q3', y: 2, z: 3 },
                    { x: '2011 Q4', y: 4, z: 1 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['Y', 'Z'],
                 lineColors: ['#5969ff', '#ff407b'],
                   resize: true,
                   gridTextSize: '14px'

                
            });

        }




        if ($('#morris_line').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Line({
                element: 'morris_line',
                behaveLikeLine: true,
                data: [
                    { y: 'Monday', a: 10},
                    { y: 'Tuesday', a: 65},
                    { y: 'Wednesday', a: 50},
                    { y: 'Thursday', a: 75},
                    { y: 'Friday', a: 50},
                    { y: 'Saturday', a: 75},
                    { y: 'Sunday', a: 100}
                ],

                xkey: 'y',
                ykeys: ['a'],
                labels: ['Case'],
                   lineColors: ['#5969ff'],
                     resize: true,
                        gridTextSize: '14px'
            });

        }

        if ($('#morris_bar').length) {
            Morris.Bar({
                element: 'morris_bar',
                data: [
                    { x: 'Monday', y: 3},
                    { x: 'Tuesday', y: 1 },
                    { x: 'Wednesday', y: 2 },
                    { x: 'Thursday', y: 3 },
                    { x: 'Friday', y: 4 },
                    { x: 'Saturday', y: 5 },
                    { x: 'Sunday', y: 6 },
                ],
                barRatio: 0.4,
                xLabelAngle: 35,
                hideHover: 'auto',
                xkey: 'x',
                ykeys: ['y'],
                labels: ['Y'],
                barColors: ['#5969ff'],
                    //  resize: true,
                    //     gridTextSize: '14px'

            });
        }


        if ($('#morris_stacked').length) {
            // Use Morris.Bar
            Morris.Bar({
                element: 'morris_stacked',
                data: [
                    { x: '2011 Q1', y: 3, z: 2, a: 3 },
                    { x: '2011 Q2', y: 2, z: null, a: 1 },
                    { x: '2011 Q3', y: 0, z: 2, a: 4 },
                    { x: '2011 Q4', y: 2, z: 4, a: 3 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                stacked: true,
                   barColors: ['#5969ff', '#ff407b', '#25d5f2'],
                     resize: true,
                        gridTextSize: '14px'
            });
        }


        if ($('#morris_udateing').length) {
            var nReloads = 0;

            function data(offset) {
                var ret = [];
                for (var x = 0; x <= 360; x += 10) {
                    var v = (offset + x) % 360;
                    ret.push({
                        x: x,
                        y: Math.sin(Math.PI * v / 180).toFixed(4),
                        z: Math.cos(Math.PI * v / 180).toFixed(4)
                    });
                }
                return ret;
            }
            var graph = Morris.Line({
                element: 'morris_udateing',
                data: data(0),
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['sin()', 'cos()'],
                parseTime: false,
                ymin: -1.0,
                ymax: 1.0,
                hideHover: true,
                lineColors: ['#5969ff', '#ff407b'],
                  resize: true
            });

            function update() {
                nReloads++;
                graph.setData(data(5 * nReloads));
                $('#reloadStatus').text(nReloads + ' reloads');
            }
            setInterval(update, 100);
        }


        if ($('#morris_donut').length) {
            Morris.Donut({
                element: 'morris_donut',
                data: [
                    { value: 70, label: 'foo' },
                    { value: 15, label: 'bar' },
                    { value: 10, label: 'baz' },
                    { value: 5, label: 'A really really long label' }
                ],
             
                labelColor: '#2e2f39',
                   gridTextSize: '14px',
                colors: [
                     "#5969ff",
                                "#ff407b",
                                "#25d5f2",
                                "#ffc750"
                               
                ],

                formatter: function(x) { return x + "%" },
                  resize: true
            });
        }








    });

})(window, document, window.jQuery);