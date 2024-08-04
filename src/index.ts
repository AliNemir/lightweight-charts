/// <reference types="_build-time-constants" />

import { customStyleDefaults, seriesOptionsDefaults } from './api/options/series-options-defaults';
import { CustomSeriesOptions } from './model/series-options';

export { LineStyle, LineType } from './renderers/draw-line';

export { TrackingModeExitMode } from './model/chart-model';
export { CrosshairMode } from './model/crosshair';
export { MismatchDirection } from './model/plot-list';
export { PriceScaleMode } from './model/price-scale';
export { PriceLineSource, LastPriceAnimationMode } from './model/series-options';
export { ColorType } from './model/layout-options';

export { isBusinessDay, isUTCTimestamp } from './model/horz-scale-behavior-time/types';
export { TickMarkType } from './model/horz-scale-behavior-time/types';
export const customSeriesDefaultOptions: CustomSeriesOptions = {
	...seriesOptionsDefaults,
	...customStyleDefaults,
};

export { createChart, createChartEx, defaultHorzScaleBehavior } from './api/create-chart';
export { createYieldCurveChart } from './api/create-yield-curve-chart';
export { createOptionsChart } from './api/create-options-chart';

export { UpDownMarkersPrimitive } from './plugins/up-down-markers-plugin/primitive';

/**
 * Returns the current version as a string. For example `'3.3.0'`.
 */
export function version(): string {
	return process.env.BUILD_VERSION;
}
