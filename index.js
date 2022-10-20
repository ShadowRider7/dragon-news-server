const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require('./data/Categories.json')
const news = require('./data/news.json')
app.use(cors());

app.get('/', (req, res) => {
    res.send('news api running');
});

app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === "08") {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.listen(port, () => {
    console.log('dragon news server running on port', port);
})