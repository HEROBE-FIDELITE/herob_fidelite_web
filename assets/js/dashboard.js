(function ($) {
  $(function () {

    if ($("#chart").length) {
      var areaData = {
        labels: ["Valide", "Restant"],
        datasets: [{
          data: [70, 30],
          backgroundColor: [
            "#4B49AC", "#999999",
          ],
          borderColor: "rgba(0,0,0,0)"
        }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
            borderWidth: 4
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="report-chart">');
          text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Achats Efectué</p></div>');
          text.push('<p class="mb-0">70000 F CFA</p>');
          text.push('</div>');
          text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Achats Restant</p></div>');
          text.push('<p class="mb-0">30000 F CFA</p>');
          text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var northAmericaChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "500 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#13381B";

          var text = "70",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var northAmericaChartCanvas = $("#north-america-chart").get(0).getContext("2d");
      var northAmericaChart = new Chart(northAmericaChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: northAmericaChartPlugins
      });
      document.getElementById('chart-legend').innerHTML = northAmericaChart.generateLegend();
    }

    // if ($(".chart_alimentation")) {
    //   var val = ($(".chart_alimentation")[0].attributes.value)

    //   var areaData = {
    //     labels: ["Valide", "Restant"],
    //     datasets: [{
    //         data: [60, 30],
    //         backgroundColor: [
    //           "#4B49AC","#999999",
    //         ],
    //         borderColor: "rgba(0,0,0,0)"
    //       }
    //     ]
    //   };
    //   var areaOptions = {
    //     responsive: true,
    //     maintainAspectRatio: true,
    //     segmentShowStroke: false,
    //     cutoutPercentage: 78,
    //     elements: {
    //       arc: {
    //           borderWidth: 4
    //       }
    //     },      
    //     legend: {
    //       display: false
    //     },
    //     tooltips: {
    //       enabled: true
    //     },
    //     legendCallback: function(chart) { 
    //       var text = [];
    //       text.push('<div class="report-chart">');
    //         text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Achats Efectué</p></div>');
    //         text.push('<p class="mb-0">30000 F CFA</p>');
    //         text.push('</div>');
    //         text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Achats Restant</p></div>');
    //         text.push('<p class="mb-0">20000 F CFA</p>');
    //         text.push('</div>');
    //       text.push('</div>');
    //       return text.join("");
    //     },
    //   }
    //   var southAmericaChartPlugins = {
    //     beforeDraw: function(chart) {
    //       var width = chart.chart.width,
    //           height = chart.chart.height,
    //           ctx = chart.chart.ctx;

    //       ctx.restore();
    //       var fontSize = 3.125;
    //       ctx.font = "600 " + fontSize + "em sans-serif";
    //       ctx.textBaseline = "middle";
    //       ctx.fillStyle = "#000";

    //       var text = "60",
    //           textX = Math.round((width - ctx.measureText(text).width) / 2),
    //           textY = height / 2;

    //       ctx.fillText(text, textX, textY);
    //       ctx.save();
    //     }
    //   }
    //   var southAmericaChartCanvas = $(".chart_alimentation").get(0).getContext("2d");
    //   var southAmericaChart = new Chart(southAmericaChartCanvas, {
    //     type: 'doughnut',
    //     data: areaData,
    //     options: areaOptions,
    //     plugins: southAmericaChartPlugins
    //   });
    //   document.getElementById('south-america-legend').innerHTML = southAmericaChart.generateLegend();
    // }

    if ($("#south-america-chart").length) {
      var areaData = {
        labels: ["Valide", "Restant"],
        datasets: [{
          data: [60, 30],
          backgroundColor: [
            "#4B49AC", "#999999",
          ],
          borderColor: "rgba(0,0,0,0)"
        }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
            borderWidth: 4
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="report-chart">');
          text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Achats Efectué</p></div>');
          text.push('<p class="mb-0">30000 F CFA</p>');
          text.push('</div>');
          text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Achats Restant</p></div>');
          text.push('<p class="mb-0">20000 F CFA</p>');
          text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var southAmericaChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#000";

          var text = "60",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var southAmericaChartCanvas = $("#south-america-chart").get(0).getContext("2d");
      var southAmericaChart = new Chart(southAmericaChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: southAmericaChartPlugins
      });
      document.getElementById('south-america-legend').innerHTML = southAmericaChart.generateLegend();
    }

    function format(d) {
      // `d` is the original data object for the row
      return '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;">' +
        '<tr class="expanded-row">' +
        '<td colspan="8" class="row-bg"><div><div class="d-flex justify-content-between"><div class="cell-hilighted"><div class="d-flex mb-2"><div class="mr-2 min-width-cell"><p>Policy start date</p><h6>25/04/2020</h6></div><div class="min-width-cell"><p>Policy end date</p><h6>24/04/2021</h6></div></div><div class="d-flex"><div class="mr-2 min-width-cell"><p>Sum insured</p><h5>$26,000</h5></div><div class="min-width-cell"><p>Premium</p><h5>$1200</h5></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Quote no.</p><h6>Incs234</h6></div><div class="mr-2"><p>Vehicle Reg. No.</p><h6>KL-65-A-7004</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Policy number</p><h6>Incsq123456</h6></div><div class="mr-2"><p>Policy number</p><h6>Incsq123456</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-3 d-flex"><div class="highlighted-alpha"> A</div><div><p>Agent / Broker</p><h6>Abcd Enterprices</h6></div></div><div class="mr-2 d-flex"> <img src="../../images/faces/face5.jpg" alt="profile"/><div><p>Policy holder Name & ID Number</p><h6>Phillip Harris / 1234567</h6></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Branch</p><h6>Koramangala, Bangalore</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Channel</p><h6>Online</h6></div></div></div></div></td>'
      '</tr>' +
        '</table>';
    }
    // var table = $('#example').DataTable( {
    //   "ajax": "assets/js/data.txt",
    //   "columns": [
    //       { "data": "Quote" },
    //       { "data": "Product" },
    //       { "data": "Business" },
    //       { "data": "Policy" }, 
    //       { "data": "Premium" }, 
    //       { "data": "Status" }, 
    //       { "data": "Updated" }, 
    //       {
    //         "className":      'details-control',
    //         "orderable":      false,
    //         "data":           null,
    //         "defaultContent": ''
    //       }
    //   ],
    //   "order": [[1, 'asc']],
    //   "paging":   false,
    //   "ordering": true,
    //   "info":     false,
    //   "filter": false,
    //   columnDefs: [{
    //     orderable: false,
    //     className: 'select-checkbox',
    //     targets: 0
    //   }],
    //   select: {
    //     style: 'os',
    //     selector: 'td:first-child'
    //   }
    // } );
    $('#example tbody').on('click', 'td.details-control', function () {
      // var tr = $(this).closest('tr');
      // var row = table.row( tr );

      // if ( row.child.isShown() ) {
      // This row is already open - close it
      // row.child.hide();
      // tr.removeClass('shown');
      // }
      // else {
      //     // Open this row
      //     // row.child( format(row.data()) ).show();
      //     // tr.addClass('shown');
      // }
    });

  });
})(jQuery);


function chart_object() {


  for (i = 1; i <= $(".chart_alimentation").length; i++) {


    var areaData = {
      labels: ["Valide", "Restant"],
      datasets: [{
        data: [60, 30],
        backgroundColor: [
          "#4B49AC", "#999999",
        ],
        borderColor: "rgba(0,0,0,0)"
      }
      ]
    };
    var areaOptions = {
      responsive: true,
      maintainAspectRatio: true,
      segmentShowStroke: false,
      cutoutPercentage: 78,
      elements: {
        arc: {
          borderWidth: 4
        }
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: true
      },
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="report-chart">');
        text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Achats Efectué</p></div>');
        text.push('<p class="mb-0">30000 F CFA</p>');
        text.push('</div>');
        text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Achats Restant</p></div>');
        text.push('<p class="mb-0">20000 F CFA</p>');
        text.push('</div>');
        text.push('</div>');
        return text.join("");
      },
    }
    var southAmericaChartPlugins = {
      beforeDraw: function (chart) {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = 3.125;
        ctx.font = "600 " + fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";

        var text = "60",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
    var link = ".chart_alimentation" + i

    console.log(document.getElementsByClassName(link))

    var southAmericaChartCanvas = $(link).get(0).getContext("2d");
    var southAmericaChart = new Chart(southAmericaChartCanvas, {
      type: 'doughnut',
      data: areaData,
      options: areaOptions,
      plugins: southAmericaChartPlugins
    });
    document.getElementById('legend' + i).innerHTML = southAmericaChart.generateLegend();


  };




}

chart_object()