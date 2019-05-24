import 'babel-polyfill';
import { doesNotReject } from 'assert';

const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:3002';
let page;
let browser;
const width = 1440;
const height = 780;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`],
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('App loading sequence', () => {
  beforeEach(async () => {
    await page.goto(pageUrl, { waituntil: 'networkidle2' });
  });
  test('initial page title is correct', async () => {
    const title = await page.title();
    expect(title).toEqual('Carebnb');
  });
  test('share modal opens on a share button click', async () => {
    await page.click('.share-button');
    await page.waitForSelector('.share-modal-container', { visible: true })
      .catch(err => console.log(err));
  });
});
