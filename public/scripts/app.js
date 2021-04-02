"use strict";

var root = document.getElementById("root");
var todo = {
  title: "Todo List",
  description: "my todo List",
  items: []
};

function submit(event) {
  event.preventDefault();
  var item = event.target.elements.txt.value;

  if (item) {
    todo.items.push(item);
    event.target.elements.txt.value = "";
    render();
  }
}

function clear() {
  todo.items = [];
  render();
}

function render() {
  var html = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, todo.title), /*#__PURE__*/React.createElement("p", null, todo.description), /*#__PURE__*/React.createElement("ul", null, todo.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, item);
  })), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    onClick: clear
  }, "CLear")), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txt"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Send")));
  ReactDOM.render(html, root);
}

render();
