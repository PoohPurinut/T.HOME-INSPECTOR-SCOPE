const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static('public'));

// app.use('/particles', express.static('particles'))

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/home', (req, res) => {
    res.render('index.ejs');
});

app.get('/architecture', (req, res) => {
    res.render('architecture.ejs');
});

app.get('/electrical', (req, res) => {
    res.render('electrical.ejs');
});

app.get('/leakage', (req, res) => {
    res.render('leakage.ejs');
});

app.get('/roof', (req, res) => {
    res.render('roof.ejs');
});

app.get('/sanitary', (req, res) => {
    res.render('sanitary.ejs');
});

app.get('/limitation', (req, res) => {
    res.render('limit.ejs');
});

app.get('/unchecked', (req, res) => {
    res.render('unchecked.ejs');
});

app.get('/videoelectrical', (req, res) => {
    res.render('videoelectrical.ejs');
});

app.get('/videosanitary', (req, res) => {
    res.render('videosanitary.ejs');
});

app.get('/videoleakage', (req, res) => {
    res.render('videoleakage.ejs');
});

app.get('/videoarchitecture', (req, res) => {
    res.render('videoarchitecture.ejs');
});

app.get('/videoroof', (req, res) => {
    res.render('videoroof.ejs');
});

app.get('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

// module.exports = app;