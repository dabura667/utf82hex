#!/usr/bin/env node

'use strict';

require('string.prototype.codepointat');
require('string.prototype.repeat');

var codePoint2utf8 = function (code) {
  var bin = parseInt(code).toString(2)
  var ln = 0;
  var mx = 0;
  if (bin.length <= 7) {
    ln = 1;
    mx = 7;
  } else if (bin.length > 7 && bin.length <= 11) {
    ln = 2;
    mx = 11;
  } else if (bin.length > 11 && bin.length <= 16) {
    ln = 3;
    mx = 16;
  } else if (bin.length > 16 && bin.length <= 21) {
    ln = 4;
    mx = 21;
  } else if (bin.length > 21 && bin.length <= 26) {
    ln = 5;
    mx = 26;
  } else if (bin.length > 26 && bin.length <= 31) {
    ln = 6;
    mx = 31;
  };
  var longbin = ("0".repeat(mx) + bin).slice(-mx)
  var result = '';
  for (var i = 0; i < ln; i++) {
    if (ln != 1) {
      if (i == 0) {
        result += parseInt("1".repeat(ln) + "0" + longbin.slice(0,7-ln),2).toString(16);
        longbin = longbin.slice(7-ln);
      } else {
        result += parseInt("10" + longbin.slice(0,6),2).toString(16);
        longbin = longbin.slice(6);
      };
    } else {
      result += ("00" + parseInt(longbin,2).toString(16)).slice(-2);
    };
  };
  return result;
};

var utf8encode = function (inputstring) {
  var result = '';
  for (var i = 0; i < inputstring.length; i++) {
    result += codePoint2utf8(inputstring.codePointAt(i))
  };
  return result;
};

var utf8decode = function (inputstring) {
  try {
    var result = decodeURIComponent(inputstring.toLowerCase().replace(/\s+/g, '').replace(/[0-9a-f]{2}/g, '%$&'));
  } catch(e) {
    throw "Not valid UTF-8 hex code!";
  };
  return result;
};

module.exports = {
  encode: utf8encode,
  decode: utf8decode
};
