import 'babel-polyfill';

const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:3002/?listingid=5';
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
  test('save button text should change to "Saved" on click', async () => {
    await page.click('.save-button');
    const saveButtonText = await page.$eval('.save-button-text', el => el.innerHTML);
    expect(saveButtonText).toEqual('Saved');
  });
  test('save button text should change back to "Save" on click', async () => {
    await page.click('.save-button');
    const saveButtonText = await page.$eval('.save-button-text', el => el.innerHTML);
    expect(saveButtonText).toEqual('Save');
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
    const hoveredPhotoOpacity = await page.evaluate(() => getComputedStyle(document.getElementById('Photo-0'), null).opacity);
    const unhoveredPhotoOpacity = await page.evaluate(() => getComputedStyle(document.getElementById('Photo-1'), null).opacity);
    expect(hoveredPhotoOpacity).toEqual('1');
    expect(unhoveredPhotoOpacity).toEqual('0.7');
  });
  test('photo slideshow modal opens on a view photos button click', async () => {
    await page.click('.view-photos-button');
    await page.waitForSelector('.photo-slideshow-modal', { visible: true })
      .catch(err => console.log(err));
  });
  test('photo slideshow modal closes when X is clicked', async () => {
    await page.click('.photo-slideshow-close-button');
    await page.waitForSelector('.photo-slideshow-modal', { visible: false })
      .catch(err => console.log(err));
  });
  test('photo slideshow modal should open to specific photo when that photo is clicked', async () => {
    await page.click('#Photo-1');
    const idOfPhoto = await page.$eval('.main-photo', el => el.id);
    expect(idOfPhoto).toEqual('Photo-1');
  });
  test('photo slideshow modal should advance one photo on next arrow click', async () => {
    await page.click('.ps-next-arrow');
    const idOfPhoto = await page.$eval('.main-photo', el => el.id);
    expect(idOfPhoto).toEqual('Photo-2');
  });
  test('photo slideshow modal should advance one photo on click to main photo', async () => {
    await page.click('.main-photo');
    const idOfPhoto = await page.$eval('.main-photo', el => el.id);
    expect(idOfPhoto).toEqual('Photo-3');
  });
  test('photo slideshow modal should go back one photo on click previous arrow click', async () => {
    await page.click('.ps-previous-arrow');
    const idOfPhoto = await page.$eval('.main-photo', el => el.id);
    expect(idOfPhoto).toEqual('Photo-2');
  });
  test('mini slideshow should be hidden on click to "Hide Photo List" button', async () => {
    await page.click('.mini-slideshow-vis-button');
    await page.waitForSelector('#ul', { visible: false })
      .catch(err => console.log(err));
  });
  test('mini slideshow should be reappear on click to "Show Photo List" button', async () => {
    await page.click('.mini-slideshow-vis-button');
    await page.waitForSelector('#ul', { visible: true })
      .catch(err => console.log(err));
  });
});
