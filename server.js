require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8000;

const channel = process.env.CHANNEL_ID;

const getTemp = async () => {
  try {
    let a = await axios.get(
      'https://api.thingspeak.com/channels/1709568/feeds.json?api_key=LBKY4QIRQ1C7QNVP&results=2',
      { responseType: 'json' },
      //   {
      //     param: {
      //       api_key: process.env.READ_KEY,
      //       result: 2,
      //     },
      //   }
    );
    console.log({ a: a.data.feeds });
    return a.data.feeds;
  } catch (error) {
    console.error(error);
  }
};

app.get('/read', async (req, res) => {
  const temperature = await getTemp();
  console.log(temperature);
  res.json(temperature);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
