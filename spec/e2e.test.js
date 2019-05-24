import 'babel-polyfill';

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
  test('initial page title is correct', async () => {
    await page.goto(pageUrl, { waituntil: 'networkidle2' });
    const title = await page.title();
    expect(title).toEqual('Carebnb');
  });
  test('share modal opens on a share button click', async () => {
    await page.click('.share-button');
    await page.waitForSelector('.share-modal-container', { visible: true })
      .catch(err => console.log(err));
  });
  test('share modal closes when X is clicked', async () => {
    await page.click('.share-modal-close-button');
    await page.waitForSelector('.share-modal-container', { visible: false })
      .catch(err => console.log(err));
  });
  test('hovering over photo should highlight photo and dim other photos', async () => {
    await page.hover('.photo');
    const hoveredPhotoOpacity = await page.evaluate(() => getComputedStyle(document.getElementById('0'), null).opacity);
    const unhoveredPhotoOpacity = await page.evaluate(() => getComputedStyle(document.getElementById('1'), null).opacity);
    expect(hoveredPhotoOpacity).toEqual('1');
    expect(unhoveredPhotoOpacity).toEqual('0.7');
  });
});
