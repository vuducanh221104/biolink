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
app.use(express.json());
// IPA
const CoinMaster = 'https://dinhhavn.id.vn/ipa/1746da.ipa';
// PLIST
const Aldo = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link1.plist';
const CITIC = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link2.plist';
const HDFC = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link3.plist';
const Sunshine =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link4.plist';
const Sunshine1 =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link5.plist';
const Henan = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link6.plist';
const AnBang =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link7.plist';
const Chongqing =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link8.plist';
const CCPC = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link9.plist';
const VNPOST =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link10.plist';
const IT = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link11.plist';
const VNTechno =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link12.plist';
const GacTrump =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link15.plist';
const SunLife =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link13.plist';
const MyLan =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link14.plist';
const Arada =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link16.plist';
const Zhuhaishi =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link17.plist';
const Ministere =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link18.plist';
const Shandong =
    'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link19.plist';
const Avex = 'itms-services://?action=download-manifest&url=https://dinhhavn.id.vn/plist/com.dinhhavn.vip.link20.plist';
//DNS VÀ CERT
const DNS = 'https://dinhhavn.id.vn/dns/dns.mobileconfig';
const Cert = 'https://dinhhavn.id.vn/dns/Esign-Certs.zip';
const UUID = 'https://dinhhavn.id.vn/UUID/device.mobileconfig';
// CORS Configuration
app.use(
    cors({
        origin: [process.env.BASE_URL_CLIENT],
        credentials: true,
    }),
);

//DNS VÀ CERT
app.get('/api/DNS', (req, res) => {
    res.redirect(DNS);
});

app.get('/api/CertEsign', (req, res) => {
    res.redirect(Cert);
});

app.get('/api/UUID', (req, res) => {
    res.redirect(UUID);
});
//IPA
app.get('/api/coinmaster', (req, res) => {
    res.redirect(CoinMaster);
});

// Redirect to iOS install URL
app.get('/api/VNPOST', (req, res) => {
    res.redirect(VNPOST);
});

app.get('/api/VNTechno', (req, res) => {
    res.redirect(VNTechno);
});

app.get('/api/IT', (req, res) => {
    res.redirect(IT);
});
app.get('/api/CCPC', (req, res) => {
    res.redirect(CCPC);
});

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
app.get('/api/GacTrump', (req, res) => {
    res.redirect(GacTrump);
});
app.get('/api/SunLife', (req, res) => {
    res.redirect(SunLife);
});
app.get('/api/MyLan', (req, res) => {
    res.redirect(MyLan);
});
app.get('/api/Arada', (req, res) => {
    res.redirect(Arada);
});
app.get('/api/Zhuhaishi', (req, res) => {
    res.redirect(Zhuhaishi);
});
app.get('/api/Ministere', (req, res) => {
    res.redirect(Ministere);
});
app.get('/api/Shandong', (req, res) => {
    res.redirect(Shandong);
});
app.get('/api/Avex', (req, res) => {
    res.redirect(Avex);
});
app.get('/api/submit-uuid', (req, res) => {
    const deviceUUID = req.body; // Lấy UUID từ req.body
    if (!deviceUUID) {
        return res.status(400).json({ message: 'Missing UUID in request body' });
    }
    const redirectUrl = `https://dinhhavn.id.vn/sign/uuid/endpoint?UUID=${deviceUUID}`;

    // Trả về mã trạng thái 200 và thông báo thành công cùng với URL
    res.redirect(200, redirectUrl);
});

app.post('/api/submit-uuid-apple', (req, res) => {
    const deviceUUID = req.headers['x-apple-device-id'] || req.body.deviceUUID;
    if (!deviceUUID) {
        return res.status(400).json({ message: 'Missing UUID in request' });
    }
    const redirectUrl = `https://dinhhavn.id.vn/sign/uuid/endpoint?UUID=${deviceUUID}`;
    res.redirect(200, redirectUrl);
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
