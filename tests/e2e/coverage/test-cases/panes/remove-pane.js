function simpleData() {
	return [
		{ time: 1663740000, value: 10 },
		{ time: 1663750000, value: 20 },
		{ time: 1663760000, value: 30 },
	];
}

function interactionsToPerform() {
	return [];
}

let chart;
function beforeInteractions(container) {
	chart = LightweightCharts.createChart(container);

	const mainSeries = chart.addLineSeries();
	const secondSeries = chart.addLineSeries({}, 1);

	mainSeries.setData(simpleData());
	secondSeries.setData(simpleData());

	return Promise.resolve();
}

function afterInteractions() {
	chart.removePane(1);
	return Promise.resolve();
}
