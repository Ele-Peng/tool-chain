// var add = require('../dist/add.js');
// const test = require('ava');
// import { add } from "../dist/add.js";
// import test from "ava";
let mod = require("../src/add.js");
let test = require("ava");

test('foo', t => {
  if (mod.add(3, 4) === 7) {
	  t.pass();
  }
});