import * as L from "partial.lenses";
const ace = require("brace");
require("brace/mode/javascript");
require("brace/theme/monokai");
require("brace/keybinding/vim");

window.L = L;

const editor = ace.edit("editor");
editor.getSession().setMode("ace/mode/javascript");
editor.setTheme("ace/theme/monokai");
editor.setKeyboardHandler("ace/keyboard/vim");
editor.setValue("//Test partial lenses ");
editor.clearSelection();

document.querySelector("#clear").addEventListener("click", () => console.log("ssss") || editor.setValue(""));

