import { bar } from './lib/anotherRoot';

function addBar(y) {
  return bar() + y;
}

export default addBar;
