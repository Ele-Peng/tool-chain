
import {parseHTML} from "../src/parser.js";
let assert = require("assert");

it('parser a single element', function () {
    let doc = parseHTML("<div></div>");
    console.log("doc", doc);
    let div = doc.children[0];
    assert.equal(div.tagName, "div");
    assert.equal(div.children.length, 0);
    assert.equal(div.type, "element");
    assert.equal(div.attributes.length, 2);
});


it('parser a single element with text content', function () {
    let doc = parseHTML("<div>hello</div>");
    let div = doc.children[0];
    let text = div.children[0];
    assert.equal(text.content, "hello");
    assert.equal(text.type, "text");
});

it("Tag start end doesn't match!", function () {
    try {
        let doc = parseHTML("<div></vid>");
    } catch (e) {
        assert.equal(e.message, "Tag start end doesn't match!");
    }
});

it("text with <", function () {
    let doc = parseHTML("<div> a < b</div>");
    let div = doc.children[0];
    let text = div.children[0];
    assert.equal(text.content, " a < b");
    assert.equal(text.type, "text");
});

it("with property", function () {
    let doc = parseHTML("<div id=a class='cls' data=\"abc\" ></div>");
    let div = doc.children[0];

    let count = 0;
    for (let attr of div.attributes) {
        if (attr.name === "id") {
            count ++;
            assert.equal(attr.value, "a");
            return ;
        }
        if (attr.name === "class") {
            count ++;
            assert.equal(attr.value, "cls");
            return ;
        }
        if (attr.name === "data") {
            count ++;
            assert.equal(attr.value, "abc");
            return ;
        }
    }
    assert.ok(count === 3);
});

it("end space with double quoted property", function () {
    let doc = parseHTML("<div id=a class='cls' data=\"abc\"></div>");
    let div = doc.children[0];

    let count = 0;
    for (let attr of div.attributes) {
        if (attr.name === "id") {
            count ++;
            assert.equal(attr.value, "a");
            return ;
        }
        if (attr.name === "class") {
            count ++;
            assert.equal(attr.value, "cls");
            return ;
        }
        if (attr.name === "data") {
            count ++;
            assert.equal(attr.value, "abc");
            return ;
        }
    }
    assert.ok(count === 3);
});