import timestamp from 'time-stamp';
import colors from 'ansi-colors';

function getTimestamp() {
    return '[' + timestamp('HH:mm:ss') + ']';
}

function log() {
    info(...arguments);
    return this;
}

function debug() {
    Array.prototype.unshift.call(arguments, getTimestamp());
    console.info.apply(console, arguments);
    return this;
}

function info() {
    Array.prototype.unshift.call(arguments, getTimestamp());
    console.info.apply(console, arguments);
    return this;
}

function warn() {
    Array.prototype.unshift.call(arguments, getTimestamp());
    console.warn.apply(console, arguments);
    return this;
}

function error() {
    Array.prototype.unshift.call(arguments, getTimestamp());
    console.error.apply(console, arguments);
    return this;
}

function setLevel(level) {
    setNumLevel(numLevel(level));
}

function numLevel(level) {
    switch ((level || 'info').toLowerCase()) {
    case 'error':
        return 0;
    case 'warn':
        return 1;
    default:
        return 2;
    case 'debug':
        return 3;
    }
}

let level = 0;

function setNumLevel(innerLevel) {
    level = innerLevel;
}

function nop() {}

const errOps = error => (level >= 0 ? error: nop);
const warnOps = error => (level >= 1 ? warn: nop);
const infoOps = error => (level >= 2 ? info: nop);
const debugOps = error => (level >= 3 ? debug: nop);

export default {
    log,
    setLevel,
    error: errOps,
    warn: warnOps,
    info: infoOps,
    debug: debugOps
};

setLevel('info');

var inBrowser = function () {
    return typeof window !== 'undefined' && this === window
}();

if (inBrowser) {
    colors.red = colors.magenta = colors.blue = colors.green = colors.underline = colors.black = colors.gray = colors.white = colors.yellow = function (msg) {
        return msg;
    }
}
