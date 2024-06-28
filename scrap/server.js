const puppeteer = require('puppeteer');

async function scrapeNews() {
  const browser = await puppeteer.launch({ headless: true }); // Headless mode for automation
  const page = await browser.newPage();
  await page.goto('https://timesofindia.indiatimes.com/business', { waitUntil: 'networkidle2', timeout: 0 });

  const articles = await page.evaluate(() => {
    const articleElements = document.querySelectorAll('.row');
    const articles = [];

    articleElements.forEach((element) => {
      const titleElement = element.querySelector('figcaption a');
      const b = []
      const descriptionElement = element.querySelector('.zxvyz');
      const imageElement = element.querySelector('img');

      const title = titleElement ? titleElement.innerText.trim() : '';
      // const description = descriptionElement ? descriptionElement.innerText.trim() : '';
      // const url = titleElement ? `https://timesofindia.indiatimes.com${titleElement.getAttribute('href')}` : '';
      // const urlToImage = imageElement ? imageElement.getAttribute('data-src') : 'https://via.placeholder.com/300x200?text=No+Image';

      if (title) {
        articles.push({ title });
      }
    });

    return articles;
  });

  await browser.close();
  return articles.slice(0, 10); // Return only the top 10 news articles
}

// Usage example (uncomment to use in a server):
// const express = require('express');
// const app = express();
// const port = 3001;

// app.get('/news', async (req, res) => {
//   try {
//     const articles = await scrapeNews();
//     res.json(articles);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to scrape news' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

scrapeNews().then(articles => console.log(articles)).catch(console.error);
