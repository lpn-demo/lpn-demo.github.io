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
	var chart4_2 = am4core.create("chartdiv4_2", am4charts.XYChart);
	chart4_2.language.locale = am4lang_ru_RU;

	chart4_2.data = [{
		"date": "2012-07-27",
		"value": 13
	}, {
		"date": "2012-07-28",
		"value": 11
	}, {
		"date": "2012-07-29",
		"value": 15
	}, {
		"date": "2012-07-30",
		"value": 16
	}, {
		"date": "2012-07-31",
		"value": 18
	}, {
		"date": "2012-08-01",
		"value": 13
	}, {
		"date": "2012-08-02",
		"value": 22
	}, {
		"date": "2012-08-03",
		"value": 23
	}, {
		"date": "2012-08-04",
		"value": 20
	}, {
		"date": "2012-08-05",
		"value": 17
	}, {
		"date": "2012-08-06",
		"value": 16
	}, {
		"date": "2012-08-07",
		"value": 18
	}, {
		"date": "2012-08-08",
		"value": 21
	}, {
		"date": "2012-08-09",
		"value": 26
	}, {
		"date": "2012-08-10",
		"value": 24
	}, {
		"date": "2012-08-11",
		"value": 29
	}, {
		"date": "2012-08-12",
		"value": 32
	}, {
		"date": "2012-08-13",
		"value": 18
	}, {
		"date": "2012-08-14",
		"value": 24
	}, {
		"date": "2012-08-15",
		"value": 22
	}, {
		"date": "2012-08-16",
		"value": 18
	}, {
		"date": "2012-08-17",
		"value": 19
	}, {
		"date": "2012-08-18",
		"value": 14
	}, {
		"date": "2012-08-19",
		"value": 15
	}];
// Create axes
var dateAxis = chart4_2.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart4_2.yAxes.push(new am4charts.ValueAxis());
// Create series
var series = chart4_2.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.strokeWidth = 2;
series.minBulletDistance = 15;
series.tensionX = 0.77;
// color line
series.stroke = am4core.color("#4d69d7");
series.fill = am4core.color("rgba(77, 105, 215, 0.3)");
series.fillOpacity = 0.1;
// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 1;
series.tooltip.background.strokeOpacity = 1;
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";
series.tooltip.getFillFromObject = false;
// wrapper for tooltips
series.tooltip.background.fill = am4core.color("#fff");
series.tooltipHTML  = `<center class="chartTooltip"><span class="data">{date}</span><span class="value">{value}</span></center>`;
// Make bullets grow on hover
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");
bullet.properties.scale = 0;
var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;
// disable cursorToolTip (X,Y)
valueAxis.cursorTooltipEnabled = false;
dateAxis.cursorTooltipEnabled = false;
// Make a panning cursor
chart4_2.cursor = new am4charts.XYCursor();
chart4_2.cursor.behavior = "panXY";
chart4_2.cursor.xAxis = dateAxis;
chart4_2.cursor.snapToSeries = series;
// Create a horizontal scrollbar with previe and place it underneath the date axis
chart4_2.scrollbarX = new am4charts.XYChartScrollbar();

chart4_2.scrollbarX.series.push(series);
chart4_2.scrollbarX.parent = chart4_2.bottomAxesContainer;
chart4_2.scrollbarX.background.fill = am4core.color("rgba(190, 196, 206, 0.19)");
chart4_2.scrollbarX.minHeight   = 45;
chart4_2.events.on("ready", function () {
	dateAxis.zoom({start:0.1, end:1});
});


// chart 5 
	var chart5_2 = am4core.create("chartdiv5_2", am4charts.XYChart);
	chart5_2.language.locale = am4lang_ru_RU;

	chart5_2.data = [{
		"date": "2012-07-27",
		"value": 13
	}, {
		"date": "2012-07-28",
		"value": 11
	}, {
		"date": "2012-07-29",
		"value": 15
	}, {
		"date": "2012-07-30",
		"value": 16
	}, {
		"date": "2012-07-31",
		"value": 18
	}, {
		"date": "2012-08-01",
		"value": 13
	}, {
		"date": "2012-08-02",
		"value": 22
	}, {
		"date": "2012-08-03",
		"value": 23
	}, {
		"date": "2012-08-04",
		"value": 20
	}, {
		"date": "2012-08-05",
		"value": 17
	}, {
		"date": "2012-08-06",
		"value": 16
	}, {
		"date": "2012-08-07",
		"value": 18
	}, {
		"date": "2012-08-08",
		"value": 21
	}, {
		"date": "2012-08-09",
		"value": 26
	}, {
		"date": "2012-08-10",
		"value": 24
	}, {
		"date": "2012-08-11",
		"value": 29
	}, {
		"date": "2012-08-12",
		"value": 32
	}, {
		"date": "2012-08-13",
		"value": 18
	}, {
		"date": "2012-08-14",
		"value": 24
	}, {
		"date": "2012-08-15",
		"value": 22
	}, {
		"date": "2012-08-16",
		"value": 18
	}, {
		"date": "2012-08-17",
		"value": 19
	}, {
		"date": "2012-08-18",
		"value": 14
	}, {
		"date": "2012-08-19",
		"value": 15
	}];
// Create axes
var dateAxis = chart5_2.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart5_2.yAxes.push(new am4charts.ValueAxis());
// Create series
var series = chart5_2.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.strokeWidth = 2;
series.minBulletDistance = 15;
series.tensionX = 0.77;
// color line
series.stroke = am4core.color("#4d69d7");
series.fill = am4core.color("rgba(77, 105, 215, 0.3)");
series.fillOpacity = 0.1;
// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 1;
series.tooltip.background.strokeOpacity = 1;
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";
series.tooltip.getFillFromObject = false;
// wrapper for tooltips
series.tooltip.background.fill = am4core.color("#fff");
series.tooltipHTML  = `<center class="chartTooltip"><span class="data">{date}</span><span class="value">{value}</span></center>`;
// Make bullets grow on hover
var bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");
bullet.properties.scale = 0;
var bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;
// disable cursorToolTip (X,Y)
valueAxis.cursorTooltipEnabled = false;
dateAxis.cursorTooltipEnabled = false;
// Make a panning cursor
chart5_2.cursor = new am4charts.XYCursor();
chart5_2.cursor.behavior = "panXY";
chart5_2.cursor.xAxis = dateAxis;
chart5_2.cursor.snapToSeries = series;
// Create a horizontal scrollbar with previe and place it underneath the date axis
chart5_2.scrollbarX = new am4charts.XYChartScrollbar();

chart5_2.scrollbarX.series.push(series);
chart5_2.scrollbarX.parent = chart5_2.bottomAxesContainer;
chart5_2.scrollbarX.background.fill = am4core.color("rgba(190, 196, 206, 0.19)");
chart5_2.scrollbarX.minHeight   = 45;
chart5_2.events.on("ready", function () {
	dateAxis.zoom({start:0.1, end:1});
});


});


