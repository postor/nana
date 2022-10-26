const puppeteer = require("puppeteer");
const { setTimeout } = require('timers/promises')
// const ms = require("ms");
//const Promise = require("bluebird");
//const { delay } = require("bluebird");
// const _ = require("lodash");

async function scroll(page) {
  const direction = 5000
  await page.evaluate(({ direction }) => {
    document.documentElement.scrollBy({
      top: direction,
      left: 0,
      // behavior: "smooth",
    });
  },
    {
      direction
    }
  );
}


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage'],
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  const page = await browser.newPage();

  await page.goto('https://www.bilibili.com');
  //await page.screenshot({path: 'example.png'});

  for (let i = 0; i < 1000; i++) {
    await (scroll(page));
    //setTimeout(()=>console.log(),1000);
    //await delay(ms(`${_.random(1,5)}s`));

    await setTimeout(1000 * 2)
  }

  // // 等待元素
  // await page.waitForSelector('#番剧')

  // 滚动窗口到元素位置
  await page.evaluate(() => document.querySelector('#番剧').scrollIntoView())

  // await page.waitForSelector(".bangumi-card-wrap > div.bangumi-card-data > div > div > div > div > h3 > a");

  // let res = await page.$$eval(".bangumi-card-wrap > div.bangumi-card-data > div > div > div > div > h3 > a", (links) => links.map((x) => x.innerText));

  // console.log(res)

  // 等待10秒钟
  await setTimeout(1000 * 10)
  // 最后记得关掉
  await browser.close();
})();

function waitAndScroll(selector, timeout = 1000) {

}
async function scroll(page) {
  const direction = 5000
  await page.evaluate(({ direction }) => {
    document.documentElement.scrollBy({
      top: direction,
      left: 0,
      behavior: "smooth",
    });
  },
    {
      direction
    }
  );
}