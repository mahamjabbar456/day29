// Question 85
function PositionofSubstring(sent) {
    return sent.indexOf("code");
}
let sentence = "I want to learn Javascript code first and then start coding in typescript.";
console.log(PositionofSubstring(sentence));
// Question 86
function TextPresence(sent) {
    return sent.includes("Javascript");
}
console.log(TextPresence(sentence));
// Question 87
function Substirng(sent) {
    return sent.substring(0, 27);
}
console.log(Substirng(sentence));
export {};
