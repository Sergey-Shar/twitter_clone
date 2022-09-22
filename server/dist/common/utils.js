"use strict";
const generateString = (length, chars) => Array(length)
    .fill('')
    .map((v) => chars[Math.floor(Math.random() * chars.length)])
    .join('');
module.exports = generateString;
