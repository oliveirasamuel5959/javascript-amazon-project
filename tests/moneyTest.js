import { formatCurrency } from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents into dollars');

if (formatCurrency(2095) === '20.95') {
  console.log('test passed');
} else {
  console.error('test failed');
};

console.log('works with zero cents');

if (formatCurrency(0) === '0.00') {
  console.log('test passed');
} else {
  console.error('test failed');
};

console.log('handles rounding correctly');

if (formatCurrency(2000.5) === '20.01') {
  console.log('test passed');
} else {
  console.error('test failed');
};
