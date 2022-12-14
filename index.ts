import { of } from 'rxjs';
import { scan } from 'rxjs/operators';

const source = of(1, 2, 3);
// basic scan example, sum over time starting with zero
const example = source.pipe(
  scan((acc, curr) => {
    console.log('acc: ' + acc);
    console.log('curr: ' + curr);
    return acc + curr;
  }, 0)
);
// log accumulated values
// output: 1,3,6
const subscribe = example.subscribe((val) => console.log(val));
