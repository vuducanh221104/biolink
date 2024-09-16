const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const http = require('http');
const server = http.createServer(app);
// IPA
const CoinMaster = 'https://dinhhavn.id.vn//ipa/1746da.ipa';
// PLIST
const Aldo = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link1.plist';
const CITIC =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link2.plist';
const HDFC = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link3.plist';
const Sunshine =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link4.plist';
const Sunshine1 =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link5.plist';
const Henan =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link6.plist';
const AnBang =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link7.plist';
const Chongqing =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn//plist/com.dinhhavn.vip.link8.plist';

// CORS Configuration
app.use(
    cors({
        origin: [process.env.BASE_URL_CLIENT],
        credentials: true,
    }),
);
//IPA
app.get('/api/coinmaster', (req, res) => {
    res.redirect(CoinMaster);
});

// Redirect to iOS install URL
app.get('/api/sunshine1', (req, res) => {
    res.redirect(Sunshine1);
});
app.get('/api/sunshine', (req, res) => {
    res.redirect(Sunshine);
});
app.get('/api/CITIC', (req, res) => {
    res.redirect(CITIC);
});
app.get('/api/AnBang', (req, res) => {
    res.redirect(AnBang);
});
app.get('/api/Chongqing', (req, res) => {
    res.redirect(Chongqing);
});
app.get('/api/Aldo', (req, res) => {
    res.redirect(Aldo);
});
app.get('/api/Henan', (req, res) => {
    res.redirect(Henan);
});
app.get('/api/HDFC', (req, res) => {
    res.redirect(HDFC);
});

// Middleware Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());

// Start Server
server.listen(port, () => {
    console.log(`SERVER OK on :http://localhost:${port}`);
});
