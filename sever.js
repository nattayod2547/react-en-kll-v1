const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // คุณสามารถเปลี่ยนเป็นพอร์ตที่คุณต้องการ

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-message', async (req, res) => {
  const token = '2Ce4hYv3KLHsKs5rDEQRWSYkyFFcs8zx5ompHH6Vc1T'; // ใส่ LINE Notify Token ของคุณที่นี่
  const { message } = req.body;

  try {
    const response = await axios.post(
      'https://notify-api.line.me/api/notify',
      new URLSearchParams({ message }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(error.response ? error.response.status : 500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
