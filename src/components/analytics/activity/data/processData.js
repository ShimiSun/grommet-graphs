import { sample1 } from './sample1';
import { sample2 } from './sample2';
import { sample3 } from './sample3';
import { sample4 } from './sample4';

const values1 = [];
sample1.map(point =>
  values1.push({ value: [point.time, point.moving_average] }),
);

let values = [values1];
const values2 = [];
sample2.map(point =>
  values2.push({ value: [point.time, point.moving_average] }),
);

const values3 = [];
sample3.map(point =>
  values3.push({ value: [point.time, point.moving_average] }),
);

const values4 = [];
sample4.map(point =>
  values4.push({ value: [point.time, point.moving_average] }),
);

values = [values1, values2, values3, values4];

export const processsData = values;
