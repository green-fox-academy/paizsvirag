'use strict';

import { test } from "tape";
import { getApples } from "./apples";

test('Looking for apple', t=> {
  let text = getApples('apple');
  t.equal(text, 'apple');
  t.end();
});