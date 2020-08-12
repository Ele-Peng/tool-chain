// var add = require('../dist/add.js');
// const test = require('ava');
// import { add } from "../dist/add.js";
// import test from "ava";

import {add} from "../src/add.js";
let assert = require("assert");

it('should return -1 when the value is not present', function () {
  assert.equal(add(3, 4), 7);
});