$(function() {


	am4core.useTheme(am4themes_animated);
	am4core.useTheme(am4themes_myTheme);
	function am4themes_myTheme(target) {
		if (target instanceof am4core.InterfaceColorSet) {
			target.setFor("secondaryButton", am4core.color("#fff"));
			target.setFor("secondaryButtonHover", am4core.color("#fff"));
			target.setFor("secondaryButtonDown", am4core.color("#fff"));
			target.setFor("secondaryButtonActive", am4core.color("#fff"));
			target.setFor("text", am4core.color("#bec4ce"));
			target.setFor("alternativeText", am4core.color("#4d69d7"));
		}
	
	}

	// chart 4 
	var chart5_2 = am4core.create("chartdiv5_2", am4charts.XYChart);
	chart5_2.language.locale = am4lang_ru_RU;

	chart5_2.data = [{
  "date": "2013-01-16",
  "buy": 71,
  "sell": 75
}, {
  "date": "2013-01-17",
  "buy": 74,
  "sell": 78
}, {
  "date": "2013-01-18",
  "buy": 78,
  "sell": 88
}, {
  "date": "2013-01-19",
  "buy": 85,
  "sell": 89
}, {
  "date": "2013-01-20",
  "buy": 82,
  "sell": 89
}, {
  "date": "2013-01-21",
  "buy": 83,
  "sell": 85
}, {
  "date": "2013-01-22",
  "buy": 88,
  "sell": 92
}, {
  "date": "2013-01-23",
  "buy": 85,
  "sell": 90
}, {
  "date": "2013-01-24",
  "buy": 85,
  "sell": 91
}, {
  "date": "2013-01-25",
  "buy": 80,
  "sell": 84
}, {
  "date": "2013-01-26",
  "buy": 87,
  "sell": 92
}, {
  "date": "2013-01-27",
  "buy": 84,
  "sell": 87
}, {
  "date": "2013-01-28",
  "buy": 83,
  "sell": 88
}, {
  "date": "2013-01-29",
  "buy": 84,
  "sell": 87
}, {
  "date": "2013-01-30",
  "buy": 81,
  "sell": 85
}];
// Create axes
var dateAxis = chart5_2.xAxes.push(new am4charts.DateAxis());

var valueAxis1 = chart5_2.yAxes.push(new am4charts.ValueAxis());
var valueAxis2 = chart5_2.yAxes.push(new am4charts.ValueAxis());
// Create series
var series1 = chart5_2.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "buy";
series1.dataFields.dateX = "date";
series1.strokeWidth = 2;
series1.minBulletDistance = 15;
series1.tensionX = 0.77;
// color line
series1.stroke = am4core.color("#4d69d7");
series1.fill = am4core.color("rgba(77, 105, 215, 0.3)");
series1.fillOpacity = 0.1;
// Drop-shaped tooltips
series1.tooltip.background.cornerRadius = 1;
series1.tooltip.background.strokeOpacity = 1;
series1.tooltip.label.minWidth = 40;
series1.tooltip.label.minHeight = 40;
series1.tooltip.label.textAlign = "middle";
series1.tooltip.label.textValign = "middle";
series1.tooltip.getFillFromObject = false;
// wrapper for tooltips
series1.tooltip.background.fill = am4core.color("#fff");
series1.tooltipHTML  = `<center class="chartTooltip">
												<p>Пиковое значение</p>
												<p class="data">{date}</p>
												<p>Пиковое значение: <span class="value buy">{buy} RUB</span></p>
												<p>Пиковое значение: <span class="value sell">{sell} RUB</span></p>
											</center>`;


var series2 = chart5_2.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "sell";
series2.dataFields.dateX = "date";
series2.strokeWidth = 2;
series2.minBulletDistance = 15;
series2.tensionX = 0.77;
// color line
series2.stroke = am4core.color("#bec4ce");
series2.fill = am4core.color("rgba(77, 105, 215, 0.3)");
series2.fillOpacity = 0.1;

// Drop-shaped tooltips
series2.tooltip.background.strokeOpacity = 0;
series2.tooltip.label.minWidth = 0;
series2.tooltip.label.minHeight = 0;
series2.tooltip.getFillFromObject = false;
// wrapper for tooltips
series2.tooltip.background.fill = am4core.color("#fff");
series2.tooltip.disabled = true;
series2.tooltipHTML  = `<center class="chartTooltip"></center>`;


// Make bullets grow on hover
var bullet = series1.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");
bullet.properties.scale = 0;
var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make bullets grow on hover
var bullet2 = series2.bullets.push(new am4charts.CircleBullet());
bullet2.circle.strokeWidth = 2;
bullet2.circle.radius = 4;
bullet2.circle.fill = am4core.color("#fff");
bullet2.properties.scale = 0;
var bullethover = bullet2.states.create("hover");
bullethover.properties.scale = 1.3;


// disable cursorToolTip (X,Y)
valueAxis1.cursorTooltipEnabled = false;
dateAxis.cursorTooltipEnabled = false;
// Make a panning cursor
chart5_2.cursor = new am4charts.XYCursor();
chart5_2.cursor.behavior = "panXY";
chart5_2.cursor.xAxis = dateAxis;
chart5_2.cursor.snapToSeries = series1;
// Create a horizontal scrollbar with previe and place it underneath the date axis
chart5_2.scrollbarX = new am4charts.XYChartScrollbar();

chart5_2.scrollbarX.series.push(series1);
chart5_2.scrollbarX.parent = chart5_2.bottomAxesContainer;
chart5_2.scrollbarX.background.fill = am4core.color("rgba(190, 196, 206, 0.19)");
chart5_2.scrollbarX.minHeight   = 45;
chart5_2.events.on("ready", function () {
	dateAxis.zoom({start:0.1, end:1});
});


});


