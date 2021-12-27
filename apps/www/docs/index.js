/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function* parse(text) {
    let value = '';
    let tokenStart = 0;
    let open = false;
    for (let i = 0; i < text.length; i += 1) {
        if (text[i] === '{' && text[i + 1] === '{' && text[i - 1] !== '\\' && !open) {
            open = true;
            if (value)
                yield { type: 'string', start: tokenStart, end: i, value };
            value = '{{';
            tokenStart = i;
            i += 2;
        }
        else if (text[i] === '}' && text[i + 1] === '}' && text[i - 1] !== '\\' && open) {
            open = false;
            yield { type: 'part', start: tokenStart, end: i + 2, value: value.slice(2).trim() };
            value = '';
            i += 2;
            tokenStart = i;
        }
        value += text[i] || '';
    }
    if (value)
        yield { type: 'string', start: tokenStart, end: text.length, value };
}

var __classPrivateFieldSet$2 = (window && window.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet$2 = (window && window.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _setter, _value;
class AttributeTemplatePart {
    constructor(setter, expression) {
        this.expression = expression;
        _setter.set(this, void 0);
        _value.set(this, '');
        __classPrivateFieldSet$2(this, _setter, setter);
        __classPrivateFieldGet$2(this, _setter).updateParent('');
    }
    get attributeName() {
        return __classPrivateFieldGet$2(this, _setter).attr.name;
    }
    get attributeNamespace() {
        return __classPrivateFieldGet$2(this, _setter).attr.namespaceURI;
    }
    get value() {
        return __classPrivateFieldGet$2(this, _value);
    }
    set value(value) {
        __classPrivateFieldSet$2(this, _value, value || '');
        __classPrivateFieldGet$2(this, _setter).updateParent(value);
    }
    get element() {
        return __classPrivateFieldGet$2(this, _setter).element;
    }
    get booleanValue() {
        return __classPrivateFieldGet$2(this, _setter).booleanValue;
    }
    set booleanValue(value) {
        __classPrivateFieldGet$2(this, _setter).booleanValue = value;
    }
}
_setter = new WeakMap(), _value = new WeakMap();
class AttributeValueSetter {
    constructor(element, attr) {
        this.element = element;
        this.attr = attr;
        this.partList = [];
    }
    get booleanValue() {
        return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
    }
    set booleanValue(value) {
        if (this.partList.length !== 1) {
            throw new DOMException('Operation not supported', 'NotSupportedError');
        }
        this.partList[0].value = value ? '' : null;
    }
    append(part) {
        this.partList.push(part);
    }
    updateParent(partValue) {
        if (this.partList.length === 1 && partValue === null) {
            this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
        }
        else {
            const str = this.partList.map(s => (typeof s === 'string' ? s : s.value)).join('');
            this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, str);
        }
    }
}

var __classPrivateFieldSet$1 = (window && window.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet$1 = (window && window.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _parts$1;
class NodeTemplatePart {
    constructor(node, expression) {
        this.expression = expression;
        _parts$1.set(this, void 0);
        __classPrivateFieldSet$1(this, _parts$1, [node]);
        node.textContent = '';
    }
    get value() {
        return __classPrivateFieldGet$1(this, _parts$1).map(node => node.textContent).join('');
    }
    set value(string) {
        this.replace(string);
    }
    get previousSibling() {
        return __classPrivateFieldGet$1(this, _parts$1)[0].previousSibling;
    }
    get nextSibling() {
        return __classPrivateFieldGet$1(this, _parts$1)[__classPrivateFieldGet$1(this, _parts$1).length - 1].nextSibling;
    }
    replace(...nodes) {
        const parts = nodes.map(node => {
            if (typeof node === 'string')
                return new Text(node);
            return node;
        });
        if (!parts.length)
            parts.push(new Text(''));
        __classPrivateFieldGet$1(this, _parts$1)[0].before(...parts);
        for (const part of __classPrivateFieldGet$1(this, _parts$1))
            part.remove();
        __classPrivateFieldSet$1(this, _parts$1, parts);
    }
}
_parts$1 = new WeakMap();

function createProcessor(processPart) {
    return {
        createCallback(instance, parts, params) {
            this.processCallback(instance, parts, params);
        },
        processCallback(_, parts, params) {
            var _a;
            if (typeof params !== 'object' || !params)
                return;
            for (const part of parts) {
                if (part.expression in params) {
                    const value = (_a = params[part.expression]) !== null && _a !== void 0 ? _a : '';
                    processPart(part, value);
                }
            }
        }
    };
}
function processPropertyIdentity(part, value) {
    part.value = String(value);
}
function processBooleanAttribute(part, value) {
    if (typeof value === 'boolean' &&
        part instanceof AttributeTemplatePart &&
        typeof part.element[part.attributeName] === 'boolean') {
        part.booleanValue = value;
        return true;
    }
    return false;
}
const propertyIdentity = createProcessor(processPropertyIdentity);

var __classPrivateFieldSet = (window && window.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (window && window.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _processor, _parts;
function* collectParts(el) {
    const walker = el.ownerDocument.createTreeWalker(el, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        if (node instanceof Element && node.hasAttributes()) {
            for (let i = 0; i < node.attributes.length; i += 1) {
                const attr = node.attributes.item(i);
                if (attr && attr.value.includes('{{')) {
                    const valueSetter = new AttributeValueSetter(node, attr);
                    for (const token of parse(attr.value)) {
                        if (token.type === 'string') {
                            valueSetter.append(token.value);
                        }
                        else {
                            const part = new AttributeTemplatePart(valueSetter, token.value);
                            valueSetter.append(part);
                            yield part;
                        }
                    }
                }
            }
        }
        else if (node instanceof Text && node.textContent && node.textContent.includes('{{')) {
            for (const token of parse(node.textContent)) {
                if (token.end < node.textContent.length)
                    node.splitText(token.end);
                if (token.type === 'part')
                    yield new NodeTemplatePart(node, token.value);
                break;
            }
        }
    }
}
class TemplateInstance extends DocumentFragment {
    constructor(template, params, processor = propertyIdentity) {
        var _a, _b;
        super();
        _processor.set(this, void 0);
        _parts.set(this, void 0);
        // This is to fix an inconsistency in Safari which prevents us from
        // correctly sub-classing DocumentFragment.
        // https://bugs.webkit.org/show_bug.cgi?id=195556
        if (Object.getPrototypeOf(this !== TemplateInstance.prototype)) {
            Object.setPrototypeOf(this, TemplateInstance.prototype);
        }
        this.appendChild(template.content.cloneNode(true));
        __classPrivateFieldSet(this, _parts, Array.from(collectParts(this)));
        __classPrivateFieldSet(this, _processor, processor);
        (_b = (_a = __classPrivateFieldGet(this, _processor)).createCallback) === null || _b === void 0 ? void 0 : _b.call(_a, this, __classPrivateFieldGet(this, _parts), params);
    }
    update(params) {
        __classPrivateFieldGet(this, _processor).processCallback(this, __classPrivateFieldGet(this, _parts), params);
    }
}
_processor = new WeakMap(), _parts = new WeakMap();

const directives = new WeakSet();
function isDirective(directiveCallback) {
    return directives.has(directiveCallback);
}
function processDirective(part, value) {
    if (isDirective(value)) {
        value(part);
        return true;
    }
    return false;
}

const eventListeners$1 = new WeakMap();
class EventHandler {
    constructor(element, type) {
        this.element = element;
        this.type = type;
        this.element.addEventListener(this.type, this);
        eventListeners$1.get(this.element).set(this.type, this);
    }
    set(listener) {
        if (typeof listener == 'function') {
            this.handleEvent = listener.bind(this.element);
        }
        else if (typeof listener === 'object' && typeof listener.handleEvent === 'function') {
            this.handleEvent = listener.handleEvent.bind(listener);
        }
        else {
            this.element.removeEventListener(this.type, this);
            eventListeners$1.get(this.element).delete(this.type);
        }
    }
    static for(part) {
        if (!eventListeners$1.has(part.element))
            eventListeners$1.set(part.element, new Map());
        const type = part.attributeName.slice(2);
        const elementListeners = eventListeners$1.get(part.element);
        if (elementListeners.has(type))
            return elementListeners.get(type);
        return new EventHandler(part.element, type);
    }
}
function processEvent(part, value) {
    if (part instanceof AttributeTemplatePart && part.attributeName.startsWith('on')) {
        EventHandler.for(part).set(value);
        part.element.removeAttributeNS(part.attributeNamespace, part.attributeName);
        return true;
    }
    return false;
}

function processSubTemplate(part, value) {
    if (value instanceof TemplateResult && part instanceof NodeTemplatePart) {
        value.renderInto(part);
        return true;
    }
    return false;
}
function processDocumentFragment(part, value) {
    if (value instanceof DocumentFragment && part instanceof NodeTemplatePart) {
        if (value.childNodes.length)
            part.replace(...value.childNodes);
        return true;
    }
    return false;
}
function isIterable(value) {
    return typeof value === 'object' && Symbol.iterator in value;
}
function processIterable(part, value) {
    if (!isIterable(value))
        return false;
    if (part instanceof NodeTemplatePart) {
        const nodes = [];
        for (const item of value) {
            if (item instanceof TemplateResult) {
                const fragment = document.createDocumentFragment();
                item.renderInto(fragment);
                nodes.push(...fragment.childNodes);
            }
            else if (item instanceof DocumentFragment) {
                nodes.push(...item.childNodes);
            }
            else {
                nodes.push(String(item));
            }
        }
        if (nodes.length)
            part.replace(...nodes);
        return true;
    }
    else {
        part.value = Array.from(value).join(' ');
        return true;
    }
}
function processPart(part, value) {
    processDirective(part, value) ||
        processBooleanAttribute(part, value) ||
        processEvent(part, value) ||
        processSubTemplate(part, value) ||
        processDocumentFragment(part, value) ||
        processIterable(part, value) ||
        processPropertyIdentity(part, value);
}
const templates = new WeakMap();
const renderedTemplates = new WeakMap();
const renderedTemplateInstances = new WeakMap();
class TemplateResult {
    constructor(strings, values, processor) {
        this.strings = strings;
        this.values = values;
        this.processor = processor;
    }
    get template() {
        if (templates.has(this.strings)) {
            return templates.get(this.strings);
        }
        else {
            const template = document.createElement('template');
            const end = this.strings.length - 1;
            template.innerHTML = this.strings.reduce((str, cur, i) => str + cur + (i < end ? `{{ ${i} }}` : ''), '');
            templates.set(this.strings, template);
            return template;
        }
    }
    renderInto(element) {
        const template = this.template;
        if (renderedTemplates.get(element) !== template) {
            renderedTemplates.set(element, template);
            const instance = new TemplateInstance(template, this.values, this.processor);
            renderedTemplateInstances.set(element, instance);
            if (element instanceof NodeTemplatePart) {
                element.replace(...instance.children);
            }
            else {
                element.appendChild(instance);
            }
            return;
        }
        renderedTemplateInstances.get(element).update(this.values);
    }
}
const defaultProcessor = createProcessor(processPart);
function html(strings, ...values) {
    return new TemplateResult(strings, values, defaultProcessor);
}
function render$1(result, element) {
    result.renderInto(element);
}

class DisplaySize {
    static isMobile() {
        const mql = window.matchMedia("(min-width: 460px)");
        return !mql.matches;
    }
}

const I_GATE_OPERATION_TYPE = "1";
const H_GATE_OPERATION_TYPE = "H";
const X_GATE_OPERATION_TYPE = "X";
const Y_GATE_OPERATION_TYPE = "Y";
const Z_GATE_OPERATION_TYPE = "Z";
const PHASE_GATE_OPERATION_TYPE = "P";
const RNOT_GATE_OPERATION_TYPE = "X^½";
const RX_GATE_OPERATION_TYPE = "Rx";
const RY_GATE_OPERATION_TYPE = "Ry";
const RZ_GATE_OPERATION_TYPE = "Rz";
const CONTROL_GATE_OPERATION_TYPE = "•";
const SWAP_GATE_OPERATION_TYPE = "Swap";
const BLOCH_DISPLAY_OPERATION_TYPE = "Bloch";
const WRITE_GATE_OPERATION_TYPE = "Write";
const MEASUREMENT_GATE_OPERATION_TYPE = "Measure";

const UNICODE_FRACTIONS = [
    { character: "\u00BD", ref: "½", expanded: "1/2", value: 1 / 2 },
    { character: "\u00BC", ref: "¼", expanded: "1/4", value: 1 / 4 },
    { character: "\u00BE", ref: "¾", expanded: "3/4", value: 3 / 4 },
    { character: "\u2153", ref: "⅓", expanded: "1/3", value: 1 / 3 },
    { character: "\u2154", ref: "⅔", expanded: "2/3", value: 2 / 3 },
    { character: "\u2155", ref: "⅕", expanded: "1/5", value: 1 / 5 },
    { character: "\u2156", ref: "⅖", expanded: "2/5", value: 2 / 5 },
    { character: "\u2157", ref: "⅗", expanded: "3/5", value: 3 / 5 },
    { character: "\u2158", ref: "⅘", expanded: "4/5", value: 4 / 5 },
    { character: "\u2159", ref: "⅙", expanded: "1/6", value: 1 / 6 },
    { character: "\u215A", ref: "⅚", expanded: "5/6", value: 5 / 6 },
    { character: "\u2150", ref: "⅐", expanded: "1/7", value: 1 / 7 },
    { character: "\u215B", ref: "⅛", expanded: "1/8", value: 1 / 8 },
    { character: "\u215C", ref: "⅜", expanded: "3/8", value: 3 / 8 },
    { character: "\u215D", ref: "⅝", expanded: "5/8", value: 5 / 8 },
    { character: "\u215E", ref: "⅞", expanded: "7/8", value: 7 / 8 },
    { character: "\u2151", ref: "⅑", expanded: "1/9", value: 1 / 9 },
    { character: "\u2152", ref: "⅒", expanded: "1/10", value: 1 / 10 },
];
/**
 * Stores formatting options, for determining what string output should look
 * like.
 */
class Format {
    /**
     * @param allowAbbreviation  Should outputs be shortened, if possible?
     * @param maxAbbreviationError  How much error is abbreviating allowed to introduce?
     * @param fixedDigits  Use toFixed? How many digits?
     * @param itemSeparator  What should list items be separated by?
     */
    constructor(allowAbbreviation, maxAbbreviationError, fixedDigits, itemSeparator) {
        this.allowAbbreviation = allowAbbreviation;
        this.maxAbbreviationError = maxAbbreviationError;
        this.fixedDigits = fixedDigits;
        this.itemSeparator = itemSeparator;
    }
    /**
     * Parses the given text into a float. Works for text created by
     * [[formatFloat]].
     */
    static parseFloat(text) {
        if (text.length === 0) {
            throw new Error(`Not a number: '${text}'`);
        }
        if (text[0] === "-") {
            return -Format.parseFloat(text.substr(1));
        }
        if (text[0] === "\u221A") {
            return Math.sqrt(Format.parseFloat(text.substr(1)));
        }
        const fraction = Format.matchUnicodeFraction((e) => e.character === text);
        if (fraction !== undefined) {
            return fraction.value;
        }
        const result = parseFloat(text);
        if (isNaN(result)) {
            throw new Error(`Not a number: '${text}'`);
        }
        return result;
    }
    /**
     * Corrects a value to a nearby simple fraction or root thereof, such as
     * sqrt(1/2), so it can be printed compactly.
     *
     * @param value  The value to round.
     * @param epsilon  The maximum offset error introduced by the rounding.
     */
    static simplifyByRounding(value, epsilon) {
        if (value < 0) {
            return -Format.simplifyByRounding(-value, epsilon);
        }
        const r = value % 1;
        if (r <= epsilon || 1 - r <= epsilon) {
            return Math.round(value);
        }
        const fraction = Format.matchUnicodeFraction((e) => Math.abs(e.value - value) <= epsilon);
        if (fraction !== undefined) {
            return fraction.value;
        }
        const rootFraction = Format.matchUnicodeFraction((e) => Math.abs(Math.sqrt(e.value) - value) <= epsilon);
        if (rootFraction !== undefined) {
            return Math.sqrt(rootFraction.value);
        }
        return value;
    }
    /**
     * Returns the first element of an array matching the given predicate, or else
     * returns undefined.
     *
     * @hidden
     */
    static matchUnicodeFraction(predicate) {
        for (const each of UNICODE_FRACTIONS) {
            if (predicate(each))
                return each;
        }
        return undefined;
    }
    formatFloat(f) {
        if (this.allowAbbreviation) {
            return this.abbreviateFloat(f, this.maxAbbreviationError, this.fixedDigits);
        }
        if (this.fixedDigits !== undefined) {
            return f.toFixed(this.fixedDigits);
        }
        return String(f);
    }
    /**
     * Returns a string representation of a float, taking advantage of unicode
     * fractions and square roots.
     *
     * @param value  The value to represent as a string.
     * @param epsilon  The maximum error introduced by using an expression.
     * @param digits  digits The number of digits to use if no expression matches.
     */
    abbreviateFloat(value, epsilon = 0, digits = undefined) {
        if (Math.abs(value) < epsilon)
            return "0";
        if (value < 0)
            return `-${this.abbreviateFloat(-value, epsilon, digits)}`;
        const fraction = Format.matchUnicodeFraction((e) => Math.abs(e.value - value) <= epsilon);
        if (fraction !== undefined) {
            return fraction.character;
        }
        const rootFraction = Format.matchUnicodeFraction((e) => Math.abs(Math.sqrt(e.value) - value) <= epsilon);
        if (rootFraction !== undefined) {
            return `\u221A${rootFraction.character}`;
        }
        if (value % 1 !== 0 && digits !== undefined) {
            return value.toFixed(digits);
        }
        return value.toString();
    }
}
/**
 * Returns an approximated result, but with the constraint that when it
 * changes slightly it should "look the same". (It should look good when
 * varying and animated.)
 */
Format.CONSISTENT = new Format(false, 0, 2, ", ");
/**
 * Returns an accurate result, but favoring looking nice over being small.
 */
Format.EXACT = new Format(true, 0, undefined, ", ");
/**
 * Returns an accurate result, favoring being small over looking nice.
 */
Format.MINIFIED = new Format(true, 0, undefined, ",");
/**
 * Returns an approximated result, strongly favoring looking nice.
 */
Format.SIMPLIFIED = new Format(true, 0.0005, 3, ", ");

const COLLECTION_CUTOFF = 1000;
const BAD_TO_STRING_RESULT = Object.prototype.toString.call({});
const RECURSE_LIMIT_DESCRIPTION = "!recursion-limit!";
const DEFAULT_RECURSION_LIMIT = 10;
function describe(value, recursionLimit = DEFAULT_RECURSION_LIMIT) {
    return (tryDescribeAtomic(value) ||
        tryDescribeCollection(value, recursionLimit) ||
        describeFallback(value, recursionLimit));
}
function tryDescribeAtomic(value) {
    if (value === null)
        return "null";
    if (value === undefined)
        return "undefined";
    if (typeof value === "string")
        return `"${value}"`;
    if (typeof value === "number")
        return String(value);
    return undefined;
}
function tryDescribeCollection(value, recursionLimit) {
    if (recursionLimit === 0)
        return RECURSE_LIMIT_DESCRIPTION;
    if (value instanceof Map)
        return describeMap(value, recursionLimit);
    if (value instanceof Set)
        return describeSet(value, recursionLimit);
    const isIterable = (v) => {
        if (v[Symbol.iterator] !== undefined) {
            return true;
        }
        return false;
    };
    if (isIterable(value))
        return describeIterable(value, recursionLimit);
    return undefined;
}
function describeFallback(value, recursionLimit) {
    const defaultString = String(value);
    if (defaultString !== BAD_TO_STRING_RESULT)
        return defaultString;
    return describeObject(value, recursionLimit);
}
function describeMap(map, limit) {
    const entries = [];
    for (const [k, v] of map.entries()) {
        if (entries.length > COLLECTION_CUTOFF) {
            entries.push("[...]");
            break;
        }
        const keyDesc = describe(k, limit - 1);
        const valDesc = describe(v, limit - 1);
        entries.push(`${keyDesc}: ${valDesc}`);
    }
    return `Map{${entries.join(", ")}}`;
}
function describeSet(set, limit) {
    const entries = [];
    for (const e of set) {
        if (entries.length > COLLECTION_CUTOFF) {
            entries.push("[...]");
            break;
        }
        entries.push(describe(e, limit - 1));
    }
    return `Set{${entries.join(", ")}}`;
}
function describeIterable(seq, limit) {
    const entries = [];
    for (const e of seq) {
        if (entries.length > COLLECTION_CUTOFF) {
            entries.push("[...]");
            break;
        }
        entries.push(describe(e, limit - 1));
    }
    const prefix = Array.isArray(seq) ? "" : seq.constructor.name;
    return `${prefix}[${entries.join(", ")}]`;
}
function describeObject(value, limit) {
    const entries = [];
    for (const k in value) {
        if (!Object.prototype.hasOwnProperty.call(value, k)) {
            continue;
        }
        if (entries.length > COLLECTION_CUTOFF) {
            entries.push("[...]");
            break;
        }
        const v = value[k];
        const keyDesc = describe(k, limit - 1);
        const valDesc = describe(v, limit - 1);
        entries.push(`${keyDesc}: ${valDesc}`);
    }
    const typeName = value.constructor.name;
    const prefix = typeName === {}.constructor.name ? "" : `(Type: ${typeName})`;
    return `${prefix}{${entries.join(", ")}}`;
}

let CONSTRUCTOR_CALLS_NESTING = 0;
class DetailedError extends Error {
    constructor(message, detailsObj) {
        super(message);
        this.detailsObj = detailsObj;
        this.name = "Error";
        this.message = message;
        this.stack = new Error().stack;
        if (this.stack !== undefined) {
            this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, "\n    ");
        }
        CONSTRUCTOR_CALLS_NESTING++;
        try {
            this.details =
                CONSTRUCTOR_CALLS_NESTING === 1
                    ? describe(this.detailsObj)
                    : "(failed to describe detailsObj due to possibly re-entrancy)";
        }
        catch (ex) {
            // eslint-disable-next-line no-console
            console.error(ex);
            this.details =
                "(failed to describe detailsObj, see the console for details)";
        }
        finally {
            CONSTRUCTOR_CALLS_NESTING--;
        }
    }
}

class Util {
    static need(expression, message, args) {
        if (expression !== true) {
            const argDesc = args === undefined
                ? "(not provided)"
                : `[${Array.prototype.slice.call(args).join(", ")}]`;
            const msgDesc = message === undefined ? "(not provided)" : message;
            const msg = `Precondition failed\n\nMessage: ${msgDesc}\n\nArgs: ${argDesc}`;
            throw new Error(msg);
        }
    }
    static notNull(v) {
        Util.need(v !== null && v !== undefined, "notNull");
    }
    static round(n, decimal) {
        return Math.round(n * Math.pow(10, decimal)) / Math.pow(10, decimal);
    }
    static snappedCosSin(radians) {
        const unit = Math.PI / 4;
        const i = Math.round(radians / unit);
        if (i * unit === radians) {
            const s = Math.sqrt(0.5);
            const snaps = [
                [1, 0],
                [s, s],
                [0, 1],
                [-s, s],
                [-1, 0],
                [-s, -s],
                [0, -1],
                [s, -s],
            ];
            return snaps[i & 7];
        }
        return [Math.cos(radians), Math.sin(radians)];
    }
    static updateUrlJson(json) {
        history.pushState("", "", encodeURIComponent(json));
    }
    static get urlJson() {
        const json = window.location.href
            .toString()
            .split(window.location.host)[1]
            .slice(1);
        return decodeURIComponent(json);
    }
}

const THROW_IF_EMPTY = { if_same_instance_as_this_then_throw: true };
const EMPTY_SYGIL = { not_a_normal_value: true };
function emptyFallback(result, alternative, errorMessage) {
    if (result !== EMPTY_SYGIL) {
        return result;
    }
    if (alternative === THROW_IF_EMPTY) {
        throw new Error(errorMessage);
    }
    return alternative;
}
class Seq {
    constructor(obj, isIteratorFunction = false) {
        let iterable;
        let iterator;
        if (obj instanceof Seq) {
            // Avoid double-wrapping.
            iterable = obj._iterable;
            iterator = obj[Symbol.iterator];
        }
        else if (isIteratorFunction) {
            iterable = { [Symbol.iterator]: obj };
            iterator = obj;
        }
        else {
            if (!this.isIterable(obj)) {
                throw new Error(`Not iterable: ${describe(obj)}`);
            }
            iterable = obj;
            iterator = obj[Symbol.iterator].bind(obj);
        }
        this._iterable = iterable;
        this[Symbol.iterator] = iterator;
    }
    isIterable(obj) {
        if (typeof obj === "string")
            return true;
        if (typeof obj === "object" && obj !== null && Symbol.iterator in obj) {
            return true;
        }
        return false;
    }
    static fromGenerator(generatorFunction) {
        return new Seq(generatorFunction, true);
    }
    toArray() {
        return Array.from(this._iterable);
    }
    join(joiner) {
        return this.toArray().join(joiner);
    }
    toString() {
        return `Seq[${this.join(", ")}]`;
    }
    static range(count) {
        if (!Number.isInteger(count) || count < 0) {
            throw new DetailedError("bad count", { count });
        }
        return Seq.fromGenerator(function* () {
            for (let i = 0; i < count; i++) {
                yield i;
            }
        });
    }
    map(projection) {
        const _seq = this._iterable;
        return Seq.fromGenerator(function* () {
            for (const e of _seq) {
                yield projection(e);
            }
        });
    }
    flatMap(sequenceProjection) {
        const _seq = this._iterable;
        return Seq.fromGenerator(function* () {
            for (const e of _seq) {
                yield* sequenceProjection(e);
            }
        });
    }
    filter(predicate) {
        const _seq = this._iterable;
        return Seq.fromGenerator(function* () {
            for (const e of _seq) {
                if (predicate(e)) {
                    yield e;
                }
            }
        });
    }
    maxBy(projection, emptyErrorAlternative = THROW_IF_EMPTY, isALessThanBComparator = (e1, e2) => e1 < e2) {
        let curMaxItem = EMPTY_SYGIL;
        let curMaxScore = EMPTY_SYGIL;
        for (const item of this._iterable) {
            // Delay computing the score for the first item, so that singleton lists
            // never touch the score function.
            if (curMaxItem === EMPTY_SYGIL) {
                curMaxItem = item;
                continue;
            }
            if (curMaxScore === EMPTY_SYGIL) {
                curMaxScore = projection(curMaxItem);
            }
            const score = projection(item);
            if (isALessThanBComparator(curMaxScore, score)) {
                curMaxItem = item;
                curMaxScore = score;
            }
        }
        return emptyFallback(curMaxItem, emptyErrorAlternative, "Can't maxBy an empty sequence.");
    }
    any(predicate) {
        for (const e of this._iterable) {
            if (predicate(e)) {
                return true;
            }
        }
        return false;
    }
    every(predicate) {
        return !this.any((e) => !predicate(e));
    }
    distinctBy(keySelector) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const _seq = this;
        return Seq.fromGenerator(function () {
            const keySet = new Set();
            const filtered = _seq.filter((e) => {
                const key = keySelector(e);
                if (keySet.has(key)) {
                    return false;
                }
                keySet.add(key);
                return true;
            });
            return filtered[Symbol.iterator]();
        });
    }
    distinct() {
        return this.distinctBy((e) => e);
    }
    segmentBy(keySelector) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const _seq = this;
        return Seq.fromGenerator(function* () {
            let group = [];
            let lastKey = undefined;
            for (const item of _seq) {
                const itemKey = keySelector(item);
                if (group.length > 0 && itemKey !== lastKey) {
                    yield group;
                    group = [];
                }
                group.push(item);
                lastKey = itemKey;
            }
            if (group.length > 0) {
                yield group;
            }
        });
    }
    single(emptyManyErrorAlternative = THROW_IF_EMPTY) {
        const iter = this[Symbol.iterator]();
        const first = iter.next();
        if (!first.done && iter.next().done) {
            return first.value;
        }
        if (emptyManyErrorAlternative === THROW_IF_EMPTY) {
            if (first.done) {
                throw new Error("Empty sequence doesn't contain a single item.");
            }
            else {
                throw new Error("Sequence contains more than a single item.");
            }
        }
        return emptyManyErrorAlternative;
    }
    sortedBy(keySelector) {
        return seq(this.toArray().sort((e1, e2) => {
            const out1 = keySelector(e1);
            const out2 = keySelector(e2);
            return out1 < out2 ? -1 : out1 > out2 ? +1 : 0;
        }));
    }
}
function seq(iterable) {
    return new Seq(iterable);
}

function _mergeScientificFloatTokens(tokens) {
    tokens = [...tokens];
    for (let i = tokens.indexOf("e", 1); i !== -1; i = tokens.indexOf("e", i + 1)) {
        const s = i - 1;
        let e = i + 1;
        if (!/[0-9]/.exec(tokens[s])) {
            continue;
        }
        if (/[+-]/.exec(`${tokens[e]}`)) {
            e += 1;
        }
        if (/[0-9]/.exec(`${tokens[e]}`)) {
            e += 1;
            tokens.splice(s, e - s, tokens.slice(s, e).join(""));
            i -= 1;
        }
    }
    return tokens;
}
function _tokenize(text) {
    const tokens = seq(text.toLowerCase().split(/\s/))
        .flatMap((part) => seq(part)
        .segmentBy((e) => {
        if (e.trim() === "") {
            return " ";
        }
        if (/[.0-9]/.exec(e)) {
            return "#";
        }
        if (/[_a-z]/.exec(e)) {
            return "a";
        }
        return NaN; // Always split.
    })
        .map((e) => e.join("")))
        .filter((e) => e.trim() !== "")
        .toArray();
    return _mergeScientificFloatTokens(tokens);
}
/**
 * @param {!Map.<!string, T|!string|!number>} tokenMap
 * @returns {!string|T|!{unary_action: undefined|!function(T):T, binary_action: undefined|!function(T, T): T}}
 * @template T
 * @private
 */
function _translate_token(token, tokenMap) {
    if (/[0-9]+(\.[0-9]+)?/.exec(token)) {
        return parseFloat(token);
    }
    if (tokenMap.has(token)) {
        return tokenMap.get(token);
    }
    throw new DetailedError("Unrecognized token", { token });
}
/**
 * Parses a value from an infix arithmetic expression.
 */
function parseFormula(text, tokenMap) {
    let tokens = _tokenize(text).map((e) => _translate_token(e, tokenMap));
    // Cut off trailing operation, so parse fails less often as users are typing.
    // @ts-ignore
    if (tokens.length > 0 && tokens[tokens.length - 1].priority !== undefined) {
        tokens = tokens.slice(0, tokens.length - 1);
    }
    const ops = [];
    const vals = [];
    // Hack: use the 'priority' field as a signal of 'is an operation'
    const isValidEndToken = (token) => token !== "(" && token.priority === undefined;
    const isValidEndState = () => vals.length === 1 && ops.length === 0;
    const apply = (op) => {
        if (op === "(") {
            throw new DetailedError("Bad expression: unmatched '('", { text });
        }
        if (vals.length < 2) {
            throw new DetailedError("Bad expression: operated on nothing", { text });
        }
        const b = vals.pop();
        const a = vals.pop();
        vals.push(op.f(a, b));
    };
    const closeParen = () => {
        // eslint-disable-next-line no-constant-condition
        while (true) {
            if (ops.length === 0) {
                throw new DetailedError("Bad expression: unmatched ')'", { text });
            }
            const op = ops.pop();
            if (op === "(") {
                break;
            }
            apply(op);
        }
    };
    const burnOps = (w) => {
        while (ops.length > 0 &&
            vals.length >= 2 &&
            vals[vals.length - 1] !== undefined) {
            const top = ops[ops.length - 1];
            if (top.w === undefined || top.w < w) {
                break;
            }
            apply(ops.pop());
        }
    };
    const feedOp = (couldBeBinary, token) => {
        // Implied multiplication?
        const mul = tokenMap.get("*");
        if (couldBeBinary &&
            token.binary_action === undefined &&
            token !== ")") {
            // @ts-ignore
            burnOps(mul.priority);
            // @ts-ignore
            ops.push({ f: mul.binary_action, w: mul.priority });
        }
        if (couldBeBinary && token.binary_action !== undefined) {
            burnOps(token.priority);
            ops.push({ f: token.binary_action, w: token.priority });
        }
        else if (token.unary_action !== undefined) {
            burnOps(token.priority);
            vals.push(undefined);
            ops.push({
                f: (_a, b) => token.unary_action(b),
                w: Infinity,
            });
        }
        else if (token.binary_action !== undefined) {
            throw new DetailedError("Bad expression: binary op in bad spot", { text });
        }
    };
    let wasValidEndToken = false;
    for (const token of tokens) {
        feedOp(wasValidEndToken, token);
        wasValidEndToken = isValidEndToken(token);
        if (token === "(") {
            ops.push("(");
        }
        else if (token === ")") {
            closeParen();
        }
        else if (wasValidEndToken) {
            vals.push(token);
        }
    }
    burnOps(-Infinity);
    if (!isValidEndState()) {
        throw new DetailedError("Incomplete expression", { text });
    }
    return vals[0];
}

class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    static from(v) {
        if (v instanceof Complex) {
            return v;
        }
        if (typeof v === "number") {
            return new Complex(v, 0);
        }
        throw new DetailedError("Unrecognized value type.", { v });
    }
    static parse(text) {
        return Complex.from(parseFormula(text, PARSE_COMPLEX_TOKEN_MAP_DEG));
    }
    static polar(magnitude, phase) {
        const [cos, sin] = Util.snappedCosSin(phase);
        return new Complex(magnitude * cos, magnitude * sin);
    }
    static realPartOf(v) {
        if (v instanceof Complex) {
            return v.real;
        }
        if (typeof v === "number") {
            return v;
        }
        throw new DetailedError("Unrecognized value type.", { v });
    }
    static imagPartOf(v) {
        if (v instanceof Complex) {
            return v.imag;
        }
        if (typeof v === "number") {
            return 0;
        }
        throw new DetailedError("Unrecognized value type.", { v });
    }
    static rootsOfQuadratic(a, b, c) {
        a = Complex.from(a);
        b = Complex.from(b);
        c = Complex.from(c);
        if (a.isEqualTo(0)) {
            if (!b.isEqualTo(0)) {
                return [c.times(-1).dividedBy(b)];
            }
            if (!c.isEqualTo(0)) {
                return [];
            }
            throw Error("Degenerate");
        }
        const difs = b.times(b).minus(a.times(c).times(4)).sqrts();
        const mid = b.times(-1);
        const denom = a.times(2);
        return difs.map((d) => mid.minus(d).dividedBy(denom));
    }
    isEqualTo(other) {
        if (other instanceof Complex) {
            return this.real === other.real && this.imag === other.imag;
        }
        if (typeof other === "number") {
            return this.real === other && this.imag === 0;
        }
        return false;
    }
    isApproximatelyEqualTo(other, epsilon) {
        if (other instanceof Complex || typeof other === "number") {
            const d = this.minus(Complex.from(other));
            return (Math.abs(d.real) <= epsilon &&
                Math.abs(d.imag) <= epsilon &&
                d.abs() <= epsilon);
        }
        return false;
    }
    norm2() {
        return this.real * this.real + this.imag * this.imag;
    }
    abs() {
        return Math.sqrt(this.norm2());
    }
    unit() {
        const m = this.norm2();
        if (m < 0.00001) {
            return Complex.polar(1, this.phase());
        }
        return this.dividedBy(Math.sqrt(m));
    }
    plus(v) {
        const c = Complex.from(v);
        return new Complex(this.real + c.real, this.imag + c.imag);
    }
    minus(v) {
        const c = Complex.from(v);
        return new Complex(this.real - c.real, this.imag - c.imag);
    }
    times(v) {
        const c = Complex.from(v);
        return new Complex(this.real * c.real - this.imag * c.imag, this.real * c.imag + this.imag * c.real);
    }
    dividedBy(v) {
        const c = Complex.from(v);
        const d = c.norm2();
        if (d === 0) {
            throw new Error("Division by Zero");
        }
        const n = this.times(c.conjugate());
        return new Complex(n.real / d, n.imag / d);
    }
    sqrts() {
        const [r, i] = [this.real, this.imag];
        const m = Math.sqrt(Math.sqrt(r * r + i * i));
        if (m === 0) {
            return [Complex.ZERO];
        }
        if (i === 0 && r < 0) {
            return [new Complex(0, m), new Complex(0, -m)];
        }
        const a = this.phase() / 2;
        const c = Complex.polar(m, a);
        return [c, c.times(-1)];
    }
    conjugate() {
        return new Complex(this.real, -this.imag);
    }
    toString(format) {
        format = format || Format.EXACT;
        return format.allowAbbreviation
            ? this.toStringAllowSingleValue(format)
            : this.toStringBothValues(format);
    }
    neg() {
        return new Complex(-this.real, -this.imag);
    }
    raisedTo(exponent) {
        if (exponent === 0.5 && this.imag === 0 && this.real >= 0) {
            return new Complex(Math.sqrt(this.real), 0);
        }
        if (Complex.ZERO.isEqualTo(exponent)) {
            return Complex.ONE;
        }
        if (this.isEqualTo(Complex.ZERO)) {
            return Complex.ZERO;
        }
        return this.ln().times(Complex.from(exponent)).exp();
    }
    exp() {
        return Complex.polar(Math.exp(this.real), this.imag);
    }
    cos() {
        const z = this.times(Complex.I);
        return z.exp().plus(z.neg().exp()).times(0.5);
    }
    sin() {
        const z = this.times(Complex.I);
        return z.exp().minus(z.neg().exp()).dividedBy(new Complex(0, 2));
    }
    tan() {
        return this.sin().dividedBy(this.cos());
    }
    ln() {
        return new Complex(Math.log(this.abs()), this.phase());
    }
    phase() {
        return Math.atan2(this.imag, this.real);
    }
    toStringAllowSingleValue(format) {
        if (Math.abs(this.imag) <= format.maxAbbreviationError) {
            return format.formatFloat(this.real);
        }
        if (Math.abs(this.real) <= format.maxAbbreviationError) {
            if (Math.abs(this.imag - 1) <= format.maxAbbreviationError) {
                return "i";
            }
            if (Math.abs(this.imag + 1) <= format.maxAbbreviationError) {
                return "-i";
            }
            return `${format.formatFloat(this.imag)}i`;
        }
        return this.toStringBothValues(format);
    }
    toStringBothValues(format) {
        const separator = this.imag >= 0 ? "+" : "-";
        const imagFactor = format.allowAbbreviation &&
            Math.abs(Math.abs(this.imag) - 1) <= format.maxAbbreviationError
            ? ""
            : format.formatFloat(Math.abs(this.imag));
        const prefix = format.allowAbbreviation ||
            format.fixedDigits === undefined ||
            this.real < 0
            ? ""
            : "+";
        return `${prefix + format.formatFloat(this.real) + separator + imagFactor}i`;
    }
}
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);
const PARSE_COMPLEX_TOKEN_MAP_ALL = new Map();
const PARSE_COMPLEX_TOKEN_MAP_RAD = new Map();
const PARSE_COMPLEX_TOKEN_MAP_DEG = new Map();
PARSE_COMPLEX_TOKEN_MAP_ALL.set("i", Complex.I);
PARSE_COMPLEX_TOKEN_MAP_ALL.set("e", Complex.from(Math.E));
PARSE_COMPLEX_TOKEN_MAP_ALL.set("pi", Complex.from(Math.PI));
PARSE_COMPLEX_TOKEN_MAP_ALL.set("(", "(");
PARSE_COMPLEX_TOKEN_MAP_ALL.set(")", ")");
for (const { character, value } of UNICODE_FRACTIONS) {
    PARSE_COMPLEX_TOKEN_MAP_ALL.set(character, value);
}
PARSE_COMPLEX_TOKEN_MAP_ALL.set("sqrt", {
    unary_action: (e) => Complex.from(e).raisedTo(0.5),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("exp", {
    unary_action: (e) => Complex.from(e).exp(),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("ln", {
    unary_action: (e) => Complex.from(e).ln(),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("^", {
    binary_action: (a, b) => Complex.from(a).raisedTo(b),
    priority: 3,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("*", {
    binary_action: (a, b) => Complex.from(a).times(b),
    priority: 2,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("/", {
    binary_action: (a, b) => Complex.from(a).dividedBy(b),
    priority: 2,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("-", {
    unary_action: (e) => Complex.from(e).neg(),
    binary_action: (a, b) => Complex.from(a).minus(b),
    priority: 1,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("+", {
    unary_action: (e) => e,
    binary_action: (a, b) => Complex.from(a).plus(b),
    priority: 1,
});
PARSE_COMPLEX_TOKEN_MAP_ALL.set("√", PARSE_COMPLEX_TOKEN_MAP_ALL.get("sqrt"));
PARSE_COMPLEX_TOKEN_MAP_DEG.set("cos", {
    unary_action: (e) => new Complex(Math.PI / 180, 0).times(e).cos(),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_DEG.set("sin", {
    unary_action: (e) => new Complex(Math.PI / 180, 0).times(e).sin(),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_DEG.set("asin", {
    unary_action: (e) => {
        if (Complex.imagPartOf(e) !== 0) {
            throw new DetailedError("asin input out of range", { e });
        }
        return Complex.from((Math.asin(Complex.realPartOf(e)) * 180) / Math.PI);
    },
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_DEG.set("acos", {
    unary_action: (e) => {
        if (Complex.imagPartOf(e) !== 0) {
            throw new DetailedError("acos input out of range", { e });
        }
        return Complex.from((Math.acos(Complex.realPartOf(e)) * 180) / Math.PI);
    },
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_DEG.set("arccos", PARSE_COMPLEX_TOKEN_MAP_DEG.get("acos"));
PARSE_COMPLEX_TOKEN_MAP_DEG.set("arcsin", PARSE_COMPLEX_TOKEN_MAP_DEG.get("asin"));
PARSE_COMPLEX_TOKEN_MAP_RAD.set("cos", {
    unary_action: (e) => Complex.from(e).cos(),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_RAD.set("sin", {
    unary_action: (e) => Complex.from(e).sin(),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_RAD.set("tan", {
    unary_action: (e) => Complex.from(e).tan(),
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_RAD.set("asin", {
    unary_action: (e) => {
        if (Complex.imagPartOf(e) !== 0) {
            throw new DetailedError("asin input out of range", { e });
        }
        return Complex.from(Math.asin(Complex.realPartOf(e)));
    },
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_RAD.set("acos", {
    unary_action: (e) => {
        if (Complex.imagPartOf(e) !== 0) {
            throw new DetailedError("acos input out of range", { e });
        }
        return Complex.from(Math.acos(Complex.realPartOf(e)));
    },
    priority: 4,
});
PARSE_COMPLEX_TOKEN_MAP_RAD.set("atan", {
    unary_action: (e) => {
        if (Complex.imagPartOf(e) !== 0) {
            throw new DetailedError("atan input out of range", { e });
        }
        return Complex.from(Math.atan(Complex.realPartOf(e)));
    },
    priority: 4,
});
for (const [k, v] of PARSE_COMPLEX_TOKEN_MAP_ALL.entries()) {
    PARSE_COMPLEX_TOKEN_MAP_DEG.set(k, v);
    PARSE_COMPLEX_TOKEN_MAP_RAD.set(k, v);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var fraction = createCommonjsModule(function (module, exports) {
/**
 * @license Fraction.js v4.1.1 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/


/**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <nominator>, 1 => <denominator> ]
 * [ n => <nominator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */

(function(root) {

  // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
  // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
  // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
  var MAX_CYCLE_LEN = 2000;

  // Parsed data to avoid calling "new" all the time
  var P = {
    "s": 1,
    "n": 0,
    "d": 1
  };

  function createError(name) {

    function errorConstructor() {
      var temp = Error.apply(this, arguments);
      temp['name'] = this['name'] = name;
      this['stack'] = temp['stack'];
      this['message'] = temp['message'];
    }

    /**
     * Error constructor
     *
     * @constructor
     */
    function IntermediateInheritor() { }
    IntermediateInheritor.prototype = Error.prototype;
    errorConstructor.prototype = new IntermediateInheritor();

    return errorConstructor;
  }

  var DivisionByZero = Fraction['DivisionByZero'] = createError('DivisionByZero');
  var InvalidParameter = Fraction['InvalidParameter'] = createError('InvalidParameter');

  function assign(n, s) {

    if (isNaN(n = parseInt(n, 10))) {
      throwInvalidParam();
    }
    return n * s;
  }

  function throwInvalidParam() {
    throw new InvalidParameter();
  }

  function factorize(num) {

    var factors = {};

    var n = num;
    var i = 2;
    var s = 4;

    while (s <= n) {

      while (n % i === 0) {
        n /= i;
        factors[i] = (factors[i] || 0) + 1;
      }
      s += 1 + 2 * i++;
    }

    if (n !== num) {
      if (n > 1)
      factors[n] = (factors[n] || 0) + 1;
    } else {
      factors[num] = (factors[num] || 0) + 1;
    }
    return factors;
  }

  var parse = function(p1, p2) {

    var n = 0, d = 1, s = 1;
    var v = 0, w = 0, x = 0, y = 1, z = 1;

    var A = 0, B = 1;
    var C = 1, D = 1;

    var N = 10000000;
    var M;

    if (p1 === undefined || p1 === null) ; else if (p2 !== undefined) {
      n = p1;
      d = p2;
      s = n * d;
    } else
      switch (typeof p1) {

        case "object":
          {
            if ("d" in p1 && "n" in p1) {
              n = p1["n"];
              d = p1["d"];
              if ("s" in p1)
                n *= p1["s"];
            } else if (0 in p1) {
              n = p1[0];
              if (1 in p1)
                d = p1[1];
            } else {
              throwInvalidParam();
            }
            s = n * d;
            break;
          }
        case "number":
          {
            if (p1 < 0) {
              s = p1;
              p1 = -p1;
            }

            if (p1 % 1 === 0) {
              n = p1;
            } else if (p1 > 0) { // check for != 0, scale would become NaN (log(0)), which converges really slow

              if (p1 >= 1) {
                z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                p1 /= z;
              }

              // Using Farey Sequences
              // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/

              while (B <= N && D <= N) {
                M = (A + C) / (B + D);

                if (p1 === M) {
                  if (B + D <= N) {
                    n = A + C;
                    d = B + D;
                  } else if (D > B) {
                    n = C;
                    d = D;
                  } else {
                    n = A;
                    d = B;
                  }
                  break;

                } else {

                  if (p1 > M) {
                    A += C;
                    B += D;
                  } else {
                    C += A;
                    D += B;
                  }

                  if (B > N) {
                    n = C;
                    d = D;
                  } else {
                    n = A;
                    d = B;
                  }
                }
              }
              n *= z;
            } else if (isNaN(p1) || isNaN(p2)) {
              d = n = NaN;
            }
            break;
          }
        case "string":
          {
            B = p1.match(/\d+|./g);

            if (B === null)
              throwInvalidParam();

            if (B[A] === '-') {// Check for minus sign at the beginning
              s = -1;
              A++;
            } else if (B[A] === '+') {// Check for plus sign at the beginning
              A++;
            }

            if (B.length === A + 1) { // Check if it's just a simple number "1234"
              w = assign(B[A++], s);
            } else if (B[A + 1] === '.' || B[A] === '.') { // Check if it's a decimal number

              if (B[A] !== '.') { // Handle 0.5 and .5
                v = assign(B[A++], s);
              }
              A++;

              // Check for decimal places
              if (A + 1 === B.length || B[A + 1] === '(' && B[A + 3] === ')' || B[A + 1] === "'" && B[A + 3] === "'") {
                w = assign(B[A], s);
                y = Math.pow(10, B[A].length);
                A++;
              }

              // Check for repeating places
              if (B[A] === '(' && B[A + 2] === ')' || B[A] === "'" && B[A + 2] === "'") {
                x = assign(B[A + 1], s);
                z = Math.pow(10, B[A + 1].length) - 1;
                A += 3;
              }

            } else if (B[A + 1] === '/' || B[A + 1] === ':') { // Check for a simple fraction "123/456" or "123:456"
              w = assign(B[A], s);
              y = assign(B[A + 2], 1);
              A += 3;
            } else if (B[A + 3] === '/' && B[A + 1] === ' ') { // Check for a complex fraction "123 1/2"
              v = assign(B[A], s);
              w = assign(B[A + 2], s);
              y = assign(B[A + 4], 1);
              A += 5;
            }

            if (B.length <= A) { // Check for more tokens on the stack
              d = y * z;
              s = /* void */
              n = x + d * v + z * w;
              break;
            }

            /* Fall through on error */
          }
        default:
          throwInvalidParam();
      }

    if (d === 0) {
      throw new DivisionByZero();
    }

    P["s"] = s < 0 ? -1 : 1;
    P["n"] = Math.abs(n);
    P["d"] = Math.abs(d);
  };

  function modpow(b, e, m) {

    var r = 1;
    for (; e > 0; b = (b * b) % m, e >>= 1) {

      if (e & 1) {
        r = (r * b) % m;
      }
    }
    return r;
  }


  function cycleLen(n, d) {

    for (; d % 2 === 0;
      d /= 2) {
    }

    for (; d % 5 === 0;
      d /= 5) {
    }

    if (d === 1) // Catch non-cyclic numbers
      return 0;

    // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
    // 10^(d-1) % d == 1
    // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
    // as we want to translate the numbers to strings.

    var rem = 10 % d;
    var t = 1;

    for (; rem !== 1; t++) {
      rem = rem * 10 % d;

      if (t > MAX_CYCLE_LEN)
        return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
    }
    return t;
  }


  function cycleStart(n, d, len) {

    var rem1 = 1;
    var rem2 = modpow(10, len, d);

    for (var t = 0; t < 300; t++) { // s < ~log10(Number.MAX_VALUE)
      // Solve 10^s == 10^(s+t) (mod d)

      if (rem1 === rem2)
        return t;

      rem1 = rem1 * 10 % d;
      rem2 = rem2 * 10 % d;
    }
    return 0;
  }

  function gcd(a, b) {

    if (!a)
      return b;
    if (!b)
      return a;

    while (1) {
      a %= b;
      if (!a)
        return b;
      b %= a;
      if (!b)
        return a;
    }
  }
  /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */
  function Fraction(a, b) {

    if (!(this instanceof Fraction)) {
      return new Fraction(a, b);
    }

    parse(a, b);

    if (Fraction['REDUCE']) {
      a = gcd(P["d"], P["n"]); // Abuse a
    } else {
      a = 1;
    }

    this["s"] = P["s"];
    this["n"] = P["n"] / a;
    this["d"] = P["d"] / a;
  }

  /**
   * Boolean global variable to be able to disable automatic reduction of the fraction
   *
   */
  Fraction['REDUCE'] = 1;

  Fraction.prototype = {

    "s": 1,
    "n": 0,
    "d": 1,

    /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/
    "abs": function() {

      return new Fraction(this["n"], this["d"]);
    },

    /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/
    "neg": function() {

      return new Fraction(-this["s"] * this["n"], this["d"]);
    },

    /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/
    "add": function(a, b) {

      parse(a, b);
      return new Fraction(
        this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"],
        this["d"] * P["d"]
      );
    },

    /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/
    "sub": function(a, b) {

      parse(a, b);
      return new Fraction(
        this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"],
        this["d"] * P["d"]
      );
    },

    /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/
    "mul": function(a, b) {

      parse(a, b);
      return new Fraction(
        this["s"] * P["s"] * this["n"] * P["n"],
        this["d"] * P["d"]
      );
    },

    /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/
    "div": function(a, b) {

      parse(a, b);
      return new Fraction(
        this["s"] * P["s"] * this["n"] * P["d"],
        this["d"] * P["n"]
      );
    },

    /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/
    "clone": function() {
      return new Fraction(this);
    },

    /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/
    "mod": function(a, b) {

      if (isNaN(this['n']) || isNaN(this['d'])) {
        return new Fraction(NaN);
      }

      if (a === undefined) {
        return new Fraction(this["s"] * this["n"] % this["d"], 1);
      }

      parse(a, b);
      if (0 === P["n"] && 0 === this["d"]) {
        Fraction(0, 0); // Throw DivisionByZero
      }

      /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/

      /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */
      return new Fraction(
        this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]),
        P["d"] * this["d"]
      );
    },

    /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */
    "gcd": function(a, b) {

      parse(a, b);

      // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)

      return new Fraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
    },

    /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */
    "lcm": function(a, b) {

      parse(a, b);

      // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)

      if (P["n"] === 0 && this["n"] === 0) {
        return new Fraction;
      }
      return new Fraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
    },

    /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/
    "ceil": function(places) {

      places = Math.pow(10, places || 0);

      if (isNaN(this["n"]) || isNaN(this["d"])) {
        return new Fraction(NaN);
      }
      return new Fraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
    },

    /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/
    "floor": function(places) {

      places = Math.pow(10, places || 0);

      if (isNaN(this["n"]) || isNaN(this["d"])) {
        return new Fraction(NaN);
      }
      return new Fraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
    },

    /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/
    "round": function(places) {

      places = Math.pow(10, places || 0);

      if (isNaN(this["n"]) || isNaN(this["d"])) {
        return new Fraction(NaN);
      }
      return new Fraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
    },

    /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/
    "inverse": function() {

      return new Fraction(this["s"] * this["d"], this["n"]);
    },

    /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */
    "pow": function(a, b) {

      parse(a, b);

      // Trivial case when exp is an integer

      if (P['d'] === 1) {

        if (P['s'] < 0) {
          return new Fraction(Math.pow(this['s'] * this["d"], P['n']), Math.pow(this["n"], P['n']));
        } else {
          return new Fraction(Math.pow(this['s'] * this["n"], P['n']), Math.pow(this["d"], P['n']));
        }
      }

      // Negative roots become complex
      //     (-a/b)^(c/d) = x
      // <=> (-1)^(c/d) * (a/b)^(c/d) = x
      // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
      // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
      // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
      if (this['s'] < 0) return null;

      // Now prime factor n and d
      var N = factorize(this['n']);
      var D = factorize(this['d']);

      // Exponentiate and take root for n and d individually
      var n = 1;
      var d = 1;
      for (var k in N) {
        if (k === '1') continue;
        if (k === '0') {
          n = 0;
          break;
        }
        N[k]*= P['n'];

        if (N[k] % P['d'] === 0) {
          N[k]/= P['d'];
        } else return null;
        n*= Math.pow(k, N[k]);
      }

      for (var k in D) {
        if (k === '1') continue;
        D[k]*= P['n'];

        if (D[k] % P['d'] === 0) {
          D[k]/= P['d'];
        } else return null;
        d*= Math.pow(k, D[k]);
      }

      if (P['s'] < 0) {
        return new Fraction(d, n);
      }
      return new Fraction(n, d);
    },

    /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/
    "equals": function(a, b) {

      parse(a, b);
      return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
    },

    /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/
    "compare": function(a, b) {

      parse(a, b);
      var t = (this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"]);
      return (0 < t) - (t < 0);
    },

    "simplify": function(eps) {

      // First naive implementation, needs improvement

      if (isNaN(this['n']) || isNaN(this['d'])) {
        return this;
      }

      var cont = this['abs']()['toContinued']();

      eps = eps || 0.001;

      function rec(a) {
        if (a.length === 1)
          return new Fraction(a[0]);
        return rec(a.slice(1))['inverse']()['add'](a[0]);
      }

      for (var i = 0; i < cont.length; i++) {
        var tmp = rec(cont.slice(0, i + 1));
        if (tmp['sub'](this['abs']())['abs']().valueOf() < eps) {
          return tmp['mul'](this['s']);
        }
      }
      return this;
    },

    /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */
    "divisible": function(a, b) {

      parse(a, b);
      return !(!(P["n"] * this["d"]) || ((this["n"] * P["d"]) % (P["n"] * this["d"])));
    },

    /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/
    'valueOf': function() {

      return this["s"] * this["n"] / this["d"];
    },

    /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
     **/
    'toFraction': function(excludeWhole) {

      var whole, str = "";
      var n = this["n"];
      var d = this["d"];
      if (this["s"] < 0) {
        str += '-';
      }

      if (d === 1) {
        str += n;
      } else {

        if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
          str += whole;
          str += " ";
          n %= d;
        }

        str += n;
        str += '/';
        str += d;
      }
      return str;
    },

    /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/
    'toLatex': function(excludeWhole) {

      var whole, str = "";
      var n = this["n"];
      var d = this["d"];
      if (this["s"] < 0) {
        str += '-';
      }

      if (d === 1) {
        str += n;
      } else {

        if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
          str += whole;
          n %= d;
        }

        str += "\\frac{";
        str += n;
        str += '}{';
        str += d;
        str += '}';
      }
      return str;
    },

    /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */
    'toContinued': function() {

      var t;
      var a = this['n'];
      var b = this['d'];
      var res = [];

      if (isNaN(a) || isNaN(b)) {
        return res;
      }

      do {
        res.push(Math.floor(a / b));
        t = a % b;
        a = b;
        b = t;
      } while (a !== 1);

      return res;
    },

    /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/
    'toString': function(dec) {

      var g;
      var N = this["n"];
      var D = this["d"];

      if (isNaN(N) || isNaN(D)) {
        return "NaN";
      }

      if (!Fraction['REDUCE']) {
        g = gcd(N, D);
        N /= g;
        D /= g;
      }

      dec = dec || 15; // 15 = decimal places when no repetation

      var cycLen = cycleLen(N, D); // Cycle length
      var cycOff = cycleStart(N, D, cycLen); // Cycle start

      var str = this['s'] === -1 ? "-" : "";

      str += N / D | 0;

      N %= D;
      N *= 10;

      if (N)
        str += ".";

      if (cycLen) {

        for (var i = cycOff; i--;) {
          str += N / D | 0;
          N %= D;
          N *= 10;
        }
        str += "(";
        for (var i = cycLen; i--;) {
          str += N / D | 0;
          N %= D;
          N *= 10;
        }
        str += ")";
      } else {
        for (var i = dec; N && i--;) {
          str += N / D | 0;
          N %= D;
          N *= 10;
        }
      }
      return str;
    }
  };

  {
    Object.defineProperty(Fraction, "__esModule", { 'value': true });
    Fraction['default'] = Fraction;
    Fraction['Fraction'] = Fraction;
    module['exports'] = Fraction;
  }

})();
});

var Fraction = unwrapExports(fraction);
fraction.Fraction;

function parseAngle(angle) {
    const coefficient = new Fraction(angle.replace(/(\d+)pi/g, "$1").replace(/pi/g, "1")).valueOf();
    return coefficient * Math.PI;
}

class Matrix {
    constructor(width, height, buffer) {
        if (width * height * 2 !== buffer.length) {
            throw new DetailedError("width*height*2 !== buffer.length", {
                width,
                height,
                len: buffer.length,
            });
        }
        this.width = width;
        this.height = height;
        this.buffer = buffer;
    }
    static PHASE(phi) {
        const φ = parseAngle(phi);
        const e = Complex.from(Math.E);
        return Matrix.square(1, 0, 0, e.raisedTo(Complex.I.times(φ)));
    }
    static get RNOT() {
        const i = Complex.I;
        const mi = i.neg();
        return Matrix.square(i.plus(1), mi.plus(1), mi.plus(1), i.plus(1)).times(0.5);
    }
    static RX(theta) {
        const θ = parseFormula(theta, PARSE_COMPLEX_TOKEN_MAP_RAD);
        const mi = Complex.I.neg();
        const cosθ2 = Math.cos(θ / 2);
        const sinθ2 = Math.sin(θ / 2);
        return Matrix.square(cosθ2, mi.times(sinθ2), mi.times(sinθ2), cosθ2);
    }
    static RY(theta) {
        const θ = parseFormula(theta, PARSE_COMPLEX_TOKEN_MAP_RAD);
        const cosθ2 = Math.cos(θ / 2);
        const sinθ2 = Math.sin(θ / 2);
        return Matrix.square(cosθ2, -sinθ2, sinθ2, cosθ2);
    }
    static RZ(theta) {
        const θ = parseFormula(theta, PARSE_COMPLEX_TOKEN_MAP_RAD);
        const e = Complex.from(Math.E);
        const i = Complex.I;
        return Matrix.square(e.raisedTo(i.neg().times(θ / 2)), 0, 0, e.raisedTo(i.times(θ / 2)));
    }
    static fromRows(rows) {
        Util.need(rows.length > 0, "non-zero height", rows);
        const seqRows = seq(rows);
        const h = rows.length;
        const w = seqRows
            .map((e) => e.length)
            .distinct()
            .single(null);
        if (w === null) {
            throw new DetailedError("Inconsistent row widths.", { rows });
        }
        const buffer = new Float64Array(w * h * 2);
        let i = 0;
        for (const row of rows) {
            for (const cell of row) {
                buffer[i] = Complex.realPartOf(cell);
                buffer[i + 1] = Complex.imagPartOf(cell);
                i += 2;
            }
        }
        return new Matrix(w, h, buffer);
    }
    static generate(width, height, coefficientRowColGenerator) {
        const buf = new Float64Array(width * height * 2);
        for (let r = 0; r < height; r++) {
            for (let c = 0; c < width; c++) {
                const k = (r * width + c) * 2;
                const v = coefficientRowColGenerator(r, c);
                buf[k] = Complex.realPartOf(v);
                buf[k + 1] = Complex.imagPartOf(v);
            }
        }
        return new Matrix(width, height, buf);
    }
    static solo(coef) {
        return new Matrix(1, 1, new Float64Array([Complex.realPartOf(coef), Complex.imagPartOf(coef)]));
    }
    static square(...coefs) {
        Util.need(Array.isArray(coefs), "Array.isArray(coefs)", coefs);
        const n = Math.round(Math.sqrt(coefs.length));
        Util.need(n * n === coefs.length, "Matrix.square: non-square number of arguments");
        return Matrix.generate(n, n, (r, c) => coefs[r * n + c]);
    }
    static col(...coefs) {
        Util.need(Array.isArray(coefs), "Array.isArray(coefs)", coefs);
        return Matrix.generate(1, coefs.length, (r) => coefs[r]);
    }
    static row(...coefs) {
        Util.need(Array.isArray(coefs), "Array.isArray(coefs)", coefs);
        return Matrix.generate(coefs.length, 1, (r, c) => coefs[c]);
    }
    static identity(size) {
        if (!Number.isInteger(size) || size <= 0) {
            throw new DetailedError("Bad size", { size });
        }
        const buf = new Float64Array(size * size * 2);
        for (let k = 0; k < size; k++) {
            buf[k * (size + 1) * 2] = 1;
        }
        return new Matrix(size, size, buf);
    }
    static generateDiagonal(size, coefficientFunc) {
        const buf = new Float64Array(size * size * 2);
        for (let i = 0; i < size; i++) {
            const k = i * (size + 1) * 2;
            const v = coefficientFunc(i);
            buf[k] = Complex.realPartOf(v);
            buf[k + 1] = Complex.imagPartOf(v);
        }
        return new Matrix(size, size, buf);
    }
    static zero(width, height) {
        return new Matrix(width, height, new Float64Array(width * height * 2));
    }
    getColumn(colIndex) {
        Util.need(colIndex >= 0 && colIndex <= this.width, "colIndex >= 0 && colIndex <= this.width");
        const col = [];
        for (let r = 0; r < this.height; r++) {
            col.push(this.cell(colIndex, r));
        }
        return col;
    }
    isUnitary(epsilon) {
        const n = this.width;
        if (this.height !== n) {
            return false;
        }
        return this.times(this.adjoint()).isApproximatelyEqualTo(Matrix.identity(n), epsilon);
    }
    adjoint() {
        const w = this.height;
        const h = this.width;
        const newBuf = new Float64Array(w * h * 2);
        for (let r = 0; r < h; r++) {
            for (let c = 0; c < w; c++) {
                const kIn = (c * this.width + r) * 2;
                const kOut = (r * w + c) * 2;
                newBuf[kOut] = this.buffer[kIn];
                newBuf[kOut + 1] = -this.buffer[kIn + 1];
            }
        }
        return new Matrix(w, h, newBuf);
    }
    times(other) {
        return other instanceof Matrix
            ? this.timesMatrix(other)
            : this.timesScalar(other);
    }
    timesMatrix(other) {
        if (this.width !== other.height) {
            throw new DetailedError("Incompatible sizes.", { this: this, other });
        }
        const w = other.width;
        const h = this.height;
        const n = this.width;
        const newBuffer = new Float64Array(w * h * 2);
        for (let r = 0; r < h; r++) {
            for (let c = 0; c < w; c++) {
                const k3 = (r * w + c) * 2;
                for (let k = 0; k < n; k++) {
                    const k1 = (r * n + k) * 2;
                    const k2 = (k * w + c) * 2;
                    const r1 = this.buffer[k1];
                    const i1 = this.buffer[k1 + 1];
                    const r2 = other.buffer[k2];
                    const i2 = other.buffer[k2 + 1];
                    const r3 = r1 * r2 - i1 * i2;
                    const i3 = r1 * i2 + r2 * i1;
                    newBuffer[k3] += r3;
                    newBuffer[k3 + 1] += i3;
                }
            }
        }
        return new Matrix(w, h, newBuffer);
    }
    timesScalar(v) {
        const newBuffer = new Float64Array(this.buffer.length);
        const sr = Complex.realPartOf(v);
        const si = Complex.imagPartOf(v);
        for (let i = 0; i < newBuffer.length; i += 2) {
            const vr = this.buffer[i];
            const vi = this.buffer[i + 1];
            newBuffer[i] = vr * sr - vi * si;
            newBuffer[i + 1] = vr * si + vi * sr;
        }
        return new Matrix(this.width, this.height, newBuffer);
    }
    static rotation(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        return Matrix.square(c, -s, s, c);
    }
    isEqualTo(obj) {
        if (this === obj) {
            return true;
        }
        if (!(obj instanceof Matrix)) {
            return false;
        }
        const other = obj;
        return (this.width === other.width &&
            this.height === other.height &&
            Seq.range(this.buffer.length).every((i) => this.buffer[i] === other.buffer[i]));
    }
    isApproximatelyEqualTo(other, epsilon) {
        return (other instanceof Matrix &&
            this.width === other.width &&
            this.height === other.height &&
            Math.sqrt(this.minus(other).norm2()) <= epsilon);
    }
    minus(other) {
        const { width: w, height: h, buffer: b1 } = this;
        const b2 = other.buffer;
        Util.need(other.width === w && other.height === h, "Matrix.minus: compatible sizes");
        const newBuffer = new Float64Array(this.buffer.length);
        for (let i = 0; i < newBuffer.length; i++) {
            newBuffer[i] = b1[i] - b2[i];
        }
        return new Matrix(w, h, newBuffer);
    }
    norm2() {
        let t = 0;
        for (const e of this.buffer) {
            t += e * e;
        }
        return t;
    }
    toString(format = Format.EXACT) {
        const data = this.rows()
            .map((row) => row.map((e) => e.toString(format)).join(format.itemSeparator))
            .join(`}${format.itemSeparator}{`);
        return `{{${data}}}`;
    }
    rows() {
        return Seq.range(this.height)
            .map((row) => Seq.range(this.width)
            .map((col) => this.cell(col, row))
            .toArray())
            .toArray();
    }
    cell(col, row) {
        if (col < 0 || row < 0 || col >= this.width || row >= this.height) {
            throw new DetailedError("Cell out of range", {
                col,
                row,
                width: this.width,
                height: this.height,
            });
        }
        const i = (this.width * row + col) * 2;
        return new Complex(this.buffer[i], this.buffer[i + 1]);
    }
    set(col, row, value) {
        if (col < 0 || row < 0 || col >= this.width || row >= this.height) {
            throw new DetailedError("Cell out of range", {
                col,
                row,
                width: this.width,
                height: this.height,
            });
        }
        const i = (this.width * row + col) * 2;
        this.buffer[i] = value.real;
        this.buffer[i + 1] = value.imag;
    }
    isApproximatelyHermitian(epsilon) {
        if (this.width !== this.height) {
            return false;
        }
        for (let c = 0; c < this.width; c++) {
            for (let r = 0; r < this.height; r++) {
                const i = (this.width * r + c) * 2;
                const j = (this.width * c + r) * 2;
                if (Math.abs(this.buffer[i] - this.buffer[j]) > epsilon) {
                    return false;
                }
                if (Math.abs(this.buffer[i + 1] + this.buffer[j + 1]) > epsilon) {
                    return false;
                }
            }
        }
        return true;
    }
    plus(other) {
        const { width: w, height: h, buffer: b1 } = this;
        const b2 = other.buffer;
        Util.need(other.width === w && other.height === h, "Matrix.plus: compatible sizes");
        const newBuffer = new Float64Array(this.buffer.length);
        for (let i = 0; i < newBuffer.length; i++) {
            newBuffer[i] = b1[i] + b2[i];
        }
        return new Matrix(w, h, newBuffer);
    }
    tensorProduct(other) {
        const w1 = this.width;
        const h1 = this.height;
        const w2 = other.width;
        const h2 = other.height;
        const w = w1 * w2;
        const h = h1 * h2;
        const newBuffer = new Float64Array(w * h * 2);
        for (let r1 = 0; r1 < h1; r1++) {
            for (let r2 = 0; r2 < h2; r2++) {
                for (let c1 = 0; c1 < w1; c1++) {
                    for (let c2 = 0; c2 < w2; c2++) {
                        const k1 = (r1 * w1 + c1) * 2;
                        const k2 = (r2 * w2 + c2) * 2;
                        const k3 = ((r1 * h2 + r2) * w + (c1 * w2 + c2)) * 2;
                        const cr1 = this.buffer[k1];
                        const ci1 = this.buffer[k1 + 1];
                        const cr2 = other.buffer[k2];
                        const ci2 = other.buffer[k2 + 1];
                        const cr3 = cr1 * cr2 - ci1 * ci2;
                        const ci3 = cr1 * ci2 + ci1 * cr2;
                        newBuffer[k3] = cr3;
                        newBuffer[k3 + 1] = ci3;
                    }
                }
            }
        }
        return new Matrix(w, h, newBuffer);
    }
    timesQubitOperation(operation2x2, qubitIndex, controlMask, desiredValueMask) {
        Util.need((controlMask & (1 << qubitIndex)) === 0, "Matrix.timesQubitOperation: self-controlled");
        Util.need(operation2x2.width === 2 && operation2x2.height === 2, "Matrix.timesQubitOperation: not 2x2");
        const { width: w, height: h, buffer: old } = this;
        const [ar, ai, br, bi, cr, ci, dr, di] = operation2x2.buffer;
        Util.need(h >= 2 << qubitIndex, "Matrix.timesQubitOperation: qubit index out of range");
        const buf = new Float64Array(old);
        let i = 0;
        for (let r = 0; r < h; r++) {
            const isControlled = ((controlMask & r) ^ desiredValueMask) !== 0;
            const qubitVal = (r & (1 << qubitIndex)) !== 0;
            for (let c = 0; c < w; c++) {
                if (!isControlled && !qubitVal) {
                    const j = i + (1 << qubitIndex) * 2 * w;
                    const xr = buf[i];
                    const xi = buf[i + 1];
                    const yr = buf[j];
                    const yi = buf[j + 1];
                    buf[i] = xr * ar - xi * ai + yr * br - yi * bi;
                    buf[i + 1] = xr * ai + xi * ar + yr * bi + yi * br;
                    buf[j] = xr * cr - xi * ci + yr * dr - yi * di;
                    buf[j + 1] = xr * ci + xi * cr + yr * di + yi * dr;
                }
                i += 2;
            }
        }
        return new Matrix(w, h, buf);
    }
    singularValueDecomposition(epsilon = 0, maxIterations = 100) {
        if (this.width !== this.height) {
            throw new DetailedError("Expected a square matrix.", this);
        }
        // eslint-disable-next-line prefer-const
        let { U, S, V } = this.width === 2
            ? this._unordered_singularValueDecomposition_2x2()
            : this._unordered_singularValueDecomposition_iterative(epsilon, maxIterations);
        // Fix ordering, so that the singular values are ascending.
        const permutation = Seq.range(this.width)
            .sortedBy((i) => -S.cell(i, i).norm2())
            .toArray();
        for (let i = 0; i < S.width; i++) {
            const j = permutation.indexOf(i);
            if (i !== j) {
                U._inline_colMix_postMultiply(i, j, Matrix.PAULI_X);
                V._inline_rowMix_preMultiply(i, j, Matrix.PAULI_X);
                const si = i * (S.width + 1) * 2;
                const sj = j * (S.width + 1) * 2;
                [S.buffer[si], S.buffer[sj]] = [S.buffer[sj], S.buffer[si]];
                [S.buffer[si + 1], S.buffer[sj + 1]] = [
                    S.buffer[sj + 1],
                    S.buffer[si + 1],
                ];
                [permutation[j], permutation[i]] = [permutation[i], permutation[j]];
            }
        }
        // Fix phases.
        for (let i = 0; i < S.width; i++) {
            U._inline_colScale_postMultiply(i, S.cell(i, i).unit());
        }
        // Discard off-diagonal elements.
        S = Matrix.generateDiagonal(S.width, (k) => S.cell(k, k).abs());
        return { U, S, V };
    }
    _unordered_singularValueDecomposition_2x2() {
        // Initial dirty work of clearing a corner is handled by the LQ decomposition.
        const U = Matrix.identity(2);
        // eslint-disable-next-line prefer-const
        let { L: S, Q: V } = this.lqDecomposition();
        // Cancel phase factors, leaving S with only real entries.
        const au = S.cell(0, 0).unit();
        const cu = S.cell(0, 1).unit();
        U._inline_colScale_postMultiply(0, au);
        U._inline_colScale_postMultiply(1, cu);
        S._inline_rowScale_preMultiply(0, au.conjugate());
        S._inline_rowScale_preMultiply(1, cu.conjugate());
        const du = S.cell(1, 1).unit();
        S._inline_colScale_postMultiply(1, du.conjugate());
        V._inline_rowScale_preMultiply(1, du);
        // Decompose the 2x2 real matrix.
        const [a, , b, , c, , d] = S.buffer;
        const t = a + d;
        const x = b + c;
        const y = b - c;
        const z = a - d;
        const theta_0 = Math.atan2(x, t) / 2.0;
        const theta_d = Math.atan2(y, z) / 2.0;
        const s_0 = Math.sqrt(t * t + x * x) / 2.0;
        const s_d = Math.sqrt(z * z + y * y) / 2.0;
        U._inline_colMix_postMultiply(0, 1, Matrix.rotation(theta_0 - theta_d));
        V._inline_rowMix_preMultiply(0, 1, Matrix.rotation(theta_0 + theta_d));
        S = Matrix.square(s_0 + s_d, 0, 0, s_0 - s_d);
        return { U, S, V };
    }
    _unordered_singularValueDecomposition_iterative(epsilon = 0, maxIterations = 100) {
        let U = Matrix.identity(this.width);
        let S = this._clone();
        let V = Matrix.identity(this.width);
        let iter = 0;
        while (!S.isDiagonal(epsilon) && iter++ < maxIterations) {
            const { Q: Ql, R: Sl } = S.qrDecomposition();
            const { L: Sr, Q: Qr } = Sl.lqDecomposition();
            U = U.times(Ql);
            S = Sr;
            V = Qr.times(V);
        }
        return { U, S, V };
    }
    _inline_colMix_postMultiply(col1, col2, op) {
        const [a, b, c, d] = op._2x2Breakdown();
        for (let row = 0; row < this.width; row++) {
            const x = this.cell(col1, row);
            const y = this.cell(col2, row);
            const v1 = x.times(a).plus(y.times(c));
            const v2 = x.times(b).plus(y.times(d));
            const k1 = (row * this.width + col1) * 2;
            const k2 = (row * this.width + col2) * 2;
            this.buffer[k1] = v1.real;
            this.buffer[k1 + 1] = v1.imag;
            this.buffer[k2] = v2.real;
            this.buffer[k2 + 1] = v2.imag;
        }
    }
    _2x2Breakdown() {
        return [
            new Complex(this.buffer[0], this.buffer[1]),
            new Complex(this.buffer[2], this.buffer[3]),
            new Complex(this.buffer[4], this.buffer[5]),
            new Complex(this.buffer[6], this.buffer[7]),
        ];
    }
    _inline_rowMix_preMultiply(row1, row2, op) {
        const [a, b, c, d] = op._2x2Breakdown();
        for (let col = 0; col < this.width; col++) {
            const x = this.cell(col, row1);
            const y = this.cell(col, row2);
            const v1 = x.times(a).plus(y.times(b));
            const v2 = x.times(c).plus(y.times(d));
            const k1 = (row1 * this.width + col) * 2;
            const k2 = (row2 * this.width + col) * 2;
            this.buffer[k1] = v1.real;
            this.buffer[k1 + 1] = v1.imag;
            this.buffer[k2] = v2.real;
            this.buffer[k2 + 1] = v2.imag;
        }
    }
    _inline_colScale_postMultiply(col, scale) {
        for (let row = 0; row < this.height; row++) {
            const v1 = this.cell(col, row);
            const v2 = v1.times(scale);
            const k = (row * this.width + col) * 2;
            this.buffer[k] = v2.real;
            this.buffer[k + 1] = v2.imag;
        }
    }
    lqDecomposition() {
        const { Q, R } = this.adjoint().qrDecomposition();
        return { L: R.adjoint(), Q: Q.adjoint() };
    }
    qrDecomposition() {
        if (this.width !== this.height) {
            throw new DetailedError("Expected a square matrix.", this);
        }
        const Q = Matrix.identity(this.width);
        const R = this._clone();
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < row && col < this.width; col++) {
                // We're going to cancel out the value below the diagonal with a Givens rotation.
                const belowDiag = R.cell(col, row); // Zero this.
                const onDiag = R.cell(col, col); // With this.
                // Determine how much to rotate.
                const mag1 = onDiag.abs();
                const mag2 = belowDiag.abs();
                if (mag2 === 0) {
                    continue; // Already zero'd.
                }
                const theta = -Math.atan2(mag2, mag1);
                const cos = Math.cos(theta);
                const sin = Math.sin(theta);
                // Need to cancel phases before rotating.
                const phase1 = onDiag.unit().conjugate();
                const phase2 = belowDiag.unit().conjugate();
                // Apply the rotation to R (and cancel it with Q).
                const op = Matrix.square(phase1.times(cos), phase2.times(-sin), phase1.times(sin), phase2.times(cos));
                R._inline_rowMix_preMultiply(col, row, op);
                Q._inline_colMix_postMultiply(col, row, op.adjoint());
            }
            // Cancel imaginary factors on diagonal.
            const u = R.cell(row, row).unit();
            R._inline_rowScale_preMultiply(row, u.conjugate());
            Q._inline_colScale_postMultiply(row, u);
        }
        return { Q, R };
    }
    _clone() {
        return new Matrix(this.width, this.height, this.buffer.slice());
    }
    _inline_rowScale_preMultiply(row, scale) {
        for (let col = 0; col < this.width; col++) {
            const v1 = this.cell(col, row);
            const v2 = v1.times(scale);
            const k = (row * this.width + col) * 2;
            this.buffer[k] = v2.real;
            this.buffer[k + 1] = v2.imag;
        }
    }
    isDiagonal(epsilon = 0) {
        for (let c = 0; c < this.width; c++) {
            for (let r = 0; r < this.height; r++) {
                if (r === c) {
                    continue;
                }
                const k = (this.width * r + c) * 2;
                const dr = Math.abs(this.buffer[k]);
                const di = Math.abs(this.buffer[k + 1]);
                const d = Math.max(dr, di);
                if (isNaN(d) || d > epsilon) {
                    return false;
                }
            }
        }
        return this.width === this.height;
    }
    trace() {
        let total_r = 0;
        let total_i = 0;
        const d = this.width * 2 + 2;
        for (let i = 0; i < this.buffer.length; i += d) {
            total_r += this.buffer[i];
            total_i += this.buffer[i + 1];
        }
        return new Complex(total_r, total_i);
    }
    qubitDensityMatrixToBlochVector() {
        if (this.width !== 2 || this.height !== 2) {
            throw new DetailedError("Need a 2x2 density matrix.", this);
        }
        if (!this.isApproximatelyHermitian(0.01)) {
            throw new DetailedError("Density matrix should be Hermitian.", this);
        }
        if (!this.trace().isApproximatelyEqualTo(1, 0.01)) {
            throw new DetailedError("Density matrix should have unit trace.", this);
        }
        // Density matrix from bloch vector equation: M = 1/2 (I + vσ)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [ar, ai, br, bi, cr, ci, dr, di] = this.buffer;
        const x = cr + br;
        const y = ci - bi;
        const z = ar - dr;
        return [x, y, z];
    }
    qubitDensityMatrix(bit) {
        const traceBits = [...Array(Math.log2(this.height)).keys()].filter((each) => each !== bit);
        const removeBits = (num, bits) => {
            return bits
                .sort()
                .reverse()
                .reduce((result, each) => {
                let mask = result >> (each + 1);
                mask = mask << each;
                const right = ((1 << each) - 1) & result;
                return mask | right;
            }, num);
        };
        let densityMatrix = Matrix.zero(2, 2);
        for (let bra = 0; bra < this.height; bra++) {
            for (let ket = 0; ket < this.height; ket++) {
                const survived = traceBits.every((b) => {
                    return ((bra >> b) & 1) === ((ket >> b) & 1);
                });
                if (!survived)
                    continue;
                const amp = this.cell(0, ket).times(this.cell(0, bra).conjugate());
                if (amp.isEqualTo(0))
                    continue;
                const ketMat = removeBits(ket, traceBits) === 0 ? Matrix.col(1, 0) : Matrix.col(0, 1);
                const braMat = removeBits(bra, traceBits) === 0 ? Matrix.row(1, 0) : Matrix.row(0, 1);
                const ketBra = ketMat.times(braMat);
                densityMatrix = densityMatrix.plus(ketBra.times(amp));
            }
        }
        return densityMatrix;
    }
    static fromAngleAxisPhaseRotation(angle, axis, phase) {
        const [x, y, z] = axis;
        Util.need(Math.abs(x * x + y * y + z * z - 1) < 0.000001, "Not a unit axis.");
        const vσ = Matrix.PAULI_X.times(x)
            .plus(Matrix.PAULI_Y.times(y))
            .plus(Matrix.PAULI_Z.times(z));
        const [cos, sin] = Util.snappedCosSin(-angle / 2);
        return Matrix.identity(2)
            .times(cos)
            .plus(vσ.times(new Complex(0, sin)))
            .times(Complex.polar(1, phase));
    }
    qubitOperationToAngleAxisRotation() {
        Util.need(this.width === 2 && this.height === 2, "Need a 2x2 matrix.");
        Util.need(this.isUnitary(0.01), "Need a unitary matrix.");
        // Extract orthogonal components, adjusting for factors of i.
        const [a, b, c, d] = this._2x2Breakdown();
        const wφ = a.plus(d);
        const xφ = b.plus(c).dividedBy(Complex.I);
        const yφ = b.minus(c);
        const zφ = a.minus(d).dividedBy(Complex.I);
        // Cancel global phase factor, pushing all values onto the real line.
        // let φ = seq([wφ, xφ, yφ, zφ]).maxBy(e => e.abs())
        //   .unit()
        //   .times(2) as Complex
        const t = seq([wφ, xφ, yφ, zφ]).maxBy((e) => e.abs());
        let φ = t.unit().times(2);
        const w = Math.min(1, Math.max(-1, wφ.dividedBy(φ).real));
        let x = xφ.dividedBy(φ).real;
        let y = yφ.dividedBy(φ).real;
        let z = zφ.dividedBy(φ).real;
        let θ = -2 * Math.acos(w);
        // Normalize axis.
        const n = Math.sqrt(x * x + y * y + z * z);
        if (n < 0.0000001) {
            // There's an axis singularity near θ=0. Just default to no rotation around the X axis.
            return { axis: [1, 0, 0], angle: 0, phase: φ.phase() };
        }
        x /= n;
        y /= n;
        z /= n;
        // Prefer θ in [-π, π].
        if (θ <= -Math.PI) {
            θ += 2 * Math.PI;
            φ = φ.times(-1);
        }
        // Prefer axes that point positive-ward.
        if (x + y + z < 0) {
            x = -x;
            y = -y;
            z = -z;
            θ = -θ;
        }
        return { axis: [x, y, z], angle: θ, phase: φ.phase() };
    }
    isUpperTriangular(epsilon = 0) {
        for (let r = 0; r < this.height; r++) {
            for (let c = 0; c < r && c < this.width; c++) {
                const k = (r * this.width + c) * 2;
                const v1 = this.buffer[k];
                const v2 = this.buffer[k + 1];
                if (isNaN(v1) || isNaN(v2) || v1 * v1 + v2 * v2 > epsilon * epsilon) {
                    return false;
                }
            }
        }
        return true;
    }
    isLowerTriangular(epsilon = 0) {
        for (let r = 0; r < this.height; r++) {
            for (let c = r + 1; c < this.width; c++) {
                const k = (r * this.width + c) * 2;
                const v1 = this.buffer[k];
                const v2 = this.buffer[k + 1];
                if (isNaN(v1) || isNaN(v2) || v1 * v1 + v2 * v2 > epsilon * epsilon) {
                    return false;
                }
            }
        }
        return true;
    }
}
Matrix.H = Matrix.square(1, 1, 1, -1).times(Math.sqrt(0.5));
Matrix.PAULI_X = Matrix.square(0, 1, 1, 0);
Matrix.PAULI_Y = Matrix.square(0, new Complex(0, -1), Complex.I, 0);
Matrix.PAULI_Z = Matrix.square(1, 0, 0, -1);

function CircuitableMixin(Base) {
    class CircuitableMixinClass extends Base {
        get quantumCircuit() {
            const el = this.querySelector("quantum-circuit");
            Util.notNull(el);
            return el;
        }
        initCircuitable() {
            this.addEventListener("dragAndDroppable.load", this.initDragAndDroppable);
            this.addEventListener("dragAndDroppable.mouseenter", this.setDragAndDroppableCursorStyleGrab);
            this.addEventListener("dragAndDroppable.grab", this.setDocumentCursorStyleGrabbing);
            this.addEventListener("dragAndDroppable.grab", this.setDragAndDroppableCursorStyleGrabbing);
            this.addEventListener("dragAndDroppable.grab", this.prepareForDrop);
            this.addEventListener("dragAndDroppable.ungrab", this.removeDragAndDroppableCursorStyle);
            this.addEventListener("dragAndDroppable.ungrab", this.setDocumentCursorStyleAuto);
            this.addEventListener("dragAndDroppable.enddragging", this.setDocumentCursorStyleAuto);
            this.addEventListener("dragAndDroppable.trash", this.setDocumentCursorStyleAuto);
            this.addEventListener("dragAndDroppable.trash", this.resizeCircuit);
            this.addEventListener("dragAndDroppable.snapToNewDropzone", this.addShadowStep);
            this.addEventListener("step.drop", this.resizeCircuit);
        }
        initDragAndDroppable(event) {
            const dragAndDroppable = event.detail
                .element;
            Util.notNull(dragAndDroppable);
            dragAndDroppable.dragAndDrop = true;
            dragAndDroppable.initDragAndDrop();
        }
        setDragAndDroppableCursorStyleGrab(event) {
            const operation = event.detail.element;
            Util.notNull(operation);
            if (this.quantumCircuit.editing) {
                operation.style.cursor = "grabbing";
            }
            else {
                operation.style.cursor = "grab";
            }
        }
        setDragAndDroppableCursorStyleGrabbing(event) {
            const operation = event.detail.element;
            Util.notNull(operation);
            operation.style.cursor = "grabbing";
        }
        prepareForDrop(event) {
            const dragAndDroppable = event.detail
                .element;
            Util.notNull(dragAndDroppable);
            this.quantumCircuit.prepareForDrop();
            dragAndDroppable.setSnapTargets(this.quantumCircuit.dropzones, this.quantumCircuit.wireCount);
        }
        removeDragAndDroppableCursorStyle(event) {
            const operation = event.detail.element;
            Util.notNull(operation);
            operation.style.cursor = "";
        }
        setDocumentCursorStyleGrabbing() {
            document.documentElement.style.cursor = "grabbing";
        }
        setDocumentCursorStyleAuto() {
            document.documentElement.style.cursor = "auto";
        }
        resizeCircuit() {
            this.quantumCircuit.resize();
        }
        addShadowStep(event) {
            const customEvent = event;
            const operation = customEvent.detail.element;
            const dragAndDroppable = customEvent.detail.element;
            const stepIndex = customEvent.detail.stepIndex;
            const wireIndex = customEvent.detail.wireIndex;
            const newStep = this.quantumCircuit.addCircuitStepAfter(stepIndex);
            const dropzone = newStep.dropzones[wireIndex];
            dropzone.assign(operation);
            dragAndDroppable.updateSnapTargets(newStep.dropzones);
        }
    }
    return CircuitableMixinClass;
}

const controllers = new WeakSet();
/*
 * Bind `[data-action]` elements from the DOM to their actions.
 *
 */
function bind(controller) {
    controllers.add(controller);
    if (controller.shadowRoot)
        bindShadow(controller.shadowRoot);
    bindElements(controller);
    listenForBind(controller.ownerDocument);
}
function bindShadow(root) {
    bindElements(root);
    listenForBind(root);
}
const observers = new WeakMap();
/**
 * Set up observer that will make sure any actions that are dynamically
 * injected into `el` will be bound to it's controller.
 *
 * This returns a Subscription object which you can call `unsubscribe()` on to
 * stop further live updates.
 */
function listenForBind(el = document) {
    if (observers.has(el))
        return observers.get(el);
    let closed = false;
    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === 'attributes' && mutation.target instanceof Element) {
                bindActions(mutation.target);
            }
            else if (mutation.type === 'childList' && mutation.addedNodes.length) {
                for (const node of mutation.addedNodes) {
                    if (node instanceof Element) {
                        bindElements(node);
                    }
                }
            }
        }
    });
    observer.observe(el, { childList: true, subtree: true, attributeFilter: ['data-action'] });
    const subscription = {
        get closed() {
            return closed;
        },
        unsubscribe() {
            closed = true;
            observers.delete(el);
            observer.disconnect();
        }
    };
    observers.set(el, subscription);
    return subscription;
}
function bindElements(root) {
    for (const el of root.querySelectorAll('[data-action]')) {
        bindActions(el);
    }
    // Also bind the controller to itself
    if (root instanceof Element && root.hasAttribute('data-action')) {
        bindActions(root);
    }
}
// Bind a single function to all events to avoid anonymous closure performance penalty.
function handleEvent(event) {
    const el = event.currentTarget;
    for (const binding of bindings(el)) {
        if (event.type === binding.type) {
            const controller = el.closest(binding.tag);
            if (controllers.has(controller) && typeof controller[binding.method] === 'function') {
                controller[binding.method](event);
            }
            const root = el.getRootNode();
            if (root instanceof ShadowRoot && controllers.has(root.host) && root.host.matches(binding.tag)) {
                const shadowController = root.host;
                if (typeof shadowController[binding.method] === 'function') {
                    shadowController[binding.method](event);
                }
            }
        }
    }
}
function* bindings(el) {
    for (const action of (el.getAttribute('data-action') || '').trim().split(/\s+/)) {
        const eventSep = action.lastIndexOf(':');
        const methodSep = action.lastIndexOf('#');
        yield {
            type: action.slice(0, eventSep),
            tag: action.slice(eventSep + 1, methodSep),
            method: action.slice(methodSep + 1)
        };
    }
}
function bindActions(el) {
    for (const binding of bindings(el)) {
        el.addEventListener(binding.type, handleEvent);
    }
}

/**
 * Register the controller as a custom element.
 *
 * The classname is converted to a approriate tag name.
 *
 * Example: HelloController => hello-controller
 */
function register(classObject) {
    const name = classObject.name
        .replace(/([A-Z]($|[a-z]))/g, '-$1')
        .replace(/(^-|-Element$)/g, '')
        .toLowerCase();
    if (!window.customElements.get(name)) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window[classObject.name] = classObject;
        window.customElements.define(name, classObject);
    }
}

/**
 * findTarget will run `querySelectorAll` against the given controller, plus
 * its shadowRoot, returning any the first child that:
 *
 *  - Matches the selector of `[data-target~="tag.name"]` where tag is the
 *  tagName of the given HTMLElement, and `name` is the given `name` argument.
 *
 *  - Closest ascendant of the element, that matches the tagname of the
 *  controller, is the specific instance of the controller itself - in other
 *  words it is not nested in other controllers of the same type.
 *
 */
function findTarget(controller, name) {
    const tag = controller.tagName.toLowerCase();
    if (controller.shadowRoot) {
        for (const el of controller.shadowRoot.querySelectorAll(`[data-target~="${tag}.${name}"]`)) {
            if (!el.closest(tag))
                return el;
        }
    }
    for (const el of controller.querySelectorAll(`[data-target~="${tag}.${name}"]`)) {
        if (el.closest(tag) === controller)
            return el;
    }
}
function findTargets(controller, name) {
    const tag = controller.tagName.toLowerCase();
    const targets = [];
    if (controller.shadowRoot) {
        for (const el of controller.shadowRoot.querySelectorAll(`[data-targets~="${tag}.${name}"]`)) {
            if (!el.closest(tag))
                targets.push(el);
        }
    }
    for (const el of controller.querySelectorAll(`[data-targets~="${tag}.${name}"]`)) {
        if (el.closest(tag) === controller)
            targets.push(el);
    }
    return targets;
}

/**
 * Target is a decorator which - when assigned to a property field on the
 * class - will override that class field, turning it into a Getter which
 * returns a call to `findTarget(this, key)` where `key` is the name of the
 * property field. In other words, `@target foo` becomes a getter for
 * `findTarget(this, 'foo')`.
 */
function target(proto, key) {
    return Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            return findTarget(this, key);
        }
    });
}
/**
 * Targets is a decorator which - when assigned to a property field on the
 * class - will override that class field, turning it into a Getter which
 * returns a call to `findTargets(this, key)` where `key` is the name of the
 * property field. In other words, `@targets foo` becomes a getter for
 * `findTargets(this, 'foo')`.
 */
function targets(proto, key) {
    return Object.defineProperty(proto, key, {
        configurable: true,
        get() {
            return findTargets(this, key);
        }
    });
}

function autoShadowRoot(element) {
    for (const template of element.querySelectorAll('template[data-shadowroot]')) {
        if (template.parentElement === element) {
            element
                .attachShadow({
                mode: template.getAttribute('data-shadowroot') === 'closed' ? 'closed' : 'open'
            })
                .append(template.content.cloneNode(true));
        }
    }
}

const attrs = new WeakMap();
/**
 * Attr is a decorator which tags a property as one to be initialized via
 * `initializeAttrs`.
 *
 * The signature is typed such that the property must be one of a String,
 * Number or Boolean. This matches the behavior of `initializeAttrs`.
 */
function attr(proto, key) {
    if (!attrs.has(proto))
        attrs.set(proto, []);
    attrs.get(proto).push(key);
}
/**
 * initializeAttrs is called with a set of class property names (if omitted, it
 * will look for any properties tagged with the `@attr` decorator). With this
 * list it defines property descriptors for each property that map to `data-*`
 * attributes on the HTMLElement instance.
 *
 * It works around Native Class Property semantics - which are equivalent to
 * calling `Object.defineProperty` on the instance upon creation, but before
 * `constructor()` is called.
 *
 * If a class property is assigned to the class body, it will infer the type
 * (using `typeof`) and define an appropriate getter/setter combo that aligns
 * to that type. This means class properties assigned to Numbers can only ever
 * be Numbers, assigned to Booleans can only ever be Booleans, and assigned to
 * Strings can only ever be Strings.
 *
 * This is automatically called as part of `@controller`. If a class uses the
 * `@controller` decorator it should not call this manually.
 */
function initializeAttrs(instance, names) {
    if (!names)
        names = getAttrNames(Object.getPrototypeOf(instance));
    for (const key of names) {
        const value = instance[key];
        const name = attrToAttributeName(key);
        let descriptor = {
            get() {
                return this.getAttribute(name) || '';
            },
            set(newValue) {
                this.setAttribute(name, newValue || '');
            }
        };
        if (typeof value === 'number') {
            descriptor = {
                get() {
                    return Number(this.getAttribute(name) || 0);
                },
                set(newValue) {
                    this.setAttribute(name, newValue);
                }
            };
        }
        else if (typeof value === 'boolean') {
            descriptor = {
                get() {
                    return this.hasAttribute(name);
                },
                set(newValue) {
                    this.toggleAttribute(name, newValue);
                }
            };
        }
        Object.defineProperty(instance, key, descriptor);
        if (key in instance && !instance.hasAttribute(name)) {
            descriptor.set.call(instance, value);
        }
    }
}
function getAttrNames(classObjectProto) {
    const names = new Set();
    let proto = classObjectProto;
    while (proto && proto !== HTMLElement) {
        const attrNames = attrs.get(proto) || [];
        for (const name of attrNames)
            names.add(name);
        proto = Object.getPrototypeOf(proto);
    }
    return names;
}
function attrToAttributeName(name) {
    return `data-${name.replace(/([A-Z]($|[a-z]))/g, '-$1')}`.replace(/--/g, '-').toLowerCase();
}
function defineObservedAttributes(classObject) {
    let observed = classObject.observedAttributes || [];
    Object.defineProperty(classObject, 'observedAttributes', {
        get() {
            const attrMap = getAttrNames(classObject.prototype);
            return [...attrMap].map(attrToAttributeName).concat(observed);
        },
        set(attributes) {
            observed = attributes;
        }
    });
}

/**
 * Controller is a decorator to be used over a class that extends HTMLElement.
 * It will automatically `register()` the component in the customElement
 * registry, as well as ensuring `bind(this)` is called on `connectedCallback`,
 * wrapping the classes `connectedCallback` method if needed.
 */
function controller(classObject) {
    const connect = classObject.prototype.connectedCallback;
    classObject.prototype.connectedCallback = function () {
        this.toggleAttribute('data-catalyst', true);
        autoShadowRoot(this);
        initializeAttrs(this);
        bind(this);
        if (connect)
            connect.call(this);
        if (this.shadowRoot)
            bindShadow(this.shadowRoot);
    };
    defineObservedAttributes(classObject);
    register(classObject);
}

let CircuitEditorElement = class CircuitEditorElement extends CircuitableMixin(HTMLElement) {
    connectedCallback() {
        this.initCircuitable();
        this.attachShadow({ mode: "open" });
        this.update();
    }
    update() {
        render$1(html `<slot></slot>`, this.shadowRoot);
    }
};
CircuitEditorElement = __decorate([
    controller
], CircuitEditorElement);

var nouislider = createCommonjsModule(function (module, exports) {
(function (global, factory) {
    factory(exports) ;
}(commonjsGlobal, (function (exports) {
    exports.PipsMode = void 0;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    exports.PipsType = void 0;
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    //region Helper Methods
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        // partial formatters only need a to function and not a from function
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    // Bindable version
    function preventDefault(e) {
        e.preventDefault();
    }
    // Removes duplicates from an array.
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    // Round a value to the closest 'to'.
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    // Current position of an element relative to the document.
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        // getBoundingClientRect contains left scroll in Chrome on Android.
        // I haven't found a feature detection that proves this. Worst case
        // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    // Checks whether a value is numerical.
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    // Sets a class and removes it after [duration] ms.
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    // Limits a value to 0 - 100
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    // Counts decimals
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    // http://youmightnotneedjquery.com/#add_class
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    // http://youmightnotneedjquery.com/#remove_class
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y
        };
    }
    // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed
    function getActions() {
        // Determine the events to bind. IE11 implements pointerEvents without
        // a prefix, which breaks compatibility with the IE10 implementation.
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend"
                };
    }
    // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785
    function getSupportsPassive() {
        var supportsPassive = false;
        /* eslint-disable */
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                }
            });
            // @ts-ignore
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        /* eslint-enable */
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    // (percentage) How many percent is this value of this range?
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    // (percentage) Where is this value on this range?
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    // (value) How much is this percentage on this range?
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    // (percentage) Input a value, find where, on a scale of 0-100, it applies.
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    // (value) Input a percentage, find where it is on the specified range.
    function fromStepping(xVal, xPct, value) {
        // There is no range group that fits 100
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    // (percentage) Get the step that applies at a certain value.
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        // If 'snap' is set, steps are used as fixed points on the slider.
        if (snap) {
            // Find the closest position, a or b.
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    //endregion
    //region Spectrum
    var Spectrum = /** @class */ (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            // Map the object keys to an array.
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            // Sort all entries by value (numeric sort).
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var index;
            var distances = [];
            for (index = 0; index < this.xNumSteps.length - 1; index++) {
                // last "range" can't contain step size as it is purely an endpoint.
                var step = this.xNumSteps[index];
                if (step && (value / step) % 1 !== 0) {
                    throw new Error("noUiSlider: 'limit', 'margin' and 'padding' of " +
                        this.xPct[index] +
                        "% range must be divisible by step.");
                }
                // Calculate percentual distance in current range of limit, margin or padding
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        // Calculate the percentual distance over the whole scale of ranges.
        // direction: 0 = backwards / 1 = forwards
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            // Calculate range where to start calculation
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            // If looking backwards and the value is exactly at a range separator then look one range further
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            // Calculate what part of the start range the value is
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            // Do until the complete distance across ranges is calculated
            while (rest_rel_distance > 0) {
                // Calculate the percentage of total range
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                // Detect if the margin, padding or limit is larger then the current range and calculate
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    // If larger then take the percentual distance of the whole range
                    rel_range_distance = range_pct * start_factor;
                    // Rest factor of relative percentual distance still to be calculated
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    // Set start factor to 1 as for next range it does not apply.
                    start_factor = 1;
                }
                else {
                    // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    // No rest left as the rest fits in current range
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    // Limit range to first range when distance becomes outside of minimum range
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    // Limit range to last range when distance becomes outside of maximum range
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                // Rest of relative percentual distance still to be calculated
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            // Store values.
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            // Factor to range ratio
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    //endregion
    //region Options
    /*	Every input option is tested and parsed. This will prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;

        The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub"
    };
    // Namespaces of internal event listeners
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria"
    };
    //endregion
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        // The step option can still be used to set stepping
        // for linear sliders. Overwritten if set in 'range'.
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        // Filter incorrect input.
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        // Catch missing start or end.
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        // Catch equal start or end.
        if (entry.min === entry.max) {
            throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        // Validate input. Values aren't tested, as the public .val method
        // will always provide a valid location.
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        // Store the number of handles.
        parsed.handles = entry.length;
        // When the slider is initialized, the .val method will
        // be called with the start options.
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        // Enforce 100% stepping within subranges.
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        // Map legacy options
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        // Handle boolean options
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        // Reject invalid input
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        // Set orientation to an a numerical value for easy
        // array selection.
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        // Issue #582
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        // 'getDistance' returns false for invalid values.
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            // last "range" can't contain step size as it is purely an endpoint.
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        // Set direction as a numerical value for easy parsing.
        // Invert connection for RTL sliders, so that the proper
        // handles get the connect/background classes.
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        // Make sure the input is a string.
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        // Check if the string contains any keywords.
        // None are required.
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            // Use margin to enforce fixed state
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        // This is an advanced option. Passed values are used without validation.
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    // Test all developer settings and parse to assumption-safe values.
    function testOptions(options) {
        // To prove a fix for #537, freeze options here.
        // If the object is modified, an error will be thrown.
        // Object.freeze(options);
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter
        };
        // Tests are executed in the order they are presented here.
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses }
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardDefaultStep: 10
        };
        // AriaFormat defaults to regular format, if any.
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        // Run all options through a testing mechanism to ensure correct
        // input. It should be noted that options might get modified to
        // be handled properly. E.g. wrapping integers in arrays.
        Object.keys(tests).forEach(function (name) {
            // If the option isn't set, but it is required, throw an error.
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        // Forward pips options
        parsed.pips = options.pips;
        // All recent browsers accept unprefixed transform.
        // We need -ms- for IE9 and -webkit- for older Android;
        // Assume use of -webkit- if unprefixed and -ms- are not supported.
        // https://caniuse.com/#feat=transforms2d
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        // Pips don't move, so we can place them using left/top.
        var styles = [["left", "top"], ["right", "bottom"]];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    //endregion
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        // All variables local to 'scope' are prefixed with 'scope_'
        // Slider DOM Nodes
        var scope_Target = target;
        var scope_Base;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        // Slider state values
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        // Document Nodes
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        // For horizontal sliders in standard ltr documents,
        // make .noUi-origin overflow to the left so the document doesn't scroll.
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        // Creates a node, adds it to target, returns the new node.
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        // Append a origin to the base
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                // 0 = focusable and reachable
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            return origin;
        }
        // Insert nodes for connect elements
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        // Add handles to the slider base.
        function addElements(connectOptions, base) {
            var connectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(connectBase, connectOptions[0]));
            // [::::O====O====O====]
            // connectOptions = [0, 1, 1, 1]
            for (var i = 0; i < options.handles; i++) {
                // Keep a list of all added handles.
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
            }
        }
        // Initialize a single slider.
        function addSlider(addTarget) {
            // Apply classes and data to the target.
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        // Disable the slider dragging if any handle is disabled
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        // The tooltips option is a shorthand for using the 'update' event.
        function tooltips() {
            removeTooltips();
            // Tooltips are added with options.tooltips in original order.
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    // Formatted value for display
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    // Map to slider range values
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            // Use the range.
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                // Divide 0 - 100 in 'count' parts.
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                // List these parts and have them handled as 'positions'.
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                // Map all percentages to on-range values.
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                // If the value must be stepped, it needs to be converted to a percentage first.
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        // Convert to percentage, apply step, return to value.
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                // Otherwise, we can simply use the values.
                return pips.values;
            }
            return []; // pips.mode = never
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                // Avoid floating point variance by dropping the smallest decimal places.
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            // Create a copy of the group, sort it and filter away all duplicates.
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            // Make sure the range starts with the first element.
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            // Likewise for the last one.
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                // Get the current step and the lower + upper positions.
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                // When using 'steps' mode, use the provided steps.
                // Otherwise, we'll step on to the next subrange.
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                // Default to a 'full' step.
                if (!step) {
                    step = high - low;
                }
                // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
                if (high === undefined) {
                    high = low;
                }
                // Make sure step isn't 0, which would cause an infinite loop (#654)
                step = Math.max(step, 0.0000001);
                // Find all steps in the subrange.
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    // Get the percentage value for the current step,
                    // calculate the size for the subrange.
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    // This ratio represents the amount of percentage-space a point indicates.
                    // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                    // Round the percentage offset to an even number, then divide by two
                    // to spread the offset on both sides of the range.
                    stepSize = pctDifference / realSteps;
                    // Divide all points evenly, adding the correct number to this subrange.
                    // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                    for (q = 1; q <= realSteps; q += 1) {
                        // The ratio between the rounded value and the actual size might be ~1% off.
                        // Correct the percentage offset by the number of points
                        // per subrange. density = 1 will result in 100 points on the
                        // full range, 2 for 50, 4 for 25, etc.
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    // Determine the point type.
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    // Update the percentage count.
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                // Apply the filter function, if it is set.
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                // Add a marker for every point
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                // Values are only appended for points marked '1' or '2'.
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            // Append all points.
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            // Fix #669
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                }
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        // Shorthand for base dimensions.
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        // Handler for attaching events trough a proxy.
        function attachEvent(events, element, callback, data) {
            // This function can be used to 'filter' events to the slider.
            // element is a node, not a nodeList
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                // fixEvent returns false if this event has a different target
                // when handling (multi-) touch events;
                if (!e) {
                    return false;
                }
                // doNotReject is passed by all end events to make sure released touches
                // are not rejected, leaving the slider "stuck" to the cursor;
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                // Stop if an active 'tap' transition is taking place.
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                // Ignore right or middle clicks on start #454
                if (data.hover && e.buttons) {
                    return false;
                }
                // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                // touch-action: manipulation, but that allows panning, which breaks
                // sliders after zooming/on non-responsive pages.
                // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                // Call the event handler with the event [ and additional data ].
                callback(e, data);
                return;
            };
            var methods = [];
            // Bind a closure on the target for every event type.
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        // Provide a clean event with standardized offset values.
        function fixEvent(e, pageOffset, eventTarget) {
            // Filter the event to register the type, which can be
            // touch, mouse or pointer. Offset changes need to be
            // made on an event specific basis.
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            // IE10 implemented pointer events with a prefix;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
            // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
            // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            // The only thing one handle should be concerned about is the touches that originated on top of it.
            if (touch) {
                // Returns true if a touch originated on the target.
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                // In the case of touchstart events, we need to make sure there is still no more than one
                // touch on the target so we look amongst all touches.
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    // Do not support more than one touch per handle.
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    // In the other cases, find on changedTouches is enough.
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    // Cancel if the target touch has not moved.
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer; // Fix #435
            return e;
        }
        // Translate a coordinate in the document to a percentage on the slider
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            // Clamp proposal between 0% and 100%
            // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
            // are used (e.g. contained handles feature)
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        // Find handle closest to a certain percentage on the slider
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                // Disabled handles are ignored
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                // Initial state
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                // Difference with this handle is smaller than the previously checked handle
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        // Fire 'end' when a mouse or pen leaves the document.
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        // Handle movement on document for handle and range drag.
        function eventMove(event, data) {
            // Fix #498
            // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
            // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
            // IE9 has .buttons and .which zero on mousemove.
            // Firefox breaks the spec MDN defines.
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            // Check if we are moving up or down
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            // Convert the movement into a percentage of the slider width/height
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        // Unbind move events on document, call callbacks.
        function eventEnd(event, data) {
            // The handle is no longer active, so remove the class.
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            // Unbind the move and end events, which are added on 'start'.
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                // Remove dragging class.
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                // Remove cursor styles and text-selection events bound to the body.
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        // Bind move events on document.
        function eventStart(event, data) {
            // Ignore event if any handle is disabled
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                // Mark the handle as 'active' so it can be styled.
                addClass(handle, options.cssClasses.active);
            }
            // A drag should never propagate up to the 'tap' event.
            event.stopPropagation();
            // Record the event listeners.
            var listeners = [];
            // Attach the move and end events.
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                // The event target has changed so we need to propagate the original one so that we keep
                // relying on it to extract target touches.
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice()
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers
            });
            // We want to make sure we pushed the listeners in the listener list rather than creating
            // a new one as it has already been passed to the event handlers.
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            // Text selection isn't an issue on touch devices,
            // so adding cursor styles can be skipped.
            if (event.cursor) {
                // Prevent the 'I' cursor and extend the range-drag cursor.
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                // Mark the target with a dragging state.
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                // Prevent text selection when dragging the handles.
                // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                // The 'cursor' flag is false.
                // See: http://caniuse.com/#search=selectstart
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        // Move closest handle to tapped location.
        function eventTap(event) {
            // The tap event shouldn't propagate up
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            // Tackle the case that all handles are 'disabled'.
            if (handleNumber === false) {
                return;
            }
            // Flag the slider as it is now in a transitional state.
            // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
            if (options.events.snap) {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        // Fires a 'hover' event for a hovered mouse/pen position.
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        // Handles keydown on focused handles
        // Don't move the document when pressing arrow keys on focused handles
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                // On an right-to-left slider, the left and right keys act inverted
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                // On a top-to-bottom slider, the up and down keys act inverted
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var multiplier = options.keyboardPageMultiplier;
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= multiplier;
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                // End key
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                // Home key
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        // Attach events to several slider parts.
        function bindSliderEvents(behaviour) {
            // Attach the standard drag event to the handles.
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    // These events are only bound to the visual handle
                    // element, not the 'real' origin element.
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index]
                    });
                });
            }
            // Attach the tap event to the slider base.
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            // Fire hover events
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true
                });
            }
            // Make the range draggable.
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    addClass(connect, options.cssClasses.draggable);
                    // When the range is fixed, the entire range can
                    // be dragged by the handles. The handle in the first
                    // origin will propagate the start event upward,
                    // but it needs to be bound manually on the other.
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: [handleBefore, handleAfter],
                            handleNumbers: [index - 1, index],
                            connect: connect
                        });
                    });
                });
            }
        }
        // Attach an event to this slider, possibly including a namespace
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            // If the event bound is 'update,' fire it immediately for all handles.
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        // Undo attachment of event
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    // only delete protected internal event if intentional
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        // External event handling
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(
                        // Use the slider public API as the scope ('this')
                        scope_Self, 
                        // Return values as array, so arg_1[arg_2] is always valid.
                        scope_Values.map(options.format.to), 
                        // Handle index, 0 or 1
                        handleNumber, 
                        // Un-formatted slider values
                        scope_Values.slice(), 
                        // Event is fired by tap, true or false
                        tap || false, 
                        // Left offset of the handle, in relation to the slider
                        scope_Locations.slice(), 
                        // add the slider public API to an accessible parameter when this is unavailable
                        scope_Self);
                    });
                }
            });
        }
        // Split out the handle positioning logic so the Move event can use it, too
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
            var distance;
            // For sliders with multiple handles, limit movement to the other handle.
            // Apply the margin option by adding it to the handle positions.
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            // The limit option has the opposite effect, limiting handles to a
            // maximum distance from another. Limit must be > 0, as otherwise
            // handles would be unmovable.
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            // The padding option keeps the handles a certain distance from the
            // edges of the slider. Padding must be > 0.
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            to = scope_Spectrum.getStep(to);
            // Limit percentage to the 0 - 100 range
            to = limit(to);
            // Return false if handle can't move
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        // Uses slider orientation to create CSS rules. a = base value;
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        // Moves handle(s) by a percentage
        // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            // Store first handle now, so we still have it in case handleNumbers is reversed
            var firstHandle = handleNumbers[0];
            var b = [!upward, upward];
            var f = [upward, !upward];
            // Copy handleNumbers so we don't change the dataset
            handleNumbers = handleNumbers.slice();
            // Check to see which handle is 'leading'.
            // If that one can't move the second can't either.
            if (upward) {
                handleNumbers.reverse();
            }
            // Step 1: get the maximum percentage that any of the handles can move
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                    // Stop if one of the handles can't move.
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            // If using one handle, check backward AND forward
            else {
                b = f = [true];
            }
            var state = false;
            // Step 2: Try to set the handles with the found percentage
            handleNumbers.forEach(function (handleNumber, o) {
                state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
            });
            // Step 3: If a handle moved, fire events
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                // If target is a connect, then fire drag event
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        // Takes a base value and an offset. This offset is used for the connect bar size.
        // In the initial design for this feature, the origin element was 1% wide.
        // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
        // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        // Updates scope_Locations and scope_Values, updates visual state
        function updateHandlePosition(handleNumber, to) {
            // Update locations.
            scope_Locations[handleNumber] = to;
            // Convert the value to the slider stepping/range.
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
        }
        // Handles before the slider middle are stacked later = higher,
        // Handles after the middle later is lower
        // [[7] [8] .......... | .......... [5] [4]
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        // Test suggested values and apply margin, step.
        // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        // Updates style attribute for connect nodes
        function updateConnect(index) {
            // Skip connects set to false
            if (!scope_Connects[index]) {
                return;
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = scope_Locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = scope_Locations[index];
            }
            // We use two rules:
            // 'translate' to change the left/top offset;
            // 'scale' to change the width of the element;
            // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        // Parses value passed to .set method. Returns current value if not parse-able.
        function resolveToValue(to, handleNumber) {
            // Setting with null indicates an 'ignore'.
            // Inputting 'false' is invalid.
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            // If a formatted number was passed, attempt to decode it.
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            // If parsing the number failed, use the current value.
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        // Set the slider value.
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            // Event fires by default
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            // Animation is optional.
            // Make sure the initial values were set before using animated placement.
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            // First pass, without lookAhead but with lookBackward. Values are set from left to right.
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            // Secondary passes. Now that all base values are set, apply constraints.
            // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                // Fire the event only for handles that received a new value, as per #579
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        // Reset slider to initial values
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        // Set value for a single handle
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            // Ensure numeric input
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
            // The exactInput argument can be used to ignore slider stepping (#436)
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        // Get the slider value.
        function valueGet(unencoded) {
            if (unencoded === void 0) { unencoded = false; }
            if (unencoded) {
                // return a copy of the raw values
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            // If only one handle is used, return a single value.
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        // Removes classes from the root and empties it.
        function destroy() {
            // remove protected internal listeners
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            // If snapped, directly use defined step value
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null
                ];
            }
            // If the next value in this step moves into the next step,
            // the increment is the start of the next step - the current value
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            // If the value is beyond the starting point
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            // If a handle is at the start of a step, it always steps back into the previous step first
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            // Now, if at the slider edges, there is no in/decrement
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            // As per #391, the comparison for the decrement step can have some rounding issues.
            var stepDecimals = scope_Spectrum.countStepDecimals();
            // Round per #391
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        // Get the current step size for the slider.
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        // Updatable: margin, limit, padding, step, range, animate, snap
        function updateOptions(optionsToUpdate, fireSetEvent) {
            // Spectrum is created using the range, snap, direction and step options.
            // 'snap' and 'step' can be updated.
            // If 'snap' and 'step' are not passed, they should remain unchanged.
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips"
            ];
            // Only change options that we're actually passed to update.
            updateAble.forEach(function (name) {
                // Check for undefined. null removes the value.
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            // Load new options into the slider state
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            // Update pips, removes existing.
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            // Update tooltips, removes existing.
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            // Invalidate the current positioning so valueSet forces an update.
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        }
        // Initialization steps
        function setupSlider() {
            // Create the base element, initialize HTML and set classes.
            // Add handles and connect elements.
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            // Attach user events.
            bindSliderEvents(options.events);
            // Use the public value method to set the start values.
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            // Exposed for unit testing, don't use this in your application.
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips // Issue #594
        };
        return scope_Self;
    }
    // Run the standard initializer
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        // Throw an error if the slider was already initialized.
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        // Test the options and create the slider environment;
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    var nouislider = {
        // Exposed for unit testing, don't use this in your application.
        __spectrum: Spectrum,
        // A reference to the default classes, allows global changes.
        // Use the cssClasses option for changes to one slider.
        cssClasses: cssClasses,
        create: initialize
    };

    exports.create = initialize;
    exports.cssClasses = cssClasses;
    exports.default = nouislider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
});

var noUiSlider = unwrapExports(nouislider);
var nouislider_1 = nouislider.PipsMode;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start$6 = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start$6, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start$6, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow$1(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow$1(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow$1(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow$1(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement$1(placement) {
  return placement.split('-')[0];
}

// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains$1(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow$1(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow$1(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains$1(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow$1(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow$1(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow$1(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow$1(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow$1(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains$1(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start$6:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement$1(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement$1(placement);

    var isStartVariation = getVariation(placement) === start$6;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start$6 ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start$6 ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow$1(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/**!
* tippy.js v6.3.2
* (c) 2017-2021 atomiks
* MIT License
*/

var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return (element == null ? void 0 : (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body) ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */

function actualContains(parent, child) {
  var target = child;

  while (target) {
    var _ref2;

    if (parent.contains(target)) {
      return true;
    }

    target = (_ref2 = target.getRootNode == null ? void 0 : target.getRootNode()) == null ? void 0 : _ref2.host;
  }

  return false;
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var isIE11 = isBrowser ? // @ts-ignore
!!window.msCrypto : false;

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, {}, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      var _name;

      acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, {}, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, {}, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter$1 = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, {}, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter$1++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles() {
    popper.style.pointerEvents = instance.props.interactive && instance.state.isVisible ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(void 0, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    }

    var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

    if (instance.props.interactive && actualContains(popper, actualTarget)) {
      return;
    } // Clicked on the event listeners target


    if (actualContains(getCurrentTarget(), actualTarget)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    createPopperInstance();
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow

      void popper.offsetHeight;
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles();

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.

var applyStylesModifier = Object.assign({}, applyStyles$1, {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

var createSingleton = function createSingleton(tippyInstances, optionalProps) {
  var _optionalProps$popper;

  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var individualInstances = tippyInstances;
  var references = [];
  var currentTarget;
  var overrides = optionalProps.overrides;
  var interceptSetPropsCleanups = [];
  var shownOnCreate = false;

  function setReferences() {
    references = individualInstances.map(function (instance) {
      return instance.reference;
    });
  }

  function enableInstances(isEnabled) {
    individualInstances.forEach(function (instance) {
      if (isEnabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }

  function interceptSetProps(singleton) {
    return individualInstances.map(function (instance) {
      var originalSetProps = instance.setProps;

      instance.setProps = function (props) {
        originalSetProps(props);

        if (instance.reference === currentTarget) {
          singleton.setProps(props);
        }
      };

      return function () {
        instance.setProps = originalSetProps;
      };
    });
  } // have to pass singleton, as it maybe undefined on first call


  function prepareInstance(singleton, target) {
    var index = references.indexOf(target); // bail-out

    if (target === currentTarget) {
      return;
    }

    currentTarget = target;
    var overrideProps = (overrides || []).concat('content').reduce(function (acc, prop) {
      acc[prop] = individualInstances[index].props[prop];
      return acc;
    }, {});
    singleton.setProps(Object.assign({}, overrideProps, {
      getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function () {
        return target.getBoundingClientRect();
      }
    }));
  }

  enableInstances(false);
  setReferences();
  var plugin = {
    fn: function fn() {
      return {
        onDestroy: function onDestroy() {
          enableInstances(true);
        },
        onHidden: function onHidden() {
          currentTarget = null;
        },
        onClickOutside: function onClickOutside(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            currentTarget = null;
          }
        },
        onShow: function onShow(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            prepareInstance(instance, references[0]);
          }
        },
        onTrigger: function onTrigger(instance, event) {
          prepareInstance(instance, event.currentTarget);
        }
      };
    }
  };
  var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ['overrides']), {
    plugins: [plugin].concat(optionalProps.plugins || []),
    triggerTarget: references,
    popperOptions: Object.assign({}, optionalProps.popperOptions, {
      modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
    })
  }));
  var originalShow = singleton.show;

  singleton.show = function (target) {
    originalShow(); // first time, showOnCreate or programmatic call with no params
    // default to showing first instance

    if (!currentTarget && target == null) {
      return prepareInstance(singleton, references[0]);
    } // triggered from event (do nothing as prepareInstance already called by onTrigger)
    // programmatic call with no params when already visible (do nothing again)


    if (currentTarget && target == null) {
      return;
    } // target is index of instance


    if (typeof target === 'number') {
      return references[target] && prepareInstance(singleton, references[target]);
    } // target is a child tippy instance


    if (individualInstances.indexOf(target) >= 0) {
      var ref = target.reference;
      return prepareInstance(singleton, ref);
    } // target is a ReferenceElement


    if (references.indexOf(target) >= 0) {
      return prepareInstance(singleton, target);
    }
  };

  singleton.showNext = function () {
    var first = references[0];

    if (!currentTarget) {
      return singleton.show(0);
    }

    var index = references.indexOf(currentTarget);
    singleton.show(references[index + 1] || first);
  };

  singleton.showPrevious = function () {
    var last = references[references.length - 1];

    if (!currentTarget) {
      return singleton.show(last);
    }

    var index = references.indexOf(currentTarget);
    var target = references[index - 1] || last;
    singleton.show(target);
  };

  var originalSetProps = singleton.setProps;

  singleton.setProps = function (props) {
    overrides = props.overrides || overrides;
    originalSetProps(props);
  };

  singleton.setInstances = function (nextInstances) {
    enableInstances(true);
    interceptSetPropsCleanups.forEach(function (fn) {
      return fn();
    });
    individualInstances = nextInstances;
    enableInstances(false);
    setReferences();
    interceptSetProps(singleton);
    singleton.setProps({
      triggerTarget: references
    });
  };

  interceptSetPropsCleanups = interceptSetProps(singleton);
  return singleton;
};

tippy.setDefaultProps({
  render: render
});

const isPhaseGateElement = (arg) => typeof arg === "object" &&
    arg !== null &&
    arg.tagName === "PHASE-GATE";
const isThetable = (arg) => typeof arg === "object" &&
    arg !== null &&
    (arg.tagName === "RX-GATE" ||
        arg.tagName === "RY-GATE" ||
        arg.tagName === "RZ-GATE");
const isIfable = (arg) => typeof arg === "object" &&
    arg !== null &&
    (arg.tagName === "H-GATE" ||
        arg.tagName === "X-GATE" ||
        arg.tagName === "RNOT-GATE");
const isFlaggable = (arg) => typeof arg === "object" &&
    arg !== null &&
    arg.tagName === "MEASUREMENT-GATE";
class GatePopup {
    show(element) {
        if (DisplaySize.isMobile())
            return;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        this.popup = tippy(element, {
            allowHTML: true,
            animation: false,
            appendTo: document.body,
            arrow: ROUND_ARROW + ROUND_ARROW,
            content: this.popupHtml(element),
            delay: 0,
            hideOnClick: false,
            interactive: true,
            theme: "qni",
            // trigger: "manual", // debug
            onShow(instance) {
                let originalValue;
                const operation = instance.reference;
                if (isFlaggable(operation)) {
                    that.input.value = operation.flag;
                }
                else if (isIfable(operation)) {
                    that.input.value = operation.if;
                }
                else if (isPhaseGateElement(operation) || isThetable(operation)) {
                    if (isPhaseGateElement(operation)) {
                        originalValue = operation.phi;
                    }
                    else if (isThetable(operation)) {
                        originalValue = operation.theta;
                    }
                    that.input.value = originalValue.replace(/π/g, "pi");
                    const radian = Complex.from(parseFormula(originalValue.replace(/π/g, "pi"), PARSE_COMPLEX_TOKEN_MAP_RAD)).real;
                    that.currentAngleDenominator = that.angleDenominator(originalValue);
                    that.currentAngle = that.snappedAngle(radian);
                    that.createAngleSlider(operation);
                }
                that.input.addEventListener("keydown", that.inputKeydown.bind(that));
            },
            onHide() {
                if (that.isAngleSliderActive())
                    return false;
            },
            onHidden(instance) {
                const operation = instance.reference;
                if (isPhaseGateElement(operation) || isThetable(operation)) {
                    that.reduceInstructionAngle(operation);
                    that.destroyAngleSlider();
                }
                operation.dispatchEvent(new Event("operation.update", { bubbles: true }));
                instance.destroy();
            },
        });
        this.popup.show();
    }
    updateInstructionAngle(operation, angle) {
        const πangle = angle.replace(/pi/g, "π");
        this.input.value = angle;
        if (isPhaseGateElement(operation)) {
            operation.phi = πangle;
        }
        else {
            operation.theta = πangle;
        }
        // if (isPhaseGateElement(instruction)) {
        //   if (instruction.targets.length > 2) {
        //     for (const each of instruction.cphaseTargetInstructions()) {
        //       each.phi = angle
        //     }
        //   } else {
        //     instruction.phi = angle
        //     instruction.circuitDropzone.circuitStep.updateGateConnections()
        //   }
        // } else if (isThetable(instruction)) {
        //   instruction.theta = angle
        // }
    }
    reduceInstructionAngle(operation) {
        if (isPhaseGateElement(operation)) {
            const angle = this.beautifyFraction(operation.phi.replace(/π/g, "pi"), true);
            operation.phi = angle.replace(/pi/g, "π");
        }
        else {
            const angle = this.beautifyFraction(operation.theta.replace(/π/g, "pi"), true);
            operation.theta = angle.replace(/pi/g, "π");
        }
        // if (isPhaseGateElement(instruction)) {
        //   if (instruction.targets.length > 0) {
        //     for (const each of instruction.cphaseTargetInstructions()) {
        //       each.phi = angle
        //     }
        //   } else {
        //     instruction.phi = angle
        //   }
        // } else if (isThetable(instruction)) {
        //   instruction.theta = angle
        // }
    }
    snappedAngle(angle) {
        Util.notNull(this.currentAngleDenominator);
        const unit = Math.PI / this.currentAngleDenominator;
        const i = Math.round(angle / unit);
        return this.beautifyFraction(`${i}pi/${this.currentAngleDenominator}`);
    }
    beautifyFraction(angle, reduce = false) {
        let newAngle;
        Fraction.REDUCE = reduce;
        const fraction = new Fraction(angle.replace(/(\d+)pi/g, "$1").replace(/pi/g, "1"));
        const coefficient = fraction.valueOf();
        const d = fraction.d;
        if (coefficient === 0) {
            newAngle = "0";
        }
        else if (coefficient > 2) {
            newAngle = d === 1 ? "2pi" : `${2 * d}pi/${d}`;
        }
        else if (coefficient < -2) {
            newAngle = d === 1 ? "-2pi" : `-${2 * d}pi/${d}`;
        }
        else {
            const n = fraction.n;
            const sign = fraction.s === -1 ? "-" : "";
            const numerator = n === 1 ? `${sign}pi` : `${sign}${n}pi`;
            newAngle = d === 1 ? `${numerator}` : `${numerator}/${d}`;
        }
        return newAngle;
    }
    popupHtml(el) {
        let popupType = null;
        // const instruction = Instruction.create(el)
        // let popupType = null
        // if (isFlaggable(instruction)) popupType = "flag"
        // if (
        //   isIfable(instruction) &&
        //   !isThetable(instruction) &&
        //   !isPhaseGateElement(instruction)
        // ) {
        //   popupType = "if"
        // }
        // if (isThetable(instruction)) popupType = "theta"
        // if (isPhaseGateElement(instruction)) popupType = "phi"
        if (isFlaggable(el)) {
            popupType = "flag";
        }
        else if (isPhaseGateElement(el)) {
            popupType = "phi";
        }
        else if (isThetable(el)) {
            popupType = "theta";
        }
        else if (isIfable(el)) {
            popupType = "if";
        }
        Util.notNull(popupType);
        const popupEl = document.getElementById(`gate-popup--${popupType}`);
        Util.notNull(popupEl);
        return popupEl.innerHTML;
    }
    get input() {
        Util.notNull(this.popup);
        const el = this.popup.popper.getElementsByTagName("input").item(0);
        Util.notNull(el);
        return el;
    }
    inputKeydown(event) {
        var _a;
        if (event.key === "Enter") {
            Util.notNull(this.popup);
            this.popup.popper.classList.remove("gate-popup--error");
            const inputValue = this.input.value;
            try {
                // const instruction = Instruction.create(this.popupReferenceEl)
                const operation = this.popupReferenceEl;
                // if (isFlaggable(operation)) this.flag = inputValue
                // if (
                //   isIfable(operation) &&
                //   !isThetable(operation) &&
                //   !isPhaseGateElement(operation)
                // ) {
                //   this.if = inputValue
                // }
                if (isFlaggable(operation)) {
                    this.flag = inputValue;
                }
                else if (isIfable(operation)) {
                    this.if = inputValue;
                }
                else {
                    Util.notNull(this.currentAngle);
                    Util.notNull(this.currentAngleDenominator);
                    let newAngle = inputValue;
                    if (this.angleNumerator(this.currentAngle) ===
                        this.angleNumerator(inputValue) &&
                        this.currentAngleDenominator !== this.angleDenominator(inputValue)) {
                        const m = this.angleDenominator(inputValue) / this.currentAngleDenominator;
                        newAngle = `${Math.round(m * this.angleNumerator(this.currentAngle))}pi/${this.angleDenominator(inputValue)}`;
                    }
                    this.currentAngleDenominator = this.angleDenominator(inputValue);
                    (_a = this.angleSliderEl.noUiSlider) === null || _a === void 0 ? void 0 : _a.set(this.radian(newAngle));
                    if (isPhaseGateElement(operation)) {
                        operation.phi = this.beautifyFraction(newAngle, false).replace(/pi/g, "π");
                    }
                    else if (isThetable(operation)) {
                        operation.theta = this.beautifyFraction(newAngle, false).replace(/pi/g, "π");
                    }
                }
                // if (isThetable(operation) || isPhaseGateElement(operation)) {
                //   Util.notNull(this.currentAngle)
                //   Util.notNull(this.currentAngleDenominator)
                //   let newAngle = inputValue
                //   if (
                //     this.angleNumerator(this.currentAngle) ===
                //       this.angleNumerator(inputValue) &&
                //     this.currentAngleDenominator !== this.angleDenominator(inputValue)
                //   ) {
                //     const m =
                //       this.angleDenominator(inputValue) / this.currentAngleDenominator
                //     newAngle = `${Math.round(
                //       m * this.angleNumerator(this.currentAngle),
                //     )}pi/${this.angleDenominator(inputValue)}`
                //   }
                //   this.currentAngleDenominator = this.angleDenominator(inputValue)
                //   this.angleSliderEl.noUiSlider?.set(this.radian(newAngle))
                //   operation.angle = this.beautifyFraction(newAngle, false)
                // }
                this.runCircuit();
            }
            catch (e) {
                Util.notNull(this.popup);
                this.popup.popper.classList.add("gate-popup--error");
            }
        }
    }
    set flag(flag) {
        const operation = this.popupReferenceEl;
        if (!flag || flag.trim().length === 0) {
            operation.flag = "";
            // if (isDisableable(instruction)) instruction.disabled = false
        }
        else {
            operation.flag = flag;
        }
    }
    set if(ifValue) {
        const operation = this.popupReferenceEl;
        // const instruction = Instruction.create(this.popupReferenceEl)
        if (!ifValue || ifValue.trim().length === 0) {
            if (isIfable(operation)) {
                operation.if = "";
                operation.disabled = false;
            }
        }
        else {
            if (isIfable(operation))
                operation.if = ifValue;
        }
    }
    runCircuit() {
        this.popupReferenceEl.dispatchEvent(new Event("operation.popup.change", { bubbles: true }));
    }
    get popupReferenceEl() {
        Util.notNull(this.popup);
        return this.popup.reference;
    }
    get editorElement() {
        const el = this.popupReferenceEl.closest(".editor");
        Util.notNull(el);
        return el;
    }
    get angleSliderEl() {
        var _a;
        const el = (_a = this.popup) === null || _a === void 0 ? void 0 : _a.popper.getElementsByClassName("angle-slider").item(0);
        Util.notNull(el);
        return el;
    }
    createAngleSlider(operation) {
        const angleSliderEl = this.angleSliderEl;
        const filterPips = (value) => {
            if (value === 0)
                return 1;
            return value % Math.PI ? -1 : 1;
        };
        let angle;
        if (isPhaseGateElement(operation)) {
            angle = operation.phi;
        }
        else {
            angle = operation.theta;
        }
        const radian = Complex.from(parseFormula(angle.replace(/π/g, "pi"), PARSE_COMPLEX_TOKEN_MAP_RAD)).real;
        noUiSlider.create(angleSliderEl, {
            range: {
                min: -2 * Math.PI,
                max: 2 * Math.PI,
            },
            start: radian,
            pips: {
                mode: nouislider_1.Positions,
                values: [0, 25, 50, 75, 100],
                filter: filterPips,
                format: {
                    to: (value) => {
                        const nPi = value / Math.PI;
                        if (nPi === 0)
                            return "0";
                        if (nPi === -1)
                            return "-π";
                        if (nPi === 1)
                            return "π";
                        return `${nPi}π`;
                    },
                },
            },
            cssPrefix: "angle-slider-",
        });
        angleSliderEl.classList.remove("hidden");
        const slider = angleSliderEl.noUiSlider;
        slider.on("update", (values) => {
            const snappedAngle = this.snappedAngle(values[0]);
            if (this.currentAngle !== snappedAngle) {
                this.currentAngle = snappedAngle;
                this.updateInstructionAngle(operation, snappedAngle);
                operation.dispatchEvent(new Event("operation.popup.change", { bubbles: true }));
            }
        });
    }
    destroyAngleSlider() {
        var _a;
        (_a = this.angleSliderEl.noUiSlider) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    isAngleSliderActive() {
        var _a;
        return (((_a = this.popup) === null || _a === void 0 ? void 0 : _a.popper.getElementsByClassName("angle-slider-active").item(0)) !== null);
    }
    radian(angle) {
        const fraction = new Fraction(angle.replace(/(\d+)pi/g, "$1").replace(/pi/g, "1"));
        return fraction.valueOf() * Math.PI;
    }
    angleNumerator(angle) {
        Fraction.REDUCE = false;
        const fraction = new Fraction(angle.replace(/(\d+)pi/g, "$1").replace(/pi/g, "1"));
        return fraction.s * fraction.n;
    }
    angleDenominator(angle) {
        Fraction.REDUCE = false;
        const fraction = new Fraction(angle
            .replace(/π/g, "pi")
            .replace(/(\d+)pi/g, "$1")
            .replace(/pi/g, "1"));
        return fraction.d;
    }
}

function ConfigurableMixin(Base) {
    class ConfigurableMixinClass extends Base {
        showRightClickPopup(event) {
            if (event.button !== 2 && !event.ctrlKey)
                return;
            const gatePopup = new GatePopup();
            gatePopup.show(this);
        }
    }
    return ConfigurableMixinClass;
}

function ControllableMixin(Base) {
    class ControllableMixinClass extends Base {
        set controls(controls) {
            this.setAttribute("data-controls", controls.sort().join());
        }
        get controls() {
            const dataControls = this.getAttribute("data-controls");
            if (dataControls === null)
                return [];
            if (dataControls === "")
                return [];
            return dataControls
                .split(",")
                .map((each) => {
                return parseInt(each);
            })
                .sort();
        }
    }
    return ControllableMixinClass;
}

function DisableableMixin(Base) {
    class DisableableMixinClass extends Base {
        constructor() {
            super(...arguments);
            this.disabled = false;
            this.iconType = "";
        }
        disable() {
            this.disabled = true;
        }
        enable() {
            this.disabled = false;
        }
        get enabled() {
            return !this.disabled;
        }
        get disabledStyle() {
            return html `<style>
        :host([data-disabled]) #icon {
          background-color: var(--colors-eel, #4b4b4b);
        }
      </style>`;
        }
    }
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DisableableMixinClass.prototype, "disabled", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DisableableMixinClass.prototype, "iconType", void 0);
    return DisableableMixinClass;
}

const domObjects = {
  init: init$3,
  document: null,
  DocumentFragment: null,
  SVGElement: null,
  SVGSVGElement: null,
  SVGElementInstance: null,
  Element: null,
  HTMLElement: null,
  Event: null,
  Touch: null,
  PointerEvent: null
};

function blank() {}

var domObjects$1 = domObjects;

function init$3(window) {
  const win = window;
  domObjects.document = win.document;
  domObjects.DocumentFragment = win.DocumentFragment || blank;
  domObjects.SVGElement = win.SVGElement || blank;
  domObjects.SVGSVGElement = win.SVGSVGElement || blank;
  domObjects.SVGElementInstance = win.SVGElementInstance || blank;
  domObjects.Element = win.Element || blank;
  domObjects.HTMLElement = win.HTMLElement || domObjects.Element;
  domObjects.Event = win.Event;
  domObjects.Touch = win.Touch || blank;
  domObjects.PointerEvent = win.PointerEvent || win.MSPointerEvent;
}

var isWindow = (thing => !!(thing && thing.Window) && thing instanceof thing.Window);

let realWindow = undefined;
let win = undefined;
function init$2(window) {
  // get wrapped window if using Shadow DOM polyfill
  realWindow = window; // create a TextNode

  const el = window.document.createTextNode(''); // check if it's wrapped by a polyfill

  if (el.ownerDocument !== window.document && typeof window.wrap === 'function' && window.wrap(el) === el) {
    // use wrapped window
    window = window.wrap(window);
  }

  win = window;
}

if (typeof window !== 'undefined' && !!window) {
  init$2(window);
}

function getWindow(node) {
  if (isWindow(node)) {
    return node;
  }

  const rootNode = node.ownerDocument || node;
  return rootNode.defaultView || win.window;
}

const window$1 = thing => thing === win || isWindow(thing);

const docFrag = thing => object(thing) && thing.nodeType === 11;

const object = thing => !!thing && typeof thing === 'object';

const func = thing => typeof thing === 'function';

const number = thing => typeof thing === 'number';

const bool = thing => typeof thing === 'boolean';

const string = thing => typeof thing === 'string';

const element = thing => {
  if (!thing || typeof thing !== 'object') {
    return false;
  } // eslint-disable-next-line import/no-named-as-default-member


  const _window = getWindow(thing) || win;

  return /object|function/.test(typeof _window.Element) ? thing instanceof _window.Element // DOM2
  : thing.nodeType === 1 && typeof thing.nodeName === 'string';
};

const plainObject = thing => object(thing) && !!thing.constructor && /function Object\b/.test(thing.constructor.toString());

const array = thing => object(thing) && typeof thing.length !== 'undefined' && func(thing.splice);

var is = {
  window: window$1,
  docFrag,
  object,
  func,
  number,
  bool,
  string,
  element,
  plainObject,
  array
};

const browser = {
  init: init$1,
  supportsTouch: null,
  supportsPointerEvent: null,
  isIOS7: null,
  isIOS: null,
  isIe9: null,
  isOperaMobile: null,
  prefixedMatchesSelector: null,
  pEventTypes: null,
  wheelEvent: null
};

function init$1(window) {
  const Element = domObjects$1.Element;
  const navigator = window.navigator || {}; // Does the browser support touch input?

  browser.supportsTouch = 'ontouchstart' in window || is.func(window.DocumentTouch) && domObjects$1.document instanceof window.DocumentTouch; // Does the browser support PointerEvents

  browser.supportsPointerEvent = navigator.pointerEnabled !== false && !!domObjects$1.PointerEvent;
  browser.isIOS = /iP(hone|od|ad)/.test(navigator.platform); // scrolling doesn't change the result of getClientRects on iOS 7

  browser.isIOS7 = /iP(hone|od|ad)/.test(navigator.platform) && /OS 7[^\d]/.test(navigator.appVersion);
  browser.isIe9 = /MSIE 9/.test(navigator.userAgent); // Opera Mobile must be handled differently

  browser.isOperaMobile = navigator.appName === 'Opera' && browser.supportsTouch && /Presto/.test(navigator.userAgent); // prefix matchesSelector

  browser.prefixedMatchesSelector = 'matches' in Element.prototype ? 'matches' : 'webkitMatchesSelector' in Element.prototype ? 'webkitMatchesSelector' : 'mozMatchesSelector' in Element.prototype ? 'mozMatchesSelector' : 'oMatchesSelector' in Element.prototype ? 'oMatchesSelector' : 'msMatchesSelector';
  browser.pEventTypes = browser.supportsPointerEvent ? domObjects$1.PointerEvent === window.MSPointerEvent ? {
    up: 'MSPointerUp',
    down: 'MSPointerDown',
    over: 'mouseover',
    out: 'mouseout',
    move: 'MSPointerMove',
    cancel: 'MSPointerCancel'
  } : {
    up: 'pointerup',
    down: 'pointerdown',
    over: 'pointerover',
    out: 'pointerout',
    move: 'pointermove',
    cancel: 'pointercancel'
  } : null; // because Webkit and Opera still use 'mousewheel' event type

  browser.wheelEvent = domObjects$1.document && 'onmousewheel' in domObjects$1.document ? 'mousewheel' : 'wheel';
}

var browser$1 = browser;

const contains = (array, target) => array.indexOf(target) !== -1;
const merge = (target, source) => {
  for (const item of source) {
    target.push(item);
  }

  return target;
};
const from = source => merge([], source);
const findIndex = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
      return i;
    }
  }

  return -1;
};
const find = (array, func) => array[findIndex(array, func)];

function clone(source) {
  const dest = {};

  for (const prop in source) {
    const value = source[prop];

    if (is.plainObject(value)) {
      dest[prop] = clone(value);
    } else if (is.array(value)) {
      dest[prop] = from(value);
    } else {
      dest[prop] = value;
    }
  }

  return dest;
}

function extend(dest, source) {
  for (const prop in source) {
    dest[prop] = source[prop];
  }

  const ret = dest;
  return ret;
}

let lastTime = 0;
let request;
let cancel;

function init(global) {
  request = global.requestAnimationFrame;
  cancel = global.cancelAnimationFrame;

  if (!request) {
    const vendors = ['ms', 'moz', 'webkit', 'o'];

    for (const vendor of vendors) {
      request = global[`${vendor}RequestAnimationFrame`];
      cancel = global[`${vendor}CancelAnimationFrame`] || global[`${vendor}CancelRequestAnimationFrame`];
    }
  }

  request = request && request.bind(global);
  cancel = cancel && cancel.bind(global);

  if (!request) {
    request = callback => {
      const currTime = Date.now();
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const token = global.setTimeout(() => {
        // eslint-disable-next-line node/no-callback-literal
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return token;
    };

    cancel = token => clearTimeout(token);
  }
}

var raf = {
  request: callback => request(callback),
  cancel: token => cancel(token),
  init
};

function normalize(type, listeners, result) {
  result = result || {};

  if (is.string(type) && type.search(' ') !== -1) {
    type = split(type);
  }

  if (is.array(type)) {
    return type.reduce((acc, t) => extend(acc, normalize(t, listeners, result)), result);
  } // ({ type: fn }) -> ('', { type: fn })


  if (is.object(type)) {
    listeners = type;
    type = '';
  }

  if (is.func(listeners)) {
    result[type] = result[type] || [];
    result[type].push(listeners);
  } else if (is.array(listeners)) {
    for (const l of listeners) {
      normalize(type, l, result);
    }
  } else if (is.object(listeners)) {
    for (const prefix in listeners) {
      const combinedTypes = split(prefix).map(p => `${type}${p}`);
      normalize(combinedTypes, listeners[prefix], result);
    }
  }

  return result;
}

function split(type) {
  return type.trim().split(/ +/);
}

function fireUntilImmediateStopped(event, listeners) {
  for (const listener of listeners) {
    if (event.immediatePropagationStopped) {
      break;
    }

    listener(event);
  }
}

class Eventable {
  constructor(options) {
    this.options = void 0;
    this.types = {};
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
    this.global = void 0;
    this.options = extend({}, options || {});
  }

  fire(event) {
    let listeners;
    const global = this.global; // Interactable#on() listeners
    // tslint:disable no-conditional-assignment

    if (listeners = this.types[event.type]) {
      fireUntilImmediateStopped(event, listeners);
    } // interact.on() listeners


    if (!event.propagationStopped && global && (listeners = global[event.type])) {
      fireUntilImmediateStopped(event, listeners);
    }
  }

  on(type, listener) {
    const listeners = normalize(type, listener);

    for (type in listeners) {
      this.types[type] = merge(this.types[type] || [], listeners[type]);
    }
  }

  off(type, listener) {
    const listeners = normalize(type, listener);

    for (type in listeners) {
      const eventList = this.types[type];

      if (!eventList || !eventList.length) {
        continue;
      }

      for (const subListener of listeners[type]) {
        const index = eventList.indexOf(subListener);

        if (index !== -1) {
          eventList.splice(index, 1);
        }
      }
    }
  }

  getRect(_element) {
    return null;
  }

}

function nodeContains(parent, child) {
  if (parent.contains) {
    return parent.contains(child);
  }

  while (child) {
    if (child === parent) {
      return true;
    }

    child = child.parentNode;
  }

  return false;
}
function closest(element, selector) {
  while (is.element(element)) {
    if (matchesSelector(element, selector)) {
      return element;
    }

    element = parentNode(element);
  }

  return null;
}
function parentNode(node) {
  let parent = node.parentNode;

  if (is.docFrag(parent)) {
    // skip past #shado-root fragments
    // tslint:disable-next-line
    while ((parent = parent.host) && is.docFrag(parent)) {
      continue;
    }

    return parent;
  }

  return parent;
}
function matchesSelector(element, selector) {
  // remove /deep/ from selectors if shadowDOM polyfill is used
  if (win !== realWindow) {
    selector = selector.replace(/\/deep\//g, ' ');
  }

  return element[browser$1.prefixedMatchesSelector](selector);
}

const getParent = el => el.parentNode || el.host; // Test for the element that's "above" all other qualifiers


function indexOfDeepestElement(elements) {
  let deepestNodeParents = [];
  let deepestNodeIndex;

  for (let i = 0; i < elements.length; i++) {
    const currentNode = elements[i];
    const deepestNode = elements[deepestNodeIndex]; // node may appear in elements array multiple times

    if (!currentNode || i === deepestNodeIndex) {
      continue;
    }

    if (!deepestNode) {
      deepestNodeIndex = i;
      continue;
    }

    const currentNodeParent = getParent(currentNode);
    const deepestNodeParent = getParent(deepestNode); // check if the deepest or current are document.documentElement/rootElement
    // - if the current node is, do nothing and continue

    if (currentNodeParent === currentNode.ownerDocument) {
      continue;
    } // - if deepest is, update with the current node and continue to next
    else if (deepestNodeParent === currentNode.ownerDocument) {
        deepestNodeIndex = i;
        continue;
      } // compare zIndex of siblings


    if (currentNodeParent === deepestNodeParent) {
      if (zIndexIsHigherThan(currentNode, deepestNode)) {
        deepestNodeIndex = i;
      }

      continue;
    } // populate the ancestry array for the latest deepest node


    deepestNodeParents = deepestNodeParents.length ? deepestNodeParents : getNodeParents(deepestNode);
    let ancestryStart; // if the deepest node is an HTMLElement and the current node is a non root svg element

    if (deepestNode instanceof domObjects$1.HTMLElement && currentNode instanceof domObjects$1.SVGElement && !(currentNode instanceof domObjects$1.SVGSVGElement)) {
      // TODO: is this check necessary? Was this for HTML elements embedded in SVG?
      if (currentNode === deepestNodeParent) {
        continue;
      }

      ancestryStart = currentNode.ownerSVGElement;
    } else {
      ancestryStart = currentNode;
    }

    const currentNodeParents = getNodeParents(ancestryStart, deepestNode.ownerDocument);
    let commonIndex = 0; // get (position of closest common ancestor) + 1

    while (currentNodeParents[commonIndex] && currentNodeParents[commonIndex] === deepestNodeParents[commonIndex]) {
      commonIndex++;
    }

    const parents = [currentNodeParents[commonIndex - 1], currentNodeParents[commonIndex], deepestNodeParents[commonIndex]];

    if (parents[0]) {
      let child = parents[0].lastChild;

      while (child) {
        if (child === parents[1]) {
          deepestNodeIndex = i;
          deepestNodeParents = currentNodeParents;
          break;
        } else if (child === parents[2]) {
          break;
        }

        child = child.previousSibling;
      }
    }
  }

  return deepestNodeIndex;
}

function getNodeParents(node, limit) {
  const parents = [];
  let parent = node;
  let parentParent;

  while ((parentParent = getParent(parent)) && parent !== limit && parentParent !== parent.ownerDocument) {
    parents.unshift(parent);
    parent = parentParent;
  }

  return parents;
}

function zIndexIsHigherThan(higherNode, lowerNode) {
  const higherIndex = parseInt(getWindow(higherNode).getComputedStyle(higherNode).zIndex, 10) || 0;
  const lowerIndex = parseInt(getWindow(lowerNode).getComputedStyle(lowerNode).zIndex, 10) || 0;
  return higherIndex >= lowerIndex;
}

function matchesUpTo(element, selector, limit) {
  while (is.element(element)) {
    if (matchesSelector(element, selector)) {
      return true;
    }

    element = parentNode(element);

    if (element === limit) {
      return matchesSelector(element, selector);
    }
  }

  return false;
}
function getActualElement(element) {
  return element.correspondingUseElement || element;
}
function getScrollXY(relevantWindow) {
  relevantWindow = relevantWindow || win;
  return {
    x: relevantWindow.scrollX || relevantWindow.document.documentElement.scrollLeft,
    y: relevantWindow.scrollY || relevantWindow.document.documentElement.scrollTop
  };
}
function getElementClientRect(element) {
  const clientRect = element instanceof domObjects$1.SVGElement ? element.getBoundingClientRect() : element.getClientRects()[0];
  return clientRect && {
    left: clientRect.left,
    right: clientRect.right,
    top: clientRect.top,
    bottom: clientRect.bottom,
    width: clientRect.width || clientRect.right - clientRect.left,
    height: clientRect.height || clientRect.bottom - clientRect.top
  };
}
function getElementRect(element) {
  const clientRect = getElementClientRect(element);

  if (!browser$1.isIOS7 && clientRect) {
    const scroll = getScrollXY(getWindow(element));
    clientRect.left += scroll.x;
    clientRect.right += scroll.x;
    clientRect.top += scroll.y;
    clientRect.bottom += scroll.y;
  }

  return clientRect;
}
function trySelector(value) {
  if (!is.string(value)) {
    return false;
  } // an exception will be raised if it is invalid


  domObjects$1.document.querySelector(value);
  return true;
}

function getStringOptionResult(value, target, element) {
  if (value === 'parent') {
    return parentNode(element);
  }

  if (value === 'self') {
    return target.getRect(element);
  }

  return closest(element, value);
}
function resolveRectLike(value, target, element, functionArgs) {
  let returnValue = value;

  if (is.string(returnValue)) {
    returnValue = getStringOptionResult(returnValue, target, element);
  } else if (is.func(returnValue)) {
    returnValue = returnValue(...functionArgs);
  }

  if (is.element(returnValue)) {
    returnValue = getElementRect(returnValue);
  }

  return returnValue;
}
function rectToXY(rect) {
  return rect && {
    x: 'x' in rect ? rect.x : rect.left,
    y: 'y' in rect ? rect.y : rect.top
  };
}
function xywhToTlbr(rect) {
  if (rect && !('left' in rect && 'top' in rect)) {
    rect = extend({}, rect);
    rect.left = rect.x || 0;
    rect.top = rect.y || 0;
    rect.right = rect.right || rect.left + rect.width;
    rect.bottom = rect.bottom || rect.top + rect.height;
  }

  return rect;
}
function tlbrToXywh(rect) {
  if (rect && !('x' in rect && 'y' in rect)) {
    rect = extend({}, rect);
    rect.x = rect.left || 0;
    rect.y = rect.top || 0;
    rect.width = rect.width || (rect.right || 0) - rect.x;
    rect.height = rect.height || (rect.bottom || 0) - rect.y;
  }

  return rect;
}
function addEdges(edges, rect, delta) {
  if (edges.left) {
    rect.left += delta.x;
  }

  if (edges.right) {
    rect.right += delta.x;
  }

  if (edges.top) {
    rect.top += delta.y;
  }

  if (edges.bottom) {
    rect.bottom += delta.y;
  }

  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
}

function getOriginXY (target, element, actionName) {
  const actionOptions = target.options[actionName];
  const actionOrigin = actionOptions && actionOptions.origin;
  const origin = actionOrigin || target.options.origin;
  const originRect = resolveRectLike(origin, target, element, [target && element]);
  return rectToXY(originRect) || {
    x: 0,
    y: 0
  };
}

var hypot = ((x, y) => Math.sqrt(x * x + y * y));

class BaseEvent {
  constructor(interaction) {
    this.type = void 0;
    this.target = void 0;
    this.currentTarget = void 0;
    this.interactable = void 0;
    this._interaction = void 0;
    this.timeStamp = void 0;
    this.immediatePropagationStopped = false;
    this.propagationStopped = false;
    this._interaction = interaction;
  }

  preventDefault() {}
  /**
   * Don't call any other listeners (even on the current target)
   */


  stopPropagation() {
    this.propagationStopped = true;
  }
  /**
   * Don't call listeners on the remaining targets
   */


  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  }

} // defined outside of class definition to avoid assignment of undefined during
// construction

// getters and setters defined here to support typescript 3.6 and below which
// don't support getter and setters in .d.ts files
Object.defineProperty(BaseEvent.prototype, 'interaction', {
  get() {
    return this._interaction._proxy;
  },

  set() {}

});

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface Options extends BaseDefaults, PerActionDefaults {}
const defaults$6 = {
  base: {
    preventDefault: 'auto',
    deltaSource: 'page'
  },
  perAction: {
    enabled: false,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};

class InteractEvent extends BaseEvent {
  // resize

  /** */
  constructor(interaction, event, actionName, phase, element, preEnd, type) {
    super(interaction);
    this.target = void 0;
    this.currentTarget = void 0;
    this.relatedTarget = null;
    this.screenX = void 0;
    this.screenY = void 0;
    this.button = void 0;
    this.buttons = void 0;
    this.ctrlKey = void 0;
    this.shiftKey = void 0;
    this.altKey = void 0;
    this.metaKey = void 0;
    this.page = void 0;
    this.client = void 0;
    this.delta = void 0;
    this.rect = void 0;
    this.x0 = void 0;
    this.y0 = void 0;
    this.t0 = void 0;
    this.dt = void 0;
    this.duration = void 0;
    this.clientX0 = void 0;
    this.clientY0 = void 0;
    this.velocity = void 0;
    this.speed = void 0;
    this.swipe = void 0;
    this.timeStamp = void 0;
    this.axes = void 0;
    this.preEnd = void 0;
    element = element || interaction.element;
    const target = interaction.interactable;
    const deltaSource = (target && target.options || defaults$6).deltaSource;
    const origin = getOriginXY(target, element, actionName);
    const starting = phase === 'start';
    const ending = phase === 'end';
    const prevEvent = starting ? this : interaction.prevEvent;
    const coords = starting ? interaction.coords.start : ending ? {
      page: prevEvent.page,
      client: prevEvent.client,
      timeStamp: interaction.coords.cur.timeStamp
    } : interaction.coords.cur;
    this.page = extend({}, coords.page);
    this.client = extend({}, coords.client);
    this.rect = extend({}, interaction.rect);
    this.timeStamp = coords.timeStamp;

    if (!ending) {
      this.page.x -= origin.x;
      this.page.y -= origin.y;
      this.client.x -= origin.x;
      this.client.y -= origin.y;
    }

    this.ctrlKey = event.ctrlKey;
    this.altKey = event.altKey;
    this.shiftKey = event.shiftKey;
    this.metaKey = event.metaKey;
    this.button = event.button;
    this.buttons = event.buttons;
    this.target = element;
    this.currentTarget = element;
    this.preEnd = preEnd;
    this.type = type || actionName + (phase || '');
    this.interactable = target;
    this.t0 = starting ? interaction.pointers[interaction.pointers.length - 1].downTime : prevEvent.t0;
    this.x0 = interaction.coords.start.page.x - origin.x;
    this.y0 = interaction.coords.start.page.y - origin.y;
    this.clientX0 = interaction.coords.start.client.x - origin.x;
    this.clientY0 = interaction.coords.start.client.y - origin.y;

    if (starting || ending) {
      this.delta = {
        x: 0,
        y: 0
      };
    } else {
      this.delta = {
        x: this[deltaSource].x - prevEvent[deltaSource].x,
        y: this[deltaSource].y - prevEvent[deltaSource].y
      };
    }

    this.dt = interaction.coords.delta.timeStamp;
    this.duration = this.timeStamp - this.t0; // velocity and speed in pixels per second

    this.velocity = extend({}, interaction.coords.velocity[deltaSource]);
    this.speed = hypot(this.velocity.x, this.velocity.y);
    this.swipe = ending || phase === 'inertiastart' ? this.getSwipe() : null;
  }

  getSwipe() {
    const interaction = this._interaction;

    if (interaction.prevEvent.speed < 600 || this.timeStamp - interaction.prevEvent.timeStamp > 150) {
      return null;
    }

    let angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI;
    const overlap = 22.5;

    if (angle < 0) {
      angle += 360;
    }

    const left = 135 - overlap <= angle && angle < 225 + overlap;
    const up = 225 - overlap <= angle && angle < 315 + overlap;
    const right = !left && (315 - overlap <= angle || angle < 45 + overlap);
    const down = !up && 45 - overlap <= angle && angle < 135 + overlap;
    return {
      up,
      down,
      left,
      right,
      angle,
      speed: interaction.prevEvent.speed,
      velocity: {
        x: interaction.prevEvent.velocityX,
        y: interaction.prevEvent.velocityY
      }
    };
  }

  preventDefault() {}
  /**
   * Don't call listeners on the remaining targets
   */


  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  }
  /**
   * Don't call any other listeners (even on the current target)
   */


  stopPropagation() {
    this.propagationStopped = true;
  }

} // getters and setters defined here to support typescript 3.6 and below which
// don't support getter and setters in .d.ts files

Object.defineProperties(InteractEvent.prototype, {
  pageX: {
    get() {
      return this.page.x;
    },

    set(value) {
      this.page.x = value;
    }

  },
  pageY: {
    get() {
      return this.page.y;
    },

    set(value) {
      this.page.y = value;
    }

  },
  clientX: {
    get() {
      return this.client.x;
    },

    set(value) {
      this.client.x = value;
    }

  },
  clientY: {
    get() {
      return this.client.y;
    },

    set(value) {
      this.client.y = value;
    }

  },
  dx: {
    get() {
      return this.delta.x;
    },

    set(value) {
      this.delta.x = value;
    }

  },
  dy: {
    get() {
      return this.delta.y;
    },

    set(value) {
      this.delta.y = value;
    }

  },
  velocityX: {
    get() {
      return this.velocity.x;
    },

    set(value) {
      this.velocity.x = value;
    }

  },
  velocityY: {
    get() {
      return this.velocity.y;
    },

    set(value) {
      this.velocity.y = value;
    }

  }
});

function warnOnce(method, message) {
  let warned = false;
  return function () {
    if (!warned) {
      win.console.warn(message);
      warned = true;
    }

    return method.apply(this, arguments);
  };
}
function copyAction(dest, src) {
  dest.name = src.name;
  dest.axis = src.axis;
  dest.edges = src.edges;
  return dest;
}

function pointerExtend(dest, source) {
  for (const prop in source) {
    const prefixedPropREs = pointerExtend.prefixedPropREs;
    let deprecated = false; // skip deprecated prefixed properties

    for (const vendor in prefixedPropREs) {
      if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
        deprecated = true;
        break;
      }
    }

    if (!deprecated && typeof source[prop] !== 'function') {
      dest[prop] = source[prop];
    }
  }

  return dest;
}

pointerExtend.prefixedPropREs = {
  webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,
  moz: /(Pressure)$/
};

function copyCoords(dest, src) {
  dest.page = dest.page || {};
  dest.page.x = src.page.x;
  dest.page.y = src.page.y;
  dest.client = dest.client || {};
  dest.client.x = src.client.x;
  dest.client.y = src.client.y;
  dest.timeStamp = src.timeStamp;
}
function setCoordDeltas(targetObj, prev, cur) {
  targetObj.page.x = cur.page.x - prev.page.x;
  targetObj.page.y = cur.page.y - prev.page.y;
  targetObj.client.x = cur.client.x - prev.client.x;
  targetObj.client.y = cur.client.y - prev.client.y;
  targetObj.timeStamp = cur.timeStamp - prev.timeStamp;
}
function setCoordVelocity(targetObj, delta) {
  const dt = Math.max(delta.timeStamp / 1000, 0.001);
  targetObj.page.x = delta.page.x / dt;
  targetObj.page.y = delta.page.y / dt;
  targetObj.client.x = delta.client.x / dt;
  targetObj.client.y = delta.client.y / dt;
  targetObj.timeStamp = dt;
}
function setZeroCoords(targetObj) {
  targetObj.page.x = 0;
  targetObj.page.y = 0;
  targetObj.client.x = 0;
  targetObj.client.y = 0;
}
function isNativePointer(pointer) {
  return pointer instanceof domObjects$1.Event || pointer instanceof domObjects$1.Touch;
} // Get specified X/Y coords for mouse or event.touches[0]

function getXY(type, pointer, xy) {
  xy = xy || {};
  type = type || 'page';
  xy.x = pointer[type + 'X'];
  xy.y = pointer[type + 'Y'];
  return xy;
}
function getPageXY(pointer, page) {
  page = page || {
    x: 0,
    y: 0
  }; // Opera Mobile handles the viewport and scrolling oddly

  if (browser$1.isOperaMobile && isNativePointer(pointer)) {
    getXY('screen', pointer, page);
    page.x += window.scrollX;
    page.y += window.scrollY;
  } else {
    getXY('page', pointer, page);
  }

  return page;
}
function getClientXY(pointer, client) {
  client = client || {};

  if (browser$1.isOperaMobile && isNativePointer(pointer)) {
    // Opera Mobile handles the viewport and scrolling oddly
    getXY('screen', pointer, client);
  } else {
    getXY('client', pointer, client);
  }

  return client;
}
function getPointerId(pointer) {
  return is.number(pointer.pointerId) ? pointer.pointerId : pointer.identifier;
}
function setCoords(dest, pointers, timeStamp) {
  const pointer = pointers.length > 1 ? pointerAverage(pointers) : pointers[0];
  getPageXY(pointer, dest.page);
  getClientXY(pointer, dest.client);
  dest.timeStamp = timeStamp;
}
function getTouchPair(event) {
  const touches = []; // array of touches is supplied

  if (is.array(event)) {
    touches[0] = event[0];
    touches[1] = event[1];
  } // an event
  else {
      if (event.type === 'touchend') {
        if (event.touches.length === 1) {
          touches[0] = event.touches[0];
          touches[1] = event.changedTouches[0];
        } else if (event.touches.length === 0) {
          touches[0] = event.changedTouches[0];
          touches[1] = event.changedTouches[1];
        }
      } else {
        touches[0] = event.touches[0];
        touches[1] = event.touches[1];
      }
    }

  return touches;
}
function pointerAverage(pointers) {
  const average = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };

  for (const pointer of pointers) {
    for (const prop in average) {
      average[prop] += pointer[prop];
    }
  }

  for (const prop in average) {
    average[prop] /= pointers.length;
  }

  return average;
}
function touchBBox(event) {
  if (!event.length) {
    return null;
  }

  const touches = getTouchPair(event);
  const minX = Math.min(touches[0].pageX, touches[1].pageX);
  const minY = Math.min(touches[0].pageY, touches[1].pageY);
  const maxX = Math.max(touches[0].pageX, touches[1].pageX);
  const maxY = Math.max(touches[0].pageY, touches[1].pageY);
  return {
    x: minX,
    y: minY,
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function touchDistance(event, deltaSource) {
  const sourceX = deltaSource + 'X';
  const sourceY = deltaSource + 'Y';
  const touches = getTouchPair(event);
  const dx = touches[0][sourceX] - touches[1][sourceX];
  const dy = touches[0][sourceY] - touches[1][sourceY];
  return hypot(dx, dy);
}
function touchAngle(event, deltaSource) {
  const sourceX = deltaSource + 'X';
  const sourceY = deltaSource + 'Y';
  const touches = getTouchPair(event);
  const dx = touches[1][sourceX] - touches[0][sourceX];
  const dy = touches[1][sourceY] - touches[0][sourceY];
  const angle = 180 * Math.atan2(dy, dx) / Math.PI;
  return angle;
}
function getPointerType(pointer) {
  return is.string(pointer.pointerType) ? pointer.pointerType : is.number(pointer.pointerType) ? [undefined, undefined, 'touch', 'pen', 'mouse'][pointer.pointerType] : // if the PointerEvent API isn't available, then the "pointer" must
  // be either a MouseEvent, TouchEvent, or Touch object
  /touch/.test(pointer.type || '') || pointer instanceof domObjects$1.Touch ? 'touch' : 'mouse';
} // [ event.target, event.currentTarget ]

function getEventTargets(event) {
  const path = is.func(event.composedPath) ? event.composedPath() : event.path;
  return [getActualElement(path ? path[0] : event.target), getActualElement(event.currentTarget)];
}
function newCoords() {
  return {
    page: {
      x: 0,
      y: 0
    },
    client: {
      x: 0,
      y: 0
    },
    timeStamp: 0
  };
}

function isNonNativeEvent(type, actions) {
  if (actions.phaselessTypes[type]) {
    return true;
  }

  for (const name in actions.map) {
    if (type.indexOf(name) === 0 && type.substr(name.length) in actions.phases) {
      return true;
    }
  }

  return false;
}

/** @module interact */
function createInteractStatic(scope) {
  /**
   * ```js
   * interact('#draggable').draggable(true)
   *
   * var rectables = interact('rect')
   * rectables
   *   .gesturable(true)
   *   .on('gesturemove', function (event) {
   *       // ...
   *   })
   * ```
   *
   * The methods of this variable can be used to set elements as interactables
   * and also to change various default settings.
   *
   * Calling it as a function and passing an element or a valid CSS selector
   * string returns an Interactable object which has various methods to configure
   * it.
   *
   * @global
   *
   * @param {Element | string} target The HTML or SVG Element to interact with
   * or CSS selector
   * @return {Interactable}
   */
  const interact = (target, options) => {
    let interactable = scope.interactables.get(target, options);

    if (!interactable) {
      interactable = scope.interactables.new(target, options);
      interactable.events.global = interact.globalEvents;
    }

    return interactable;
  }; // expose the functions used to calculate multi-touch properties


  interact.getPointerAverage = pointerAverage;
  interact.getTouchBBox = touchBBox;
  interact.getTouchDistance = touchDistance;
  interact.getTouchAngle = touchAngle;
  interact.getElementRect = getElementRect;
  interact.getElementClientRect = getElementClientRect;
  interact.matchesSelector = matchesSelector;
  interact.closest = closest;
  interact.globalEvents = {}; // eslint-disable-next-line no-undef

  interact.version = "1.10.11";
  interact.scope = scope;
  /**
   * Use a plugin
   *
   * @alias module:interact.use
   *
   */

  interact.use = function (plugin, options) {
    this.scope.usePlugin(plugin, options);
    return this;
  };
  /**
   * Check if an element or selector has been set with the {@link interact}
   * function
   *
   * @alias module:interact.isSet
   *
   * @param {Target} target The Element or string being searched for
   * @param {object} options
   * @return {boolean} Indicates if the element or CSS selector was previously
   * passed to interact
   */


  interact.isSet = function (target, options) {
    return !!this.scope.interactables.get(target, options && options.context);
  };
  /**
   * @deprecated
   * Add a global listener for an InteractEvent or adds a DOM event to `document`
   *
   * @alias module:interact.on
   *
   * @param {string | array | object} type The types of events to listen for
   * @param {function} listener The function event (s)
   * @param {object | boolean} [options] object or useCapture flag for
   * addEventListener
   * @return {object} interact
   */


  interact.on = warnOnce(function on(type, listener, options) {
    if (is.string(type) && type.search(' ') !== -1) {
      type = type.trim().split(/ +/);
    }

    if (is.array(type)) {
      for (const eventType of type) {
        this.on(eventType, listener, options);
      }

      return this;
    }

    if (is.object(type)) {
      for (const prop in type) {
        this.on(prop, type[prop], listener);
      }

      return this;
    } // if it is an InteractEvent type, add listener to globalEvents


    if (isNonNativeEvent(type, this.scope.actions)) {
      // if this type of event was never bound
      if (!this.globalEvents[type]) {
        this.globalEvents[type] = [listener];
      } else {
        this.globalEvents[type].push(listener);
      }
    } // If non InteractEvent type, addEventListener to document
    else {
        this.scope.events.add(this.scope.document, type, listener, {
          options
        });
      }

    return this;
  }, 'The interact.on() method is being deprecated');
  /**
   * @deprecated
   * Removes a global InteractEvent listener or DOM event from `document`
   *
   * @alias module:interact.off
   *
   * @param {string | array | object} type The types of events that were listened
   * for
   * @param {function} listener The listener function to be removed
   * @param {object | boolean} options [options] object or useCapture flag for
   * removeEventListener
   * @return {object} interact
   */

  interact.off = warnOnce(function off(type, listener, options) {
    if (is.string(type) && type.search(' ') !== -1) {
      type = type.trim().split(/ +/);
    }

    if (is.array(type)) {
      for (const eventType of type) {
        this.off(eventType, listener, options);
      }

      return this;
    }

    if (is.object(type)) {
      for (const prop in type) {
        this.off(prop, type[prop], listener);
      }

      return this;
    }

    if (isNonNativeEvent(type, this.scope.actions)) {
      let index;

      if (type in this.globalEvents && (index = this.globalEvents[type].indexOf(listener)) !== -1) {
        this.globalEvents[type].splice(index, 1);
      }
    } else {
      this.scope.events.remove(this.scope.document, type, listener, options);
    }

    return this;
  }, 'The interact.off() method is being deprecated');

  interact.debug = function () {
    return this.scope;
  };
  /**
   * @alias module:interact.supportsTouch
   *
   * @return {boolean} Whether or not the browser supports touch input
   */


  interact.supportsTouch = function () {
    return browser$1.supportsTouch;
  };
  /**
   * @alias module:interact.supportsPointerEvent
   *
   * @return {boolean} Whether or not the browser supports PointerEvents
   */


  interact.supportsPointerEvent = function () {
    return browser$1.supportsPointerEvent;
  };
  /**
   * Cancels all interactions (end events are not fired)
   *
   * @alias module:interact.stop
   *
   * @return {object} interact
   */


  interact.stop = function () {
    for (const interaction of this.scope.interactions.list) {
      interaction.stop();
    }

    return this;
  };
  /**
   * Returns or sets the distance the pointer must be moved before an action
   * sequence occurs. This also affects tolerance for tap events.
   *
   * @alias module:interact.pointerMoveTolerance
   *
   * @param {number} [newValue] The movement from the start position must be greater than this value
   * @return {interact | number}
   */


  interact.pointerMoveTolerance = function (newValue) {
    if (is.number(newValue)) {
      this.scope.interactions.pointerMoveTolerance = newValue;
      return this;
    }

    return this.scope.interactions.pointerMoveTolerance;
  };

  interact.addDocument = function (doc, options) {
    this.scope.addDocument(doc, options);
  };

  interact.removeDocument = function (doc) {
    this.scope.removeDocument(doc);
  };

  return interact;
}

/* eslint-disable no-dupe-class-members */

/** */
class Interactable {
  /** @internal */
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    };
  }

  /** */
  constructor(target, options, defaultContext, scopeEvents) {
    this.options = void 0;
    this._actions = void 0;
    this.target = void 0;
    this.events = new Eventable();
    this._context = void 0;
    this._win = void 0;
    this._doc = void 0;
    this._scopeEvents = void 0;
    this._rectChecker = void 0;
    this._actions = options.actions;
    this.target = target;
    this._context = options.context || defaultContext;
    this._win = getWindow(trySelector(target) ? this._context : target);
    this._doc = this._win.document;
    this._scopeEvents = scopeEvents;
    this.set(options);
  }

  setOnEvents(actionName, phases) {
    if (is.func(phases.onstart)) {
      this.on(`${actionName}start`, phases.onstart);
    }

    if (is.func(phases.onmove)) {
      this.on(`${actionName}move`, phases.onmove);
    }

    if (is.func(phases.onend)) {
      this.on(`${actionName}end`, phases.onend);
    }

    if (is.func(phases.oninertiastart)) {
      this.on(`${actionName}inertiastart`, phases.oninertiastart);
    }

    return this;
  }

  updatePerActionListeners(actionName, prev, cur) {
    if (is.array(prev) || is.object(prev)) {
      this.off(actionName, prev);
    }

    if (is.array(cur) || is.object(cur)) {
      this.on(actionName, cur);
    }
  }

  setPerAction(actionName, options) {
    const defaults = this._defaults; // for all the default per-action options

    for (const optionName_ in options) {
      const optionName = optionName_;
      const actionOptions = this.options[actionName];
      const optionValue = options[optionName]; // remove old event listeners and add new ones

      if (optionName === 'listeners') {
        this.updatePerActionListeners(actionName, actionOptions.listeners, optionValue);
      } // if the option value is an array


      if (is.array(optionValue)) {
        actionOptions[optionName] = from(optionValue);
      } // if the option value is an object
      else if (is.plainObject(optionValue)) {
          actionOptions[optionName] = extend(actionOptions[optionName] || {}, clone(optionValue)); // set anabled field to true if it exists in the defaults

          if (is.object(defaults.perAction[optionName]) && 'enabled' in defaults.perAction[optionName]) {
            actionOptions[optionName].enabled = optionValue.enabled !== false;
          }
        } // if the option value is a boolean and the default is an object
        else if (is.bool(optionValue) && is.object(defaults.perAction[optionName])) {
            actionOptions[optionName].enabled = optionValue;
          } // if it's anything else, do a plain assignment
          else {
              actionOptions[optionName] = optionValue;
            }
    }
  }
  /**
   * The default function to get an Interactables bounding rect. Can be
   * overridden using {@link Interactable.rectChecker}.
   *
   * @param {Element} [element] The element to measure.
   * @return {Rect} The object's bounding rectangle.
   */


  getRect(element) {
    element = element || (is.element(this.target) ? this.target : null);

    if (is.string(this.target)) {
      element = element || this._context.querySelector(this.target);
    }

    return getElementRect(element);
  }
  /**
   * Returns or sets the function used to calculate the interactable's
   * element's rectangle
   *
   * @param {function} [checker] A function which returns this Interactable's
   * bounding rectangle. See {@link Interactable.getRect}
   * @return {function | object} The checker function or this Interactable
   */


  rectChecker(checker) {
    if (is.func(checker)) {
      this._rectChecker = checker;

      this.getRect = element => {
        const rect = extend({}, this._rectChecker(element));

        if (!('width' in rect)) {
          rect.width = rect.right - rect.left;
          rect.height = rect.bottom - rect.top;
        }

        return rect;
      };

      return this;
    }

    if (checker === null) {
      delete this.getRect;
      delete this._rectChecker;
      return this;
    }

    return this.getRect;
  }

  _backCompatOption(optionName, newValue) {
    if (trySelector(newValue) || is.object(newValue)) {
      this.options[optionName] = newValue;

      for (const action in this._actions.map) {
        this.options[action][optionName] = newValue;
      }

      return this;
    }

    return this.options[optionName];
  }
  /**
   * Gets or sets the origin of the Interactable's element.  The x and y
   * of the origin will be subtracted from action event coordinates.
   *
   * @param {Element | object | string} [origin] An HTML or SVG Element whose
   * rect will be used, an object eg. { x: 0, y: 0 } or string 'parent', 'self'
   * or any CSS selector
   *
   * @return {object} The current origin or this Interactable
   */


  origin(newValue) {
    return this._backCompatOption('origin', newValue);
  }
  /**
   * Returns or sets the mouse coordinate types used to calculate the
   * movement of the pointer.
   *
   * @param {string} [newValue] Use 'client' if you will be scrolling while
   * interacting; Use 'page' if you want autoScroll to work
   * @return {string | object} The current deltaSource or this Interactable
   */


  deltaSource(newValue) {
    if (newValue === 'page' || newValue === 'client') {
      this.options.deltaSource = newValue;
      return this;
    }

    return this.options.deltaSource;
  }
  /**
   * Gets the selector context Node of the Interactable. The default is
   * `window.document`.
   *
   * @return {Node} The context Node of this Interactable
   */


  context() {
    return this._context;
  }

  inContext(element) {
    return this._context === element.ownerDocument || nodeContains(this._context, element);
  }

  testIgnoreAllow(options, targetNode, eventTarget) {
    return !this.testIgnore(options.ignoreFrom, targetNode, eventTarget) && this.testAllow(options.allowFrom, targetNode, eventTarget);
  }

  testAllow(allowFrom, targetNode, element) {
    if (!allowFrom) {
      return true;
    }

    if (!is.element(element)) {
      return false;
    }

    if (is.string(allowFrom)) {
      return matchesUpTo(element, allowFrom, targetNode);
    } else if (is.element(allowFrom)) {
      return nodeContains(allowFrom, element);
    }

    return false;
  }

  testIgnore(ignoreFrom, targetNode, element) {
    if (!ignoreFrom || !is.element(element)) {
      return false;
    }

    if (is.string(ignoreFrom)) {
      return matchesUpTo(element, ignoreFrom, targetNode);
    } else if (is.element(ignoreFrom)) {
      return nodeContains(ignoreFrom, element);
    }

    return false;
  }
  /**
   * Calls listeners for the given InteractEvent type bound globally
   * and directly to this Interactable
   *
   * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
   * Interactable
   * @return {Interactable} this Interactable
   */


  fire(iEvent) {
    this.events.fire(iEvent);
    return this;
  }

  _onOff(method, typeArg, listenerArg, options) {
    if (is.object(typeArg) && !is.array(typeArg)) {
      options = listenerArg;
      listenerArg = null;
    }

    const addRemove = method === 'on' ? 'add' : 'remove';
    const listeners = normalize(typeArg, listenerArg);

    for (let type in listeners) {
      if (type === 'wheel') {
        type = browser$1.wheelEvent;
      }

      for (const listener of listeners[type]) {
        // if it is an action event type
        if (isNonNativeEvent(type, this._actions)) {
          this.events[method](type, listener);
        } // delegated event
        else if (is.string(this.target)) {
            this._scopeEvents[`${addRemove}Delegate`](this.target, this._context, type, listener, options);
          } // remove listener from this Interactable's element
          else {
              this._scopeEvents[addRemove](this.target, type, listener, options);
            }
      }
    }

    return this;
  }
  /**
   * Binds a listener for an InteractEvent, pointerEvent or DOM event.
   *
   * @param {string | array | object} types The types of events to listen
   * for
   * @param {function | array | object} [listener] The event listener function(s)
   * @param {object | boolean} [options] options object or useCapture flag for
   * addEventListener
   * @return {Interactable} This Interactable
   */


  on(types, listener, options) {
    return this._onOff('on', types, listener, options);
  }
  /**
   * Removes an InteractEvent, pointerEvent or DOM event listener.
   *
   * @param {string | array | object} types The types of events that were
   * listened for
   * @param {function | array | object} [listener] The event listener function(s)
   * @param {object | boolean} [options] options object or useCapture flag for
   * removeEventListener
   * @return {Interactable} This Interactable
   */


  off(types, listener, options) {
    return this._onOff('off', types, listener, options);
  }
  /**
   * Reset the options of this Interactable
   *
   * @param {object} options The new settings to apply
   * @return {object} This Interactable
   */


  set(options) {
    const defaults = this._defaults;

    if (!is.object(options)) {
      options = {};
    }
    this.options = clone(defaults.base);

    for (const actionName_ in this._actions.methodDict) {
      const actionName = actionName_;
      const methodName = this._actions.methodDict[actionName];
      this.options[actionName] = {};
      this.setPerAction(actionName, extend(extend({}, defaults.perAction), defaults.actions[actionName]));
      this[methodName](options[actionName]);
    }

    for (const setting in options) {
      if (is.func(this[setting])) {
        this[setting](options[setting]);
      }
    }

    return this;
  }
  /**
   * Remove this interactable from the list of interactables and remove it's
   * action capabilities and event listeners
   */


  unset() {
    if (is.string(this.target)) {
      // remove delegated events
      for (const type in this._scopeEvents.delegatedEvents) {
        const delegated = this._scopeEvents.delegatedEvents[type];

        for (let i = delegated.length - 1; i >= 0; i--) {
          const {
            selector,
            context,
            listeners
          } = delegated[i];

          if (selector === this.target && context === this._context) {
            delegated.splice(i, 1);
          }

          for (let l = listeners.length - 1; l >= 0; l--) {
            this._scopeEvents.removeDelegate(this.target, this._context, type, listeners[l][0], listeners[l][1]);
          }
        }
      }
    } else {
      this._scopeEvents.remove(this.target, 'all');
    }
  }

}

class InteractableSet {
  // all set interactables
  constructor(scope) {
    this.list = [];
    this.selectorMap = {};
    this.scope = void 0;
    this.scope = scope;
    scope.addListeners({
      'interactable:unset': ({
        interactable
      }) => {
        const {
          target,
          _context: context
        } = interactable;
        const targetMappings = is.string(target) ? this.selectorMap[target] : target[this.scope.id];
        const targetIndex = findIndex(targetMappings, m => m.context === context);

        if (targetMappings[targetIndex]) {
          // Destroying mappingInfo's context and interactable
          targetMappings[targetIndex].context = null;
          targetMappings[targetIndex].interactable = null;
        }

        targetMappings.splice(targetIndex, 1);
      }
    });
  }

  new(target, options) {
    options = extend(options || {}, {
      actions: this.scope.actions
    });
    const interactable = new this.scope.Interactable(target, options, this.scope.document, this.scope.events);
    const mappingInfo = {
      context: interactable._context,
      interactable
    };
    this.scope.addDocument(interactable._doc);
    this.list.push(interactable);

    if (is.string(target)) {
      if (!this.selectorMap[target]) {
        this.selectorMap[target] = [];
      }

      this.selectorMap[target].push(mappingInfo);
    } else {
      if (!interactable.target[this.scope.id]) {
        Object.defineProperty(target, this.scope.id, {
          value: [],
          configurable: true
        });
      }
      target[this.scope.id].push(mappingInfo);
    }

    this.scope.fire('interactable:new', {
      target,
      options,
      interactable,
      win: this.scope._win
    });
    return interactable;
  }

  get(target, options) {
    const context = options && options.context || this.scope.document;
    const isSelector = is.string(target);
    const targetMappings = isSelector ? this.selectorMap[target] : target[this.scope.id];

    if (!targetMappings) {
      return null;
    }

    const found = find(targetMappings, m => m.context === context && (isSelector || m.interactable.inContext(target)));
    return found && found.interactable;
  }

  forEachMatch(node, callback) {
    for (const interactable of this.list) {
      let ret;

      if ((is.string(interactable.target) ? // target is a selector and the element matches
      is.element(node) && matchesSelector(node, interactable.target) : // target is the element
      node === interactable.target) && // the element is in context
      interactable.inContext(node)) {
        ret = callback(interactable);
      }

      if (ret !== undefined) {
        return ret;
      }
    }
  }

}

function install$8(scope) {
  var _scope$document;

  const targets = [];
  const delegatedEvents = {};
  const documents = [];
  const eventsMethods = {
    add,
    remove,
    addDelegate,
    removeDelegate,
    delegateListener,
    delegateUseCapture,
    delegatedEvents,
    documents,
    targets,
    supportsOptions: false,
    supportsPassive: false
  }; // check if browser supports passive events and options arg

  (_scope$document = scope.document) == null ? void 0 : _scope$document.createElement('div').addEventListener('test', null, {
    get capture() {
      return eventsMethods.supportsOptions = true;
    },

    get passive() {
      return eventsMethods.supportsPassive = true;
    }

  });
  scope.events = eventsMethods;

  function add(eventTarget, type, listener, optionalArg) {
    const options = getOptions(optionalArg);
    let target = find(targets, t => t.eventTarget === eventTarget);

    if (!target) {
      target = {
        eventTarget,
        events: {}
      };
      targets.push(target);
    }

    if (!target.events[type]) {
      target.events[type] = [];
    }

    if (eventTarget.addEventListener && !contains(target.events[type], listener)) {
      eventTarget.addEventListener(type, listener, eventsMethods.supportsOptions ? options : options.capture);
      target.events[type].push(listener);
    }
  }

  function remove(eventTarget, type, listener, optionalArg) {
    const options = getOptions(optionalArg);
    const targetIndex = findIndex(targets, t => t.eventTarget === eventTarget);
    const target = targets[targetIndex];

    if (!target || !target.events) {
      return;
    }

    if (type === 'all') {
      for (type in target.events) {
        if (target.events.hasOwnProperty(type)) {
          remove(eventTarget, type, 'all');
        }
      }

      return;
    }

    let typeIsEmpty = false;
    const typeListeners = target.events[type];

    if (typeListeners) {
      if (listener === 'all') {
        for (let i = typeListeners.length - 1; i >= 0; i--) {
          remove(eventTarget, type, typeListeners[i], options);
        }

        return;
      } else {
        for (let i = 0; i < typeListeners.length; i++) {
          if (typeListeners[i] === listener) {
            eventTarget.removeEventListener(type, listener, eventsMethods.supportsOptions ? options : options.capture);
            typeListeners.splice(i, 1);

            if (typeListeners.length === 0) {
              delete target.events[type];
              typeIsEmpty = true;
            }

            break;
          }
        }
      }
    }

    if (typeIsEmpty && !Object.keys(target.events).length) {
      targets.splice(targetIndex, 1);
    }
  }

  function addDelegate(selector, context, type, listener, optionalArg) {
    const options = getOptions(optionalArg);

    if (!delegatedEvents[type]) {
      delegatedEvents[type] = []; // add delegate listener functions

      for (const doc of documents) {
        add(doc, type, delegateListener);
        add(doc, type, delegateUseCapture, true);
      }
    }

    const delegates = delegatedEvents[type];
    let delegate = find(delegates, d => d.selector === selector && d.context === context);

    if (!delegate) {
      delegate = {
        selector,
        context,
        listeners: []
      };
      delegates.push(delegate);
    }

    delegate.listeners.push([listener, options]);
  }

  function removeDelegate(selector, context, type, listener, optionalArg) {
    const options = getOptions(optionalArg);
    const delegates = delegatedEvents[type];
    let matchFound = false;
    let index;
    if (!delegates) return; // count from last index of delegated to 0

    for (index = delegates.length - 1; index >= 0; index--) {
      const cur = delegates[index]; // look for matching selector and context Node

      if (cur.selector === selector && cur.context === context) {
        const {
          listeners
        } = cur; // each item of the listeners array is an array: [function, capture, passive]

        for (let i = listeners.length - 1; i >= 0; i--) {
          const [fn, {
            capture,
            passive
          }] = listeners[i]; // check if the listener functions and capture and passive flags match

          if (fn === listener && capture === options.capture && passive === options.passive) {
            // remove the listener from the array of listeners
            listeners.splice(i, 1); // if all listeners for this target have been removed
            // remove the target from the delegates array

            if (!listeners.length) {
              delegates.splice(index, 1); // remove delegate function from context

              remove(context, type, delegateListener);
              remove(context, type, delegateUseCapture, true);
            } // only remove one listener


            matchFound = true;
            break;
          }
        }

        if (matchFound) {
          break;
        }
      }
    }
  } // bound to the interactable context when a DOM event
  // listener is added to a selector interactable


  function delegateListener(event, optionalArg) {
    const options = getOptions(optionalArg);
    const fakeEvent = new FakeEvent(event);
    const delegates = delegatedEvents[event.type];
    const [eventTarget] = getEventTargets(event);
    let element = eventTarget; // climb up document tree looking for selector matches

    while (is.element(element)) {
      for (let i = 0; i < delegates.length; i++) {
        const cur = delegates[i];
        const {
          selector,
          context
        } = cur;

        if (matchesSelector(element, selector) && nodeContains(context, eventTarget) && nodeContains(context, element)) {
          const {
            listeners
          } = cur;
          fakeEvent.currentTarget = element;

          for (const [fn, {
            capture,
            passive
          }] of listeners) {
            if (capture === options.capture && passive === options.passive) {
              fn(fakeEvent);
            }
          }
        }
      }

      element = parentNode(element);
    }
  }

  function delegateUseCapture(event) {
    return delegateListener.call(this, event, true);
  } // for type inferrence


  return eventsMethods;
}

class FakeEvent {
  constructor(originalEvent) {
    this.currentTarget = void 0;
    this.originalEvent = void 0;
    this.type = void 0;
    this.originalEvent = originalEvent; // duplicate the event so that currentTarget can be changed

    pointerExtend(this, originalEvent);
  }

  preventOriginalDefault() {
    this.originalEvent.preventDefault();
  }

  stopPropagation() {
    this.originalEvent.stopPropagation();
  }

  stopImmediatePropagation() {
    this.originalEvent.stopImmediatePropagation();
  }

}

function getOptions(param) {
  if (!is.object(param)) {
    return {
      capture: !!param,
      passive: false
    };
  }

  const options = extend({}, param);
  options.capture = !!param.capture;
  options.passive = !!param.passive;
  return options;
}

var events = {
  id: 'events',
  install: install$8
};

class PointerInfo {
  constructor(id, pointer, event, downTime, downTarget) {
    this.id = void 0;
    this.pointer = void 0;
    this.event = void 0;
    this.downTime = void 0;
    this.downTarget = void 0;
    this.id = id;
    this.pointer = pointer;
    this.event = event;
    this.downTime = downTime;
    this.downTarget = downTarget;
  }

}

let _ProxyValues;

(function (_ProxyValues) {
  _ProxyValues["interactable"] = "";
  _ProxyValues["element"] = "";
  _ProxyValues["prepared"] = "";
  _ProxyValues["pointerIsDown"] = "";
  _ProxyValues["pointerWasMoved"] = "";
  _ProxyValues["_proxy"] = "";
})(_ProxyValues || (_ProxyValues = {}));

let _ProxyMethods;

(function (_ProxyMethods) {
  _ProxyMethods["start"] = "";
  _ProxyMethods["move"] = "";
  _ProxyMethods["end"] = "";
  _ProxyMethods["stop"] = "";
  _ProxyMethods["interacting"] = "";
})(_ProxyMethods || (_ProxyMethods = {}));

let idCounter = 0;
class Interaction {
  // current interactable being interacted with
  // the target element of the interactable
  // action that's ready to be fired on next move event
  // keep track of added pointers
  // pointerdown/mousedown/touchstart event
  // previous action event

  /** @internal */
  get pointerMoveTolerance() {
    return 1;
  }
  /**
   * @alias Interaction.prototype.move
   */


  /** */
  constructor({
    pointerType,
    scopeFire
  }) {
    this.interactable = null;
    this.element = null;
    this.rect = void 0;
    this._rects = void 0;
    this.edges = void 0;
    this._scopeFire = void 0;
    this.prepared = {
      name: null,
      axis: null,
      edges: null
    };
    this.pointerType = void 0;
    this.pointers = [];
    this.downEvent = null;
    this.downPointer = {};
    this._latestPointer = {
      pointer: null,
      event: null,
      eventTarget: null
    };
    this.prevEvent = null;
    this.pointerIsDown = false;
    this.pointerWasMoved = false;
    this._interacting = false;
    this._ending = false;
    this._stopped = true;
    this._proxy = null;
    this.simulation = null;
    this.doMove = warnOnce(function (signalArg) {
      this.move(signalArg);
    }, 'The interaction.doMove() method has been renamed to interaction.move()');
    this.coords = {
      // Starting InteractEvent pointer coordinates
      start: newCoords(),
      // Previous native pointer move event coordinates
      prev: newCoords(),
      // current native pointer move event coordinates
      cur: newCoords(),
      // Change in coordinates and time of the pointer
      delta: newCoords(),
      // pointer velocity
      velocity: newCoords()
    };
    this._id = idCounter++;
    this._scopeFire = scopeFire;
    this.pointerType = pointerType;
    const that = this;
    this._proxy = {};

    for (const key in _ProxyValues) {
      Object.defineProperty(this._proxy, key, {
        get() {
          return that[key];
        }

      });
    }

    for (const key in _ProxyMethods) {
      Object.defineProperty(this._proxy, key, {
        value: (...args) => that[key](...args)
      });
    }

    this._scopeFire('interactions:new', {
      interaction: this
    });
  }

  pointerDown(pointer, event, eventTarget) {
    const pointerIndex = this.updatePointer(pointer, event, eventTarget, true);
    const pointerInfo = this.pointers[pointerIndex];

    this._scopeFire('interactions:down', {
      pointer,
      event,
      eventTarget,
      pointerIndex,
      pointerInfo,
      type: 'down',
      interaction: this
    });
  }
  /**
   * ```js
   * interact(target)
   *   .draggable({
   *     // disable the default drag start by down->move
   *     manualStart: true
   *   })
   *   // start dragging after the user holds the pointer down
   *   .on('hold', function (event) {
   *     var interaction = event.interaction
   *
   *     if (!interaction.interacting()) {
   *       interaction.start({ name: 'drag' },
   *                         event.interactable,
   *                         event.currentTarget)
   *     }
   * })
   * ```
   *
   * Start an action with the given Interactable and Element as tartgets. The
   * action must be enabled for the target Interactable and an appropriate
   * number of pointers must be held down - 1 for drag/resize, 2 for gesture.
   *
   * Use it with `interactable.<action>able({ manualStart: false })` to always
   * [start actions manually](https://github.com/taye/interact.js/issues/114)
   *
   * @param {object} action   The action to be performed - drag, resize, etc.
   * @param {Interactable} target  The Interactable to target
   * @param {Element} element The DOM Element to target
   * @return {Boolean} Whether the interaction was successfully started
   */


  start(action, interactable, element) {
    if (this.interacting() || !this.pointerIsDown || this.pointers.length < (action.name === 'gesture' ? 2 : 1) || !interactable.options[action.name].enabled) {
      return false;
    }

    copyAction(this.prepared, action);
    this.interactable = interactable;
    this.element = element;
    this.rect = interactable.getRect(element);
    this.edges = this.prepared.edges ? extend({}, this.prepared.edges) : {
      left: true,
      right: true,
      top: true,
      bottom: true
    };
    this._stopped = false;
    this._interacting = this._doPhase({
      interaction: this,
      event: this.downEvent,
      phase: 'start'
    }) && !this._stopped;
    return this._interacting;
  }

  pointerMove(pointer, event, eventTarget) {
    if (!this.simulation && !(this.modification && this.modification.endResult)) {
      this.updatePointer(pointer, event, eventTarget, false);
    }

    const duplicateMove = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
    let dx;
    let dy; // register movement greater than pointerMoveTolerance

    if (this.pointerIsDown && !this.pointerWasMoved) {
      dx = this.coords.cur.client.x - this.coords.start.client.x;
      dy = this.coords.cur.client.y - this.coords.start.client.y;
      this.pointerWasMoved = hypot(dx, dy) > this.pointerMoveTolerance;
    }

    const pointerIndex = this.getPointerIndex(pointer);
    const signalArg = {
      pointer,
      pointerIndex,
      pointerInfo: this.pointers[pointerIndex],
      event,
      type: 'move',
      eventTarget,
      dx,
      dy,
      duplicate: duplicateMove,
      interaction: this
    };

    if (!duplicateMove) {
      // set pointer coordinate, time changes and velocity
      setCoordVelocity(this.coords.velocity, this.coords.delta);
    }

    this._scopeFire('interactions:move', signalArg);

    if (!duplicateMove && !this.simulation) {
      // if interacting, fire an 'action-move' signal etc
      if (this.interacting()) {
        signalArg.type = null;
        this.move(signalArg);
      }

      if (this.pointerWasMoved) {
        copyCoords(this.coords.prev, this.coords.cur);
      }
    }
  }
  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('dragmove', function (event) {
   *     if (someCondition) {
   *       // change the snap settings
   *       event.interactable.draggable({ snap: { targets: [] }})
   *       // fire another move event with re-calculated snap
   *       event.interaction.move()
   *     }
   *   })
   * ```
   *
   * Force a move of the current action at the same coordinates. Useful if
   * snap/restrict has been changed and you want a movement with the new
   * settings.
   */


  move(signalArg) {
    if (!signalArg || !signalArg.event) {
      setZeroCoords(this.coords.delta);
    }

    signalArg = extend({
      pointer: this._latestPointer.pointer,
      event: this._latestPointer.event,
      eventTarget: this._latestPointer.eventTarget,
      interaction: this
    }, signalArg || {});
    signalArg.phase = 'move';

    this._doPhase(signalArg);
  } // End interact move events and stop auto-scroll unless simulation is running


  pointerUp(pointer, event, eventTarget, curEventTarget) {
    let pointerIndex = this.getPointerIndex(pointer);

    if (pointerIndex === -1) {
      pointerIndex = this.updatePointer(pointer, event, eventTarget, false);
    }

    const type = /cancel$/i.test(event.type) ? 'cancel' : 'up';

    this._scopeFire(`interactions:${type}`, {
      pointer,
      pointerIndex,
      pointerInfo: this.pointers[pointerIndex],
      event,
      eventTarget,
      type: type,
      curEventTarget,
      interaction: this
    });

    if (!this.simulation) {
      this.end(event);
    }

    this.removePointer(pointer, event);
  }

  documentBlur(event) {
    this.end(event);

    this._scopeFire('interactions:blur', {
      event,
      type: 'blur',
      interaction: this
    });
  }
  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('move', function (event) {
   *     if (event.pageX > 1000) {
   *       // end the current action
   *       event.interaction.end()
   *       // stop all further listeners from being called
   *       event.stopImmediatePropagation()
   *     }
   *   })
   * ```
   *
   * @param {PointerEvent} [event]
   */


  end(event) {
    this._ending = true;
    event = event || this._latestPointer.event;
    let endPhaseResult;

    if (this.interacting()) {
      endPhaseResult = this._doPhase({
        event,
        interaction: this,
        phase: 'end'
      });
    }

    this._ending = false;

    if (endPhaseResult === true) {
      this.stop();
    }
  }

  currentAction() {
    return this._interacting ? this.prepared.name : null;
  }

  interacting() {
    return this._interacting;
  }
  /** */


  stop() {
    this._scopeFire('interactions:stop', {
      interaction: this
    });

    this.interactable = this.element = null;
    this._interacting = false;
    this._stopped = true;
    this.prepared.name = this.prevEvent = null;
  }

  getPointerIndex(pointer) {
    const pointerId = getPointerId(pointer); // mouse and pen interactions may have only one pointer

    return this.pointerType === 'mouse' || this.pointerType === 'pen' ? this.pointers.length - 1 : findIndex(this.pointers, curPointer => curPointer.id === pointerId);
  }

  getPointerInfo(pointer) {
    return this.pointers[this.getPointerIndex(pointer)];
  }

  updatePointer(pointer, event, eventTarget, down) {
    const id = getPointerId(pointer);
    let pointerIndex = this.getPointerIndex(pointer);
    let pointerInfo = this.pointers[pointerIndex];
    down = down === false ? false : down || /(down|start)$/i.test(event.type);

    if (!pointerInfo) {
      pointerInfo = new PointerInfo(id, pointer, event, null, null);
      pointerIndex = this.pointers.length;
      this.pointers.push(pointerInfo);
    } else {
      pointerInfo.pointer = pointer;
    }

    setCoords(this.coords.cur, this.pointers.map(p => p.pointer), this._now());
    setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur);

    if (down) {
      this.pointerIsDown = true;
      pointerInfo.downTime = this.coords.cur.timeStamp;
      pointerInfo.downTarget = eventTarget;
      pointerExtend(this.downPointer, pointer);

      if (!this.interacting()) {
        copyCoords(this.coords.start, this.coords.cur);
        copyCoords(this.coords.prev, this.coords.cur);
        this.downEvent = event;
        this.pointerWasMoved = false;
      }
    }

    this._updateLatestPointer(pointer, event, eventTarget);

    this._scopeFire('interactions:update-pointer', {
      pointer,
      event,
      eventTarget,
      down,
      pointerInfo,
      pointerIndex,
      interaction: this
    });

    return pointerIndex;
  }

  removePointer(pointer, event) {
    const pointerIndex = this.getPointerIndex(pointer);
    if (pointerIndex === -1) return;
    const pointerInfo = this.pointers[pointerIndex];

    this._scopeFire('interactions:remove-pointer', {
      pointer,
      event,
      eventTarget: null,
      pointerIndex,
      pointerInfo,
      interaction: this
    });

    this.pointers.splice(pointerIndex, 1);
    this.pointerIsDown = false;
  }

  _updateLatestPointer(pointer, event, eventTarget) {
    this._latestPointer.pointer = pointer;
    this._latestPointer.event = event;
    this._latestPointer.eventTarget = eventTarget;
  }

  destroy() {
    this._latestPointer.pointer = null;
    this._latestPointer.event = null;
    this._latestPointer.eventTarget = null;
  }

  _createPreparedEvent(event, phase, preEnd, type) {
    return new InteractEvent(this, event, this.prepared.name, phase, this.element, preEnd, type);
  }

  _fireEvent(iEvent) {
    this.interactable.fire(iEvent);

    if (!this.prevEvent || iEvent.timeStamp >= this.prevEvent.timeStamp) {
      this.prevEvent = iEvent;
    }
  }

  _doPhase(signalArg) {
    const {
      event,
      phase,
      preEnd,
      type
    } = signalArg;
    const {
      rect
    } = this;

    if (rect && phase === 'move') {
      // update the rect changes due to pointer move
      addEdges(this.edges, rect, this.coords.delta[this.interactable.options.deltaSource]);
      rect.width = rect.right - rect.left;
      rect.height = rect.bottom - rect.top;
    }

    const beforeResult = this._scopeFire(`interactions:before-action-${phase}`, signalArg);

    if (beforeResult === false) {
      return false;
    }

    const iEvent = signalArg.iEvent = this._createPreparedEvent(event, phase, preEnd, type);

    this._scopeFire(`interactions:action-${phase}`, signalArg);

    if (phase === 'start') {
      this.prevEvent = iEvent;
    }

    this._fireEvent(iEvent);

    this._scopeFire(`interactions:after-action-${phase}`, signalArg);

    return true;
  }

  _now() {
    return Date.now();
  }

}
var InteractionBase = Interaction;

function preventDefault(newValue) {
  if (/^(always|never|auto)$/.test(newValue)) {
    this.options.preventDefault = newValue;
    return this;
  }

  if (is.bool(newValue)) {
    this.options.preventDefault = newValue ? 'always' : 'never';
    return this;
  }

  return this.options.preventDefault;
}

function checkAndPreventDefault(interactable, scope, event) {
  const setting = interactable.options.preventDefault;
  if (setting === 'never') return;

  if (setting === 'always') {
    event.preventDefault();
    return;
  } // setting === 'auto'
  // if the browser supports passive event listeners and isn't running on iOS,
  // don't preventDefault of touch{start,move} events. CSS touch-action and
  // user-select should be used instead of calling event.preventDefault().


  if (scope.events.supportsPassive && /^touch(start|move)$/.test(event.type)) {
    const doc = getWindow(event.target).document;
    const docOptions = scope.getDocOptions(doc);

    if (!(docOptions && docOptions.events) || docOptions.events.passive !== false) {
      return;
    }
  } // don't preventDefault of pointerdown events


  if (/^(mouse|pointer|touch)*(down|start)/i.test(event.type)) {
    return;
  } // don't preventDefault on editable elements


  if (is.element(event.target) && matchesSelector(event.target, 'input,select,textarea,[contenteditable=true],[contenteditable=true] *')) {
    return;
  }

  event.preventDefault();
}

function onInteractionEvent({
  interaction,
  event
}) {
  if (interaction.interactable) {
    interaction.interactable.checkAndPreventDefault(event);
  }
}

function install$7(scope) {
  /** @lends Interactable */
  const {
    Interactable
  } = scope;
  /**
   * Returns or sets whether to prevent the browser's default behaviour in
   * response to pointer events. Can be set to:
   *  - `'always'` to always prevent
   *  - `'never'` to never prevent
   *  - `'auto'` to let interact.js try to determine what would be best
   *
   * @param {string} [newValue] `'always'`, `'never'` or `'auto'`
   * @return {string | Interactable} The current setting or this Interactable
   */

  Interactable.prototype.preventDefault = preventDefault;

  Interactable.prototype.checkAndPreventDefault = function (event) {
    return checkAndPreventDefault(this, scope, event);
  }; // prevent native HTML5 drag on interact.js target elements


  scope.interactions.docEvents.push({
    type: 'dragstart',

    listener(event) {
      for (const interaction of scope.interactions.list) {
        if (interaction.element && (interaction.element === event.target || nodeContains(interaction.element, event.target))) {
          interaction.interactable.checkAndPreventDefault(event);
          return;
        }
      }
    }

  });
}
var interactablePreventDefault = {
  id: 'core/interactablePreventDefault',
  install: install$7,
  listeners: ['down', 'move', 'up', 'cancel'].reduce((acc, eventType) => {
    acc[`interactions:${eventType}`] = onInteractionEvent;
    return acc;
  }, {})
};

const finder = {
  methodOrder: ['simulationResume', 'mouseOrPen', 'hasPointer', 'idle'],

  search(details) {
    for (const method of finder.methodOrder) {
      const interaction = finder[method](details);

      if (interaction) {
        return interaction;
      }
    }

    return null;
  },

  // try to resume simulation with a new pointer
  simulationResume({
    pointerType,
    eventType,
    eventTarget,
    scope
  }) {
    if (!/down|start/i.test(eventType)) {
      return null;
    }

    for (const interaction of scope.interactions.list) {
      let element = eventTarget;

      if (interaction.simulation && interaction.simulation.allowResume && interaction.pointerType === pointerType) {
        while (element) {
          // if the element is the interaction element
          if (element === interaction.element) {
            return interaction;
          }

          element = parentNode(element);
        }
      }
    }

    return null;
  },

  // if it's a mouse or pen interaction
  mouseOrPen({
    pointerId,
    pointerType,
    eventType,
    scope
  }) {
    if (pointerType !== 'mouse' && pointerType !== 'pen') {
      return null;
    }

    let firstNonActive;

    for (const interaction of scope.interactions.list) {
      if (interaction.pointerType === pointerType) {
        // if it's a down event, skip interactions with running simulations
        if (interaction.simulation && !hasPointerId(interaction, pointerId)) {
          continue;
        } // if the interaction is active, return it immediately


        if (interaction.interacting()) {
          return interaction;
        } // otherwise save it and look for another active interaction
        else if (!firstNonActive) {
            firstNonActive = interaction;
          }
      }
    } // if no active mouse interaction was found use the first inactive mouse
    // interaction


    if (firstNonActive) {
      return firstNonActive;
    } // find any mouse or pen interaction.
    // ignore the interaction if the eventType is a *down, and a simulation
    // is active


    for (const interaction of scope.interactions.list) {
      if (interaction.pointerType === pointerType && !(/down/i.test(eventType) && interaction.simulation)) {
        return interaction;
      }
    }

    return null;
  },

  // get interaction that has this pointer
  hasPointer({
    pointerId,
    scope
  }) {
    for (const interaction of scope.interactions.list) {
      if (hasPointerId(interaction, pointerId)) {
        return interaction;
      }
    }

    return null;
  },

  // get first idle interaction with a matching pointerType
  idle({
    pointerType,
    scope
  }) {
    for (const interaction of scope.interactions.list) {
      // if there's already a pointer held down
      if (interaction.pointers.length === 1) {
        const target = interaction.interactable; // don't add this pointer if there is a target interactable and it
        // isn't gesturable

        if (target && !(target.options.gesture && target.options.gesture.enabled)) {
          continue;
        }
      } // maximum of 2 pointers per interaction
      else if (interaction.pointers.length >= 2) {
          continue;
        }

      if (!interaction.interacting() && pointerType === interaction.pointerType) {
        return interaction;
      }
    }

    return null;
  }

};

function hasPointerId(interaction, pointerId) {
  return interaction.pointers.some(({
    id
  }) => id === pointerId);
}

var finder$1 = finder;

const methodNames = ['pointerDown', 'pointerMove', 'pointerUp', 'updatePointer', 'removePointer', 'windowBlur'];

function install$6(scope) {
  const listeners = {};

  for (const method of methodNames) {
    listeners[method] = doOnInteractions(method, scope);
  }

  const pEventTypes = browser$1.pEventTypes;
  let docEvents;

  if (domObjects$1.PointerEvent) {
    docEvents = [{
      type: pEventTypes.down,
      listener: releasePointersOnRemovedEls
    }, {
      type: pEventTypes.down,
      listener: listeners.pointerDown
    }, {
      type: pEventTypes.move,
      listener: listeners.pointerMove
    }, {
      type: pEventTypes.up,
      listener: listeners.pointerUp
    }, {
      type: pEventTypes.cancel,
      listener: listeners.pointerUp
    }];
  } else {
    docEvents = [{
      type: 'mousedown',
      listener: listeners.pointerDown
    }, {
      type: 'mousemove',
      listener: listeners.pointerMove
    }, {
      type: 'mouseup',
      listener: listeners.pointerUp
    }, {
      type: 'touchstart',
      listener: releasePointersOnRemovedEls
    }, {
      type: 'touchstart',
      listener: listeners.pointerDown
    }, {
      type: 'touchmove',
      listener: listeners.pointerMove
    }, {
      type: 'touchend',
      listener: listeners.pointerUp
    }, {
      type: 'touchcancel',
      listener: listeners.pointerUp
    }];
  }

  docEvents.push({
    type: 'blur',

    listener(event) {
      for (const interaction of scope.interactions.list) {
        interaction.documentBlur(event);
      }
    }

  }); // for ignoring browser's simulated mouse events

  scope.prevTouchTime = 0;
  scope.Interaction = class extends InteractionBase {
    get pointerMoveTolerance() {
      return scope.interactions.pointerMoveTolerance;
    }

    set pointerMoveTolerance(value) {
      scope.interactions.pointerMoveTolerance = value;
    }

    _now() {
      return scope.now();
    }

  };
  scope.interactions = {
    // all active and idle interactions
    list: [],

    new(options) {
      options.scopeFire = (name, arg) => scope.fire(name, arg);

      const interaction = new scope.Interaction(options);
      scope.interactions.list.push(interaction);
      return interaction;
    },

    listeners,
    docEvents,
    pointerMoveTolerance: 1
  };

  function releasePointersOnRemovedEls() {
    // for all inactive touch interactions with pointers down
    for (const interaction of scope.interactions.list) {
      if (!interaction.pointerIsDown || interaction.pointerType !== 'touch' || interaction._interacting) {
        continue;
      } // if a pointer is down on an element that is no longer in the DOM tree


      for (const pointer of interaction.pointers) {
        if (!scope.documents.some(({
          doc
        }) => nodeContains(doc, pointer.downTarget))) {
          // remove the pointer from the interaction
          interaction.removePointer(pointer.pointer, pointer.event);
        }
      }
    }
  }

  scope.usePlugin(interactablePreventDefault);
}

function doOnInteractions(method, scope) {
  return function (event) {
    const interactions = scope.interactions.list;
    const pointerType = getPointerType(event);
    const [eventTarget, curEventTarget] = getEventTargets(event);
    const matches = []; // [ [pointer, interaction], ...]

    if (/^touch/.test(event.type)) {
      scope.prevTouchTime = scope.now(); // @ts-expect-error

      for (const changedTouch of event.changedTouches) {
        const pointer = changedTouch;
        const pointerId = getPointerId(pointer);
        const searchDetails = {
          pointer,
          pointerId,
          pointerType,
          eventType: event.type,
          eventTarget,
          curEventTarget,
          scope
        };
        const interaction = getInteraction(searchDetails);
        matches.push([searchDetails.pointer, searchDetails.eventTarget, searchDetails.curEventTarget, interaction]);
      }
    } else {
      let invalidPointer = false;

      if (!browser$1.supportsPointerEvent && /mouse/.test(event.type)) {
        // ignore mouse events while touch interactions are active
        for (let i = 0; i < interactions.length && !invalidPointer; i++) {
          invalidPointer = interactions[i].pointerType !== 'mouse' && interactions[i].pointerIsDown;
        } // try to ignore mouse events that are simulated by the browser
        // after a touch event


        invalidPointer = invalidPointer || scope.now() - scope.prevTouchTime < 500 || // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
        event.timeStamp === 0;
      }

      if (!invalidPointer) {
        const searchDetails = {
          pointer: event,
          pointerId: getPointerId(event),
          pointerType,
          eventType: event.type,
          curEventTarget,
          eventTarget,
          scope
        };
        const interaction = getInteraction(searchDetails);
        matches.push([searchDetails.pointer, searchDetails.eventTarget, searchDetails.curEventTarget, interaction]);
      }
    } // eslint-disable-next-line no-shadow


    for (const [pointer, eventTarget, curEventTarget, interaction] of matches) {
      interaction[method](pointer, event, eventTarget, curEventTarget);
    }
  };
}

function getInteraction(searchDetails) {
  const {
    pointerType,
    scope
  } = searchDetails;
  const foundInteraction = finder$1.search(searchDetails);
  const signalArg = {
    interaction: foundInteraction,
    searchDetails
  };
  scope.fire('interactions:find', signalArg);
  return signalArg.interaction || scope.interactions.new({
    pointerType
  });
}

function onDocSignal({
  doc,
  scope,
  options
}, eventMethodName) {
  const {
    interactions: {
      docEvents
    },
    events
  } = scope;
  const eventMethod = events[eventMethodName];

  if (scope.browser.isIOS && !options.events) {
    options.events = {
      passive: false
    };
  } // delegate event listener


  for (const eventType in events.delegatedEvents) {
    eventMethod(doc, eventType, events.delegateListener);
    eventMethod(doc, eventType, events.delegateUseCapture, true);
  }

  const eventOptions = options && options.events;

  for (const {
    type,
    listener
  } of docEvents) {
    eventMethod(doc, type, listener, eventOptions);
  }
}

const interactions = {
  id: 'core/interactions',
  install: install$6,
  listeners: {
    'scope:add-document': arg => onDocSignal(arg, 'add'),
    'scope:remove-document': arg => onDocSignal(arg, 'remove'),
    'interactable:unset': ({
      interactable
    }, scope) => {
      // Stop and destroy related interactions when an Interactable is unset
      for (let i = scope.interactions.list.length - 1; i >= 0; i--) {
        const interaction = scope.interactions.list[i];

        if (interaction.interactable !== interactable) {
          continue;
        }

        interaction.stop();
        scope.fire('interactions:destroy', {
          interaction
        });
        interaction.destroy();

        if (scope.interactions.list.length > 2) {
          scope.interactions.list.splice(i, 1);
        }
      }
    }
  },
  onDocSignal,
  doOnInteractions,
  methodNames
};
var interactions$1 = interactions;

class Scope {
  // main window
  // main document
  // main window
  // all documents being listened to
  constructor() {
    this.id = `__interact_scope_${Math.floor(Math.random() * 100)}`;
    this.isInitialized = false;
    this.listenerMaps = [];
    this.browser = browser$1;
    this.defaults = clone(defaults$6);
    this.Eventable = Eventable;
    this.actions = {
      map: {},
      phases: {
        start: true,
        move: true,
        end: true
      },
      methodDict: {},
      phaselessTypes: {}
    };
    this.interactStatic = createInteractStatic(this);
    this.InteractEvent = InteractEvent;
    this.Interactable = void 0;
    this.interactables = new InteractableSet(this);
    this._win = void 0;
    this.document = void 0;
    this.window = void 0;
    this.documents = [];
    this._plugins = {
      list: [],
      map: {}
    };

    this.onWindowUnload = event => this.removeDocument(event.target);

    const scope = this;
    this.Interactable = class extends Interactable {
      get _defaults() {
        return scope.defaults;
      }

      set(options) {
        super.set(options);
        scope.fire('interactable:set', {
          options,
          interactable: this
        });
        return this;
      }

      unset() {
        super.unset();
        scope.interactables.list.splice(scope.interactables.list.indexOf(this), 1);
        scope.fire('interactable:unset', {
          interactable: this
        });
      }

    };
  }

  addListeners(map, id) {
    this.listenerMaps.push({
      id,
      map
    });
  }

  fire(name, arg) {
    for (const {
      map: {
        [name]: listener
      }
    } of this.listenerMaps) {
      if (!!listener && listener(arg, this, name) === false) {
        return false;
      }
    }
  }

  init(window) {
    return this.isInitialized ? this : initScope(this, window);
  }

  pluginIsInstalled(plugin) {
    return this._plugins.map[plugin.id] || this._plugins.list.indexOf(plugin) !== -1;
  }

  usePlugin(plugin, options) {
    if (!this.isInitialized) {
      return this;
    }

    if (this.pluginIsInstalled(plugin)) {
      return this;
    }

    if (plugin.id) {
      this._plugins.map[plugin.id] = plugin;
    }

    this._plugins.list.push(plugin);

    if (plugin.install) {
      plugin.install(this, options);
    }

    if (plugin.listeners && plugin.before) {
      let index = 0;
      const len = this.listenerMaps.length;
      const before = plugin.before.reduce((acc, id) => {
        acc[id] = true;
        acc[pluginIdRoot(id)] = true;
        return acc;
      }, {});

      for (; index < len; index++) {
        const otherId = this.listenerMaps[index].id;

        if (before[otherId] || before[pluginIdRoot(otherId)]) {
          break;
        }
      }

      this.listenerMaps.splice(index, 0, {
        id: plugin.id,
        map: plugin.listeners
      });
    } else if (plugin.listeners) {
      this.listenerMaps.push({
        id: plugin.id,
        map: plugin.listeners
      });
    }

    return this;
  }

  addDocument(doc, options) {
    // do nothing if document is already known
    if (this.getDocIndex(doc) !== -1) {
      return false;
    }

    const window = getWindow(doc);
    options = options ? extend({}, options) : {};
    this.documents.push({
      doc,
      options
    });
    this.events.documents.push(doc); // don't add an unload event for the main document
    // so that the page may be cached in browser history

    if (doc !== this.document) {
      this.events.add(window, 'unload', this.onWindowUnload);
    }

    this.fire('scope:add-document', {
      doc,
      window,
      scope: this,
      options
    });
  }

  removeDocument(doc) {
    const index = this.getDocIndex(doc);
    const window = getWindow(doc);
    const options = this.documents[index].options;
    this.events.remove(window, 'unload', this.onWindowUnload);
    this.documents.splice(index, 1);
    this.events.documents.splice(index, 1);
    this.fire('scope:remove-document', {
      doc,
      window,
      scope: this,
      options
    });
  }

  getDocIndex(doc) {
    for (let i = 0; i < this.documents.length; i++) {
      if (this.documents[i].doc === doc) {
        return i;
      }
    }

    return -1;
  }

  getDocOptions(doc) {
    const docIndex = this.getDocIndex(doc);
    return docIndex === -1 ? null : this.documents[docIndex].options;
  }

  now() {
    return (this.window.Date || Date).now();
  }

}
function initScope(scope, window) {
  scope.isInitialized = true;

  if (is.window(window)) {
    init$2(window);
  }

  domObjects$1.init(window);
  browser$1.init(window);
  raf.init(window); // @ts-expect-error

  scope.window = window;
  scope.document = window.document;
  scope.usePlugin(interactions$1);
  scope.usePlugin(events);
  return scope;
}

function pluginIdRoot(id) {
  return id && id.replace(/\/.*$/, '');
}

const scope = new Scope();
const interact = scope.interactStatic;
var interact$1 = interact;

const _global = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : window;

scope.init(_global);

function install$5(scope) {
  const {
    actions,
    Interactable,
    defaults
  } = scope;
  Interactable.prototype.draggable = drag.draggable;
  actions.map.drag = drag;
  actions.methodDict.drag = 'draggable';
  defaults.actions.drag = drag.defaults;
}

function beforeMove({
  interaction
}) {
  if (interaction.prepared.name !== 'drag') return;
  const axis = interaction.prepared.axis;

  if (axis === 'x') {
    interaction.coords.cur.page.y = interaction.coords.start.page.y;
    interaction.coords.cur.client.y = interaction.coords.start.client.y;
    interaction.coords.velocity.client.y = 0;
    interaction.coords.velocity.page.y = 0;
  } else if (axis === 'y') {
    interaction.coords.cur.page.x = interaction.coords.start.page.x;
    interaction.coords.cur.client.x = interaction.coords.start.client.x;
    interaction.coords.velocity.client.x = 0;
    interaction.coords.velocity.page.x = 0;
  }
}

function move({
  iEvent,
  interaction
}) {
  if (interaction.prepared.name !== 'drag') return;
  const axis = interaction.prepared.axis;

  if (axis === 'x' || axis === 'y') {
    const opposite = axis === 'x' ? 'y' : 'x';
    iEvent.page[opposite] = interaction.coords.start.page[opposite];
    iEvent.client[opposite] = interaction.coords.start.client[opposite];
    iEvent.delta[opposite] = 0;
  }
}
/**
 * ```js
 * interact(element).draggable({
 *     onstart: function (event) {},
 *     onmove : function (event) {},
 *     onend  : function (event) {},
 *
 *     // the axis in which the first movement must be
 *     // for the drag sequence to start
 *     // 'xy' by default - any direction
 *     startAxis: 'x' || 'y' || 'xy',
 *
 *     // 'xy' by default - don't restrict to one axis (move in any direction)
 *     // 'x' or 'y' to restrict movement to either axis
 *     // 'start' to restrict movement to the axis the drag started in
 *     lockAxis: 'x' || 'y' || 'xy' || 'start',
 *
 *     // max number of drags that can happen concurrently
 *     // with elements of this Interactable. Infinity by default
 *     max: Infinity,
 *
 *     // max number of drags that can target the same element+Interactable
 *     // 1 by default
 *     maxPerElement: 2
 * })
 *
 * var isDraggable = interact('element').draggable(); // true
 * ```
 *
 * Get or set whether drag actions can be performed on the target
 *
 * @alias Interactable.prototype.draggable
 *
 * @param {boolean | object} [options] true/false or An object with event
 * listeners to be fired on drag events (object makes the Interactable
 * draggable)
 * @return {boolean | Interactable} boolean indicating if this can be the
 * target of drag events, or this Interctable
 */


const draggable = function draggable(options) {
  if (is.object(options)) {
    this.options.drag.enabled = options.enabled !== false;
    this.setPerAction('drag', options);
    this.setOnEvents('drag', options);

    if (/^(xy|x|y|start)$/.test(options.lockAxis)) {
      this.options.drag.lockAxis = options.lockAxis;
    }

    if (/^(xy|x|y)$/.test(options.startAxis)) {
      this.options.drag.startAxis = options.startAxis;
    }

    return this;
  }

  if (is.bool(options)) {
    this.options.drag.enabled = options;
    return this;
  }

  return this.options.drag;
};

const drag = {
  id: 'actions/drag',
  install: install$5,
  listeners: {
    'interactions:before-action-move': beforeMove,
    'interactions:action-resume': beforeMove,
    // dragmove
    'interactions:action-move': move,
    'auto-start:check': arg => {
      const {
        interaction,
        interactable,
        buttons
      } = arg;
      const dragOptions = interactable.options.drag;

      if (!(dragOptions && dragOptions.enabled) || // check mouseButton setting if the pointer is down
      interaction.pointerIsDown && /mouse|pointer/.test(interaction.pointerType) && (buttons & interactable.options.drag.mouseButtons) === 0) {
        return undefined;
      }

      arg.action = {
        name: 'drag',
        axis: dragOptions.lockAxis === 'start' ? dragOptions.startAxis : dragOptions.lockAxis
      };
      return false;
    }
  },
  draggable,
  beforeMove,
  move,
  defaults: {
    startAxis: 'xy',
    lockAxis: 'xy'
  },

  getCursor() {
    return 'move';
  }

};
var drag$1 = drag;

/* eslint-disable import/order, no-console, eol-last */
interact$1.use(drag$1);

class DropEvent extends BaseEvent {
  /**
   * Class of events fired on dropzones during drags with acceptable targets.
   */
  constructor(dropState, dragEvent, type) {
    super(dragEvent._interaction);
    this.target = void 0;
    this.dropzone = void 0;
    this.dragEvent = void 0;
    this.relatedTarget = void 0;
    this.draggable = void 0;
    this.timeStamp = void 0;
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
    const {
      element,
      dropzone
    } = type === 'dragleave' ? dropState.prev : dropState.cur;
    this.type = type;
    this.target = element;
    this.currentTarget = element;
    this.dropzone = dropzone;
    this.dragEvent = dragEvent;
    this.relatedTarget = dragEvent.target;
    this.draggable = dragEvent.interactable;
    this.timeStamp = dragEvent.timeStamp;
  }
  /**
   * If this is a `dropactivate` event, the dropzone element will be
   * deactivated.
   *
   * If this is a `dragmove` or `dragenter`, a `dragleave` will be fired on the
   * dropzone element and more.
   */


  reject() {
    const {
      dropState
    } = this._interaction;

    if (this.type !== 'dropactivate' && (!this.dropzone || dropState.cur.dropzone !== this.dropzone || dropState.cur.element !== this.target)) {
      return;
    }

    dropState.prev.dropzone = this.dropzone;
    dropState.prev.element = this.target;
    dropState.rejected = true;
    dropState.events.enter = null;
    this.stopImmediatePropagation();

    if (this.type === 'dropactivate') {
      const activeDrops = dropState.activeDrops;
      const index = findIndex(activeDrops, ({
        dropzone,
        element
      }) => dropzone === this.dropzone && element === this.target);
      dropState.activeDrops.splice(index, 1);
      const deactivateEvent = new DropEvent(dropState, this.dragEvent, 'dropdeactivate');
      deactivateEvent.dropzone = this.dropzone;
      deactivateEvent.target = this.target;
      this.dropzone.fire(deactivateEvent);
    } else {
      this.dropzone.fire(new DropEvent(dropState, this.dragEvent, 'dragleave'));
    }
  }

  preventDefault() {}

  stopPropagation() {
    this.propagationStopped = true;
  }

  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  }

}

function install$4(scope) {
  const {
    actions,

    /** @lends module:interact */
    interactStatic: interact,

    /** @lends Interactable */
    Interactable,
    defaults
  } = scope;
  scope.usePlugin(drag$1);
  /**
   *
   * ```js
   * interact('.drop').dropzone({
   *   accept: '.can-drop' || document.getElementById('single-drop'),
   *   overlap: 'pointer' || 'center' || zeroToOne
   * }
   * ```
   *
   * Returns or sets whether draggables can be dropped onto this target to
   * trigger drop events
   *
   * Dropzones can receive the following events:
   *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
   *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
   *  - `dragmove` when a draggable that has entered the dropzone is moved
   *  - `drop` when a draggable is dropped into this dropzone
   *
   * Use the `accept` option to allow only elements that match the given CSS
   * selector or element. The value can be:
   *
   *  - **an Element** - only that element can be dropped into this dropzone.
   *  - **a string**, - the element being dragged must match it as a CSS selector.
   *  - **`null`** - accept options is cleared - it accepts any element.
   *
   * Use the `overlap` option to set how drops are checked for. The allowed
   * values are:
   *
   *   - `'pointer'`, the pointer must be over the dropzone (default)
   *   - `'center'`, the draggable element's center must be over the dropzone
   *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
   *   e.g. `0.5` for drop to happen when half of the area of the draggable is
   *   over the dropzone
   *
   * Use the `checker` option to specify a function to check if a dragged element
   * is over this Interactable.
   *
   * @param {boolean | object | null} [options] The new options to be set.
   * @return {object | Interactable} The current setting or this Interactable
   */

  Interactable.prototype.dropzone = function (options) {
    return dropzoneMethod(this, options);
  };
  /**
   * ```js
   * interact(target)
   * .dropChecker(function(dragEvent,         // related dragmove or dragend event
   *                       event,             // TouchEvent/PointerEvent/MouseEvent
   *                       dropped,           // bool result of the default checker
   *                       dropzone,          // dropzone Interactable
   *                       dropElement,       // dropzone elemnt
   *                       draggable,         // draggable Interactable
   *                       draggableElement) {// draggable element
   *
   *   return dropped && event.target.hasAttribute('allow-drop')
   * }
   * ```
   */


  Interactable.prototype.dropCheck = function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
    return dropCheckMethod(this, dragEvent, event, draggable, draggableElement, dropElement, rect);
  };
  /**
   * Returns or sets whether the dimensions of dropzone elements are calculated
   * on every dragmove or only on dragstart for the default dropChecker
   *
   * @param {boolean} [newValue] True to check on each move. False to check only
   * before start
   * @return {boolean | interact} The current setting or interact
   */


  interact.dynamicDrop = function (newValue) {
    if (is.bool(newValue)) {
      // if (dragging && scope.dynamicDrop !== newValue && !newValue) {
      //  calcRects(dropzones)
      // }
      scope.dynamicDrop = newValue;
      return interact;
    }

    return scope.dynamicDrop;
  };

  extend(actions.phaselessTypes, {
    dragenter: true,
    dragleave: true,
    dropactivate: true,
    dropdeactivate: true,
    dropmove: true,
    drop: true
  });
  actions.methodDict.drop = 'dropzone';
  scope.dynamicDrop = false;
  defaults.actions.drop = drop.defaults;
}

function collectDrops({
  interactables
}, draggableElement) {
  const drops = []; // collect all dropzones and their elements which qualify for a drop

  for (const dropzone of interactables.list) {
    if (!dropzone.options.drop.enabled) {
      continue;
    }

    const accept = dropzone.options.drop.accept; // test the draggable draggableElement against the dropzone's accept setting

    if (is.element(accept) && accept !== draggableElement || is.string(accept) && !matchesSelector(draggableElement, accept) || is.func(accept) && !accept({
      dropzone,
      draggableElement
    })) {
      continue;
    } // query for new elements if necessary


    const dropElements = is.string(dropzone.target) ? dropzone._context.querySelectorAll(dropzone.target) : is.array(dropzone.target) ? dropzone.target : [dropzone.target];

    for (const dropzoneElement of dropElements) {
      if (dropzoneElement !== draggableElement) {
        drops.push({
          dropzone,
          element: dropzoneElement,
          rect: dropzone.getRect(dropzoneElement)
        });
      }
    }
  }

  return drops;
}

function fireActivationEvents(activeDrops, event) {
  // loop through all active dropzones and trigger event
  for (const {
    dropzone,
    element
  } of activeDrops.slice()) {
    event.dropzone = dropzone; // set current element as event target

    event.target = element;
    dropzone.fire(event);
    event.propagationStopped = event.immediatePropagationStopped = false;
  }
} // return a new array of possible drops. getActiveDrops should always be
// called when a drag has just started or a drag event happens while
// dynamicDrop is true


function getActiveDrops(scope, dragElement) {
  // get dropzones and their elements that could receive the draggable
  const activeDrops = collectDrops(scope, dragElement);

  for (const activeDrop of activeDrops) {
    activeDrop.rect = activeDrop.dropzone.getRect(activeDrop.element);
  }

  return activeDrops;
}

function getDrop({
  dropState,
  interactable: draggable,
  element: dragElement
}, dragEvent, pointerEvent) {
  const validDrops = []; // collect all dropzones and their elements which qualify for a drop

  for (const {
    dropzone,
    element: dropzoneElement,
    rect
  } of dropState.activeDrops) {
    validDrops.push(dropzone.dropCheck(dragEvent, pointerEvent, draggable, dragElement, dropzoneElement, rect) ? dropzoneElement : null);
  } // get the most appropriate dropzone based on DOM depth and order


  const dropIndex = indexOfDeepestElement(validDrops);
  return dropState.activeDrops[dropIndex] || null;
}

function getDropEvents(interaction, _pointerEvent, dragEvent) {
  const {
    dropState
  } = interaction;
  const dropEvents = {
    enter: null,
    leave: null,
    activate: null,
    deactivate: null,
    move: null,
    drop: null
  };

  if (dragEvent.type === 'dragstart') {
    dropEvents.activate = new DropEvent(dropState, dragEvent, 'dropactivate');
    dropEvents.activate.target = null;
    dropEvents.activate.dropzone = null;
  }

  if (dragEvent.type === 'dragend') {
    dropEvents.deactivate = new DropEvent(dropState, dragEvent, 'dropdeactivate');
    dropEvents.deactivate.target = null;
    dropEvents.deactivate.dropzone = null;
  }

  if (dropState.rejected) {
    return dropEvents;
  }

  if (dropState.cur.element !== dropState.prev.element) {
    // if there was a previous dropzone, create a dragleave event
    if (dropState.prev.dropzone) {
      dropEvents.leave = new DropEvent(dropState, dragEvent, 'dragleave');
      dragEvent.dragLeave = dropEvents.leave.target = dropState.prev.element;
      dragEvent.prevDropzone = dropEvents.leave.dropzone = dropState.prev.dropzone;
    } // if dropzone is not null, create a dragenter event


    if (dropState.cur.dropzone) {
      dropEvents.enter = new DropEvent(dropState, dragEvent, 'dragenter');
      dragEvent.dragEnter = dropState.cur.element;
      dragEvent.dropzone = dropState.cur.dropzone;
    }
  }

  if (dragEvent.type === 'dragend' && dropState.cur.dropzone) {
    dropEvents.drop = new DropEvent(dropState, dragEvent, 'drop');
    dragEvent.dropzone = dropState.cur.dropzone;
    dragEvent.relatedTarget = dropState.cur.element;
  }

  if (dragEvent.type === 'dragmove' && dropState.cur.dropzone) {
    dropEvents.move = new DropEvent(dropState, dragEvent, 'dropmove');
    dropEvents.move.dragmove = dragEvent;
    dragEvent.dropzone = dropState.cur.dropzone;
  }

  return dropEvents;
}

function fireDropEvents(interaction, events) {
  const {
    dropState
  } = interaction;
  const {
    activeDrops,
    cur,
    prev
  } = dropState;

  if (events.leave) {
    prev.dropzone.fire(events.leave);
  }

  if (events.enter) {
    cur.dropzone.fire(events.enter);
  }

  if (events.move) {
    cur.dropzone.fire(events.move);
  }

  if (events.drop) {
    cur.dropzone.fire(events.drop);
  }

  if (events.deactivate) {
    fireActivationEvents(activeDrops, events.deactivate);
  }

  dropState.prev.dropzone = cur.dropzone;
  dropState.prev.element = cur.element;
}

function onEventCreated({
  interaction,
  iEvent,
  event
}, scope) {
  if (iEvent.type !== 'dragmove' && iEvent.type !== 'dragend') {
    return;
  }

  const {
    dropState
  } = interaction;

  if (scope.dynamicDrop) {
    dropState.activeDrops = getActiveDrops(scope, interaction.element);
  }

  const dragEvent = iEvent;
  const dropResult = getDrop(interaction, dragEvent, event); // update rejected status

  dropState.rejected = dropState.rejected && !!dropResult && dropResult.dropzone === dropState.cur.dropzone && dropResult.element === dropState.cur.element;
  dropState.cur.dropzone = dropResult && dropResult.dropzone;
  dropState.cur.element = dropResult && dropResult.element;
  dropState.events = getDropEvents(interaction, event, dragEvent);
}

function dropzoneMethod(interactable, options) {
  if (is.object(options)) {
    interactable.options.drop.enabled = options.enabled !== false;

    if (options.listeners) {
      const normalized = normalize(options.listeners); // rename 'drop' to '' as it will be prefixed with 'drop'

      const corrected = Object.keys(normalized).reduce((acc, type) => {
        const correctedType = /^(enter|leave)/.test(type) ? `drag${type}` : /^(activate|deactivate|move)/.test(type) ? `drop${type}` : type;
        acc[correctedType] = normalized[type];
        return acc;
      }, {});
      interactable.off(interactable.options.drop.listeners);
      interactable.on(corrected);
      interactable.options.drop.listeners = corrected;
    }

    if (is.func(options.ondrop)) {
      interactable.on('drop', options.ondrop);
    }

    if (is.func(options.ondropactivate)) {
      interactable.on('dropactivate', options.ondropactivate);
    }

    if (is.func(options.ondropdeactivate)) {
      interactable.on('dropdeactivate', options.ondropdeactivate);
    }

    if (is.func(options.ondragenter)) {
      interactable.on('dragenter', options.ondragenter);
    }

    if (is.func(options.ondragleave)) {
      interactable.on('dragleave', options.ondragleave);
    }

    if (is.func(options.ondropmove)) {
      interactable.on('dropmove', options.ondropmove);
    }

    if (/^(pointer|center)$/.test(options.overlap)) {
      interactable.options.drop.overlap = options.overlap;
    } else if (is.number(options.overlap)) {
      interactable.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
    }

    if ('accept' in options) {
      interactable.options.drop.accept = options.accept;
    }

    if ('checker' in options) {
      interactable.options.drop.checker = options.checker;
    }

    return interactable;
  }

  if (is.bool(options)) {
    interactable.options.drop.enabled = options;
    return interactable;
  }

  return interactable.options.drop;
}

function dropCheckMethod(interactable, dragEvent, event, draggable, draggableElement, dropElement, rect) {
  let dropped = false; // if the dropzone has no rect (eg. display: none)
  // call the custom dropChecker or just return false

  if (!(rect = rect || interactable.getRect(dropElement))) {
    return interactable.options.drop.checker ? interactable.options.drop.checker(dragEvent, event, dropped, interactable, dropElement, draggable, draggableElement) : false;
  }

  const dropOverlap = interactable.options.drop.overlap;

  if (dropOverlap === 'pointer') {
    const origin = getOriginXY(draggable, draggableElement, 'drag');
    const page = getPageXY(dragEvent);
    page.x += origin.x;
    page.y += origin.y;
    const horizontal = page.x > rect.left && page.x < rect.right;
    const vertical = page.y > rect.top && page.y < rect.bottom;
    dropped = horizontal && vertical;
  }

  const dragRect = draggable.getRect(draggableElement);

  if (dragRect && dropOverlap === 'center') {
    const cx = dragRect.left + dragRect.width / 2;
    const cy = dragRect.top + dragRect.height / 2;
    dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
  }

  if (dragRect && is.number(dropOverlap)) {
    const overlapArea = Math.max(0, Math.min(rect.right, dragRect.right) - Math.max(rect.left, dragRect.left)) * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top, dragRect.top));
    const overlapRatio = overlapArea / (dragRect.width * dragRect.height);
    dropped = overlapRatio >= dropOverlap;
  }

  if (interactable.options.drop.checker) {
    dropped = interactable.options.drop.checker(dragEvent, event, dropped, interactable, dropElement, draggable, draggableElement);
  }

  return dropped;
}

const drop = {
  id: 'actions/drop',
  install: install$4,
  listeners: {
    'interactions:before-action-start': ({
      interaction
    }) => {
      if (interaction.prepared.name !== 'drag') {
        return;
      }

      interaction.dropState = {
        cur: {
          dropzone: null,
          element: null
        },
        prev: {
          dropzone: null,
          element: null
        },
        rejected: null,
        events: null,
        activeDrops: []
      };
    },
    'interactions:after-action-start': ({
      interaction,
      event,
      iEvent: dragEvent
    }, scope) => {
      if (interaction.prepared.name !== 'drag') {
        return;
      }

      const {
        dropState
      } = interaction; // reset active dropzones

      dropState.activeDrops = null;
      dropState.events = null;
      dropState.activeDrops = getActiveDrops(scope, interaction.element);
      dropState.events = getDropEvents(interaction, event, dragEvent);

      if (dropState.events.activate) {
        fireActivationEvents(dropState.activeDrops, dropState.events.activate);
        scope.fire('actions/drop:start', {
          interaction,
          dragEvent
        });
      }
    },
    'interactions:action-move': onEventCreated,
    'interactions:after-action-move': ({
      interaction,
      iEvent: dragEvent
    }, scope) => {
      if (interaction.prepared.name !== 'drag') {
        return;
      }

      fireDropEvents(interaction, interaction.dropState.events);
      scope.fire('actions/drop:move', {
        interaction,
        dragEvent
      });
      interaction.dropState.events = {};
    },
    'interactions:action-end': (arg, scope) => {
      if (arg.interaction.prepared.name !== 'drag') {
        return;
      }

      const {
        interaction,
        iEvent: dragEvent
      } = arg;
      onEventCreated(arg, scope);
      fireDropEvents(interaction, interaction.dropState.events);
      scope.fire('actions/drop:end', {
        interaction,
        dragEvent
      });
    },
    'interactions:stop': ({
      interaction
    }) => {
      if (interaction.prepared.name !== 'drag') {
        return;
      }

      const {
        dropState
      } = interaction;

      if (dropState) {
        dropState.activeDrops = null;
        dropState.events = null;
        dropState.cur.dropzone = null;
        dropState.cur.element = null;
        dropState.prev.dropzone = null;
        dropState.prev.element = null;
        dropState.rejected = false;
      }
    }
  },
  getActiveDrops,
  getDrop,
  getDropEvents,
  fireDropEvents,
  defaults: {
    enabled: false,
    accept: null,
    overlap: 'pointer'
  }
};
var plugin$3 = drop;

/* eslint-disable import/order, no-console, eol-last */
interact$1.use(plugin$3);

function install$3(scope) {
  const {
    /** @lends Interactable */
    Interactable // tslint:disable-line no-shadowed-variable

  } = scope;

  Interactable.prototype.getAction = function getAction(pointer, event, interaction, element) {
    const action = defaultActionChecker(this, event, interaction, element, scope);

    if (this.options.actionChecker) {
      return this.options.actionChecker(pointer, event, action, this, element, interaction);
    }

    return action;
  };
  /**
   * If the target of the `mousedown`, `pointerdown` or `touchstart` event or any
   * of it's parents match the given CSS selector or Element, no
   * drag/resize/gesture is started.
   *
   * @deprecated
   * Don't use this method. Instead set the `ignoreFrom` option for each action
   * or for `pointerEvents`
   *
   * ```js
   * interact(targett)
   *   .draggable({
   *     ignoreFrom: 'input, textarea, a[href]'',
   *   })
   *   .pointerEvents({
   *     ignoreFrom: '[no-pointer]',
   *   })
   * ```
   *
   * @param {string | Element | null} [newValue] a CSS selector string, an
   * Element or `null` to not ignore any elements
   * @return {string | Element | object} The current ignoreFrom value or this
   * Interactable
   */


  Interactable.prototype.ignoreFrom = warnOnce(function (newValue) {
    return this._backCompatOption('ignoreFrom', newValue);
  }, 'Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue}).');
  /**
   *
   * A drag/resize/gesture is started only If the target of the `mousedown`,
   * `pointerdown` or `touchstart` event or any of it's parents match the given
   * CSS selector or Element.
   *
   * @deprecated
   * Don't use this method. Instead set the `allowFrom` option for each action
   * or for `pointerEvents`
   *
   * ```js
   * interact(targett)
   *   .resizable({
   *     allowFrom: '.resize-handle',
   *   .pointerEvents({
   *     allowFrom: '.handle',,
   *   })
   * ```
   *
   * @param {string | Element | null} [newValue] a CSS selector string, an
   * Element or `null` to allow from any element
   * @return {string | Element | object} The current allowFrom value or this
   * Interactable
   */

  Interactable.prototype.allowFrom = warnOnce(function (newValue) {
    return this._backCompatOption('allowFrom', newValue);
  }, 'Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue}).');
  /**
   * ```js
   * interact('.resize-drag')
   *   .resizable(true)
   *   .draggable(true)
   *   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
   *
   *     if (interact.matchesSelector(event.target, '.drag-handle')) {
   *       // force drag with handle target
   *       action.name = drag
   *     }
   *     else {
   *       // resize from the top and right edges
   *       action.name  = 'resize'
   *       action.edges = { top: true, right: true }
   *     }
   *
   *     return action
   * })
   * ```
   *
   * Returns or sets the function used to check action to be performed on
   * pointerDown
   *
   * @param {function | null} [checker] A function which takes a pointer event,
   * defaultAction string, interactable, element and interaction as parameters
   * and returns an object with name property 'drag' 'resize' or 'gesture' and
   * optionally an `edges` object with boolean 'top', 'left', 'bottom' and right
   * props.
   * @return {Function | Interactable} The checker function or this Interactable
   */

  Interactable.prototype.actionChecker = actionChecker;
  /**
   * Returns or sets whether the the cursor should be changed depending on the
   * action that would be performed if the mouse were pressed and dragged.
   *
   * @param {boolean} [newValue]
   * @return {boolean | Interactable} The current setting or this Interactable
   */

  Interactable.prototype.styleCursor = styleCursor;
}

function defaultActionChecker(interactable, event, interaction, element, scope) {
  const rect = interactable.getRect(element);
  const buttons = event.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[event.button];
  const arg = {
    action: null,
    interactable,
    interaction,
    element,
    rect,
    buttons
  };
  scope.fire('auto-start:check', arg);
  return arg.action;
}

function styleCursor(newValue) {
  if (is.bool(newValue)) {
    this.options.styleCursor = newValue;
    return this;
  }

  if (newValue === null) {
    delete this.options.styleCursor;
    return this;
  }

  return this.options.styleCursor;
}

function actionChecker(checker) {
  if (is.func(checker)) {
    this.options.actionChecker = checker;
    return this;
  }

  if (checker === null) {
    delete this.options.actionChecker;
    return this;
  }

  return this.options.actionChecker;
}

var InteractableMethods = {
  id: 'auto-start/interactableMethods',
  install: install$3
};

function install$2(scope) {
  const {
    interactStatic: interact,
    defaults
  } = scope;
  scope.usePlugin(InteractableMethods);
  defaults.base.actionChecker = null;
  defaults.base.styleCursor = true;
  extend(defaults.perAction, {
    manualStart: false,
    max: Infinity,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    // only allow left button by default
    // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
    mouseButtons: 1
  });
  /**
   * Returns or sets the maximum number of concurrent interactions allowed.  By
   * default only 1 interaction is allowed at a time (for backwards
   * compatibility). To allow multiple interactions on the same Interactables and
   * elements, you need to enable it in the draggable, resizable and gesturable
   * `'max'` and `'maxPerElement'` options.
   *
   * @alias module:interact.maxInteractions
   *
   * @param {number} [newValue] Any number. newValue <= 0 means no interactions.
   */

  interact.maxInteractions = newValue => maxInteractions(newValue, scope);

  scope.autoStart = {
    // Allow this many interactions to happen simultaneously
    maxInteractions: Infinity,
    withinInteractionLimit,
    cursorElement: null
  };
}

function prepareOnDown({
  interaction,
  pointer,
  event,
  eventTarget
}, scope) {
  if (interaction.interacting()) return;
  const actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope);
  prepare(interaction, actionInfo, scope);
}

function prepareOnMove({
  interaction,
  pointer,
  event,
  eventTarget
}, scope) {
  if (interaction.pointerType !== 'mouse' || interaction.pointerIsDown || interaction.interacting()) return;
  const actionInfo = getActionInfo(interaction, pointer, event, eventTarget, scope);
  prepare(interaction, actionInfo, scope);
}

function startOnMove(arg, scope) {
  const {
    interaction
  } = arg;

  if (!interaction.pointerIsDown || interaction.interacting() || !interaction.pointerWasMoved || !interaction.prepared.name) {
    return;
  }

  scope.fire('autoStart:before-start', arg);
  const {
    interactable
  } = interaction;
  const actionName = interaction.prepared.name;

  if (actionName && interactable) {
    // check manualStart and interaction limit
    if (interactable.options[actionName].manualStart || !withinInteractionLimit(interactable, interaction.element, interaction.prepared, scope)) {
      interaction.stop();
    } else {
      interaction.start(interaction.prepared, interactable, interaction.element);
      setInteractionCursor(interaction, scope);
    }
  }
}

function clearCursorOnStop({
  interaction
}, scope) {
  const {
    interactable
  } = interaction;

  if (interactable && interactable.options.styleCursor) {
    setCursor(interaction.element, '', scope);
  }
} // Check if the current interactable supports the action.
// If so, return the validated action. Otherwise, return null


function validateAction(action, interactable, element, eventTarget, scope) {
  if (interactable.testIgnoreAllow(interactable.options[action.name], element, eventTarget) && interactable.options[action.name].enabled && withinInteractionLimit(interactable, element, action, scope)) {
    return action;
  }

  return null;
}

function validateMatches(interaction, pointer, event, matches, matchElements, eventTarget, scope) {
  for (let i = 0, len = matches.length; i < len; i++) {
    const match = matches[i];
    const matchElement = matchElements[i];
    const matchAction = match.getAction(pointer, event, interaction, matchElement);

    if (!matchAction) {
      continue;
    }

    const action = validateAction(matchAction, match, matchElement, eventTarget, scope);

    if (action) {
      return {
        action,
        interactable: match,
        element: matchElement
      };
    }
  }

  return {
    action: null,
    interactable: null,
    element: null
  };
}

function getActionInfo(interaction, pointer, event, eventTarget, scope) {
  let matches = [];
  let matchElements = [];
  let element = eventTarget;

  function pushMatches(interactable) {
    matches.push(interactable);
    matchElements.push(element);
  }

  while (is.element(element)) {
    matches = [];
    matchElements = [];
    scope.interactables.forEachMatch(element, pushMatches);
    const actionInfo = validateMatches(interaction, pointer, event, matches, matchElements, eventTarget, scope);

    if (actionInfo.action && !actionInfo.interactable.options[actionInfo.action.name].manualStart) {
      return actionInfo;
    }

    element = parentNode(element);
  }

  return {
    action: null,
    interactable: null,
    element: null
  };
}

function prepare(interaction, {
  action,
  interactable,
  element
}, scope) {
  action = action || {
    name: null
  };
  interaction.interactable = interactable;
  interaction.element = element;
  copyAction(interaction.prepared, action);
  interaction.rect = interactable && action.name ? interactable.getRect(element) : null;
  setInteractionCursor(interaction, scope);
  scope.fire('autoStart:prepared', {
    interaction
  });
}

function withinInteractionLimit(interactable, element, action, scope) {
  const options = interactable.options;
  const maxActions = options[action.name].max;
  const maxPerElement = options[action.name].maxPerElement;
  const autoStartMax = scope.autoStart.maxInteractions;
  let activeInteractions = 0;
  let interactableCount = 0;
  let elementCount = 0; // no actions if any of these values == 0

  if (!(maxActions && maxPerElement && autoStartMax)) {
    return false;
  }

  for (const interaction of scope.interactions.list) {
    const otherAction = interaction.prepared.name;

    if (!interaction.interacting()) {
      continue;
    }

    activeInteractions++;

    if (activeInteractions >= autoStartMax) {
      return false;
    }

    if (interaction.interactable !== interactable) {
      continue;
    }

    interactableCount += otherAction === action.name ? 1 : 0;

    if (interactableCount >= maxActions) {
      return false;
    }

    if (interaction.element === element) {
      elementCount++;

      if (otherAction === action.name && elementCount >= maxPerElement) {
        return false;
      }
    }
  }

  return autoStartMax > 0;
}

function maxInteractions(newValue, scope) {
  if (is.number(newValue)) {
    scope.autoStart.maxInteractions = newValue;
    return this;
  }

  return scope.autoStart.maxInteractions;
}

function setCursor(element, cursor, scope) {
  const {
    cursorElement: prevCursorElement
  } = scope.autoStart;

  if (prevCursorElement && prevCursorElement !== element) {
    prevCursorElement.style.cursor = '';
  }

  element.ownerDocument.documentElement.style.cursor = cursor;
  element.style.cursor = cursor;
  scope.autoStart.cursorElement = cursor ? element : null;
}

function setInteractionCursor(interaction, scope) {
  const {
    interactable,
    element,
    prepared
  } = interaction;

  if (!(interaction.pointerType === 'mouse' && interactable && interactable.options.styleCursor)) {
    // clear previous target element cursor
    if (scope.autoStart.cursorElement) {
      setCursor(scope.autoStart.cursorElement, '', scope);
    }

    return;
  }

  let cursor = '';

  if (prepared.name) {
    const cursorChecker = interactable.options[prepared.name].cursorChecker;

    if (is.func(cursorChecker)) {
      cursor = cursorChecker(prepared, interactable, element, interaction._interacting);
    } else {
      cursor = scope.actions.map[prepared.name].getCursor(prepared);
    }
  }

  setCursor(interaction.element, cursor || '', scope);
}

const autoStart = {
  id: 'auto-start/base',
  before: ['actions'],
  install: install$2,
  listeners: {
    'interactions:down': prepareOnDown,
    'interactions:move': (arg, scope) => {
      prepareOnMove(arg, scope);
      startOnMove(arg, scope);
    },
    'interactions:stop': clearCursorOnStop
  },
  maxInteractions,
  withinInteractionLimit,
  validateAction
};
var autoStart$1 = autoStart;

function beforeStart({
  interaction,
  eventTarget,
  dx,
  dy
}, scope) {
  if (interaction.prepared.name !== 'drag') return; // check if a drag is in the correct axis

  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  const targetOptions = interaction.interactable.options.drag;
  const startAxis = targetOptions.startAxis;
  const currentAxis = absX > absY ? 'x' : absX < absY ? 'y' : 'xy';
  interaction.prepared.axis = targetOptions.lockAxis === 'start' ? currentAxis[0] : // always lock to one axis even if currentAxis === 'xy'
  targetOptions.lockAxis; // if the movement isn't in the startAxis of the interactable

  if (currentAxis !== 'xy' && startAxis !== 'xy' && startAxis !== currentAxis) {
    interaction.prepared.name = null; // then try to get a drag from another ineractable

    let element = eventTarget;

    const getDraggable = function (interactable) {
      if (interactable === interaction.interactable) return;
      const options = interaction.interactable.options.drag;

      if (!options.manualStart && interactable.testIgnoreAllow(options, element, eventTarget)) {
        const action = interactable.getAction(interaction.downPointer, interaction.downEvent, interaction, element);

        if (action && action.name === 'drag' && checkStartAxis(currentAxis, interactable) && autoStart$1.validateAction(action, interactable, element, eventTarget, scope)) {
          return interactable;
        }
      }
    }; // check all interactables


    while (is.element(element)) {
      const interactable = scope.interactables.forEachMatch(element, getDraggable);

      if (interactable) {
        interaction.prepared.name = 'drag';
        interaction.interactable = interactable;
        interaction.element = element;
        break;
      }

      element = parentNode(element);
    }
  }
}

function checkStartAxis(startAxis, interactable) {
  if (!interactable) {
    return false;
  }

  const thisAxis = interactable.options.drag.startAxis;
  return startAxis === 'xy' || thisAxis === 'xy' || thisAxis === startAxis;
}

var dragAxis = {
  id: 'auto-start/dragAxis',
  listeners: {
    'autoStart:before-start': beforeStart
  }
};

function install$1(scope) {
  const {
    defaults
  } = scope;
  scope.usePlugin(autoStart$1);
  defaults.perAction.hold = 0;
  defaults.perAction.delay = 0;
}

function getHoldDuration(interaction) {
  const actionName = interaction.prepared && interaction.prepared.name;

  if (!actionName) {
    return null;
  }

  const options = interaction.interactable.options;
  return options[actionName].hold || options[actionName].delay;
}

const hold = {
  id: 'auto-start/hold',
  install: install$1,
  listeners: {
    'interactions:new': ({
      interaction
    }) => {
      interaction.autoStartHoldTimer = null;
    },
    'autoStart:prepared': ({
      interaction
    }) => {
      const hold = getHoldDuration(interaction);

      if (hold > 0) {
        interaction.autoStartHoldTimer = setTimeout(() => {
          interaction.start(interaction.prepared, interaction.interactable, interaction.element);
        }, hold);
      }
    },
    'interactions:move': ({
      interaction,
      duplicate
    }) => {
      if (interaction.autoStartHoldTimer && interaction.pointerWasMoved && !duplicate) {
        clearTimeout(interaction.autoStartHoldTimer);
        interaction.autoStartHoldTimer = null;
      }
    },
    // prevent regular down->move autoStart
    'autoStart:before-start': ({
      interaction
    }) => {
      const holdDuration = getHoldDuration(interaction);

      if (holdDuration > 0) {
        interaction.prepared.name = null;
      }
    }
  },
  getHoldDuration
};
var hold$1 = hold;

var plugin$2 = {
  id: 'auto-start',

  install(scope) {
    scope.usePlugin(autoStart$1);
    scope.usePlugin(hold$1);
    scope.usePlugin(dragAxis);
  }

};

/* eslint-disable import/order, no-console, eol-last */
interact$1.use(plugin$2);

var visualizer = {};

var CheckName;

(function (CheckName) {
  CheckName["touchAction"] = "touchAction";
  CheckName["boxSizing"] = "boxSizing";
  CheckName["noListeners"] = "noListeners";
})(CheckName || (CheckName = {}));

const prefix = '[interact.js] ';
const links = {
  touchAction: 'https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action',
  boxSizing: 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing'
}; // eslint-disable-next-line no-undef

const isProduction = "development" === 'production';

function install(scope, {
  logger
} = {}) {
  const {
    Interactable,
    defaults
  } = scope;
  scope.logger = logger || console;
  defaults.base.devTools = {
    ignore: {}
  };

  Interactable.prototype.devTools = function (options) {
    if (options) {
      extend(this.options.devTools, options);
      return this;
    }

    return this.options.devTools;
  };

  scope.usePlugin(visualizer);
}

const checks = [{
  name: CheckName.touchAction,

  perform({
    element
  }) {
    return !parentHasStyle(element, 'touchAction', /pan-|pinch|none/);
  },

  getInfo({
    element
  }) {
    return [element, links.touchAction];
  },

  text: 'Consider adding CSS "touch-action: none" to this element\n'
}, {
  name: CheckName.boxSizing,

  perform(interaction) {
    const {
      element
    } = interaction;
    return interaction.prepared.name === 'resize' && element instanceof domObjects$1.HTMLElement && !hasStyle(element, 'boxSizing', /border-box/);
  },

  text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',

  getInfo({
    element
  }) {
    return [element, links.boxSizing];
  }

}, {
  name: CheckName.noListeners,

  perform(interaction) {
    const actionName = interaction.prepared.name;
    const moveListeners = interaction.interactable.events.types[`${actionName}move`] || [];
    return !moveListeners.length;
  },

  getInfo(interaction) {
    return [interaction.prepared.name, interaction.interactable];
  },

  text: 'There are no listeners set for this action'
}];

function hasStyle(element, prop, styleRe) {
  const value = element.style[prop] || win.getComputedStyle(element)[prop];
  return styleRe.test((value || '').toString());
}

function parentHasStyle(element, prop, styleRe) {
  let parent = element;

  while (is.element(parent)) {
    if (hasStyle(parent, prop, styleRe)) {
      return true;
    }

    parent = parentNode(parent);
  }

  return false;
}

const id = 'dev-tools';
const defaultExport = isProduction ? {
  id,
  install: () => {}
} : {
  id,
  install,
  listeners: {
    'interactions:action-start': ({
      interaction
    }, scope) => {
      for (const check of checks) {
        const options = interaction.interactable && interaction.interactable.options;

        if (!(options && options.devTools && options.devTools.ignore[check.name]) && check.perform(interaction)) {
          scope.logger.warn(prefix + check.text, ...check.getInfo(interaction));
        }
      }
    }
  },
  checks,
  CheckName,
  links,
  prefix
};
var plugin$1 = defaultExport;

/* eslint-disable import/order, no-console, eol-last */
interact$1.use(plugin$1);

var edgeTarget = (() => {});

var elements = (() => {});

var grid = (grid => {
  const coordFields = [['x', 'y'], ['left', 'top'], ['right', 'bottom'], ['width', 'height']].filter(([xField, yField]) => xField in grid || yField in grid);

  const gridFunc = (x, y) => {
    const {
      range,
      limits = {
        left: -Infinity,
        right: Infinity,
        top: -Infinity,
        bottom: Infinity
      },
      offset = {
        x: 0,
        y: 0
      }
    } = grid;
    const result = {
      range,
      grid,
      x: null,
      y: null
    };

    for (const [xField, yField] of coordFields) {
      const gridx = Math.round((x - offset.x) / grid[xField]);
      const gridy = Math.round((y - offset.y) / grid[yField]);
      result[xField] = Math.max(limits.left, Math.min(limits.right, gridx * grid[xField] + offset.x));
      result[yField] = Math.max(limits.top, Math.min(limits.bottom, gridy * grid[yField] + offset.y));
    }

    return result;
  };

  gridFunc.grid = grid;
  gridFunc.coordFields = coordFields;
  return gridFunc;
});

/* eslint-disable import/no-named-as-default, import/no-unresolved */

var allSnappers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    edgeTarget: edgeTarget,
    elements: elements,
    grid: grid
});

const snappersPlugin = {
  id: 'snappers',

  install(scope) {
    const {
      interactStatic: interact
    } = scope;
    interact.snappers = extend(interact.snappers || {}, allSnappers);
    interact.createSnapGrid = interact.snappers.grid;
  }

};
var snappers = snappersPlugin;

class Modification {
  constructor(interaction) {
    this.states = [];
    this.startOffset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.startDelta = void 0;
    this.result = void 0;
    this.endResult = void 0;
    this.edges = void 0;
    this.interaction = void 0;
    this.interaction = interaction;
    this.result = createResult();
  }

  start({
    phase
  }, pageCoords) {
    const {
      interaction
    } = this;
    const modifierList = getModifierList(interaction);
    this.prepareStates(modifierList);
    this.edges = extend({}, interaction.edges);
    this.startOffset = getRectOffset(interaction.rect, pageCoords);
    this.startDelta = {
      x: 0,
      y: 0
    };
    const arg = this.fillArg({
      phase,
      pageCoords,
      preEnd: false
    });
    this.result = createResult();
    this.startAll(arg);
    const result = this.result = this.setAll(arg);
    return result;
  }

  fillArg(arg) {
    const {
      interaction
    } = this;
    arg.interaction = interaction;
    arg.interactable = interaction.interactable;
    arg.element = interaction.element;
    arg.rect = arg.rect || interaction.rect;
    arg.edges = this.edges;
    arg.startOffset = this.startOffset;
    return arg;
  }

  startAll(arg) {
    for (const state of this.states) {
      if (state.methods.start) {
        arg.state = state;
        state.methods.start(arg);
      }
    }
  }

  setAll(arg) {
    const {
      phase,
      preEnd,
      skipModifiers,
      rect: unmodifiedRect
    } = arg;
    arg.coords = extend({}, arg.pageCoords);
    arg.rect = extend({}, unmodifiedRect);
    const states = skipModifiers ? this.states.slice(skipModifiers) : this.states;
    const newResult = createResult(arg.coords, arg.rect);

    for (const state of states) {
      var _state$methods;

      const {
        options
      } = state;
      const lastModifierCoords = extend({}, arg.coords);
      let returnValue = null;

      if ((_state$methods = state.methods) != null && _state$methods.set && this.shouldDo(options, preEnd, phase)) {
        arg.state = state;
        returnValue = state.methods.set(arg);
        addEdges(this.interaction.edges, arg.rect, {
          x: arg.coords.x - lastModifierCoords.x,
          y: arg.coords.y - lastModifierCoords.y
        });
      }

      newResult.eventProps.push(returnValue);
    }

    newResult.delta.x = arg.coords.x - arg.pageCoords.x;
    newResult.delta.y = arg.coords.y - arg.pageCoords.y;
    newResult.rectDelta.left = arg.rect.left - unmodifiedRect.left;
    newResult.rectDelta.right = arg.rect.right - unmodifiedRect.right;
    newResult.rectDelta.top = arg.rect.top - unmodifiedRect.top;
    newResult.rectDelta.bottom = arg.rect.bottom - unmodifiedRect.bottom;
    const prevCoords = this.result.coords;
    const prevRect = this.result.rect;

    if (prevCoords && prevRect) {
      const rectChanged = newResult.rect.left !== prevRect.left || newResult.rect.right !== prevRect.right || newResult.rect.top !== prevRect.top || newResult.rect.bottom !== prevRect.bottom;
      newResult.changed = rectChanged || prevCoords.x !== newResult.coords.x || prevCoords.y !== newResult.coords.y;
    }

    return newResult;
  }

  applyToInteraction(arg) {
    const {
      interaction
    } = this;
    const {
      phase
    } = arg;
    const curCoords = interaction.coords.cur;
    const startCoords = interaction.coords.start;
    const {
      result,
      startDelta
    } = this;
    const curDelta = result.delta;

    if (phase === 'start') {
      extend(this.startDelta, result.delta);
    }

    for (const [coordsSet, delta] of [[startCoords, startDelta], [curCoords, curDelta]]) {
      coordsSet.page.x += delta.x;
      coordsSet.page.y += delta.y;
      coordsSet.client.x += delta.x;
      coordsSet.client.y += delta.y;
    }

    const {
      rectDelta
    } = this.result;
    const rect = arg.rect || interaction.rect;
    rect.left += rectDelta.left;
    rect.right += rectDelta.right;
    rect.top += rectDelta.top;
    rect.bottom += rectDelta.bottom;
    rect.width = rect.right - rect.left;
    rect.height = rect.bottom - rect.top;
  }

  setAndApply(arg) {
    const {
      interaction
    } = this;
    const {
      phase,
      preEnd,
      skipModifiers
    } = arg;
    const result = this.setAll(this.fillArg({
      preEnd,
      phase,
      pageCoords: arg.modifiedCoords || interaction.coords.cur.page
    }));
    this.result = result; // don't fire an action move if a modifier would keep the event in the same
    // cordinates as before

    if (!result.changed && (!skipModifiers || skipModifiers < this.states.length) && interaction.interacting()) {
      return false;
    }

    if (arg.modifiedCoords) {
      const {
        page
      } = interaction.coords.cur;
      const adjustment = {
        x: arg.modifiedCoords.x - page.x,
        y: arg.modifiedCoords.y - page.y
      };
      result.coords.x += adjustment.x;
      result.coords.y += adjustment.y;
      result.delta.x += adjustment.x;
      result.delta.y += adjustment.y;
    }

    this.applyToInteraction(arg);
  }

  beforeEnd(arg) {
    const {
      interaction,
      event
    } = arg;
    const states = this.states;

    if (!states || !states.length) {
      return;
    }

    let doPreend = false;

    for (const state of states) {
      arg.state = state;
      const {
        options,
        methods
      } = state;
      const endPosition = methods.beforeEnd && methods.beforeEnd(arg);

      if (endPosition) {
        this.endResult = endPosition;
        return false;
      }

      doPreend = doPreend || !doPreend && this.shouldDo(options, true, arg.phase, true);
    }

    if (doPreend) {
      // trigger a final modified move before ending
      interaction.move({
        event,
        preEnd: true
      });
    }
  }

  stop(arg) {
    const {
      interaction
    } = arg;

    if (!this.states || !this.states.length) {
      return;
    }

    const modifierArg = extend({
      states: this.states,
      interactable: interaction.interactable,
      element: interaction.element,
      rect: null
    }, arg);
    this.fillArg(modifierArg);

    for (const state of this.states) {
      modifierArg.state = state;

      if (state.methods.stop) {
        state.methods.stop(modifierArg);
      }
    }

    this.states = null;
    this.endResult = null;
  }

  prepareStates(modifierList) {
    this.states = [];

    for (let index = 0; index < modifierList.length; index++) {
      const {
        options,
        methods,
        name
      } = modifierList[index];
      this.states.push({
        options,
        methods,
        index,
        name
      });
    }

    return this.states;
  }

  restoreInteractionCoords({
    interaction: {
      coords,
      rect,
      modification
    }
  }) {
    if (!modification.result) return;
    const {
      startDelta
    } = modification;
    const {
      delta: curDelta,
      rectDelta
    } = modification.result;
    const coordsAndDeltas = [[coords.start, startDelta], [coords.cur, curDelta]];

    for (const [coordsSet, delta] of coordsAndDeltas) {
      coordsSet.page.x -= delta.x;
      coordsSet.page.y -= delta.y;
      coordsSet.client.x -= delta.x;
      coordsSet.client.y -= delta.y;
    }

    rect.left -= rectDelta.left;
    rect.right -= rectDelta.right;
    rect.top -= rectDelta.top;
    rect.bottom -= rectDelta.bottom;
  }

  shouldDo(options, preEnd, phase, requireEndOnly) {
    if ( // ignore disabled modifiers
    !options || options.enabled === false || // check if we require endOnly option to fire move before end
    requireEndOnly && !options.endOnly || // don't apply endOnly modifiers when not ending
    options.endOnly && !preEnd || // check if modifier should run be applied on start
    phase === 'start' && !options.setStart) {
      return false;
    }

    return true;
  }

  copyFrom(other) {
    this.startOffset = other.startOffset;
    this.startDelta = other.startDelta;
    this.edges = other.edges;
    this.states = other.states.map(s => clone(s));
    this.result = createResult(extend({}, other.result.coords), extend({}, other.result.rect));
  }

  destroy() {
    for (const prop in this) {
      this[prop] = null;
    }
  }

}

function createResult(coords, rect) {
  return {
    rect,
    coords,
    delta: {
      x: 0,
      y: 0
    },
    rectDelta: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventProps: [],
    changed: true
  };
}

function getModifierList(interaction) {
  const actionOptions = interaction.interactable.options[interaction.prepared.name];
  const actionModifiers = actionOptions.modifiers;

  if (actionModifiers && actionModifiers.length) {
    return actionModifiers;
  }

  return ['snap', 'snapSize', 'snapEdges', 'restrict', 'restrictEdges', 'restrictSize'].map(type => {
    const options = actionOptions[type];
    return options && options.enabled && {
      options,
      methods: options._methods
    };
  }).filter(m => !!m);
}

function getRectOffset(rect, coords) {
  return rect ? {
    left: coords.x - rect.left,
    top: coords.y - rect.top,
    right: rect.right - coords.x,
    bottom: rect.bottom - coords.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}

function makeModifier(module, name) {
  const {
    defaults
  } = module;
  const methods = {
    start: module.start,
    set: module.set,
    beforeEnd: module.beforeEnd,
    stop: module.stop
  };

  const modifier = _options => {
    const options = _options || {};
    options.enabled = options.enabled !== false; // add missing defaults to options

    for (const prop in defaults) {
      if (!(prop in options)) {
        options[prop] = defaults[prop];
      }
    }

    const m = {
      options,
      methods,
      name,
      enable: () => {
        options.enabled = true;
        return m;
      },
      disable: () => {
        options.enabled = false;
        return m;
      }
    };
    return m;
  };

  if (name && typeof name === 'string') {
    // for backwrads compatibility
    modifier._defaults = defaults;
    modifier._methods = methods;
  }

  return modifier;
}
function addEventModifiers({
  iEvent,
  interaction
}) {
  const result = interaction.modification.result;

  if (result) {
    iEvent.modifiers = result.eventProps;
  }
}
const modifiersBase = {
  id: 'modifiers/base',
  before: ['actions'],
  install: scope => {
    scope.defaults.perAction.modifiers = [];
  },
  listeners: {
    'interactions:new': ({
      interaction
    }) => {
      interaction.modification = new Modification(interaction);
    },
    'interactions:before-action-start': arg => {
      const modification = arg.interaction.modification;
      modification.start(arg, arg.interaction.coords.start.page);
      arg.interaction.edges = modification.edges;
      modification.applyToInteraction(arg);
    },
    'interactions:before-action-move': arg => arg.interaction.modification.setAndApply(arg),
    'interactions:before-action-end': arg => arg.interaction.modification.beforeEnd(arg),
    'interactions:action-start': addEventModifiers,
    'interactions:action-move': addEventModifiers,
    'interactions:action-end': addEventModifiers,
    'interactions:after-action-start': arg => arg.interaction.modification.restoreInteractionCoords(arg),
    'interactions:after-action-move': arg => arg.interaction.modification.restoreInteractionCoords(arg),
    'interactions:stop': arg => arg.interaction.modification.stop(arg)
  }
};
var base = modifiersBase;

/**
 * @module modifiers/aspectRatio
 *
 * @description
 * This module forces elements to be resized with a specified dx/dy ratio.
 *
 * ```js
 * interact(target).resizable({
 *   modifiers: [
 *     interact.modifiers.snapSize({
 *       targets: [ interact.snappers.grid({ x: 20, y: 20 }) ],
 *     }),
 *     interact.aspectRatio({ ratio: 'preserve' }),
 *   ],
 * });
 * ```
 */
const aspectRatio = {
  start(arg) {
    const {
      state,
      rect,
      edges: originalEdges,
      pageCoords: coords
    } = arg;
    let {
      ratio
    } = state.options;
    const {
      equalDelta,
      modifiers
    } = state.options;

    if (ratio === 'preserve') {
      ratio = rect.width / rect.height;
    }

    state.startCoords = extend({}, coords);
    state.startRect = extend({}, rect);
    state.ratio = ratio;
    state.equalDelta = equalDelta;
    const linkedEdges = state.linkedEdges = {
      top: originalEdges.top || originalEdges.left && !originalEdges.bottom,
      left: originalEdges.left || originalEdges.top && !originalEdges.right,
      bottom: originalEdges.bottom || originalEdges.right && !originalEdges.top,
      right: originalEdges.right || originalEdges.bottom && !originalEdges.left
    };
    state.xIsPrimaryAxis = !!(originalEdges.left || originalEdges.right);

    if (state.equalDelta) {
      state.edgeSign = (linkedEdges.left ? 1 : -1) * (linkedEdges.top ? 1 : -1);
    } else {
      const negativeSecondaryEdge = state.xIsPrimaryAxis ? linkedEdges.top : linkedEdges.left;
      state.edgeSign = negativeSecondaryEdge ? -1 : 1;
    }

    extend(arg.edges, linkedEdges);
    if (!modifiers || !modifiers.length) return;
    const subModification = new Modification(arg.interaction);
    subModification.copyFrom(arg.interaction.modification);
    subModification.prepareStates(modifiers);
    state.subModification = subModification;
    subModification.startAll({ ...arg
    });
  },

  set(arg) {
    const {
      state,
      rect,
      coords
    } = arg;
    const initialCoords = extend({}, coords);
    const aspectMethod = state.equalDelta ? setEqualDelta : setRatio;
    aspectMethod(state, state.xIsPrimaryAxis, coords, rect);

    if (!state.subModification) {
      return null;
    }

    const correctedRect = extend({}, rect);
    addEdges(state.linkedEdges, correctedRect, {
      x: coords.x - initialCoords.x,
      y: coords.y - initialCoords.y
    });
    const result = state.subModification.setAll({ ...arg,
      rect: correctedRect,
      edges: state.linkedEdges,
      pageCoords: coords,
      prevCoords: coords,
      prevRect: correctedRect
    });
    const {
      delta
    } = result;

    if (result.changed) {
      const xIsCriticalAxis = Math.abs(delta.x) > Math.abs(delta.y); // do aspect modification again with critical edge axis as primary

      aspectMethod(state, xIsCriticalAxis, result.coords, result.rect);
      extend(coords, result.coords);
    }

    return result.eventProps;
  },

  defaults: {
    ratio: 'preserve',
    equalDelta: false,
    modifiers: [],
    enabled: false
  }
};

function setEqualDelta({
  startCoords,
  edgeSign
}, xIsPrimaryAxis, coords) {
  if (xIsPrimaryAxis) {
    coords.y = startCoords.y + (coords.x - startCoords.x) * edgeSign;
  } else {
    coords.x = startCoords.x + (coords.y - startCoords.y) * edgeSign;
  }
}

function setRatio({
  startRect,
  startCoords,
  ratio,
  edgeSign
}, xIsPrimaryAxis, coords, rect) {
  if (xIsPrimaryAxis) {
    const newHeight = rect.width / ratio;
    coords.y = startCoords.y + (newHeight - startRect.height) * edgeSign;
  } else {
    const newWidth = rect.height * ratio;
    coords.x = startCoords.x + (newWidth - startRect.width) * edgeSign;
  }
}

var aspectRatio$1 = makeModifier(aspectRatio, 'aspectRatio');

const noop = () => {};

noop._defaults = {};
var rubberband = noop;

function start$5({
  rect,
  startOffset,
  state,
  interaction,
  pageCoords
}) {
  const {
    options
  } = state;
  const {
    elementRect
  } = options;
  const offset = extend({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, options.offset || {});

  if (rect && elementRect) {
    const restriction = getRestrictionRect(options.restriction, interaction, pageCoords);

    if (restriction) {
      const widthDiff = restriction.right - restriction.left - rect.width;
      const heightDiff = restriction.bottom - restriction.top - rect.height;

      if (widthDiff < 0) {
        offset.left += widthDiff;
        offset.right += widthDiff;
      }

      if (heightDiff < 0) {
        offset.top += heightDiff;
        offset.bottom += heightDiff;
      }
    }

    offset.left += startOffset.left - rect.width * elementRect.left;
    offset.top += startOffset.top - rect.height * elementRect.top;
    offset.right += startOffset.right - rect.width * (1 - elementRect.right);
    offset.bottom += startOffset.bottom - rect.height * (1 - elementRect.bottom);
  }

  state.offset = offset;
}

function set$4({
  coords,
  interaction,
  state
}) {
  const {
    options,
    offset
  } = state;
  const restriction = getRestrictionRect(options.restriction, interaction, coords);
  if (!restriction) return;
  const rect = xywhToTlbr(restriction);
  coords.x = Math.max(Math.min(rect.right - offset.right, coords.x), rect.left + offset.left);
  coords.y = Math.max(Math.min(rect.bottom - offset.bottom, coords.y), rect.top + offset.top);
}

function getRestrictionRect(value, interaction, coords) {
  if (is.func(value)) {
    return resolveRectLike(value, interaction.interactable, interaction.element, [coords.x, coords.y, interaction]);
  } else {
    return resolveRectLike(value, interaction.interactable, interaction.element);
  }
}
const defaults$5 = {
  restriction: null,
  elementRect: null,
  offset: null,
  endOnly: false,
  enabled: false
};
const restrict = {
  start: start$5,
  set: set$4,
  defaults: defaults$5
};
var restrict$1 = makeModifier(restrict, 'restrict');

// This module adds the options.resize.restrictEdges setting which sets min and
const noInner = {
  top: +Infinity,
  left: +Infinity,
  bottom: -Infinity,
  right: -Infinity
};
const noOuter = {
  top: -Infinity,
  left: -Infinity,
  bottom: +Infinity,
  right: +Infinity
};

function start$4({
  interaction,
  startOffset,
  state
}) {
  const {
    options
  } = state;
  let offset;

  if (options) {
    const offsetRect = getRestrictionRect(options.offset, interaction, interaction.coords.start.page);
    offset = rectToXY(offsetRect);
  }

  offset = offset || {
    x: 0,
    y: 0
  };
  state.offset = {
    top: offset.y + startOffset.top,
    left: offset.x + startOffset.left,
    bottom: offset.y - startOffset.bottom,
    right: offset.x - startOffset.right
  };
}

function set$3({
  coords,
  edges,
  interaction,
  state
}) {
  const {
    offset,
    options
  } = state;

  if (!edges) {
    return;
  }

  const page = extend({}, coords);
  const inner = getRestrictionRect(options.inner, interaction, page) || {};
  const outer = getRestrictionRect(options.outer, interaction, page) || {};
  fixRect(inner, noInner);
  fixRect(outer, noOuter);

  if (edges.top) {
    coords.y = Math.min(Math.max(outer.top + offset.top, page.y), inner.top + offset.top);
  } else if (edges.bottom) {
    coords.y = Math.max(Math.min(outer.bottom + offset.bottom, page.y), inner.bottom + offset.bottom);
  }

  if (edges.left) {
    coords.x = Math.min(Math.max(outer.left + offset.left, page.x), inner.left + offset.left);
  } else if (edges.right) {
    coords.x = Math.max(Math.min(outer.right + offset.right, page.x), inner.right + offset.right);
  }
}

function fixRect(rect, defaults) {
  for (const edge of ['top', 'left', 'bottom', 'right']) {
    if (!(edge in rect)) {
      rect[edge] = defaults[edge];
    }
  }

  return rect;
}

const defaults$4 = {
  inner: null,
  outer: null,
  offset: null,
  endOnly: false,
  enabled: false
};
const restrictEdges = {
  noInner,
  noOuter,
  start: start$4,
  set: set$3,
  defaults: defaults$4
};
var restrictEdges$1 = makeModifier(restrictEdges, 'restrictEdges');

const defaults$3 = extend({
  get elementRect() {
    return {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    };
  },

  set elementRect(_) {}

}, restrict.defaults);
const restrictRect = {
  start: restrict.start,
  set: restrict.set,
  defaults: defaults$3
};
var restrictRect$1 = makeModifier(restrictRect, 'restrictRect');

const noMin = {
  width: -Infinity,
  height: -Infinity
};
const noMax = {
  width: +Infinity,
  height: +Infinity
};

function start$3(arg) {
  return restrictEdges.start(arg);
}

function set$2(arg) {
  const {
    interaction,
    state,
    rect,
    edges
  } = arg;
  const {
    options
  } = state;

  if (!edges) {
    return;
  }

  const minSize = tlbrToXywh(getRestrictionRect(options.min, interaction, arg.coords)) || noMin;
  const maxSize = tlbrToXywh(getRestrictionRect(options.max, interaction, arg.coords)) || noMax;
  state.options = {
    endOnly: options.endOnly,
    inner: extend({}, restrictEdges.noInner),
    outer: extend({}, restrictEdges.noOuter)
  };

  if (edges.top) {
    state.options.inner.top = rect.bottom - minSize.height;
    state.options.outer.top = rect.bottom - maxSize.height;
  } else if (edges.bottom) {
    state.options.inner.bottom = rect.top + minSize.height;
    state.options.outer.bottom = rect.top + maxSize.height;
  }

  if (edges.left) {
    state.options.inner.left = rect.right - minSize.width;
    state.options.outer.left = rect.right - maxSize.width;
  } else if (edges.right) {
    state.options.inner.right = rect.left + minSize.width;
    state.options.outer.right = rect.left + maxSize.width;
  }

  restrictEdges.set(arg);
  state.options = options;
}

const defaults$2 = {
  min: null,
  max: null,
  endOnly: false,
  enabled: false
};
const restrictSize = {
  start: start$3,
  set: set$2,
  defaults: defaults$2
};
var restrictSize$1 = makeModifier(restrictSize, 'restrictSize');

function start$2(arg) {
  const {
    interaction,
    interactable,
    element,
    rect,
    state,
    startOffset
  } = arg;
  const {
    options
  } = state;
  const origin = options.offsetWithOrigin ? getOrigin(arg) : {
    x: 0,
    y: 0
  };
  let snapOffset;

  if (options.offset === 'startCoords') {
    snapOffset = {
      x: interaction.coords.start.page.x,
      y: interaction.coords.start.page.y
    };
  } else {
    const offsetRect = resolveRectLike(options.offset, interactable, element, [interaction]);
    snapOffset = rectToXY(offsetRect) || {
      x: 0,
      y: 0
    };
    snapOffset.x += origin.x;
    snapOffset.y += origin.y;
  }

  const {
    relativePoints
  } = options;
  state.offsets = rect && relativePoints && relativePoints.length ? relativePoints.map((relativePoint, index) => ({
    index,
    relativePoint,
    x: startOffset.left - rect.width * relativePoint.x + snapOffset.x,
    y: startOffset.top - rect.height * relativePoint.y + snapOffset.y
  })) : [{
    index: 0,
    relativePoint: null,
    x: snapOffset.x,
    y: snapOffset.y
  }];
}

function set$1(arg) {
  const {
    interaction,
    coords,
    state
  } = arg;
  const {
    options,
    offsets
  } = state;
  const origin = getOriginXY(interaction.interactable, interaction.element, interaction.prepared.name);
  const page = extend({}, coords);
  const targets = [];

  if (!options.offsetWithOrigin) {
    page.x -= origin.x;
    page.y -= origin.y;
  }

  for (const offset of offsets) {
    const relativeX = page.x - offset.x;
    const relativeY = page.y - offset.y;

    for (let index = 0, len = options.targets.length; index < len; index++) {
      const snapTarget = options.targets[index];
      let target;

      if (is.func(snapTarget)) {
        target = snapTarget(relativeX, relativeY, interaction._proxy, offset, index);
      } else {
        target = snapTarget;
      }

      if (!target) {
        continue;
      }

      targets.push({
        x: (is.number(target.x) ? target.x : relativeX) + offset.x,
        y: (is.number(target.y) ? target.y : relativeY) + offset.y,
        range: is.number(target.range) ? target.range : options.range,
        source: snapTarget,
        index,
        offset
      });
    }
  }

  const closest = {
    target: null,
    inRange: false,
    distance: 0,
    range: 0,
    delta: {
      x: 0,
      y: 0
    }
  };

  for (const target of targets) {
    const range = target.range;
    const dx = target.x - page.x;
    const dy = target.y - page.y;
    const distance = hypot(dx, dy);
    let inRange = distance <= range; // Infinite targets count as being out of range
    // compared to non infinite ones that are in range

    if (range === Infinity && closest.inRange && closest.range !== Infinity) {
      inRange = false;
    }

    if (!closest.target || (inRange ? // is the closest target in range?
    closest.inRange && range !== Infinity ? // the pointer is relatively deeper in this target
    distance / range < closest.distance / closest.range : // this target has Infinite range and the closest doesn't
    range === Infinity && closest.range !== Infinity || // OR this target is closer that the previous closest
    distance < closest.distance : // The other is not in range and the pointer is closer to this target
    !closest.inRange && distance < closest.distance)) {
      closest.target = target;
      closest.distance = distance;
      closest.range = range;
      closest.inRange = inRange;
      closest.delta.x = dx;
      closest.delta.y = dy;
    }
  }

  if (closest.inRange) {
    coords.x = closest.target.x;
    coords.y = closest.target.y;
  }

  state.closest = closest;
  return closest;
}

function getOrigin(arg) {
  const {
    element
  } = arg.interaction;
  const optionsOrigin = rectToXY(resolveRectLike(arg.state.options.origin, null, null, [element]));
  const origin = optionsOrigin || getOriginXY(arg.interactable, element, arg.interaction.prepared.name);
  return origin;
}

const defaults$1 = {
  range: Infinity,
  targets: null,
  offset: null,
  offsetWithOrigin: true,
  origin: null,
  relativePoints: null,
  endOnly: false,
  enabled: false
};
const snap = {
  start: start$2,
  set: set$1,
  defaults: defaults$1
};
var snap$1 = makeModifier(snap, 'snap');

// This module allows snapping of the size of targets during resize

function start$1(arg) {
  const {
    state,
    edges
  } = arg;
  const {
    options
  } = state;

  if (!edges) {
    return null;
  }

  arg.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: edges.left ? 0 : 1,
        y: edges.top ? 0 : 1
      }],
      offset: options.offset || 'self',
      origin: {
        x: 0,
        y: 0
      },
      range: options.range
    }
  };
  state.targetFields = state.targetFields || [['width', 'height'], ['x', 'y']];
  snap.start(arg);
  state.offsets = arg.state.offsets;
  arg.state = state;
}

function set(arg) {
  const {
    interaction,
    state,
    coords
  } = arg;
  const {
    options,
    offsets
  } = state;
  const relative = {
    x: coords.x - offsets[0].x,
    y: coords.y - offsets[0].y
  };
  state.options = extend({}, options);
  state.options.targets = [];

  for (const snapTarget of options.targets || []) {
    let target;

    if (is.func(snapTarget)) {
      target = snapTarget(relative.x, relative.y, interaction);
    } else {
      target = snapTarget;
    }

    if (!target) {
      continue;
    }

    for (const [xField, yField] of state.targetFields) {
      if (xField in target || yField in target) {
        target.x = target[xField];
        target.y = target[yField];
        break;
      }
    }

    state.options.targets.push(target);
  }

  const returnValue = snap.set(arg);
  state.options = options;
  return returnValue;
}

const defaults = {
  range: Infinity,
  targets: null,
  offset: null,
  endOnly: false,
  enabled: false
};
const snapSize = {
  start: start$1,
  set,
  defaults
};
var snapSize$1 = makeModifier(snapSize, 'snapSize');

/**
 * @module modifiers/snapEdges
 *
 * @description
 * WOW> This module allows snapping of the edges of targets during resize
 * interactions.
 *
 * ```js
 * interact(target).resizable({
 *   snapEdges: {
 *     targets: [interact.snappers.grid({ x: 100, y: 50 })],
 *   },
 * })
 *
 * interact(target).resizable({
 *   snapEdges: {
 *     targets: [
 *       interact.snappers.grid({
 *        top: 50,
 *        left: 50,
 *        bottom: 100,
 *        right: 100,
 *       }),
 *     ],
 *   },
 * })
 * ```
 */

function start(arg) {
  const {
    edges
  } = arg;

  if (!edges) {
    return null;
  }

  arg.state.targetFields = arg.state.targetFields || [[edges.left ? 'left' : 'right', edges.top ? 'top' : 'bottom']];
  return snapSize.start(arg);
}

const snapEdges = {
  start,
  set: snapSize.set,
  defaults: extend(clone(snapSize.defaults), {
    targets: null,
    range: null,
    offset: {
      x: 0,
      y: 0
    }
  })
};
var snapEdges$1 = makeModifier(snapEdges, 'snapEdges');

/* eslint-disable node/no-extraneous-import, import/no-unresolved */
var all = {
  aspectRatio: aspectRatio$1,
  restrictEdges: restrictEdges$1,
  restrict: restrict$1,
  restrictRect: restrictRect$1,
  restrictSize: restrictSize$1,
  snapEdges: snapEdges$1,
  snap: snap$1,
  snapSize: snapSize$1,
  spring: rubberband,
  avoid: rubberband,
  transform: rubberband,
  rubberband
};

const modifiers = {
  id: 'modifiers',

  install(scope) {
    const {
      interactStatic: interact
    } = scope;
    scope.usePlugin(base);
    scope.usePlugin(snappers);
    interact.modifiers = all; // for backwrads compatibility

    for (const type in all) {
      const {
        _defaults,
        _methods
      } = all[type];
      _defaults._methods = _methods;
      scope.defaults.perAction[type] = _defaults;
    }
  }

};
var plugin = modifiers;

/* eslint-disable import/order, no-console, eol-last */
interact$1.use(plugin);

class Operation {
}
Operation.size = {
    xs: 1,
    sm: 1.5,
    base: 2,
    lg: 2.5,
    xl: 3,
};
function SizeableMixin(Base) {
    class SizeableMixinClass extends Base {
        constructor() {
            super(...arguments);
            this.size = "";
        }
        get sizeableStyle() {
            return html `<style>
        :host {
          position: relative;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
        }
        :host([data-size="xs"]) {
          height: ${Operation.size.xs}rem;
          width: ${Operation.size.xs}rem;
        }
        :host([data-size="sm"]) {
          height: ${Operation.size.sm}rem;
          width: ${Operation.size.sm}rem;
        }
        :host,
        :host([data-size="base"]) {
          height: ${Operation.size.base}rem;
          width: ${Operation.size.base}rem;
        }
        :host([data-size="lg"]) {
          height: ${Operation.size.lg}rem;
          width: ${Operation.size.lg}rem;
        }
        :host([data-size="xl"]) {
          height: ${Operation.size.xl}rem;
          width: ${Operation.size.xl}rem;
        }
        :host([data-wire-count="1"]),
        :host([data-wire-count="2"]) {
          height: ${Operation.size.xl}rem;
          width: ${Operation.size.xl}rem;
        }
        :host([data-wire-count="3"]) {
          height: ${Operation.size.lg}rem;
          width: ${Operation.size.lg}rem;
        }
        :host([data-wire-count="4"]) {
          height: ${Operation.size.base}rem;
          width: ${Operation.size.base}rem;
        }
        :host([data-wire-count="5"]),
        :host([data-wire-count="6"]) {
          height: ${Operation.size.sm}rem;
          width: ${Operation.size.sm}rem;
        }
        :host([data-wire-count="7"]),
        :host([data-wire-count="8"]),
        :host([data-wire-count="9"]),
        :host([data-wire-count="10"]) {
          height: ${Operation.size.xs}rem;
          width: ${Operation.size.xs}rem;
        }
        @media (min-width: 768px) {
          :host,
          :host([data-wire-count="1"]),
          :host([data-wire-count="2"]),
          :host([data-wire-count="3"]),
          :host([data-wire-count="4"]),
          :host([data-wire-count="5"]),
          :host([data-wire-count="6"]),
          :host([data-wire-count="7"]),
          :host([data-wire-count="8"]),
          :host([data-wire-count="9"]),
          :host([data-wire-count="10"]) {
            height: ${Operation.size.base}rem;
            width: ${Operation.size.base}rem;
          }
        }
      </style>`;
        }
    }
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], SizeableMixinClass.prototype, "size", void 0);
    return SizeableMixinClass;
}

class IGate {
    serialize() {
        return { type: I_GATE_OPERATION_TYPE };
    }
    toJson() {
        return I_GATE_OPERATION_TYPE;
    }
}
const wires = html `<svg
  id="wires"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <line
    id="wire-input"
    x1="0"
    y1="50"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-output"
    x1="50"
    y1="50"
    x2="100"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-top"
    x1="50"
    y1="0"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-bottom"
    x1="50"
    y1="100"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>`;
let CircuitDropzoneElement = class CircuitDropzoneElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.size = "";
        this.inputWireQuantum = false;
        this.outputWireQuantum = false;
        this.wireTop = false;
        this.wireBottom = false;
        this.occupied = false;
        this.draggableTagName = "";
        this.shadow = false;
        this.childrenLoaded = true;
        this.wireCount = 0;
    }
    get draggableElement() {
        const el = this.children[0];
        if (el === undefined)
            return null;
        if (!el.snapped)
            return null;
        return el;
    }
    get circuitStep() {
        const el = this.parentElement;
        if (el !== null && el.nodeName === "CIRCUIT-STEP") {
            return el;
        }
        return null;
    }
    set wireQuantum(value) {
        this.inputWireQuantum = value;
        this.outputWireQuantum = value;
    }
    get snapTarget() {
        const rect = this.getBoundingClientRect();
        return {
            x: window.pageXOffset + rect.left + this.clientWidth / 2,
            y: window.pageYOffset + rect.top + this.clientHeight / 2,
        };
    }
    index() {
        const circuitStep = this.closest("circuit-step");
        if (circuitStep === null)
            return null;
        return circuitStep.dropzoneIndex(this);
    }
    prev() {
        const index = this.index();
        if (index === null)
            return null;
        if (this.circuitStep === null)
            return null;
        const prevStep = this.circuitStep.prev();
        if (prevStep === null)
            return null;
        return prevStep.dropzone(index);
    }
    next() {
        const index = this.index();
        if (index === null)
            return null;
        if (this.circuitStep === null)
            return null;
        const nextStep = this.circuitStep.next();
        if (nextStep === null)
            return null;
        return nextStep.dropzone(index);
    }
    assign(operation) {
        this.append(operation);
        this.occupied = true;
    }
    toJson() {
        const operation = this.draggableElement;
        if (operation === null || operation === undefined) {
            return "1";
        }
        else {
            return operation.toJson();
        }
    }
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.update();
        this.slotEl.addEventListener("slotchange", this.handleSlotChange.bind(this));
        this.initDropzone();
        this.addEventListener("dragAndDroppable.grab", this.enableDrop);
        this.addEventListener("dragAndDroppable.grab", this.dispatchDropzoneGrabEvent);
        this.addEventListener("dragAndDroppable.enddragging", this.dispatchDropzoneDroppedEvent);
        this.addEventListener("dragAndDroppable.snap", this.snapDraggable);
        this.addEventListener("dragAndDroppable.unsnap", this.unsnapDraggable);
        this.addEventListener("dragAndDroppable.trash", this.clear);
    }
    clear(event) {
        const operationEl = event.detail.element;
        this.removeChild(operationEl);
    }
    dispatchDropzoneDroppedEvent() {
        this.dispatchEvent(new CustomEvent("dropzone.drop", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        if (this.childElementCount === 0)
            return;
        if (name === "data-wire-count" && newValue !== null) {
            const operation = this.children[0];
            operation.setAttribute("data-wire-count", newValue);
        }
    }
    update() {
        render$1(html `<style>
          :host([data-size="xs"]) {
            height: 1.5rem;
            width: 1rem;
          }
          :host([data-size="sm"]) {
            height: 2.25rem;
            width: 1.5rem;
          }
          :host,
          :host([data-size="base"]) {
            height: 3rem;
            width: 2rem;
          }
          :host([data-size="lg"]) {
            height: 3.75rem;
            width: 2.5rem;
          }
          :host([data-size="xl"]) {
            height: 4.5rem;
            width: 3rem;
          }
          @media (min-width: 768px) {
            :host([data-size="xs"]) {
              height: 1rem;
              width: 1.5rem;
            }
            :host([data-size="sm"]) {
              height: 1.5rem;
              width: 2.25rem;
            }
            :host,
            :host([data-size="base"]) {
              height: 2rem;
              width: 3rem;
            }
            :host([data-size="lg"]) {
              height: 2.5rem;
              width: 3.75rem;
            }
            :host([data-size="xl"]) {
              height: 3rem;
              width: 4.5rem;
            }
          }
          :host([data-wire-count="1"]),
          :host([data-wire-count="2"]) {
            height: ${Operation.size.xl * 1.5}rem;
            width: ${Operation.size.xl}rem;
          }
          :host([data-wire-count="3"]) {
            height: ${Operation.size.lg * 1.5}rem;
            width: ${Operation.size.lg}rem;
          }
          :host([data-wire-count="4"]) {
            height: ${Operation.size.base * 1.5}rem;
            width: ${Operation.size.base}rem;
          }
          :host([data-wire-count="5"]),
          :host([data-wire-count="6"]) {
            height: ${Operation.size.sm * 1.5}rem;
            width: ${Operation.size.sm}rem;
          }
          :host([data-wire-count="7"]),
          :host([data-wire-count="8"]),
          :host([data-wire-count="9"]),
          :host([data-wire-count="10"]) {
            height: ${Operation.size.xs * 1.5}rem;
            width: ${Operation.size.xs}rem;
          }
          @media (min-width: 768px) {
            :host([data-wire-count="1"]),
            :host([data-wire-count="2"]),
            :host([data-wire-count="3"]),
            :host([data-wire-count="4"]),
            :host([data-wire-count="5"]),
            :host([data-wire-count="6"]),
            :host([data-wire-count="7"]),
            :host([data-wire-count="8"]),
            :host([data-wire-count="9"]),
            :host([data-wire-count="10"]) {
              height: ${Operation.size.base}rem;
              width: ${Operation.size.base * 1.5}rem;
            }
          }
          :host([data-wire-top]) #wire-top {
            display: block;
            transform-origin: top;
            transform: translateY(-25%) scaleY(1.5);
          }
          :host([data-wire-bottom]) #wire-bottom {
            display: block;
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }
          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }
          #wires {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            top: 0px;
            height: calc(100%);
            width: calc(100%);
            overflow: visible;
            transform: rotate(90deg);
            transform-origin: center;
          }
          :host([data-shadow]) #wires {
            display: none;
          }
          @media (min-width: 768px) {
            #wires {
              transform: rotate(0);
            }
          }
          ::slotted(*) {
            position: absolute;
            z-index: 10;
          }
          #wire-input,
          #wire-output {
            color: var(--colors-wolf, #777777);
          }
          :host(:not([data-input-wire-quantum])) #wire-input,
          :host([data-input-wire-quantum="false"]) #wire-input {
            color: var(--colors-swan, #e5e5e5);
          }
          :host(:not([data-output-wire-quantum])) #wire-output,
          :host([data-output-wire-quantum="false"]) #wire-output {
            color: var(--colors-swan, #e5e5e5);
          }
          #wire-input {
            transform: translateX(-25%) scaleX(1.5);
            transform-origin: left;
          }
          #wire-output {
            transform: translateX(25%) scaleX(1.5);
            transform-origin: right;
          }
          @media (min-width: 768px) {
            #wire-input,
            #wire-output {
              transform: none;
            }
          }
          :host([data-draggable-tag-name="write-gate"][data-occupied])
            #wires
            > #wire-input,
          :host([data-draggable-tag-name="measurement-gate"][data-occupied])
            #wires
            > #wire-input {
            transform: scaleX(0.75) translateX(-33.3%);
          }
          @media (min-width: 768px) {
            :host([data-draggable-tag-name="write-gate"][data-occupied])
              #wires
              > #wire-input,
            :host([data-draggable-tag-name="measurement-gate"][data-occupied])
              #wires
              > #wire-input {
              transform: scaleX(0.33) translateX(0);
            }
          }
          :host([data-draggable-tag-name="write-gate"][data-occupied])
            #wires
            > #wire-output,
          :host([data-draggable-tag-name="measurement-gate"][data-occupied])
            #wires
            > #wire-output {
            transform: scaleX(0.75) translateX(33.3%);
          }
          @media (min-width: 768px) {
            :host([data-draggable-tag-name="write-gate"][data-occupied])
              #wires
              > #wire-output,
            :host([data-draggable-tag-name="measurement-gate"][data-occupied])
              #wires
              > #wire-output {
              transform: scaleX(0.33) translateX(0);
            }
          }
          #wire-top,
          #wire-bottom {
            color: var(--colors-gate, #43c000);
            stroke-width: 4;
            display: none;
          }
        </style>

        <div id="body" data-target="circuit-dropzone.body">
          <slot data-target="circuit-dropzone.slotEl"></slot>
          ${wires}
        </div>`, this.shadowRoot);
        if (this.childElementCount === 1) {
            const operation = this.children[0];
            this.childrenLoaded = false;
            this.occupied = true;
            this.draggableTagName = operation.tagName.toLowerCase();
        }
        else if (this.childElementCount > 1) {
            throw new Error("A dropzone cannot hold multiple operations.");
        }
    }
    handleSlotChange() {
        if (this.childElementCount > 1) {
            throw new Error("A dropzone cannot hold multiple operations.");
        }
        else if (this.childElementCount === 0) {
            this.draggableTagName = "";
            this.occupied = false;
            this.enableDrop();
            return;
        }
        const operation = this.children[0];
        const nodeName = operation.nodeName;
        operation.setAttribute("data-wire-count", this.wireCount.toString());
        if (this.size !== "") {
            operation.setAttribute("data-size", this.size);
        }
        this.draggableTagName = nodeName.toLowerCase();
        this.occupied = true;
        this.disableDrop();
        if (this.childrenLoaded) {
            this.dispatchEvent(new CustomEvent("dropzone.snap", {
                detail: { element: this },
                bubbles: true,
            }));
        }
        else {
            this.childrenLoaded = true;
        }
        this.dispatchEvent(new CustomEvent("dragAndDroppable.load", {
            detail: { element: operation },
            bubbles: true,
        }));
    }
    dispatchDropzoneGrabEvent() {
        this.dispatchEvent(new CustomEvent("dropzone.grab", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    initDropzone() {
        interact$1(this).dropzone({
            accept: "[data-drag-and-drop]",
            overlap: "center",
        });
    }
    enableDrop() {
        interact$1(this).dropzone(true);
    }
    disableDrop() {
        interact$1(this).dropzone(false);
    }
    snapDraggable(event) {
        const draggable = event.detail.element;
        this.append(draggable);
        draggable.moveTo(0, 0);
    }
    unsnapDraggable() {
        this.draggableTagName = "";
        this.occupied = false;
        this.dispatchEvent(new CustomEvent("dropzone.unsnap", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    updateWires() {
        const draggableTagName = this.draggableTagName;
        const prevDropzone = this.prev();
        if (draggableTagName === "write-gate") {
            if (prevDropzone === null) {
                this.inputWireQuantum = false;
            }
            else {
                this.inputWireQuantum = prevDropzone.outputWireQuantum;
            }
            this.outputWireQuantum = true;
        }
        else if (draggableTagName === "measurement-gate") {
            if (prevDropzone === null) {
                this.inputWireQuantum = false;
            }
            else {
                this.inputWireQuantum = prevDropzone.outputWireQuantum;
            }
            this.outputWireQuantum = false;
        }
        else {
            if (prevDropzone === null) {
                this.inputWireQuantum = false;
                this.outputWireQuantum = false;
            }
            else {
                this.inputWireQuantum = prevDropzone.outputWireQuantum;
                this.outputWireQuantum = prevDropzone.outputWireQuantum;
            }
        }
    }
    remove() {
        var _a;
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this);
    }
    serialize() {
        if (this.draggableElement === null) {
            return new IGate().serialize();
        }
        return this.draggableElement.serialize();
    }
};
__decorate([
    target,
    __metadata("design:type", HTMLSlotElement)
], CircuitDropzoneElement.prototype, "slotEl", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "size", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "inputWireQuantum", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "outputWireQuantum", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "wireTop", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "wireBottom", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "occupied", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "draggableTagName", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "shadow", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "childrenLoaded", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitDropzoneElement.prototype, "wireCount", void 0);
CircuitDropzoneElement = __decorate([
    controller
], CircuitDropzoneElement);

let PaletteDropzoneElement = class PaletteDropzoneElement extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.update();
        this.addEventListener("dragAndDroppable.trash", this.removeOperation);
    }
    update() {
        render$1(html `<style>
          :host {
            position: relative;
            height: ${Operation.size.base}rem;
            width: ${Operation.size.base}rem;
          }

          ::slotted(*) {
            position: absolute;
          }
        </style>

        <div data-action="dragAndDroppable.grab:palette-dropzone#newOperation">
          <slot></slot>
        </div>`, this.shadowRoot);
    }
    newOperation(event) {
        const operation = event.target;
        const newOperation = operation.cloneNode(true);
        operation.disableHelp();
        // ???: newOperation.grabbed = false
        newOperation.removeAttribute("data-grabbed");
        this.prepend(newOperation);
    }
    removeOperation(event) {
        const operationEl = event.detail.element;
        Util.notNull(operationEl);
        this.removeChild(operationEl);
        event.stopPropagation();
    }
};
PaletteDropzoneElement = __decorate([
    controller
], PaletteDropzoneElement);

const cssStyle = html `<style>
  :host([data-drag-and-drop]) {
    touch-action: none;
  }

  :host([data-grabbed]) {
    z-index: 50 !important;
  }

  :host([data-grabbed]) #body {
    background-color: var(--colors-snow, #ffffff);
  }

  :host(:not([data-snapped])[data-grabbed]) #wires {
    display: none;
  }

  #body {
    height: 100%;
    width: 100%;
    border-radius: 0.25rem;
  }

  @media (min-width: 768px) {
    :host([data-drag-and-drop]) #body::after {
      position: absolute;
      height: 100%;
      width: 100%;
      border-color: var(--colors-cardinal, #ff4b4b);
      border-radius: 0.25rem;
      border-style: solid;
      border-width: 2px;
      box-sizing: border-box;
      opacity: 0;
      content: "";
    }

    :host([data-drag-and-drop][data-hoverable]) #body:hover::after,
    :host([data-drag-and-drop][data-grabbed]) #body::after {
      opacity: 100;
    }
  }
</style>`;
const isPaletteDropzone = (arg) => arg instanceof PaletteDropzoneElement;
const isCircuitDropzone = (arg) => arg instanceof CircuitDropzoneElement;
function DragAndDroppableMixin(Base) {
    class DragAndDroppableMixinClass extends Base {
        constructor() {
            super(...arguments);
            this.dragAndDrop = false;
            this.grabbed = false;
            this.dragging = false;
            this.snapped = true;
            this.positionX = 0;
            this.positionY = 0;
            this.hoverable = true;
        }
        get dropzone() {
            return this.parentElement;
        }
        get dragAndDroppableStyle() {
            return cssStyle;
        }
        initDragAndDrop() {
            if (this.isPaletteDraggable) {
                this.dragAndDrop = true;
                this.snapped = false;
            }
            this.snappedDropzone = this.dropzone;
            if (!this.dragAndDrop)
                return;
            if (interact$1.isSet(this))
                return;
            interact$1(this).styleCursor(false);
            interact$1(this).draggable({
                onstart: this.startDragging.bind(this),
                onmove: this.dragMove.bind(this),
                onend: this.endDragging.bind(this),
            });
            this.addEventListener("mouseenter", this.dispatchMouseenterEvent);
            this.addEventListener("mouseleave", this.dispatchMouseleaveEvent);
            this.addEventListener("mousedown", this.grab);
            this.addEventListener("mouseup", this.unGrab);
        }
        dispatchMouseenterEvent() {
            this.dispatchEvent(new CustomEvent("dragAndDroppable.mouseenter", {
                detail: { element: this },
                bubbles: true,
            }));
        }
        dispatchMouseleaveEvent() {
            this.dispatchEvent(new CustomEvent("dragAndDroppable.mouseleave", {
                detail: { element: this },
                bubbles: true,
            }));
        }
        startDragging() {
            if (DisplaySize.isMobile())
                return;
            this.dragging = true;
        }
        dragMove(event) {
            if (DisplaySize.isMobile())
                return;
            this.move(event.dx, event.dy);
        }
        endDragging(event) {
            if (DisplaySize.isMobile())
                return;
            if (!this.snapped) {
                const dropzone = this.dropzone;
                Util.notNull(dropzone);
                this.trash();
                dropzone.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging", {
                    detail: { x: event.clientX, y: event.clientY },
                    bubbles: true,
                }));
                return;
            }
            this.dragging = false;
            this.grabbed = false;
            this.moveTo(0, 0);
            this.dispatchEvent(new CustomEvent("dragAndDroppable.enddragging", {
                detail: { x: event.clientX, y: event.clientY },
                bubbles: true,
            }));
        }
        trash() {
            interact$1(this).unset();
            this.dispatchEvent(new CustomEvent("dragAndDroppable.trash", {
                detail: { element: this },
                bubbles: true,
            }));
        }
        // Mouse event handlers
        grab(event) {
            if (DisplaySize.isMobile())
                return;
            this.grabbed = true;
            this.dispatchEvent(new CustomEvent("dragAndDroppable.grab", {
                detail: { element: this },
                bubbles: true,
            }));
            if (isPaletteDropzone(this.dropzone)) {
                this.moveToGrabbedPosition(event.offsetX, event.offsetY);
            }
        }
        unGrab(event) {
            if (DisplaySize.isMobile())
                return;
            if (!this.snapped) {
                this.trash();
                return;
            }
            this.grabbed = false;
            this.moveTo(0, 0);
            this.dispatchEvent(new CustomEvent("dragAndDroppable.ungrab", {
                detail: { element: this, x: event.clientX, y: event.clientY },
                bubbles: true,
            }));
        }
        setSnapTargets(dropzones, wireCount) {
            const myDropzone = this.dropzone;
            const freeDropzones = dropzones.filter((each) => !each.occupied);
            const snapTargets = [];
            this.snapTargets = {};
            Util.notNull(myDropzone);
            if (isCircuitDropzone(myDropzone))
                freeDropzones.push(myDropzone);
            for (const [i, each] of Object.entries(dropzones)) {
                const snapTarget = each.snapTarget;
                const x = snapTarget.x;
                const y = snapTarget.y;
                const leftX = x - this.snapRange() * 0.75;
                const rightX = x + this.snapRange() * 0.75;
                const wireIndex = parseInt(i) % wireCount;
                if (parseInt(i) < wireCount) {
                    snapTargets.push({ x: leftX, y });
                    if (this.snapTargets[leftX] === undefined)
                        this.snapTargets[leftX] = {};
                    if (this.snapTargets[leftX][y] === undefined)
                        this.snapTargets[leftX][y] = {
                            dropzone: null,
                            stepIndex: -1,
                            wireIndex,
                        };
                }
                snapTargets.push({ x: rightX, y });
                if (this.snapTargets[rightX] === undefined)
                    this.snapTargets[rightX] = {};
                if (this.snapTargets[rightX][y] === undefined)
                    this.snapTargets[rightX][y] = {
                        dropzone: null,
                        stepIndex: Math.floor(parseInt(i) / wireCount),
                        wireIndex,
                    };
                if (!each.occupied || each === myDropzone) {
                    snapTargets.push(snapTarget);
                }
                if (this.snapTargets[x] === undefined)
                    this.snapTargets[x] = {};
                if (this.snapTargets[x][y] === undefined)
                    this.snapTargets[x][y] = {
                        dropzone: each,
                        stepIndex: null,
                        wireIndex,
                    };
            }
            interact$1(this).draggable({
                modifiers: [
                    interact$1.modifiers.snap({
                        targets: snapTargets,
                        range: this.snapRange(),
                        relativePoints: [{ x: 0.5, y: 0.5 }],
                    }),
                ],
                listeners: {
                    move: this.moveEventListener.bind(this),
                },
            });
        }
        updateSnapTargets(newDropzones) {
            const firstDropzone = newDropzones[0];
            Util.notNull(firstDropzone);
            const baseX = firstDropzone.snapTarget.x;
            for (const [x, yv] of Object.entries(this.snapTargets)) {
                if (parseInt(x) <= baseX)
                    continue;
                for (const y in yv) {
                    const snapTarget = yv[y];
                    if (snapTarget.stepIndex === null)
                        continue;
                    snapTarget.stepIndex += 1;
                }
            }
            for (const [i, each] of Object.entries(newDropzones)) {
                const snapTarget = each.snapTarget;
                const x = snapTarget.x;
                const y = snapTarget.y;
                this.snapTargets[x][y] = {
                    dropzone: each,
                    stepIndex: null,
                    wireIndex: parseInt(i),
                };
            }
        }
        moveEventListener(e) {
            const snapModifier = e.modifiers[0];
            if (snapModifier.inRange) {
                const snapTarget = snapModifier.target.source;
                let dropzone = this.snapTargets[snapTarget.x][snapTarget.y].dropzone;
                if (this.snappedDropzone) {
                    this.snapped = false;
                    this.snappedDropzone.dispatchEvent(new Event("dragAndDroppable.unsnap", { bubbles: true }));
                }
                if (dropzone === null) {
                    const snapTargetInfo = this.snapTargets[snapTarget.x][snapTarget.y];
                    this.dispatchEvent(new CustomEvent("dragAndDroppable.snapToNewDropzone", {
                        detail: {
                            element: this,
                            stepIndex: snapTargetInfo.stepIndex,
                            wireIndex: snapTargetInfo.wireIndex,
                        },
                        bubbles: true,
                    }));
                    Util.notNull(this.dropzone);
                    dropzone = this.dropzone;
                }
                this.snappedDropzone = dropzone;
                this.snapped = true;
                dropzone.dispatchEvent(new CustomEvent("dragAndDroppable.snap", {
                    detail: { element: this },
                    bubbles: true,
                }));
            }
            else {
                if (this.isLeavingCircuit) {
                    this.snapped = false;
                    this.dispatchEvent(new Event("dragAndDroppable.unsnap", { bubbles: true }));
                    this.dispatchEvent(new Event("dragAndDroppable.leave", { bubbles: true }));
                }
                this.snapped = false;
            }
        }
        get isLeavingCircuit() {
            return this.snapped && isCircuitDropzone(this.parentElement);
        }
        get isPaletteDraggable() {
            return isPaletteDropzone(this.dropzone);
        }
        snapRange() {
            return this.clientWidth;
        }
        moveToGrabbedPosition(offsetX, offsetY) {
            const dx = offsetX - this.clientWidth / 2;
            const dy = offsetY - this.clientHeight / 2;
            this.move(dx, dy);
        }
        // move element
        move(dx, dy) {
            const x = this.positionX + dx;
            const y = this.positionY + dy;
            this.moveTo(x, y);
        }
        moveTo(x, y) {
            this.positionX = x;
            this.positionY = y;
            this.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DragAndDroppableMixinClass.prototype, "dragAndDrop", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DragAndDroppableMixinClass.prototype, "grabbed", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DragAndDroppableMixinClass.prototype, "dragging", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DragAndDroppableMixinClass.prototype, "snapped", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DragAndDroppableMixinClass.prototype, "positionX", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DragAndDroppableMixinClass.prototype, "positionY", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], DragAndDroppableMixinClass.prototype, "hoverable", void 0);
    return DragAndDroppableMixinClass;
}

function HelpableMixin(Base) {
    class HelpableMixinClass extends Base {
        constructor() {
            super(...arguments);
            this.help = true;
        }
        showHelp() {
            if (!this.help)
                return;
            const popupInstance = this._tippy;
            if (popupInstance)
                return;
            const content = this.innerHTML.trim();
            if (content === "")
                return;
            const popup = tippy(this, {
                allowHTML: true,
                animation: false,
                arrow: ROUND_ARROW + ROUND_ARROW,
                delay: 0,
                placement: "right",
                theme: "qni",
                onShow(instance) {
                    instance.setContent(content);
                },
            });
            popup.show();
        }
        disableHelp() {
            const popupInstance = this._tippy;
            this.help = false;
            popupInstance === null || popupInstance === void 0 ? void 0 : popupInstance.destroy();
            this.innerHTML = "";
        }
    }
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], HelpableMixinClass.prototype, "help", void 0);
    return HelpableMixinClass;
}

function IconableMixin(Base) {
    class IconableMixinClass extends Base {
        constructor() {
            super(...arguments);
            this.iconType = "";
        }
        get iconSvg() {
            throw new Error("Not implemented yet");
        }
        get iconStyle() {
            const baseIconStyle = html `<style>
        #icon {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
          stroke: currentColor;
        }
      </style>`;
            let borderRadius;
            if (this.iconType === "square") {
                borderRadius = "0.25rem";
            }
            else if (this.iconType === "circle") {
                borderRadius = "9999px";
            }
            else if (this.iconType === "transparent") {
                return html `${baseIconStyle}

          <style>
            #icon {
              color: var(--colors-gate, #43c000);
            }

            :host([data-disabled]) #icon {
              color: var(--colors-eel, #4b4b4b);
            }
          </style>`;
            }
            else {
                throw new Error("iconType not set");
            }
            return html `${baseIconStyle}

        <style>
          #icon {
            border-radius: ${borderRadius};
            color: var(--colors-snow, #ffffff);
            background-color: var(--colors-gate, #43c000);
          }

          :host([data-disabled]) #icon {
            background-color: var(--colors-eel, #4b4b4b);
          }
        </style>`;
        }
    }
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], IconableMixinClass.prototype, "iconType", void 0);
    return IconableMixinClass;
}

function IfableMixin(Base) {
    class IfableMixinClass extends Base {
        constructor() {
            super(...arguments);
            this.if = "";
        }
    }
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], IfableMixinClass.prototype, "if", void 0);
    return IfableMixinClass;
}

function JsonableMixin(Base) {
    class JsonableMixinClass extends Base {
        toJson() {
            throw new Error("Not implemented yet");
        }
    }
    return JsonableMixinClass;
}

function LabelableMixin(Base) {
    class LabelableMixinClass extends Base {
        get labelStyle() {
            return html `<style>
        :host::before {
          display: none;
          position: absolute;
          color: var(--colors-wolf, #777777);
          background-color: transparent;
          letter-spacing: -0.05em;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          white-space: nowrap;
          z-index: 10;
          writing-mode: vertical-lr;
        }
        :host([data-snapped])::before {
          display: block;
        }
        /* Font size */
        :host::before {
          font-size: 0.75rem;
          line-height: 0.75rem;
        }
        :host([data-wire-count="1"])::before,
        :host([data-wire-count="2"])::before {
          font-size: 0.875rem;
          line-height: 0.875rem;
        }
        :host([data-wire-count="7"])::before,
        :host([data-wire-count="8"])::before,
        :host([data-wire-count="9"])::before,
        :host([data-wire-count="10"])::before {
          font-size: 0.5rem;
          line-height: 0.5rem;
        }
        @media (min-width: 768px) {
          :host::before {
            font-size: 0.75rem !important;
            line-height: 0.75rem !important;
          }
        }
        /* Ifable */
        :host([data-if]:not([data-if=""]))::before {
          content: "if " attr(data-if);
        }
        @media (min-width: 768px) {
          :host([data-if]:not([data-if=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        /* Phase gate */
        :host([data-phi]:not([data-phi=""]))::before {
          content: attr(data-phi) "";
        }
        :host([data-phi][data-if]:not([data-phi=""]):not([data-if=""]))::before {
          content: attr(data-phi) " if " attr(data-if);
        }
        @media (min-width: 768px) {
          :host([data-phi]:not([data-phi=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        /* Rx, Ry, and Rz gate */
        :host([data-theta]:not([data-theta=""]))::before {
          content: attr(data-theta) "";
        }
        :host([data-theta][data-if]:not([data-theta=""]):not([data-if=""]))::before {
          content: attr(data-theta) " if " attr(data-if);
        }
        @media (min-width: 768px) {
          :host([data-theta]:not([data-theta=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        /* Measurement gate */
        :host([data-flag]:not([data-flag=""]))::before {
          content: attr(data-flag) "";
        }
        @media (min-width: 768px) {
          :host([data-flag]:not([data-flag=""]))::before {
            writing-mode: horizontal-tb;
          }
        }
        :host(:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host(:not([data-wire-top]))::before,
        :host(:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host(:not([data-wire-top-disabled]))::before {
          left: 0px;
        }
        @media (min-width: 768px) {
          :host(:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host(:not([data-wire-top]))::before,
          :host(:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host(:not([data-wire-top-disabled]))::before {
            bottom: 0px;
            left: unset;
          }
        }
        :host([data-size="xs"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="xs"]:not([data-wire-top]))::before,
        :host([data-size="xs"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="xs"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 1.125rem;
        }
        :host([data-size="sm"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="sm"]:not([data-wire-top]))::before,
        :host([data-size="sm"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="sm"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 1.625rem;
        }
        :host(:not([data-wire-top]))::before,
        :host([data-size="base"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="base"]:not([data-wire-top]))::before,
        :host(:not([data-wire-top-disabled]))::before,
        :host([data-size="base"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="base"]:not([data-wire-top-disabled]))::before {
          margin-left: 2.125rem;
        }
        @media (min-width: 768px) {
          :host(:not([data-wire-top]))::before,
          :host([data-size="base"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-size="base"]:not([data-wire-top]))::before,
          :host(:not([data-wire-top-disabled]))::before,
          :host([data-size="base"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-size="base"]:not([data-wire-top-disabled]))::before {
            margin-bottom: 2.125rem;
            margin-left: 0;
          }
        }
        :host([data-size="lg"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="lg"]:not([data-wire-top]))::before,
        :host([data-size="lg"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="lg"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 2.625rem;
        }
        :host([data-size="xl"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-size="xl"]:not([data-wire-top]))::before,
        :host([data-size="xl"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-size="xl"]:not([data-wire-top-disabled]))::before {
          margin-bottom: 3.125rem;
        }
        :host([data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          right: 0px;
          left: unset;
        }
        @media (min-width: 768px) {
          :host([data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            top: 0px;
            right: unset;
          }
        }
        :host([data-size="xs"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="xs"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 1.125rem;
        }
        :host([data-size="sm"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="sm"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 1.625rem;
        }
        :host([data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="base"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-size="base"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 2.125rem;
        }
        @media (min-width: 768px) {
          :host([data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-size="base"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-size="base"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            margin-top: 2.125rem;
            margin-right: 0;
          }
        }
        :host([data-size="lg"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="lg"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 2.625rem;
        }
        :host([data-size="xl"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-size="xl"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-top: 3.125rem;
        }
        :host([data-wire-top][data-wire-bottom])::before,
        :host([data-wire-top-disabled][data-wire-bottom-disabled])::before {
          text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
            1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff,
            1px 0 0 #fff;
          left: 0px;
        }
        @media (min-width: 768px) {
          :host([data-wire-top][data-wire-bottom])::before,
          :host([data-wire-top-disabled][data-wire-bottom-disabled])::before {
            text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
              1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff,
              1px 0 0 #fff;
            bottom: 0px;
            left: unset;
          }
        }
        :host([data-size="xs"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="xs"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 1.125rem;
        }
        :host([data-size="sm"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="sm"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 1.625rem;
        }
        :host([data-wire-top][data-wire-bottom])::before,
        :host([data-size="base"][data-wire-top][data-wire-bottom])::before,
        :host([data-wire-top-disabled][data-wire-bottom-disabled])::before,
        :host([data-size="base"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-left: 2.125rem;
        }
        @media (min-width: 768px) {
          :host([data-wire-top][data-wire-bottom])::before,
          :host([data-size="base"][data-wire-top][data-wire-bottom])::before,
          :host([data-wire-top-disabled][data-wire-bottom-disabled])::before,
          :host([data-size="base"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
            margin-bottom: 2.125rem;
            margin-left: 0;
          }
        }
        :host([data-size="lg"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="lg"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 2.625rem;
        }
        :host([data-size="xl"][data-wire-top][data-wire-bottom])::before,
        :host([data-size="xl"][data-wire-top-disabled][data-wire-bottom-disabled])::before {
          margin-bottom: 3.125rem;
        }
        /* data-wire-count */
        :host([data-wire-count="1"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="1"]:not([data-wire-top]))::before,
        :host([data-wire-count="1"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="1"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="2"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="2"]:not([data-wire-top]))::before,
        :host([data-wire-count="2"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="2"]:not([data-wire-top-disabled]))::before {
          margin-left: 3.125rem;
        }
        :host([data-wire-count="3"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="3"]:not([data-wire-top]))::before,
        :host([data-wire-count="3"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="3"]:not([data-wire-top-disabled]))::before {
          margin-left: 2.625rem;
        }
        :host([data-wire-count="5"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="5"]:not([data-wire-top]))::before,
        :host([data-wire-count="5"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="5"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="6"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="6"]:not([data-wire-top]))::before,
        :host([data-wire-count="6"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="6"]:not([data-wire-top-disabled]))::before {
          margin-left: 1.625rem;
        }
        :host([data-wire-count="7"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="7"]:not([data-wire-top]))::before,
        :host([data-wire-count="7"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="7"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="8"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="8"]:not([data-wire-top]))::before,
        :host([data-wire-count="8"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="8"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="9"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="9"]:not([data-wire-top]))::before,
        :host([data-wire-count="9"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="9"]:not([data-wire-top-disabled]))::before,
        :host([data-wire-count="10"]:not([data-wire-top]):not([data-wire-bottom]))::before,
        :host([data-wire-count="10"]:not([data-wire-top]))::before,
        :host([data-wire-count="10"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="10"]:not([data-wire-top-disabled]))::before {
          margin-left: 1.125rem;
        }
        :host([data-wire-count="2"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="2"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 3.125rem;
          margin-left: 0;
        }
        :host([data-wire-count="3"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="3"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 2.625rem;
          margin-left: 0;
        }
        :host([data-wire-count="5"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="5"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="6"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="6"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 1.625rem;
          margin-left: 0;
        }
        :host([data-wire-count="7"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="7"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="8"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="8"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="9"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="9"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
        :host([data-wire-count="10"][data-wire-top]:not([data-wire-bottom]))::before,
        :host([data-wire-count="10"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
          margin-right: 1.125rem;
          margin-left: 0;
        }
        @media (min-width: 768px) {
          :host([data-wire-count="1"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-wire-count="1"]:not([data-wire-top]))::before,
          :host([data-wire-count="1"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="1"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="2"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-wire-count="2"]:not([data-wire-top]))::before,
          :host([data-wire-count="2"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="2"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="3"]:not([data-wire-top]):not([data-wire-bottom]))::before,
          :host([data-wire-count="3"]:not([data-wire-top]))::before,
          :host([data-wire-count="3"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="3"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="5"]:not([data-wire-top]))::before,
          :host([data-wire-count="5"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="5"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="6"]:not([data-wire-top]))::before,
          :host([data-wire-count="6"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="6"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="7"]:not([data-wire-top]))::before,
          :host([data-wire-count="7"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="7"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="8"]:not([data-wire-top]))::before,
          :host([data-wire-count="8"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="8"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="9"]:not([data-wire-top]))::before,
          :host([data-wire-count="9"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="9"]:not([data-wire-top-disabled]))::before,
          :host([data-wire-count="10"]:not([data-wire-top]))::before,
          :host([data-wire-count="10"]:not([data-wire-top-disabled]):not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="10"]:not([data-wire-top-disabled]))::before {
            margin-left: 0;
          }
          :host([data-wire-count="2"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="2"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="3"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="3"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="5"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="5"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="6"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="6"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="7"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="7"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="8"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="8"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="9"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="9"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before,
          :host([data-wire-count="10"][data-wire-top]:not([data-wire-bottom]))::before,
          :host([data-wire-count="10"][data-wire-top-disabled]:not([data-wire-bottom-disabled]))::before {
            margin-right: 0;
          }
        }
        /* nqubit = 2 */
      </style>`;
        }
    }
    return LabelableMixinClass;
}

function TargetableMixin(Base) {
    class TargetableMixinClass extends Base {
        set targets(targets) {
            this.setAttribute("data-targets", targets.sort().join());
        }
        get targets() {
            const dataTargets = this.getAttribute("data-targets");
            if (dataTargets === null)
                return [];
            if (dataTargets === "")
                return [];
            return dataTargets
                .split(",")
                .map((each) => {
                return parseInt(each);
            })
                .sort();
        }
    }
    return TargetableMixinClass;
}

const isWireable = (arg) => typeof arg === "object" &&
    arg !== null &&
    typeof arg.wireTop === "boolean" &&
    typeof arg.wireBottom === "boolean";
function WireableMixin(Base) {
    class WireableMixinClass extends Base {
        constructor() {
            super(...arguments);
            this.wireTop = false;
            this.wireTopDisabled = false;
            this.wireBottom = false;
            this.wireBottomDisabled = false;
        }
        disconnectFromAll() {
            this.wireTop = false;
            this.wireBottom = false;
        }
        get wiresStyle() {
            return html `<style>
        #wires {
          position: absolute;
          bottom: 0px;
          left: 0px;
          right: 0px;
          top: 0px;
          height: 100%;
          width: 100%;
          overflow: visible;
          transform: rotate(90deg);
          transform-origin: center;
        }
        @media (min-width: 768px) {
          #wires {
            transform: rotate(0);
          }
        }
        #wire-top,
        #wire-bottom {
          display: none;
          stroke-width: 4;
        }
        :host([data-wire-top]) #wire-top {
          display: block;
          color: var(--colors-gate, #43c000);
          transform-origin: top;
          transform: translateY(-25%) scaleY(1.5);
        }
        :host([data-wire-top-disabled]) #wire-top {
          display: block;
          color: var(--colors-eel, #4b4b4b);
          transform-origin: top;
          transform: translateY(-25%) scaleY(1.5);
        }
        :host([data-wire-bottom]) #wire-bottom {
          display: block;
          color: var(--colors-gate, #43c000);
          transform-origin: bottom;
          transform: translateY(25%) scaleY(1.5);
        }
        :host([data-wire-bottom-disabled]) #wire-bottom {
          display: block;
          color: var(--colors-eel, #4b4b4b);
          transform-origin: bottom;
          transform: translateY(25%) scaleY(1.5);
        }
      </style>`;
        }
        get wiresSvg() {
            return html `<svg
        id="wires"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          id="wire-top"
          x1="50"
          y1="0"
          x2="50"
          y2="50"
          stroke="currentColor"
          vector-effect="non-scaling-stroke"
        ></line>
        <line
          id="wire-bottom"
          x1="50"
          y1="100"
          x2="50"
          y2="50"
          stroke="currentColor"
          vector-effect="non-scaling-stroke"
        ></line>
      </svg>`;
        }
    }
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], WireableMixinClass.prototype, "wireTop", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], WireableMixinClass.prototype, "wireTopDisabled", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], WireableMixinClass.prototype, "wireBottom", void 0);
    __decorate([
        attr,
        __metadata("design:type", Object)
    ], WireableMixinClass.prototype, "wireBottomDisabled", void 0);
    return WireableMixinClass;
}

var MeasurementGateElement_1;
let MeasurementGateElement = MeasurementGateElement_1 = class MeasurementGateElement extends ConfigurableMixin(DragAndDroppableMixin(IconableMixin(HelpableMixin(LabelableMixin(SizeableMixin(JsonableMixin(HTMLElement))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "transparent";
        this.value = -1;
        this.flag = "";
    }
    static create({ dragAndDrop = false, flag = "", } = {}) {
        const el = new MeasurementGateElement_1();
        el.dragAndDrop = dragAndDrop;
        el.flag = flag;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}
        ${this.labelStyle}

        <style>
          #icon {
            color: var(--colors-superposition, #ce82ff);
            transform: rotate(90deg);
          }
          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }
          :host([data-snapped][data-value="0"]) #icon,
          :host([data-snapped][data-value="1"]) #icon {
            color: var(--colors-swan, #e5e5e5);
          }
          #value {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            writing-mode: vertical-lr;
          }
          @media (min-width: 768px) {
            #value {
              writing-mode: horizontal-tb;
              font-size: 1.125rem !important;
              line-height: 1.75rem !important;
            }
          }
          :host([data-snapped]) #value {
            display: block;
          }
          #value::after {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          :host([data-wire-count="1"]) #value,
          :host([data-wire-count="2"]) #value,
          :host([data-wire-count="3"]) #value {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          :host([data-wire-count="4"]) #value,
          :host([data-wire-count="5"]) #value,
          :host([data-wire-count="6"]) #value {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          :host([data-wire-count="7"]) #value,
          :host([data-wire-count="8"]) #value,
          :host([data-wire-count="9"]) #value,
          :host([data-wire-count="10"]) #value {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          :host([data-value="0"]) #value {
            color: var(--colors-cardinal, #ff4b4b);
          }
          :host([data-value="0"]) #value::after {
            content: "0";
          }
          :host([data-value="1"]) #value {
            color: var(--colors-magnitude, #1cb0f6);
          }
          :host([data-value="1"]) #value::after {
            content: "1";
          }
        </style>

        <div id="body">
          ${this.iconSvg}
          <div id="value"></div>
        </div>`, this.shadowRoot);
    }
    toJson() {
        if (this.flag === "") {
            return `"${MEASUREMENT_GATE_OPERATION_TYPE}"`;
        }
        else {
            return `"${MEASUREMENT_GATE_OPERATION_TYPE}>${this.flag}"`;
        }
    }
    serialize() {
        return {
            type: MEASUREMENT_GATE_OPERATION_TYPE,
            flag: this.flag,
        };
    }
    get iconSvg() {
        return html `
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M8 35A16 16 0 0 1 40 35" fill="none" />
        <path d="M24.5 33L35 15" />
        <circle
          cx="24.5"
          cy="33"
          r="1.5"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    `;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], MeasurementGateElement.prototype, "iconType", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], MeasurementGateElement.prototype, "value", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], MeasurementGateElement.prototype, "flag", void 0);
MeasurementGateElement = MeasurementGateElement_1 = __decorate([
    controller
], MeasurementGateElement);

let QuantumSimulatorElement = class QuantumSimulatorElement extends CircuitableMixin(HTMLElement) {
    constructor() {
        super(...arguments);
        this.serviceWorker = "/serviceworker.js";
    }
    clearCircuit() {
        this.quantumCircuit.clear();
    }
    connectedCallback() {
        this.circleNotation = null;
        this.visibleQubitCircleKets = [];
        this.initCircuitable();
        this.addEventListener("circuit.load", this.updateJsonUrl);
        this.addEventListener("dragAndDroppable.ungrab", this.updateJsonUrl);
        this.addEventListener("dragAndDroppable.trash", this.updateJsonUrl);
        this.addEventListener("dragAndDroppable.leave", this.run);
        this.addEventListener("step.drop", this.run);
        this.addEventListener("step.mouseenter", this.setStyleCursorPointerUnlessEditing);
        this.addEventListener("step.mouseenter", this.activateHoveredStep);
        this.addEventListener("step.mouseenter", this.runUnlessEditing);
        this.addEventListener("step.mouseleave", this.setStyleCursorAutoUnlessEditing);
        this.addEventListener("step.click", this.setBreakpoint);
        this.addEventListener("step.click", this.run);
        this.addEventListener("step.snap", this.run);
        this.addEventListener("circuit.mouseleave", this.run);
        this.addEventListener("circle-notation.load", this.registerCircleNotation);
        this.addEventListener("circle-notation.visibilityChanged", this.updateVisibleQubitCircleKets);
        this.addEventListener("circle-notation.visibilityChanged", this.run);
        this.addEventListener("run-circuit-button.load", this.registerRunCircuitButton);
        this.addEventListener("run-circuit-button.click", this.run);
        this.addEventListener("operation.popup.change", this.run);
        this.addEventListener("operation.update", this.updateJsonUrl);
        this.worker = new Worker(this.serviceWorker);
        this.worker.addEventListener("message", (e) => {
            var _a, _b;
            const activeStep = this.quantumCircuit.activeStep;
            const breakpoint = this.quantumCircuit.breakpoint;
            const currentStep = activeStep || breakpoint;
            Util.notNull(currentStep);
            const stepIndex = this.fetchStepIndex(currentStep);
            const data = e.data;
            if (data.type === "step") {
                const step = this.quantumCircuit.steps[data.step];
                for (const bit in data.blochVectors) {
                    const blochDisplay = step.dropzones[bit]
                        .draggableElement;
                    if (blochDisplay) {
                        const blochVector = data.blochVectors[bit];
                        blochDisplay.x = blochVector[0];
                        blochDisplay.y = blochVector[1];
                        blochDisplay.z = blochVector[2];
                    }
                }
                if (data.measuredBits) {
                    const measuredBits = data.measuredBits;
                    const dropzones = step.dropzones;
                    for (const bit in measuredBits) {
                        const operation = dropzones[bit].draggableElement;
                        if (operation instanceof MeasurementGateElement) {
                            operation.value = measuredBits[bit];
                        }
                    }
                }
                for (const each of step.ifableGates) {
                    if (each.if === "")
                        continue;
                    each.disabled = !data.flags[each.if];
                }
                if (stepIndex === data.step) {
                    const complexAmplitudes = {};
                    for (const ket in data.amplitudes) {
                        const c = data.amplitudes[ket];
                        complexAmplitudes[ket] = new Complex(c[0], c[1]);
                    }
                    (_a = this.circleNotation) === null || _a === void 0 ? void 0 : _a.setAmplitudes(complexAmplitudes);
                }
            }
            else if (data.type === "finish") {
                (_b = this.runCircuitButton) === null || _b === void 0 ? void 0 : _b.enable();
            }
        });
    }
    // Register components
    registerCircleNotation(event) {
        this.circleNotation = event.target;
    }
    registerRunCircuitButton(event) {
        this.runCircuitButton = event.target;
    }
    updateVisibleQubitCircleKets(event) {
        const ketNumbers = event.detail;
        Util.notNull(ketNumbers);
        this.visibleQubitCircleKets = ketNumbers;
    }
    runUnlessEditing() {
        if (this.quantumCircuit.editing)
            return;
        this.run();
    }
    run() {
        if (this.circleNotation === null)
            return;
        const activeStep = this.quantumCircuit.activeStep;
        const breakpoint = this.quantumCircuit.breakpoint;
        const step = activeStep || breakpoint;
        Util.notNull(step);
        const stepIndex = this.fetchStepIndex(step);
        const serializedSteps = this.quantumCircuit.serializedSteps;
        Util.need(serializedSteps.length > 0, "non-zero step length");
        const qubitCount = this.quantumCircuit.qubitCount;
        this.circleNotation.qubitCount = qubitCount;
        this.worker.postMessage({
            json: this.quantumCircuit.toJson(),
            qubitCount,
            stepIndex,
            steps: this.quantumCircuit.serializedSteps,
            targets: this.visibleQubitCircleKets,
        });
    }
    setBreakpoint(event) {
        const step = event.detail.element;
        for (const each of this.quantumCircuit.steps) {
            each.breakpoint = false;
        }
        step.breakpoint = true;
    }
    activateHoveredStep(event) {
        if (this.quantumCircuit.editing)
            return;
        const step = event.detail.element;
        for (const each of this.quantumCircuit.steps) {
            each.active = false;
        }
        step.active = true;
    }
    fetchStepIndex(step) {
        const index = this.quantumCircuit.steps.indexOf(step);
        if (index === -1) {
            throw new Error("CircuitStep not found");
        }
        return index;
    }
    setStyleCursorAutoUnlessEditing() {
        if (this.quantumCircuit.editing)
            return;
        document.documentElement.style.cursor = "auto";
    }
    setStyleCursorPointerUnlessEditing() {
        if (this.quantumCircuit.editing)
            return;
        document.documentElement.style.cursor = "pointer";
    }
    updateJsonUrl() {
        Util.notNull(this.quantumCircuit);
        Util.updateUrlJson(this.quantumCircuit.toJson());
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumSimulatorElement.prototype, "serviceWorker", void 0);
QuantumSimulatorElement = __decorate([
    controller
], QuantumSimulatorElement);

var BlochDisplayElement_1;
let BlochDisplayElement = BlochDisplayElement_1 = class BlochDisplayElement extends DragAndDroppableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))) {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    static create({ dragAndDrop = false, } = {}) {
        const el = new BlochDisplayElement_1();
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    showPopup() {
        if (this.isCircuitDraggable()) {
            this.showInspector();
        }
        else {
            this.showHelp();
        }
    }
    showInspector() {
        if (this.grabbed)
            return;
        const popupInstance = this._tippy;
        if (popupInstance)
            return;
        const content = this.blochInspectorPopupContent();
        const popup = tippy(this, {
            allowHTML: true,
            animation: false,
            arrow: ROUND_ARROW + ROUND_ARROW,
            delay: 0,
            placement: "auto",
            theme: "qni",
            onShow(instance) {
                instance.setContent(content);
            },
        });
        popup.show();
    }
    blochInspectorPopupContent() {
        const content = document.createDocumentFragment();
        render$1(html `
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d"
              >${this.forceSigned(this.d)}</span
            >, ϕ:
            <span class="bloch-display__inspector-phi"
              >${this.forceSigned(this.phi, 2)}</span
            >, θ:
            <span class="bloch-display__inspector-theta"
              >${this.forceSigned(this.theta, 2)}</span
            >
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x"
              >${this.forceSigned(this.x)}</span
            >, y:
            <span class="bloch-display__inspector-y"
              >${this.forceSigned(this.y)}</span
            >, z:
            <span class="bloch-display__inspector-z"
              >${this.forceSigned(this.z)}</span
            >
          </section>
        </div>
      `, content);
        return content;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.updateBlochVector();
        this.initDragAndDrop();
    }
    disconnectedCallback() {
        const instance = this._tippy;
        instance === null || instance === void 0 ? void 0 : instance.destroy();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.body)
            return;
        if (oldValue === newValue)
            return;
        if (name === "data-draggable-source") {
            this.body.classList.toggle("draggable-source");
            return;
        }
        if (name === "data-draggable-shadow") {
            this.body.classList.toggle("draggable-shadow");
            return;
        }
        if (newValue === null)
            return;
        if (name === "data-x")
            this.x = parseFloat(newValue);
        if (name === "data-y")
            this.y = parseFloat(newValue);
        if (name === "data-z")
            this.z = parseFloat(newValue);
        this.d = this.vectorLength();
        this.phi = this.calculatePhi();
        this.theta = this.calculateTheta();
        this.updateBlochVector();
    }
    update() {
        this.d = this.vectorLength();
        this.phi = this.calculatePhi();
        this.theta = this.calculateTheta();
        const vectorLineRect = (degree) => {
            return html `<div
        class="vector-line-rect"
        style="transform: rotateY(${degree}deg)"
      ></div>`;
        };
        const vectorEndCircle = (degree, axis) => {
            return html `<div
        class="vector-end-circle"
        style="transform: rotate${axis}(${degree}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`;
        };
        render$1(html `${this.sizeableStyle} ${this.dragAndDroppableStyle}

        <style>
          #body.draggable-source::after {
            opacity: 100;
            border-color: var(--colors-fox, #ff9600);
          }

          #body.draggable-shadow::after {
            opacity: 100;
            border-color: var(--colors-superposition, #ce82ff);
          }

          #background {
            border-radius: 9999px;
            background-color: var(--colors-snow, #ffffff);
          }

          #sphere-border {
            box-sizing: border-box;
            border-style: solid;
            border-radius: 9999px;
            border-width: 2px;
            border-color: var(--colors-hare, #afafaf);
            background-color: rgba(67, 192, 0, 0.1);
          }

          #sphere-lines {
            width: 100%;
            height: 100%;
            stroke: currentColor;
            color: var(--colors-hare, #afafaf);
          }

          #perspective {
            position: absolute;
            top: -1px;
            right: -1px;
            bottom: -1px;
            left: -1px;
            perspective-origin: top right;
          }

          :host([data-size="xs"]) #perspective {
            perspective: 2rem;
          }

          :host([data-size="sm"]) #perspective {
            perspective: 3rem;
          }

          :host #perspective,
          :host([data-size="base"]) #perspective {
            perspective: 4rem;
          }

          :host([data-size="lg"]) #perspective {
            perspective: 5rem;
          }

          :host([data-size="xl"]) #perspective {
            perspective: 6rem;
          }

          #vector {
            position: relative;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
          }

          #vector-line {
            position: absolute;
            width: 100%;
            height: 0;
            bottom: 50%;
            transform-style: preserve-3d;
          }

          .vector-line-rect {
            position: absolute;
            left: 0px;
            right: 0px;
            background-color: var(--colors-eel, #4b4b4b);
            margin-left: auto;
            margin-right: auto;
            transform-origin: bottom;
            height: 100%;
            width: 2px;
            transform-style: preserve-3d;
          }

          #vector-end {
            position: absolute;
            width: 100%;
            transform-style: preserve-3d;
          }

          .vector-end-circle {
            position: absolute;
            left: 0px;
            right: 0px;
            background-color: var(--colors-cardinal, #ff4b4b);
            margin-left: auto;
            margin-right: auto;
            border-radius: 9999px;
            height: 6px;
            width: 6px;
          }

          :host([data-size="xs"]) .vector-end-circle {
            height: 4px;
            width: 4px;
          }

          :host([data-size="lg"]) .vector-end-circle,
          :host([data-size="xl"]) .vector-end-circle {
            height: 8px;
            width: 8px;
          }

          #body[data-d="0"] .vector-end-circle {
            background-color: var(--colors-magnitude, #1cb0f6);
          }

          .absolute {
            position: absolute;
          }

          .inset-0 {
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
          }
        </style>

        <div
          id="body"
          data-target="bloch-display.body"
          data-d="${this.d}"
          data-action="mouseenter:bloch-display#showPopup mouseup:bloch-display#showPopup"
        >
          <div id="background" class="absolute inset-0"></div>
          <div id="sphere-border" class="absolute inset-0">
            <svg
              id="sphere-lines"
              class="absolute inset-0"
              viewBox="0 0 48 48"
              fill="none"
              stroke-width="1"
            >
              <line x1="0%" y1="50%" x2="100%" y2="50%" />
              <line x1="50%" y1="0%" x2="50%" y2="100%" />
              <line x1="35%" y1="65%" x2="65%" y2="35%" />
              <ellipse cx="50%" cy="50%" rx="18%" ry="50%" />
              <ellipse cx="50%" cy="50%" rx="50%" ry="18%" />
            </svg>
            <div id="perspective">
              <div id="vector" data-target="bloch-display.vector">
                <div id="vector-line" data-target="bloch-display.vectorLine">
                  ${vectorLineRect(0)} ${vectorLineRect(20)}
                  ${vectorLineRect(40)} ${vectorLineRect(60)}
                  ${vectorLineRect(80)} ${vectorLineRect(100)}
                  ${vectorLineRect(120)} ${vectorLineRect(140)}
                  ${vectorLineRect(160)}
                </div>

                <div id="vector-end" data-target="bloch-display.vectorEnd">
                  ${vectorEndCircle(0, "Y")} ${vectorEndCircle(20, "Y")}
                  ${vectorEndCircle(40, "Y")} ${vectorEndCircle(60, "Y")}
                  ${vectorEndCircle(80, "Y")} ${vectorEndCircle(100, "Y")}
                  ${vectorEndCircle(120, "Y")} ${vectorEndCircle(140, "Y")}
                  ${vectorEndCircle(160, "Y")} ${vectorEndCircle(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>`, this.shadowRoot);
    }
    toJson() {
        return `"${BLOCH_DISPLAY_OPERATION_TYPE}"`;
    }
    serialize() {
        return {
            type: BLOCH_DISPLAY_OPERATION_TYPE,
        };
    }
    updateBlochVector() {
        const vectorEndCircleWidth = this.vectorEndCircles[0].offsetWidth;
        this.vectorLine.style.height = `calc(${(100 * this.d) / 2}% - ${vectorEndCircleWidth / 2}px)`;
        this.vectorEnd.style.bottom = `calc(50% + ${(100 * this.d) / 2}% + ${vectorEndCircleWidth / 2}px)`;
        if (this.d !== 0) {
            this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this
                .theta}deg)`;
        }
    }
    get d() {
        const dataD = this.getAttribute("data-d");
        if (dataD === null)
            throw new Error("data-d not set");
        return parseFloat(dataD);
    }
    set d(value) {
        var _a;
        this.setAttribute("data-d", value.toString());
        (_a = this.body) === null || _a === void 0 ? void 0 : _a.setAttribute("data-d", value.toString());
    }
    vectorLength() {
        return parseFloat(Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z).toFixed(4));
    }
    set phi(value) {
        this.setAttribute("data-phi", value.toString());
    }
    get phi() {
        const dataPhi = this.getAttribute("data-phi");
        if (dataPhi === null)
            throw new Error("data-phi not set");
        return parseFloat(dataPhi);
    }
    calculatePhi() {
        return (Math.atan2(this.y, this.x) * 180) / Math.PI;
    }
    set theta(value) {
        this.setAttribute("data-theta", value.toString());
    }
    get theta() {
        const dataTheta = this.getAttribute("data-theta");
        if (dataTheta === null)
            throw new Error("data-theta not set");
        return parseFloat(dataTheta);
    }
    calculateTheta() {
        const θ = Math.max(0, Math.PI / 2 -
            Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
        return (180 * θ) / Math.PI;
    }
    forceSigned(value, digits = 4) {
        return (value >= 0 ? "+" : "") + value.toFixed(digits);
    }
    isCircuitDraggable() {
        if (this.parentElement === null)
            return false;
        return this.parentElement.tagName === "CIRCUIT-DROPZONE";
    }
};
__decorate([
    target,
    __metadata("design:type", HTMLElement)
], BlochDisplayElement.prototype, "body", void 0);
__decorate([
    target,
    __metadata("design:type", HTMLElement)
], BlochDisplayElement.prototype, "vectorLine", void 0);
__decorate([
    target,
    __metadata("design:type", HTMLElement)
], BlochDisplayElement.prototype, "vectorEnd", void 0);
__decorate([
    target,
    __metadata("design:type", HTMLElement)
], BlochDisplayElement.prototype, "vector", void 0);
__decorate([
    targets,
    __metadata("design:type", Array)
], BlochDisplayElement.prototype, "vectorEndCircles", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], BlochDisplayElement.prototype, "x", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], BlochDisplayElement.prototype, "y", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], BlochDisplayElement.prototype, "z", void 0);
BlochDisplayElement = BlochDisplayElement_1 = __decorate([
    controller
], BlochDisplayElement);

let CircuitBlockElement = class CircuitBlockElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.comment = "";
        this.finalized = false;
    }
    finalize() {
        this.finalized = true;
    }
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.update();
    }
    update() {
        render$1(html `<style>
          :host {
            position: relative;
          }
          :host::before,
          :host::after {
            position: absolute;
            display: flex;
            justify-content: center;
            color: var(--colors-magnitude, #1cb0f6);
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            white-space: nowrap;
            content: attr(data-comment) "";
            writing-mode: vertical-lr;
          }
          :host::before {
            top: 0;
            right: 0;
            bottom: 0;
            left: unset;
          }
          :host::after {
            top: 0;
            left: 0;
            bottom: 0;
            right: unset;
          }
          @media (min-width: 768px) {
            :host::before,
            :host::after {
              writing-mode: horizontal-tb;
              left: 0;
              right: 0;
            }
            :host::before {
              top: 0;
              bottom: unset;
            }
            :host::after {
              bottom: 0;
              top: unset;
            }
          }
          #body {
            display: flex;
            border-style: solid;
            border-color: var(--colors-magnitude, #1cb0f6);
            background-color: rgba(229, 229, 229, 0.3);
            flex-direction: column;
            margin-left: 1.5rem;
            margin-right: 1.5rem;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            border-top-width: 0;
            border-right-width: 2px;
            border-bottom-width: 0;
            border-left-width: 2px;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: row;
              margin-top: 1.5rem;
              margin-bottom: 1.5rem;
              margin-left: 0;
              margin-right: 0;
              padding: 2rem 0;
              border-top-width: 2px;
              border-right-width: 0;
              border-bottom-width: 2px;
              border-left-width: 0;
            }
          }
        </style>

        <div id="body">
          <slot></slot>
        </div>`, this.shadowRoot);
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitBlockElement.prototype, "comment", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitBlockElement.prototype, "finalized", void 0);
CircuitBlockElement = __decorate([
    controller
], CircuitBlockElement);

let CircuitStepElement = class CircuitStepElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.active = false;
        this.snap = false;
        this.breakpoint = false;
        this.keep = false;
        this.shadow = false;
    }
    get isInBlock() {
        if (this.closest("circuit-block") === null) {
            return false;
        }
        return true;
    }
    get block() {
        const block = this.closest("circuit-block");
        return block;
    }
    get wireCount() {
        return this.dropzones.length;
    }
    get qubitCount() {
        let qubitCount = this.wireCount;
        const dropzones = this.dropzones;
        for (let i = qubitCount - 1; i >= 0 && !dropzones[i].occupied; i--) {
            qubitCount--;
        }
        return qubitCount;
    }
    get dropzones() {
        return this.elements("circuit-dropzone");
    }
    get lastDropzone() {
        return this.dropzones[this.wireCount - 1];
    }
    get isEmpty() {
        if (this.keep)
            return false;
        return this.dropzones.every((each) => !each.occupied);
    }
    dropzone(n) {
        const el = this.dropzones[n];
        if (el === undefined) {
            throw new Error("Dropzone not found");
        }
        return el;
    }
    dropzoneIndex(dropzone) {
        const index = this.dropzones.indexOf(dropzone);
        if (index === -1)
            return null;
        return index;
    }
    bit(gate) {
        const dropzoneEl = gate.parentElement;
        if (dropzoneEl === null) {
            throw new Error("Dropzone not found");
        }
        return this.dropzones.indexOf(dropzoneEl);
    }
    get index() {
        const quantumCircuitEl = this.quantumCircuitElement();
        if (quantumCircuitEl === null)
            return null;
        const all = quantumCircuitEl.steps;
        const index = all.indexOf(this);
        if (index === -1) {
            throw new Error("circuitStep not found");
        }
        return index;
    }
    prev() {
        const index = this.index;
        if (index === null || index === 0)
            return null;
        const quantumCircuitEl = this.quantumCircuitElement();
        if (quantumCircuitEl === null)
            return null;
        const all = quantumCircuitEl.steps;
        return all[index - 1] || null;
    }
    next() {
        const index = this.index;
        if (index === null)
            return null;
        const quantumCircuitEl = this.quantumCircuitElement();
        if (quantumCircuitEl === null)
            return null;
        const all = quantumCircuitEl.steps;
        return all[index + 1] || null;
    }
    activate() {
        this.dispatchEvent(new CustomEvent("step.click", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    appendDropzone() {
        const el = new CircuitDropzoneElement();
        this.append(el);
        return el;
    }
    appendOperation(operation) {
        const dropzone = new CircuitDropzoneElement();
        dropzone.append(operation);
        dropzone.occupied = true;
        this.append(dropzone);
    }
    remove() {
        var _a;
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this);
    }
    quantumCircuitElement() {
        return this.closest("quantum-circuit");
    }
    serialize() {
        return this.dropzones.map((each) => each.serialize());
    }
    toJson() {
        const jsons = this.dropzones.map((each) => each.toJson());
        while (jsons.length > 0 && jsons[jsons.length - 1] === "1") {
            jsons.pop();
        }
        if (jsons.length === 0) {
            return "[1]";
        }
        return `[${jsons.join(",")}]`;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue)
            return;
        if (name === "data-shadow") {
            if (newValue === null) {
                for (const each of this.dropzones) {
                    each.shadow = false;
                }
            }
        }
    }
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.update();
        this.slotEl.addEventListener("slotchange", this.handleSlotChange.bind(this));
        this.updateConnections();
        this.updateWires();
        this.dispatchStepLoadEvent();
        this.addEventListener("mouseenter", this.dispatchStepMouseenterEvent);
        this.addEventListener("mouseleave", this.dispatchStepMouseleaveEvent);
        this.addEventListener("dropzone.snap", this.dispatchStepMouseenterEvent);
        this.addEventListener("dropzone.snap", this.dispatchStepSnapEvent);
        this.addEventListener("dropzone.unsnap", this.dispatchStepUnsnapEvent);
        this.addEventListener("dropzone.grab", this.dispatchStepSnapEvent);
        this.addEventListener("dropzone.drop", this.dispatchStepDropEvent);
        this.addEventListener("dragAndDroppable.enddragging", this.unsnap);
        this.addEventListener("click", this.activate);
    }
    dispatchStepLoadEvent() {
        this.dispatchEvent(new CustomEvent("step.load", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    dispatchStepMouseenterEvent() {
        this.dispatchEvent(new CustomEvent("step.mouseenter", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    dispatchStepMouseleaveEvent() {
        this.dispatchEvent(new CustomEvent("step.mouseleave", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    dispatchStepSnapEvent(event) {
        const dropzone = event.detail
            .element;
        this.dispatchEvent(new CustomEvent("step.snap", {
            detail: { step: this, dropzone },
            bubbles: true,
        }));
    }
    dispatchStepUnsnapEvent(event) {
        const dropzone = event.detail
            .element;
        this.unsnap();
        this.dispatchEvent(new CustomEvent("step.unsnap", {
            detail: { step: this, dropzone },
            bubbles: true,
        }));
    }
    dispatchStepDropEvent() {
        this.dispatchEvent(new CustomEvent("step.drop", {
            detail: { element: this },
            bubbles: true,
        }));
    }
    unsnap() {
        this.snap = false;
    }
    update() {
        render$1(html `<style>
          :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          @media (min-width: 768px) {
            :host {
              flex-direction: row;
            }
          }
          :host([data-shadow]) {
            height: 0px;
          }
          @media (min-width: 768px) {
            :host([data-shadow]) {
              height: auto;
              width: 0px;
            }
          }
          #body {
            display: flex;
            flex-direction: row-reverse;
          }
          ::slotted(circuit-dropzone[data-wire-count="1"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="2"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.xl / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="3"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.lg / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="4"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.base / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="5"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="6"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.sm / 2}rem;
          }
          ::slotted(circuit-dropzone[data-wire-count="7"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="8"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="9"]:nth-of-type(n + 2)),
          ::slotted(circuit-dropzone[data-wire-count="10"]:nth-of-type(n + 2)) {
            margin-right: ${Operation.size.xs / 2}rem;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: column;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
            ::slotted(circuit-dropzone:nth-of-type(n + 2)) {
              margin-top: ${Operation.size.base / 2}rem !important;
              margin-right: 0 !important;
            }
          }
          #breakpoint {
            position: relative;
            min-height: 0px;
            min-width: 100%;
          }
          @media (min-width: 768px) {
            #breakpoint {
              min-height: 100%;
              min-width: 0px;
            }
          }
          #breakpoint-line {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            z-index: 20;
            padding: 2px;
            margin-top: -2px;
            background-color: var(--colors-cardinal, #ff4b4b);
            opacity: 0;
          }
          @media (min-width: 768px) {
            #breakpoint-line {
              margin-top: 0;
              margin-left: -2px;
            }
          }
          :host([data-active]:not([data-breakpoint])) #breakpoint-line {
            opacity: 0.3;
          }
          :host([data-breakpoint]) #breakpoint-line {
            opacity: 0.8;
          }
        </style>

        <div id="body">
          <slot data-target="circuit-step.slotEl"></slot>
        </div>
        <div id="breakpoint">
          <div id="breakpoint-line"></div>
        </div>`, this.shadowRoot);
    }
    handleSlotChange() {
        if (this.shadow) {
            for (const each of this.dropzones) {
                each.shadow = true;
            }
        }
        this.updateConnections();
        this.updateWires();
        for (const each of this.dropzones) {
            each.wireCount = this.wireCount;
        }
    }
    updateConnections() {
        for (const dropzone of this.dropzones) {
            dropzone.wireTop = false;
            dropzone.wireBottom = false;
            const operation = dropzone.draggableElement;
            if (isWireable(operation)) {
                operation.disconnectFromAll();
            }
        }
        // Swap
        if (this.swapGates.length !== 2) {
            for (const each of this.swapGates) {
                each.disable();
            }
        }
        else {
            const all = this.swapGates;
            const swapBits = all.map((each) => this.bit(each));
            for (const swap of all) {
                swap.enable();
                swap.targets = swapBits;
                swap.wireTop = all.some((each) => {
                    return this.bit(each) < this.bit(swap);
                });
                swap.wireBottom = all.some((each) => {
                    return this.bit(each) > this.bit(swap);
                });
            }
            for (const dropzone of this.dropzones) {
                if (dropzone.draggable)
                    continue;
                const minBit = Math.min(...swapBits);
                const maxBit = Math.max(...swapBits);
                if (minBit < this.dropzones.indexOf(dropzone) &&
                    this.dropzones.indexOf(dropzone) < maxBit) {
                    dropzone.wireTop = true;
                    dropzone.wireBottom = true;
                }
            }
        }
        // CPHASE
        for (const phaseGate of this.phaseGates) {
            if (phaseGate.phi === "")
                continue;
            const all = this.phaseGates.filter((each) => {
                return each.phi === phaseGate.phi;
            });
            for (const cp of all) {
                cp.targets = all.map((each) => this.bit(each));
                cp.wireTop = all.some((each) => {
                    return this.bit(each) < this.bit(cp);
                });
                cp.wireBottom = all.some((each) => {
                    return this.bit(each) > this.bit(cp);
                });
            }
            for (const dropzone of this.dropzones) {
                if (dropzone.draggable)
                    continue;
                const bits = all.map((each) => this.bit(each));
                const minBit = Math.min(...bits);
                const maxBit = Math.max(...bits);
                if (minBit < this.dropzones.indexOf(dropzone) &&
                    this.dropzones.indexOf(dropzone) < maxBit) {
                    dropzone.wireTop = true;
                    dropzone.wireBottom = true;
                }
            }
        }
        if (this.controlGates.length === 0) {
            for (const controllableGate of this.controllableGates) {
                controllableGate.controls = [];
            }
            return;
        }
        if (this.controlGates.length === 1 && this.controllableGates.length === 0) {
            const controlGate = this.controlGates[0];
            controlGate.disable();
            controlGate.targets = [];
            return;
        }
        if (this.controllableGates.length === 0) {
            for (const controlGate of this.controlGates) {
                controlGate.enable();
                controlGate.targets = this.controlBits;
                controlGate.wireTop = this.controlGates.some((each) => {
                    return this.bit(controlGate) > this.bit(each);
                });
                controlGate.wireBottom = this.controlGates.some((each) => {
                    return this.bit(controlGate) < this.bit(each);
                });
            }
        }
        else {
            for (const controllableGate of this.controllableGates) {
                controllableGate.controls = this.controlBits;
                controllableGate.wireTop =
                    this.controlGates.some((each) => {
                        return this.bit(each) < this.bit(controllableGate);
                    }) ||
                        this.controllableGates.some((each) => {
                            return this.bit(each) < this.bit(controllableGate);
                        });
                controllableGate.wireBottom =
                    this.controlGates.some((each) => {
                        return this.bit(each) > this.bit(controllableGate);
                    }) ||
                        this.controllableGates.some((each) => {
                            return this.bit(each) > this.bit(controllableGate);
                        });
            }
            for (const controlGate of this.controlGates) {
                controlGate.enable();
                controlGate.targets = this.controllableBits;
                controlGate.wireTop =
                    this.controllableGates.some((each) => {
                        return this.bit(controlGate) > this.bit(each);
                    }) ||
                        this.controlGates.some((each) => {
                            return this.bit(controlGate) > this.bit(each);
                        });
                controlGate.wireBottom =
                    this.controllableGates.some((each) => {
                        return this.bit(controlGate) < this.bit(each);
                    }) ||
                        this.controlGates.some((each) => {
                            return this.bit(controlGate) < this.bit(each);
                        });
            }
        }
        for (const dropzone of this.dropzones) {
            if (dropzone.draggable)
                continue;
            const bits = this.controlGates
                .map((each) => this.bit(each))
                .concat(this.controllableGates.map((each) => this.bit(each)));
            const minBit = bits.sort()[0];
            const maxBit = bits.sort().slice(-1)[0];
            if (minBit < this.dropzones.indexOf(dropzone) &&
                this.dropzones.indexOf(dropzone) < maxBit) {
                dropzone.wireTop = true;
                dropzone.wireBottom = true;
            }
        }
    }
    updateWireOfDropzone(index) {
        const dropzone = this.dropzones[index];
        Util.notNull(dropzone);
        dropzone.updateWires();
    }
    updateWires() {
        for (const each of this.dropzones) {
            each.updateWires();
        }
    }
    get controlGates() {
        return this.snappedDraggables("control-gate");
    }
    get controlBits() {
        return this.controlGates.map((each) => this.bit(each));
    }
    get controllableGates() {
        return this.snappedDraggables("h-gate,x-gate,y-gate,z-gate,phase-gate,rnot-gate,rx-gate,ry-gate,rz-gate,swap-gate");
    }
    get ifableGates() {
        return this.snappedDraggables("h-gate,x-gate,rnot-gate");
    }
    get controllableBits() {
        return this.controllableGates.map((each) => this.bit(each));
    }
    get phaseGates() {
        return this.snappedDraggables("phase-gate");
    }
    get swapGates() {
        return this.snappedDraggables("swap-gate");
    }
    elements(selectors) {
        return Array.from(this.querySelectorAll(selectors));
    }
    snappedDraggables(selectors) {
        return this.elements(selectors).filter((each) => {
            return each.snapped;
        });
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitStepElement.prototype, "active", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitStepElement.prototype, "snap", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitStepElement.prototype, "breakpoint", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitStepElement.prototype, "keep", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircuitStepElement.prototype, "shadow", void 0);
__decorate([
    target,
    __metadata("design:type", HTMLSlotElement)
], CircuitStepElement.prototype, "slotEl", void 0);
CircuitStepElement = __decorate([
    controller
], CircuitStepElement);

var ControlGateElement_1;
let ControlGateElement = ControlGateElement_1 = class ControlGateElement extends DragAndDroppableMixin(TargetableMixin(WireableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "transparent";
    }
    static create({ dragAndDrop = false, } = {}) {
        const el = new ControlGateElement_1();
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`, this.shadowRoot);
    }
    toJson() {
        return `"${CONTROL_GATE_OPERATION_TYPE}"`;
    }
    serialize() {
        return { type: CONTROL_GATE_OPERATION_TYPE, targets: this.targets };
    }
    get iconSvg() {
        return html `
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
      >
        <circle cx="24" cy="24" r="8" fill="currentColor" />
      </svg>
    `;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], ControlGateElement.prototype, "iconType", void 0);
ControlGateElement = ControlGateElement_1 = __decorate([
    controller
], ControlGateElement);

var HGateElement_1;
let HGateElement = HGateElement_1 = class HGateElement extends ConfigurableMixin(DragAndDroppableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "square";
    }
    static create({ dragAndDrop = false, ifVar = "", } = {}) {
        const el = new HGateElement_1();
        el.dragAndDrop = dragAndDrop;
        el.if = ifVar;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`, this.shadowRoot);
    }
    toJson() {
        if (this.if !== "") {
            return `"${H_GATE_OPERATION_TYPE}<${this.if}"`;
        }
        else {
            return `"${H_GATE_OPERATION_TYPE}"`;
        }
    }
    serialize() {
        return {
            type: H_GATE_OPERATION_TYPE,
            controls: this.controls,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L17 35M17 24L31 24M31 13L31 35" />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], HGateElement.prototype, "iconType", void 0);
HGateElement = HGateElement_1 = __decorate([
    controller
], HGateElement);

var PhaseGateElement_1;
let PhaseGateElement = PhaseGateElement_1 = class PhaseGateElement extends ConfigurableMixin(DragAndDroppableMixin(TargetableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "circle";
        this.phi = "";
    }
    static create({ phi = "π/2", dragAndDrop = false, } = {}) {
        const el = new PhaseGateElement_1();
        el.phi = phi;
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`, this.shadowRoot);
    }
    toJson() {
        if (this.phi === "") {
            return `"${PHASE_GATE_OPERATION_TYPE}"`;
        }
        else {
            return `"${PHASE_GATE_OPERATION_TYPE}(${this.phi.replace("/", "_")})"`;
        }
    }
    serialize() {
        return {
            type: PHASE_GATE_OPERATION_TYPE,
            phi: this.phi.replace("π", "pi"),
            controls: this.controls,
            targets: this.targets,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], PhaseGateElement.prototype, "iconType", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], PhaseGateElement.prototype, "phi", void 0);
PhaseGateElement = PhaseGateElement_1 = __decorate([
    controller
], PhaseGateElement);

var RnotGateElement_1;
let RnotGateElement = RnotGateElement_1 = class RnotGateElement extends ConfigurableMixin(DragAndDroppableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "square";
    }
    static create({ dragAndDrop = false, ifVar = "", } = {}) {
        const el = new RnotGateElement_1();
        el.dragAndDrop = dragAndDrop;
        el.if = ifVar;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`, this.shadowRoot);
    }
    toJson() {
        if (this.if !== "") {
            return `"${RNOT_GATE_OPERATION_TYPE}<${this.if}"`;
        }
        else {
            return `"${RNOT_GATE_OPERATION_TYPE}"`;
        }
    }
    serialize() {
        return {
            type: RNOT_GATE_OPERATION_TYPE,
            controls: this.controls,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10 24L13 24L14 36L17 36L18 12L38 12" />
      <path d="M24 32L34 18M34 32L24 18" />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], RnotGateElement.prototype, "iconType", void 0);
RnotGateElement = RnotGateElement_1 = __decorate([
    controller
], RnotGateElement);

var RxGateElement_1;
let RxGateElement = RxGateElement_1 = class RxGateElement extends ConfigurableMixin(DragAndDroppableMixin(TargetableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "square";
        this.theta = "";
    }
    static create({ theta = "π/2", dragAndDrop = false, } = {}) {
        const el = new RxGateElement_1();
        el.theta = theta;
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`, this.shadowRoot);
    }
    toJson() {
        if (this.theta === "") {
            return `"${RX_GATE_OPERATION_TYPE}"`;
        }
        else {
            return `"${RX_GATE_OPERATION_TYPE}(${this.theta.replace("/", "_")})"`;
        }
    }
    serialize() {
        return {
            type: RX_GATE_OPERATION_TYPE,
            theta: this.theta.replace("π", "pi"),
            controls: this.controls,
            targets: this.targets,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998L34.609 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], RxGateElement.prototype, "iconType", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], RxGateElement.prototype, "theta", void 0);
RxGateElement = RxGateElement_1 = __decorate([
    controller
], RxGateElement);

var RyGateElement_1;
let RyGateElement = RyGateElement_1 = class RyGateElement extends ConfigurableMixin(DragAndDroppableMixin(TargetableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "square";
        this.theta = "";
    }
    static create({ theta = "π/2", dragAndDrop = false, } = {}) {
        const el = new RyGateElement_1();
        el.theta = theta;
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`, this.shadowRoot);
    }
    toJson() {
        if (this.theta === "") {
            return `"${RY_GATE_OPERATION_TYPE}"`;
        }
        else {
            return `"${RY_GATE_OPERATION_TYPE}(${this.theta.replace("/", "_")})"`;
        }
    }
    serialize() {
        return {
            type: RY_GATE_OPERATION_TYPE,
            theta: this.theta.replace("π", "pi"),
            controls: this.controls,
            targets: this.targets,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002l-4.967 10.927M25.03 13.002l4.613 10.927m0 0L29.676 35"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], RyGateElement.prototype, "iconType", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], RyGateElement.prototype, "theta", void 0);
RyGateElement = RyGateElement_1 = __decorate([
    controller
], RyGateElement);

var RzGateElement_1;
let RzGateElement = RzGateElement_1 = class RzGateElement extends ConfigurableMixin(DragAndDroppableMixin(TargetableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "square";
        this.theta = "";
    }
    static create({ theta = "π/2", dragAndDrop = false, } = {}) {
        const el = new RzGateElement_1();
        el.theta = theta;
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle} ${this.disabledStyle} ${this.labelStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`, this.shadowRoot);
    }
    toJson() {
        if (this.theta === "") {
            return `"${RZ_GATE_OPERATION_TYPE}"`;
        }
        else {
            return `"${RZ_GATE_OPERATION_TYPE}(${this.theta.replace("/", "_")})"`;
        }
    }
    serialize() {
        return {
            type: RZ_GATE_OPERATION_TYPE,
            theta: this.theta.replace("π", "pi"),
            controls: this.controls,
            targets: this.targets,
            if: this.if,
        };
    }
    get iconSvg() {
        return html `<svg id="icon" width="48" height="48" viewBox="0 0 48 48">
      <path
        d="M12.321 13.002V35l.125-9.837c3.147.038 6.353-.042 8.024-1.255 3.393-2.465 2.536-7.83-.883-10.076-1.55-1.019-4.377-.83-7.266-.83zM18.236 25.6L21.73 35zM34.61 13.002L24.746 35m.073-21.998h9.79M24.747 35h10.074"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], RzGateElement.prototype, "iconType", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], RzGateElement.prototype, "theta", void 0);
RzGateElement = RzGateElement_1 = __decorate([
    controller
], RzGateElement);

var SwapGateElement_1;
let SwapGateElement = SwapGateElement_1 = class SwapGateElement extends DragAndDroppableMixin(TargetableMixin(ControllableMixin(WireableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "transparent";
    }
    static create({ dragAndDrop = false, } = {}) {
        const el = new SwapGateElement_1();
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.dragAndDroppableStyle}

        <div id="body" data-action="mouseenter:swap-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`, this.shadowRoot);
    }
    toJson() {
        return `"${SWAP_GATE_OPERATION_TYPE}"`;
    }
    serialize() {
        const targets = this.targets;
        if (targets.length !== 2 && targets.length !== 0) {
            throw new Error(`Invalid swap targets: ${this.targets.toString()}`);
        }
        return {
            type: SWAP_GATE_OPERATION_TYPE,
            controls: this.controls,
            targets,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], SwapGateElement.prototype, "iconType", void 0);
SwapGateElement = SwapGateElement_1 = __decorate([
    controller
], SwapGateElement);

var WriteGateElement_1;
let WriteGateElement = WriteGateElement_1 = class WriteGateElement extends DragAndDroppableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))))) {
    constructor() {
        super(...arguments);
        this.iconType = "transparent";
        this.value = "0";
    }
    static create(value, { dragAndDrop = false } = {}) {
        const el = new WriteGateElement_1();
        el.value = value;
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.iconStyle} ${this.dragAndDroppableStyle}

        <style>
          #icon {
            color: var(--colors-eel, #4b4b4b);
            transform: rotate(90deg);
          }
          @media (min-width: 768px) {
            #icon {
              transform: rotate(0deg);
            }
          }
          #ket-label {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            writing-mode: vertical-lr;
          }
          #ket-label::after {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          @media (min-width: 768px) {
            #ket-label {
              writing-mode: horizontal-tb;
              font-size: 1.125rem !important;
              line-height: 1.75rem !important;
            }
          }
          :host([data-size="xs"]) #ket-label {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          :host([data-size="sm"]) #ket-label {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }
          :host #ket-label,
          :host([data-size="base"]) #ket-label {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          :host([data-size="lg"]) #ket-label {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
          :host([data-size="xl"]) #ket-label {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          :host([data-wire-count="1"]) #ket-label,
          :host([data-wire-count="2"]) #ket-label,
          :host([data-wire-count="3"]) #ket-label {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          :host([data-wire-count="4"]) #ket-label,
          :host([data-wire-count="5"]) #ket-label,
          :host([data-wire-count="6"]) #ket-label {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          :host([data-wire-count="7"]) #ket-label,
          :host([data-wire-count="8"]) #ket-label,
          :host([data-wire-count="9"]) #ket-label,
          :host([data-wire-count="10"]) #ket-label {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          :host([data-value="0"]) #ket-label {
            color: var(--colors-cardinal, #ff4b4b);
          }
          :host([data-value="0"]) #ket-label::after {
            content: "0";
          }
          :host([data-value="1"]) #ket-label {
            color: var(--colors-magnitude, #1cb0f6);
          }
          :host([data-value="1"]) #ket-label::after {
            content: "1";
          }
        </style>

        <div id="body" data-action="mouseenter:write-gate#showHelp">
          ${this.iconSvg}
          <div id="ket-label"></div>
        </div>`, this.shadowRoot);
    }
    toJson() {
        return `"|${this.value}>"`;
    }
    serialize() {
        if (this.value !== "0" && this.value !== "1") {
            throw new Error(`Invalid write value: ${this.value}`);
        }
        const value = parseInt(this.value);
        return {
            type: WRITE_GATE_OPERATION_TYPE,
            value,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 10L9 40M34 10L40 24L34 40" />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], WriteGateElement.prototype, "iconType", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], WriteGateElement.prototype, "value", void 0);
WriteGateElement = WriteGateElement_1 = __decorate([
    controller
], WriteGateElement);

var XGateElement_1;
let XGateElement = XGateElement_1 = class XGateElement extends ConfigurableMixin(DragAndDroppableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "circle";
    }
    static create({ dragAndDrop = false, ifVar = "", } = {}) {
        const el = new XGateElement_1();
        el.dragAndDrop = dragAndDrop;
        el.if = ifVar;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
        this.addEventListener("mouseenter", this.showHelp);
        this.addEventListener("mousedown", this.showRightClickPopup);
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`, this.shadowRoot);
    }
    toJson() {
        if (this.if !== "") {
            return `"${X_GATE_OPERATION_TYPE}<${this.if}"`;
        }
        else {
            return `"${X_GATE_OPERATION_TYPE}"`;
        }
    }
    serialize() {
        return {
            type: X_GATE_OPERATION_TYPE,
            controls: this.controls,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <line x1="50%" y1="28%" x2="50%" y2="72%" />
      <line x1="28%" y1="50%" x2="72%" y2="50%" />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], XGateElement.prototype, "iconType", void 0);
XGateElement = XGateElement_1 = __decorate([
    controller
], XGateElement);

var YGateElement_1;
let YGateElement = YGateElement_1 = class YGateElement extends DragAndDroppableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "square";
    }
    static create({ dragAndDrop = false, } = {}) {
        const el = new YGateElement_1();
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:y-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`, this.shadowRoot);
    }
    toJson() {
        return `"${Y_GATE_OPERATION_TYPE}"`;
    }
    serialize() {
        return {
            type: Y_GATE_OPERATION_TYPE,
            controls: this.controls,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L24 24L31 13M24 24L24 35" />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], YGateElement.prototype, "iconType", void 0);
YGateElement = YGateElement_1 = __decorate([
    controller
], YGateElement);

var ZGateElement_1;
let ZGateElement = ZGateElement_1 = class ZGateElement extends DragAndDroppableMixin(ControllableMixin(WireableMixin(LabelableMixin(IfableMixin(DisableableMixin(IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))))))))) {
    constructor() {
        super(...arguments);
        this.iconType = "square";
    }
    static create({ dragAndDrop = false, } = {}) {
        const el = new ZGateElement_1();
        el.dragAndDrop = dragAndDrop;
        return el;
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initDragAndDrop();
    }
    update() {
        render$1(html `${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.dragAndDroppableStyle} ${this.disabledStyle}

        <div id="body" data-action="mouseenter:z-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`, this.shadowRoot);
    }
    toJson() {
        return `"${Z_GATE_OPERATION_TYPE}"`;
    }
    serialize() {
        return {
            type: Z_GATE_OPERATION_TYPE,
            controls: this.controls,
            if: this.if !== "" ? this.if : null,
        };
    }
    get iconSvg() {
        return html `<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
    >
      <path d="M17 13L31 13L17 35L31 35" />
    </svg>`;
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], ZGateElement.prototype, "iconType", void 0);
ZGateElement = ZGateElement_1 = __decorate([
    controller
], ZGateElement);

let QuantumCircuitElement = class QuantumCircuitElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.json = "";
        this.updateUrl = false;
        this.minWireCount = 1;
        this.maxWireCount = 10;
        this.wireCount = 1;
        this.minStepCount = 1;
        this.interactive = false;
        this.editing = false;
        this.qubitCount = 1;
        this.circuitTitle = "";
        this.breakpointStepIndex = 0;
    }
    get steps() {
        return Array.from(this.querySelectorAll("circuit-step"));
    }
    get breakpoint() {
        for (const each of this.steps) {
            if (each.breakpoint)
                return each;
        }
        this.setBreakpoint(this.breakpointStepIndex);
        return this.steps[this.breakpointStepIndex];
    }
    get activeStep() {
        for (const each of this.steps) {
            if (each.active)
                return each;
        }
        return null;
    }
    get snappedStep() {
        for (const each of this.steps) {
            if (each.snap)
                return each;
        }
        return null;
    }
    get serializedSteps() {
        const qubitCount = this.qubitCount;
        return this.steps.map((each) => each.serialize().slice(0, qubitCount));
    }
    get emptySteps() {
        return this.steps.filter((each) => each.isEmpty);
    }
    get nonEmptySteps() {
        return this.steps.filter((each) => !each.isEmpty);
    }
    get largestStep() {
        let step = null;
        let max = 0;
        for (const each of this.steps) {
            if (each.wireCount > 0 && each.wireCount > max) {
                step = each;
                max = each.wireCount;
            }
        }
        return step;
    }
    get dropzones() {
        return Array.from(this.querySelectorAll("circuit-dropzone"));
    }
    get freeDropzones() {
        return this.dropzones.filter((each) => {
            return !each.occupied;
        });
    }
    step(n) {
        const el = this.steps[n];
        if (el === undefined)
            throw new Error(`step ${n} does not exist.`);
        return el;
    }
    appendStep() {
        const el = new CircuitStepElement();
        const lastBlock = this.blocks.slice(-1)[0] || null;
        if (lastBlock === null || lastBlock.finalized) {
            this.append(el);
        }
        else {
            lastBlock.append(el);
        }
        return el;
    }
    i() {
        const step = this.appendStep();
        step.keep = true;
        this.resize();
        return this;
    }
    h(...targetQubits) {
        this.applyOperation(new HGateElement(), ...targetQubits);
        this.resize();
        return this;
    }
    x(...targetQubits) {
        this.applyOperation(new XGateElement(), ...targetQubits);
        this.resize();
        return this;
    }
    y(...targetQubits) {
        this.applyOperation(new YGateElement(), ...targetQubits);
        this.resize();
        return this;
    }
    z(...targetQubits) {
        this.applyOperation(new ZGateElement(), ...targetQubits);
        this.resize();
        return this;
    }
    phase(phi, ...targetQubits) {
        this.applyOperation(PhaseGateElement.create({ phi: phi.toString() }), ...targetQubits);
        this.resize();
        return this;
    }
    rnot(...targetQubits) {
        this.applyOperation(new RnotGateElement(), ...targetQubits);
        this.resize();
        return this;
    }
    rx(theta, ...targetQubits) {
        this.applyOperation(RxGateElement.create({ theta: theta.toString() }), ...targetQubits);
        this.resize();
        return this;
    }
    ry(theta, ...targetQubits) {
        this.applyOperation(RyGateElement.create({ theta: theta.toString() }), ...targetQubits);
        this.resize();
        return this;
    }
    rz(theta, ...targetQubits) {
        this.applyOperation(RzGateElement.create({ theta: theta.toString() }), ...targetQubits);
        this.resize();
        return this;
    }
    control(...targetQubits) {
        this.applyOperation(new ControlGateElement(), ...targetQubits);
        this.resize();
        return this;
    }
    cnot(control, xTarget) {
        this.validateQubits(control, xTarget);
        const circuitStep = this.appendStep();
        const nqubit = Math.max(control, xTarget) + 1;
        for (let i = 0; i < nqubit; i++) {
            circuitStep.appendDropzone();
        }
        circuitStep.dropzones[control].assign(new ControlGateElement());
        circuitStep.dropzones[xTarget].assign(new XGateElement());
        this.resize();
        return this;
    }
    ccnot(controlA, controlB, xTarget) {
        this.validateQubits(controlA, controlB, xTarget);
        const circuitStep = this.appendStep();
        const nqubit = Math.max(controlA, controlB, xTarget) + 1;
        for (let i = 0; i < nqubit; i++) {
            circuitStep.appendDropzone();
        }
        circuitStep.dropzones[controlA].assign(new ControlGateElement());
        circuitStep.dropzones[controlB].assign(new ControlGateElement());
        circuitStep.dropzones[xTarget].assign(new XGateElement());
        this.resize();
        return this;
    }
    swap(targetA, targetB) {
        this.applyOperation(new SwapGateElement(), targetA, targetB);
        this.resize();
        return this;
    }
    bloch(...targetQubits) {
        this.applyOperation(new BlochDisplayElement(), ...targetQubits);
        this.resize();
        return this;
    }
    write(value, ...targetQubits) {
        this.applyOperation(WriteGateElement.create(value), ...targetQubits);
        this.resize();
        return this;
    }
    measure(...targetQubits) {
        this.applyOperation(new MeasurementGateElement(), ...targetQubits);
        this.resize();
        return this;
    }
    block(comment, blockDef) {
        const block = new CircuitBlockElement();
        block.comment = comment;
        block.setAttribute("data-targets", "quantum-circuit.blocks");
        this.append(block);
        blockDef(this);
        block.finalize();
        return this;
    }
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.update();
        this.loadFromJson();
        this.updateAllSteps();
        this.updateQubitCount();
        this.updateWireCount();
        this.addEventListener("dragAndDroppable.ungrab", () => {
            this.editing = false;
        });
        this.addEventListener("dragAndDroppable.ungrab", this.resize);
        this.addEventListener("dragAndDroppable.ungrab", this.enableDraggablesHover);
        this.addEventListener("dragAndDroppable.ungrab", this.dispatchStepMouseenterEvent);
        this.addEventListener("dragAndDroppable.enddragging", () => {
            this.editing = false;
        });
        this.addEventListener("dragAndDroppable.enddragging", this.resize);
        this.addEventListener("dragAndDroppable.enddragging", this.enableDraggablesHover);
        this.addEventListener("dragAndDroppable.enddragging", this.dispatchStepMouseenterEvent);
        this.addEventListener("dragAndDroppable.trash", () => {
            this.editing = false;
        });
        this.addEventListener("step.snap", this.snapStep);
        this.addEventListener("step.snap", this.updateStepConnections);
        this.addEventListener("step.snap", this.updateWires);
        this.addEventListener("step.snap", this.updateQubitCount);
        this.addEventListener("step.unsnap", this.unsnapStep);
        this.addEventListener("step.unsnap", this.updateStepConnections);
        this.addEventListener("step.unsnap", this.updateWires);
        this.addEventListener("step.unsnap", this.updateQubitCount);
        this.addEventListener("mouseleave", this.dispatchCircuitMouseLeaveEvent);
        this.dispatchEvent(new Event("circuit.load", { bubbles: true }));
    }
    updateQubitCount() {
        const steps = this.steps;
        if (steps.length === 0) {
            this.qubitCount = 1;
            return;
        }
        const maxStepQubitCount = Math.max(...steps.map((each) => each.qubitCount));
        if (maxStepQubitCount === 0) {
            this.qubitCount = 1;
            return;
        }
        this.qubitCount = maxStepQubitCount;
    }
    updateWireCount() {
        const steps = this.steps;
        if (steps.length === 0) {
            this.wireCount = this.minWireCount;
            return;
        }
        const maxStepQubitCount = Math.max(...steps.map((each) => each.qubitCount));
        if (maxStepQubitCount === 0) {
            this.wireCount = this.minWireCount;
            return;
        }
        const firstStep = steps[0];
        Util.notNull(firstStep);
        const wireCount = firstStep.wireCount;
        this.wireCount =
            wireCount > this.minWireCount ? wireCount : this.minWireCount;
    }
    dispatchStepMouseenterEvent(event) {
        const x = event.detail.x;
        const y = event.detail.y;
        const el = document.elementFromPoint(x, y);
        const step = el === null || el === void 0 ? void 0 : el.closest("circuit-step");
        step === null || step === void 0 ? void 0 : step.dispatchStepMouseenterEvent();
    }
    dispatchCircuitMouseLeaveEvent() {
        for (const each of this.steps) {
            each.active = false;
        }
        this.dispatchEvent(new Event("circuit.mouseleave", { bubbles: true }));
    }
    setBreakpoint(stepIndex) {
        const step = this.steps[stepIndex];
        this.breakpointStepIndex = stepIndex;
        for (const each of this.steps) {
            each.breakpoint = false;
        }
        step.breakpoint = true;
    }
    snapStep(event) {
        if (!this.interactive)
            return;
        const step = event.detail.step;
        for (const each of this.steps) {
            if (this.editing)
                each.active = false;
            each.snap = false;
        }
        if (this.editing)
            step.active = true;
        step.snap = true;
    }
    unsnapStep(event) {
        if (!this.interactive)
            return;
        const step = event.detail.step;
        if (this.editing)
            step.active = false;
        step.snap = false;
    }
    update() {
        render$1(html `<style>
          #body {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          @media (min-width: 768px) {
            #body {
              flex-direction: row;
            }
          }
        </style>

        <div id="body">
          <slot></slot>
        </div>`, this.shadowRoot);
    }
    applyOperation(operation, ...targetQubits) {
        this.validateQubits(...targetQubits);
        const circuitStep = this.appendStep();
        const nqubit = Math.max(...targetQubits) + 1;
        for (let i = 0; i < nqubit; i++) {
            circuitStep.appendDropzone();
        }
        for (const each of targetQubits) {
            const op = operation.cloneNode();
            if (op instanceof PhaseGateElement) {
                op.phi = operation.phi;
            }
            if (op instanceof RxGateElement) {
                op.theta = operation.theta;
            }
            if (op instanceof RyGateElement) {
                op.theta = operation.theta;
            }
            if (op instanceof RzGateElement) {
                op.theta = operation.theta;
            }
            if (op instanceof WriteGateElement) {
                op.value = operation.value;
            }
            circuitStep.dropzones[each].assign(op);
        }
    }
    validateQubits(...qubits) {
        if (qubits.some((each) => each < 0)) {
            throw new Error("The index of the qubit must be greater than or equal to 0.");
        }
    }
    loadFromJson() {
        let jsonString;
        let circuitBlock = null;
        if (this.updateUrl) {
            jsonString = Util.urlJson;
        }
        else {
            jsonString = this.json;
        }
        if (jsonString === "" || jsonString === "new") {
            if (this.updateUrl) {
                this.resize();
            }
            return;
        }
        const jsonData = JSON.parse(jsonString);
        this.circuitTitle = (jsonData.title || "").trim();
        for (const step of jsonData.cols) {
            const circuitStep = this.appendStep();
            for (const instruction of step) {
                switch (true) {
                    case /^\|0>$/.test(instruction): {
                        circuitStep.appendOperation(WriteGateElement.create("0", { dragAndDrop: this.updateUrl }));
                        break;
                    }
                    case /^\|1>$/.test(instruction): {
                        circuitStep.appendOperation(WriteGateElement.create("1", { dragAndDrop: this.updateUrl }));
                        break;
                    }
                    case /^H$/.test(instruction): {
                        circuitStep.appendOperation(HGateElement.create({ dragAndDrop: this.updateUrl }));
                        break;
                    }
                    case /^H<(.+)$/.test(instruction): {
                        circuitStep.appendOperation(HGateElement.create({
                            dragAndDrop: this.updateUrl,
                            ifVar: RegExp.$1.trim(),
                        }));
                        break;
                    }
                    case /^X$/.test(instruction): {
                        circuitStep.appendOperation(XGateElement.create({ dragAndDrop: this.updateUrl }));
                        break;
                    }
                    case /^X<(.+)$/.test(instruction): {
                        circuitStep.appendOperation(XGateElement.create({
                            dragAndDrop: this.updateUrl,
                            ifVar: RegExp.$1.trim(),
                        }));
                        break;
                    }
                    case /^Y$/.test(instruction): {
                        circuitStep.appendOperation(YGateElement.create({ dragAndDrop: this.updateUrl }));
                        break;
                    }
                    case /^Z$/.test(instruction): {
                        circuitStep.appendOperation(ZGateElement.create({ dragAndDrop: this.updateUrl }));
                        break;
                    }
                    case /^P$/.test(instruction): {
                        circuitStep.appendOperation(PhaseGateElement.create({
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^P\((.+)\)$/.test(instruction): {
                        circuitStep.appendOperation(PhaseGateElement.create({
                            phi: RegExp.$1.replace("_", "/"),
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^X\^½$/.test(instruction): {
                        const rnotGate = new RnotGateElement();
                        rnotGate.dragAndDrop = this.updateUrl;
                        circuitStep.appendOperation(rnotGate);
                        break;
                    }
                    case /^X\^½<(.+)$/.test(instruction): {
                        const rnotGate = new RnotGateElement();
                        rnotGate.dragAndDrop = this.updateUrl;
                        rnotGate.if = RegExp.$1.trim();
                        circuitStep.appendOperation(rnotGate);
                        break;
                    }
                    case /^Rx$/.test(instruction): {
                        circuitStep.appendOperation(RxGateElement.create({
                            theta: "π/2",
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Rx\((.+)\)$/.test(instruction): {
                        circuitStep.appendOperation(RxGateElement.create({
                            theta: RegExp.$1.replace("_", "/"),
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Ry$/.test(instruction): {
                        circuitStep.appendOperation(RyGateElement.create({
                            theta: "π/2",
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Ry\((.+)\)$/.test(instruction): {
                        circuitStep.appendOperation(RyGateElement.create({
                            theta: RegExp.$1.replace("_", "/"),
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Rz$/.test(instruction): {
                        circuitStep.appendOperation(RzGateElement.create({
                            theta: "π/2",
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Rz\((.+)\)$/.test(instruction): {
                        circuitStep.appendOperation(RzGateElement.create({
                            theta: RegExp.$1.replace("_", "/"),
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Swap$/.test(instruction): {
                        circuitStep.appendOperation(SwapGateElement.create({
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^•$/.test(instruction): {
                        circuitStep.appendOperation(ControlGateElement.create({
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Bloch$/.test(instruction): {
                        circuitStep.appendOperation(BlochDisplayElement.create({
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Measure$/.test(instruction): {
                        circuitStep.appendOperation(MeasurementGateElement.create({
                            dragAndDrop: this.updateUrl,
                        }));
                        break;
                    }
                    case /^Measure>(.+)$/.test(instruction): {
                        circuitStep.appendOperation(MeasurementGateElement.create({
                            dragAndDrop: this.updateUrl,
                            flag: RegExp.$1.trim(),
                        }));
                        break;
                    }
                    case /^[[{](.+)$/.test(instruction): {
                        const comment = RegExp.$1;
                        circuitStep.remove();
                        circuitBlock = new CircuitBlockElement();
                        circuitBlock.comment = comment;
                        circuitBlock.setAttribute("data-targets", "quantum-circuit.blocks");
                        this.append(circuitBlock);
                        break;
                    }
                    case /^[\]}]$/.test(instruction): {
                        circuitStep.remove();
                        circuitBlock.finalize();
                        break;
                    }
                    default: {
                        if (instruction === 1) {
                            if (circuitStep.qubitCount === 0) {
                                circuitStep.keep = true;
                            }
                            else {
                                circuitStep.keep = false;
                            }
                        }
                        else {
                            throw new Error(`Unknown instruction: ${instruction}`);
                        }
                        circuitStep.appendDropzone();
                    }
                }
                circuitStep.updateConnections();
            }
        }
        this.resize();
    }
    updateStepConnections(event) {
        const step = event.detail.step;
        step.updateConnections();
    }
    updateWires(event) {
        const dropzone = event.detail
            .dropzone;
        const index = dropzone.index();
        Util.notNull(index);
        let wireQuantum = false;
        for (const step of this.steps) {
            const dz = step.dropzones[index];
            Util.notNull(dz);
            dz.inputWireQuantum = wireQuantum;
            if (dz.draggableTagName === "write-gate") {
                dz.inputWireQuantum = wireQuantum;
                dz.outputWireQuantum = true;
                wireQuantum = true;
            }
            else if (dz.draggableTagName === "measurement-gate") {
                dz.inputWireQuantum = wireQuantum;
                dz.outputWireQuantum = false;
                wireQuantum = false;
            }
            else {
                dz.inputWireQuantum = wireQuantum;
                dz.outputWireQuantum = wireQuantum;
            }
        }
    }
    updateAllSteps() {
        for (const each of this.steps) {
            each.updateWires();
            each.updateConnections();
        }
    }
    prepareForDrop() {
        this.interactive = true;
        this.editing = true;
        this.disableDraggablesOnCircuitHover();
        this.appendWire();
    }
    disableDraggablesOnCircuitHover() {
        for (const each of this.draggablesOnCircuit) {
            each.hoverable = false;
        }
    }
    enableDraggablesHover() {
        for (const each of this.draggables) {
            each.hoverable = true;
        }
    }
    get draggables() {
        return Array.from(this.querySelectorAll("[data-drag-and-drop]"));
    }
    get draggablesOnCircuit() {
        return Array.from(this.querySelectorAll("[data-drag-and-drop]:not([data-grabbed])"));
    }
    appendWire() {
        if (this.qubitCount >= this.maxWireCount)
            return;
        this.wireCount += 1;
        for (const each of this.steps) {
            each.appendDropzone();
        }
    }
    addCircuitStepAfter(stepIndex) {
        const newStep = new CircuitStepElement();
        newStep.shadow = true;
        for (let i = 0; i < this.wireCount; i++) {
            newStep.appendDropzone();
        }
        if (stepIndex === -1) {
            this.prepend(newStep);
        }
        else {
            const step = this.steps[stepIndex];
            const stepParentEl = step.parentElement;
            Util.notNull(stepParentEl);
            stepParentEl.insertBefore(newStep, step.nextSibling);
        }
        return newStep;
    }
    resize() {
        this.removeEmptySteps();
        this.appendMinimumSteps();
        this.removeLastEmptyWires();
    }
    removeEmptySteps() {
        for (const each of this.emptySteps) {
            each.remove();
        }
        for (const each of this.steps) {
            each.shadow = false;
        }
    }
    appendMinimumSteps() {
        const nsteps = this.minStepCount - this.steps.length;
        for (let i = 0; i < nsteps; i++) {
            this.appendStep();
        }
        const largestNqubit = this.largestStep && this.largestStep.wireCount > this.minWireCount
            ? this.largestStep.wireCount
            : this.minWireCount;
        for (const each of this.steps) {
            const nDropzone = largestNqubit - each.wireCount;
            for (let j = 0; j < nDropzone; j++) {
                each.appendDropzone();
            }
        }
    }
    removeLastEmptyWires() {
        while (this.steps.every((each) => {
            return each.wireCount > this.minWireCount && !each.lastDropzone.occupied;
        })) {
            for (const each of this.steps) {
                each.lastDropzone.remove();
            }
        }
        const firstStep = this.steps[0];
        Util.notNull(firstStep);
        this.wireCount = firstStep.wireCount;
    }
    clear() {
        Util.updateUrlJson('{"cols":[]}');
        location.reload();
    }
    toJson() {
        let isInBlock = false;
        const cols = [];
        for (const each of this.nonEmptySteps) {
            if (each.isInBlock) {
                if (!isInBlock) {
                    const block = each.block;
                    cols.push(`["[${block.comment}"]`);
                    isInBlock = true;
                }
            }
            else {
                if (isInBlock) {
                    cols.push('["]"]');
                    isInBlock = false;
                }
            }
            cols.push(each.toJson());
        }
        if (isInBlock) {
            cols.push('["]"]');
        }
        if (this.circuitTitle !== "") {
            return `{"cols":[${cols.join(",")}],"title":"${this.circuitTitle}"}`;
        }
        else {
            return `{"cols":[${cols.join(",")}]}`;
        }
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "json", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "updateUrl", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "minWireCount", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "maxWireCount", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "wireCount", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "minStepCount", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "interactive", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "editing", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "qubitCount", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], QuantumCircuitElement.prototype, "circuitTitle", void 0);
__decorate([
    targets,
    __metadata("design:type", Array)
], QuantumCircuitElement.prototype, "blocks", void 0);
QuantumCircuitElement = __decorate([
    controller
], QuantumCircuitElement);

let CircleNotationElement = class CircleNotationElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this.qubitCount = 1;
        this.size = "";
        this.magnitudes = "1.0";
        this.phases = "";
        this.multiQubits = false;
        this.showKets = false;
    }
    setAmplitudes(amplitudes) {
        const qubitCircles = this.qubitCircles;
        for (const [i, each] of Object.entries(amplitudes)) {
            const qubitCircle = qubitCircles[parseInt(i)];
            qubitCircle.setAttribute("data-amplitude-real", each.real.toString());
            qubitCircle.setAttribute("data-amplitude-imag", each.imag.toString());
            const magnitude = each.abs();
            this.setRoundedMagnitude(qubitCircle, magnitude);
            if (magnitude === 0)
                continue;
            const phaseDeg = (each.phase() / Math.PI) * 180;
            this.setRoundedPhase(qubitCircle, phaseDeg);
        }
    }
    connectedCallback() {
        if (this.shadowRoot !== null)
            return;
        this.attachShadow({ mode: "open" });
        this.update();
        this.initQubitCirclePopup(this.qubitCircles);
        if (this.multiQubits) {
            this.startQubitCircleVisibilityObserver();
            this.dispatchLoadEvent();
        }
    }
    dispatchLoadEvent() {
        this.dispatchEvent(new Event("circle-notation.load", {
            bubbles: true,
        }));
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (this.shadowRoot === null)
            return;
        if (oldValue === newValue)
            return;
        if (name === "data-qubit-count") {
            this.dispatchVisibilityChangedEvent();
        }
    }
    startQubitCircleVisibilityObserver() {
        const options = {
            root: this,
            threshold: [0, 0.2],
        };
        const callback = (entries) => {
            for (const each of entries) {
                const group = each.target;
                if (each.intersectionRatio >= 0.2) {
                    group.setAttribute("data-targets", "circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups");
                    this.dispatchVisibilityChangedEvent();
                }
                else if (each.intersectionRatio === 0) {
                    group.setAttribute("data-targets", "circle-notation.qubitCircleGroups");
                }
            }
        };
        const observer = new IntersectionObserver(callback, options);
        for (const each of this.qubitCircleGroups) {
            observer.observe(each);
        }
    }
    dispatchVisibilityChangedEvent() {
        this.dispatchEvent(new CustomEvent("circle-notation.visibilityChanged", {
            detail: this.visibleQubitCircleKets,
            bubbles: true,
        }));
    }
    get visibleQubitCircleKets() {
        const maxKet = 2 ** this.qubitCount;
        return this.visibleQubitCircles
            .map((each) => parseInt(each.getAttribute("data-ket")))
            .filter((each) => each < maxKet);
    }
    get visibleQubitCircles() {
        const groups = this.visibleQubitCircleGroups.map((each) => Array.from(each.querySelectorAll(".qubit-circle")));
        return [].concat(...groups);
    }
    update() {
        render$1(html `<style>
          @media (min-width: 768px) {
            :host([data-qubit-count="8"]),
            :host([data-qubit-count="9"]),
            :host([data-qubit-count="10"]) {
              height: 10rem !important;
            }
          }

          .qubit-circle-group--size4 {
            display: flex;
            flex-direction: row;
          }

          .qubit-circle-group--size8 {
            display: flex;
            flex-direction: row;
          }

          :host([data-qubit-count="3"]) .qubit-circle-group--size8 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="3"]) .qubit-circle-group--size8 {
              flex-direction: row;
            }
          }

          .qubit-circle-group--size16 {
            display: flex;
            flex-direction: row;
          }

          @media (min-width: 768px) {
            .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count="4"]) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          :host([data-qubit-count="4"])
            .qubit-circle-group--size16
            .qubit-circle-group--size8:last-child {
            margin-left: 0;
            margin-top: 0;
          }

          :host([data-qubit-count="5"]) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count="5"])
            .qubit-circle-group--size16
            .qubit-circle-group--size8:nth-child(even) {
            margin-left: 0;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"])
              .qubit-circle-group--size16
              .qubit-circle-group--size8:nth-child(even) {
              margin-left: 0;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="6"]) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: column;
            }
            :host([data-qubit-count="7"]) .qubit-circle-group--size32,
            :host([data-qubit-count="8"]) .qubit-circle-group--size32,
            :host([data-qubit-count="9"]) .qubit-circle-group--size32,
            :host([data-qubit-count="10"]) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: row;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="6"]) .qubit-circle-group--size64,
            :host([data-qubit-count="7"]) .qubit-circle-group--size64,
            :host([data-qubit-count="8"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count="9"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count="10"]) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }
          }

          :host([data-qubit-count="1"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count="1"])
            .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count="1"]) .qubit-circle:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count="2"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count="2"])
            .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count="2"]) .qubit-circle:nth-of-type(n + 5) {
            display: none;
          }

          :host([data-qubit-count="3"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count="3"])
            .qubit-circle-group--size8:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count="4"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count="4"])
            .qubit-circle-group--size16:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count="5"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="5"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="5"])
            .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count="5"])
            .qubit-circle-group--size32:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count="6"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="6"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="6"])
            .qubit-circle-group--size64:nth-of-type(n + 2) {
            display: none;
          }

          :host([data-qubit-count="7"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="7"])
            .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count="7"])
            .qubit-circle-group--size64:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count="8"])
            .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count="8"])
            .qubit-circle-group--size128:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count="9"])
            .qubit-circle-group--size256:nth-of-type(n + 3) {
            display: none;
          }

          #body {
            display: flex;
            flex-direction: row;
          }

          :host([data-multi-qubits]) #body {
            display: inline-block;
            margin-top: auto;
            margin-bottom: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          @media (min-width: 768px) {
            :host([data-multi-qubits]) #body {
              display: inline-block;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 1.25rem;
              padding-bottom: 1.25rem;
            }
          }

          .qubit-circle {
            position: relative;
            height: 32px;
            width: 32px;
          }

          :host([data-size="xs"]) .qubit-circle {
            height: 17px !important;
            width: 17px !important;
          }

          :host([data-size="sm"]) .qubit-circle {
            height: 25px !important;
            width: 25px !important;
          }

          :host([data-size="base"]) .qubit-circle {
            height: 32px !important;
            width: 32px !important;
          }

          :host([data-size="lg"]) .qubit-circle {
            height: 48px !important;
            width: 48px !important;
          }

          :host([data-size="xl"]) .qubit-circle {
            height: 64px !important;
            width: 64px !important;
          }

          :host([data-qubit-count="1"]:not([data-multi-qubits])) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-qubit-count="1"]) .qubit-circle,
          :host([data-qubit-count="2"]) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-qubit-count="3"]) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="3"]) .qubit-circle {
              height: 64px;
              width: 64px;
            }
          }

          :host([data-qubit-count="4"]) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="4"]) .qubit-circle {
              height: 48px;
              width: 48px;
            }
          }

          :host([data-qubit-count="5"]) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle {
              height: 32px;
              width: 32px;
            }
          }

          :host([data-qubit-count="6"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="6"]) .qubit-circle {
              height: 25px;
              width: 25px;
            }
          }

          :host([data-qubit-count="7"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="7"]) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-qubit-count="8"]) .qubit-circle,
          :host([data-qubit-count="9"]) .qubit-circle,
          :host([data-qubit-count="10"]) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="8"]) .qubit-circle,
            :host([data-qubit-count="9"]) .qubit-circle,
            :host([data-qubit-count="10"]) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-show-kets]) .qubit-circle::before {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            white-space: nowrap;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
              "Liberation Mono", "Courier New", monospace;
            font-size: 0.75rem;
            color: var(--colors-wolf, #777777);
            margin-bottom: -18px;
            content: "|" attr(data-ket) "⟩";
          }

          .qubit-circle__magnitude {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #e5e5e5;
            border-style: solid;
          }

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size="xs"]) .qubit-circle__magnitude,
          :host([data-size="sm"]) .qubit-circle__magnitude {
            border-width: 1px;
          }
          :host([data-size="base"]) .qubit-circle__magnitude,
          :host([data-size="lg"]) .qubit-circle__magnitude,
          :host([data-size="xl"]) .qubit-circle__magnitude {
            border-width: 2px;
          }

          :host([data-qubit-count="5"]) .qubit-circle__magnitude,
          :host([data-qubit-count="6"]) .qubit-circle__magnitude,
          :host([data-qubit-count="7"]) .qubit-circle__magnitude,
          :host([data-qubit-count="8"]) .qubit-circle__magnitude,
          :host([data-qubit-count="9"]) .qubit-circle__magnitude,
          :host([data-qubit-count="10"]) .qubit-circle__magnitude {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle__magnitude {
              border-width: 2px;
            }
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            content: "";
            background-color: #1cb0f6;
            transform: scaleX(0) scaleY(0);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-fox, #ff9600);
          }

          .qubit-circle[data-rounded-magnitude="0.1"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-rounded-magnitude="0.2"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-rounded-magnitude="0.3"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-rounded-magnitude="0.4"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-rounded-magnitude="0.5"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-rounded-magnitude="0.6"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-rounded-magnitude="0.7"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-rounded-magnitude="0.8"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-rounded-magnitude="0.9"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-rounded-magnitude="1"]
            > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1);
          }

          .qubit-circle__phase {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #777777;
            border-style: solid;
            transform: rotate(0deg);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size="xs"]) .qubit-circle__phase,
          :host([data-size="sm"]) .qubit-circle__phase {
            border-width: 1px;
          }
          :host([data-size="base"]) .qubit-circle__phase,
          :host([data-size="lg"]) .qubit-circle__phase,
          :host([data-size="xl"]) .qubit-circle__phase {
            border-width: 2px;
          }

          :host([data-qubit-count="5"]) .qubit-circle__phase,
          :host([data-qubit-count="6"]) .qubit-circle__phase,
          :host([data-qubit-count="7"]) .qubit-circle__phase,
          :host([data-qubit-count="8"]) .qubit-circle__phase,
          :host([data-qubit-count="9"]) .qubit-circle__phase,
          :host([data-qubit-count="10"]) .qubit-circle__phase {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle__phase {
              border-width: 2px;
            }
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude="0"] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase="10"] > .qubit-circle__phase {
            transform: rotate(-10deg);
          }

          .qubit-circle[data-rounded-phase="20"] > .qubit-circle__phase {
            transform: rotate(-20deg);
          }

          .qubit-circle[data-rounded-phase="30"] > .qubit-circle__phase {
            transform: rotate(-30deg);
          }

          .qubit-circle[data-rounded-phase="40"] > .qubit-circle__phase {
            transform: rotate(-40deg);
          }

          .qubit-circle[data-rounded-phase="50"] > .qubit-circle__phase {
            transform: rotate(-50deg);
          }

          .qubit-circle[data-rounded-phase="60"] > .qubit-circle__phase {
            transform: rotate(-60deg);
          }

          .qubit-circle[data-rounded-phase="70"] > .qubit-circle__phase {
            transform: rotate(-70deg);
          }

          .qubit-circle[data-rounded-phase="80"] > .qubit-circle__phase {
            transform: rotate(-80deg);
          }

          .qubit-circle[data-rounded-phase="90"] > .qubit-circle__phase {
            transform: rotate(-90deg);
          }

          .qubit-circle[data-rounded-phase="100"] > .qubit-circle__phase {
            transform: rotate(-100deg);
          }

          .qubit-circle[data-rounded-phase="110"] > .qubit-circle__phase {
            transform: rotate(-110deg);
          }

          .qubit-circle[data-rounded-phase="120"] > .qubit-circle__phase {
            transform: rotate(-120deg);
          }

          .qubit-circle[data-rounded-phase="130"] > .qubit-circle__phase {
            transform: rotate(-130deg);
          }

          .qubit-circle[data-rounded-phase="140"] > .qubit-circle__phase {
            transform: rotate(-140deg);
          }

          .qubit-circle[data-rounded-phase="150"] > .qubit-circle__phase {
            transform: rotate(-150deg);
          }

          .qubit-circle[data-rounded-phase="160"] > .qubit-circle__phase {
            transform: rotate(-160deg);
          }

          .qubit-circle[data-rounded-phase="170"] > .qubit-circle__phase {
            transform: rotate(-170deg);
          }

          .qubit-circle[data-rounded-phase="180"] > .qubit-circle__phase {
            transform: rotate(-180deg);
          }

          .qubit-circle[data-rounded-phase="190"] > .qubit-circle__phase {
            transform: rotate(-190deg);
          }

          .qubit-circle[data-rounded-phase="200"] > .qubit-circle__phase {
            transform: rotate(-200deg);
          }

          .qubit-circle[data-rounded-phase="210"] > .qubit-circle__phase {
            transform: rotate(-210deg);
          }

          .qubit-circle[data-rounded-phase="220"] > .qubit-circle__phase {
            transform: rotate(-220deg);
          }

          .qubit-circle[data-rounded-phase="230"] > .qubit-circle__phase {
            transform: rotate(-230deg);
          }

          .qubit-circle[data-rounded-phase="240"] > .qubit-circle__phase {
            transform: rotate(-240deg);
          }

          .qubit-circle[data-rounded-phase="250"] > .qubit-circle__phase {
            transform: rotate(-250deg);
          }

          .qubit-circle[data-rounded-phase="260"] > .qubit-circle__phase {
            transform: rotate(-260deg);
          }

          .qubit-circle[data-rounded-phase="270"] > .qubit-circle__phase {
            transform: rotate(-270deg);
          }

          .qubit-circle[data-rounded-phase="280"] > .qubit-circle__phase {
            transform: rotate(-280deg);
          }

          .qubit-circle[data-rounded-phase="290"] > .qubit-circle__phase {
            transform: rotate(-290deg);
          }

          .qubit-circle[data-rounded-phase="300"] > .qubit-circle__phase {
            transform: rotate(-300deg);
          }

          .qubit-circle[data-rounded-phase="310"] > .qubit-circle__phase {
            transform: rotate(-310deg);
          }

          .qubit-circle[data-rounded-phase="320"] > .qubit-circle__phase {
            transform: rotate(-320deg);
          }

          .qubit-circle[data-rounded-phase="330"] > .qubit-circle__phase {
            transform: rotate(-330deg);
          }

          .qubit-circle[data-rounded-phase="340"] > .qubit-circle__phase {
            transform: rotate(-340deg);
          }

          .qubit-circle[data-rounded-phase="350"] > .qubit-circle__phase {
            transform: rotate(-350deg);
          }

          .qubit-circle[data-rounded-phase="360"] > .qubit-circle__phase {
            transform: rotate(-360deg);
          }

          .qubit-circle__phase::after {
            width: 2px;
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: #4b4b4b;
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            content: "";
          }

          :host([data-qubit-count="5"]) .qubit-circle__phase::after,
          :host([data-qubit-count="6"]) .qubit-circle__phase::after,
          :host([data-qubit-count="7"]) .qubit-circle__phase::after,
          :host([data-qubit-count="8"]) .qubit-circle__phase::after,
          :host([data-qubit-count="9"]) .qubit-circle__phase::after,
          :host([data-qubit-count="10"]) .qubit-circle__phase::after {
            width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count="5"]) .qubit-circle__phase::after {
              width: 2px;
            }
          }

          :host([data-size="xs"]) .qubit-circle__phase::after,
          :host([data-size="sm"]) .qubit-circle__phase::after {
            width: 1px;
          }
          :host([data-size="base"]) .qubit-circle__phase::after,
          :host([data-size="lg"]) .qubit-circle__phase::after,
          :host([data-size="xl"]) .qubit-circle__phase::after {
            width: 2px;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`, this.shadowRoot);
        for (const [i, each] of this.magnitudes.split(",").entries()) {
            this.setRoundedMagnitude(this.qubitCircles[i], parseFloat(each));
        }
        for (const [i, each] of this.phases.split(",").entries()) {
            const qubitCircle = this.qubitCircles[i];
            const phase = each ? parseFloat(each) : 0;
            this.setRoundedPhase(qubitCircle, phase);
            const qubitCirclePhaseEl = qubitCircle.querySelector(".qubit-circle__phase");
            qubitCirclePhaseEl.style.transform = `rotate(${-phase}deg)`;
        }
    }
    setRoundedMagnitude(qubitCircle, magnitude) {
        if (qubitCircle === null)
            return;
        if (qubitCircle === undefined)
            return;
        let roundedMag = Math.round(magnitude * 100);
        roundedMag =
            roundedMag < 10
                ? roundedMag === 0
                    ? 0
                    : 10
                : Math.round(roundedMag / 10) * 10;
        roundedMag = roundedMag / 100;
        qubitCircle.setAttribute("data-magnitude", magnitude.toString());
        qubitCircle.setAttribute("data-rounded-magnitude", roundedMag.toString());
    }
    setRoundedPhase(qubitCircle, phase) {
        if (qubitCircle === null)
            return;
        if (qubitCircle === undefined)
            return;
        let roundedPhase = Math.round(phase / 10) * 10;
        if (roundedPhase < 0)
            roundedPhase = 360 + roundedPhase;
        qubitCircle.setAttribute("data-phase", phase.toString());
        qubitCircle.setAttribute("data-rounded-phase", roundedPhase.toString());
    }
    get qubitCirclesHtml() {
        if (this.multiQubits)
            return this.stateVectorHtml(10);
        return html `${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
    }
    qubitCircleHtml(ket) {
        return html `<div
      class="qubit-circle"
      data-ket="${ket}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`;
    }
    stateVectorHtml(maxNqubit) {
        let stateVector = html ``;
        const groups = this.qubitCircleGroup([...Array(2 ** maxNqubit).keys()], (qc256) => {
            return this.qubitCircleGroup(qc256, (qc128) => {
                return this.qubitCircleGroup(qc128, (qc64) => {
                    return this.qubitCircleGroup(qc64, (qc32) => {
                        return this.qubitCircleGroup(qc32, (qc16) => {
                            return this.qubitCircleGroup(qc16, (qc8) => {
                                return this.qubitCircleGroup(qc8);
                            });
                        });
                    });
                });
            });
        }, 256);
        for (const each of groups) {
            stateVector = html `${stateVector} ${each}`;
        }
        return stateVector;
    }
    qubitCircleGroup(kets, block, size = kets.length / 2) {
        const arrayChunk = (numbers, chunkSize = 1) => {
            return numbers.reduce((acc, _value, index) => index % chunkSize
                ? acc
                : [...acc, numbers.slice(index, index + chunkSize)], []);
        };
        return arrayChunk(kets, size).map((each) => {
            let group = html ``;
            if (block) {
                for (const subGroup of block(each)) {
                    group = html `${group} ${subGroup}`;
                }
            }
            else {
                for (const ket of each) {
                    group = html `${group} ${this.qubitCircleHtml(ket)}`;
                }
            }
            if (size === 64) {
                return html `<div
          class="qubit-circle-group--size${size}"
          data-targets="circle-notation.qubitCircleGroups"
        >
          ${group}
        </div>`;
            }
            else {
                return html `<div class="qubit-circle-group--size${size}">${group}</div>`;
            }
        });
    }
    initQubitCirclePopup(qubitCircles) {
        const tippyInstances = tippy(qubitCircles);
        createSingleton(tippyInstances, {
            allowHTML: true,
            animation: false,
            arrow: ROUND_ARROW + ROUND_ARROW,
            delay: 0,
            theme: "qni",
        });
    }
    setPopupContent(event) {
        if (this.popupEl === null)
            return;
        const qubitCircleEl = event.target;
        const ket = this.ketDecimal(qubitCircleEl);
        const dataAmpReal = qubitCircleEl.getAttribute("data-amplitude-real");
        const dataAmpImag = qubitCircleEl.getAttribute("data-amplitude-imag");
        const dataMagnitude = qubitCircleEl.getAttribute("data-magnitude");
        const dataPhase = qubitCircleEl.getAttribute("data-phase");
        let amplitude;
        if (dataAmpReal === null || dataAmpImag === null) {
            amplitude = Complex.ZERO;
        }
        else {
            amplitude = new Complex(parseFloat(dataAmpReal), parseFloat(dataAmpImag));
        }
        let phase;
        if (dataMagnitude && parseFloat(dataMagnitude) === 0) {
            phase = 0;
        }
        else {
            phase = dataPhase ? parseFloat(dataPhase) : 0;
        }
        this.setQubitCirclePopupContent(this.popupEl.content, qubitCircleEl, ket, amplitude, dataMagnitude ? parseFloat(dataMagnitude) : 0, phase, this.qubitCount);
    }
    setQubitCirclePopupContent(popupFrag, qubitCircleEl, ket, amplitude, magnitude, phase, nqubit) {
        const popup = qubitCircleEl._tippy;
        popup.setContent(this.popupContent(popupFrag, ket, amplitude, magnitude, phase, nqubit));
    }
    popupContent(popupFrag, ket, amplitude, magnitude, phase, nqubit) {
        const ketBinaryEl = popupFrag.querySelector(".circle-notation-popup__ket-binary");
        const ketDecimalEl = popupFrag.querySelector(".circle-notation-popup__ket-decimal");
        const amplitudeRealEl = popupFrag.querySelector(".circle-notation-popup__amplitude-real");
        const amplitudeImagEl = popupFrag.querySelector(".circle-notation-popup__amplitude-imag");
        const probabilityEl = popupFrag.querySelector(".circle-notation-popup__probability");
        const phaseEl = popupFrag.querySelector(".circle-notation-popup__phase");
        if (ketBinaryEl) {
            ketBinaryEl.textContent = ket.toString(2).padStart(nqubit, "0");
        }
        if (ketDecimalEl) {
            ketDecimalEl.textContent = ket.toString();
        }
        if (amplitudeRealEl) {
            amplitudeRealEl.textContent = this.forceSigned(amplitude.real, 5);
        }
        if (amplitudeImagEl) {
            amplitudeImagEl.textContent = `${this.forceSigned(amplitude.imag, 5)}i`;
        }
        if (probabilityEl) {
            probabilityEl.textContent = `${this.forceSigned(magnitude * magnitude * 100, 4)}%`;
        }
        if (phaseEl) {
            phaseEl.textContent = `${this.forceSigned(phase, 2)}°`;
        }
        const div = document.createElement("div");
        div.appendChild(popupFrag.cloneNode(true));
        return div.innerHTML;
    }
    get popupEl() {
        return document.getElementById("circle-notation-popup");
    }
    forceSigned(value, d) {
        return (value >= 0 ? "+" : "") + value.toFixed(d);
    }
    ketDecimal(el) {
        const dataKet = el.getAttribute("data-ket");
        return parseInt(dataKet);
    }
};
__decorate([
    attr,
    __metadata("design:type", Object)
], CircleNotationElement.prototype, "qubitCount", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircleNotationElement.prototype, "size", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircleNotationElement.prototype, "magnitudes", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircleNotationElement.prototype, "phases", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircleNotationElement.prototype, "multiQubits", void 0);
__decorate([
    attr,
    __metadata("design:type", Object)
], CircleNotationElement.prototype, "showKets", void 0);
__decorate([
    targets,
    __metadata("design:type", Array)
], CircleNotationElement.prototype, "qubitCircles", void 0);
__decorate([
    targets,
    __metadata("design:type", Array)
], CircleNotationElement.prototype, "qubitCircleGroups", void 0);
__decorate([
    targets,
    __metadata("design:type", Array)
], CircleNotationElement.prototype, "visibleQubitCircleGroups", void 0);
CircleNotationElement = __decorate([
    controller
], CircleNotationElement);

const reloadIcon = html `<style>
    .reload-icon {
      fill: currentColor;
      color: rgb(255, 255, 255);
      height: 60%;
      width: 60%;
    }

    #button:disabled > .reload-icon {
      display: none;
    }
  </style>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    class="reload-icon"
  >
    <path
      d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"
    />
  </svg>`;
const ovalLoaderIcon = html `<style>
    .oval-loader-icon {
      display: none;
      height: 60%;
      width: 60%;
    }

    #button:disabled > .oval-loader-icon {
      stroke: currentColor;
      color: rgb(255, 255, 255);
      display: block;
    }
  </style>

  <svg
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
    class="oval-loader-icon"
  >
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>`;
let RunCircuitButtonElement = class RunCircuitButtonElement extends HTMLElement {
    runSimulator() {
        this.disable();
        this.dispatchEvent(new Event("run-circuit-button.click", { bubbles: true }));
    }
    disable() {
        this.button.disabled = true;
    }
    enable() {
        this.button.disabled = false;
    }
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.update();
        this.dispatchEvent(new Event("run-circuit-button.load", {
            bubbles: true,
        }));
    }
    update() {
        render$1(html `<style>
          #button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgb(206, 130, 255);
            border-radius: 9999px;
            border-width: 0px;
            cursor: pointer;
            width: 4rem;
            height: 4rem;
            box-shadow: 0 0 #0000, 0 0 #0000,
              0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
          }

          #button:disabled {
            cursor: wait;
          }

          #button:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
          }
        </style>

        <button
          id="button"
          type="button"
          data-action="click:run-circuit-button#runSimulator"
          data-target="run-circuit-button.button"
          aria-label="Run circuit"
        >
          ${reloadIcon} ${ovalLoaderIcon}
        </button>`, this.shadowRoot);
    }
};
__decorate([
    target,
    __metadata("design:type", HTMLInputElement)
], RunCircuitButtonElement.prototype, "button", void 0);
RunCircuitButtonElement = __decorate([
    controller
], RunCircuitButtonElement);

export { BlochDisplayElement, CircleNotationElement, CircuitBlockElement, CircuitDropzoneElement, CircuitEditorElement, CircuitStepElement, ControlGateElement, HGateElement, MeasurementGateElement, PaletteDropzoneElement, PhaseGateElement, QuantumCircuitElement, QuantumSimulatorElement, RnotGateElement, RunCircuitButtonElement, RxGateElement, RyGateElement, RzGateElement, SwapGateElement, WriteGateElement, XGateElement, YGateElement, ZGateElement };
//# sourceMappingURL=index.js.map
