/* eslint-disable */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const jsdom = require('jsdom')
const { JSDOM } = jsdom;

const dom = new JSDOM('', {url: "http://localhost"})
const { document } = dom.window;

const exposedProperties = ['window', 'navigator', 'document'];
const storage = {};

global.document = document;
global.window = document.defaultView;
global.localStorage = {
  getItem(key) {
    return storage[key];
  },
  setItem(key, item) {
    storage[key] = item;
  },
};
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
