const router = require('express').Router();
const validUrl = require('valid-url');
const dotenv = require('dotenv');
const Url = require('../models/Url')
const crypto = require('crypto');


dotenv.config();

const baseUrl = process.env.BASE_URL


// @route   POST /url/shortener
router.post('/shorten', async (req, res) => {
    // get input url from params
    var inputUrl = await req.body.inputUrl
    // generate short url code
    shortUrlCode = crypto.randomBytes(16).toString("hex").slice(0, 7)
    // validate base url
    if (!validUrl.isUri(baseUrl)) {
        console.log("Invalid base url");
        return res.status(401).json('Invalid base url')
    }

    // validate input url
    if (validUrl.isHttpsUri(inputUrl)) {
        try {
            // check if input url already in DB
            let url = await Url.findOne({ inputUrl: inputUrl })
            if (url) {
                res.status(303).json(url)
            }
            else {
                finalUrl = new Url({
                    inputUrl: inputUrl,
                    shortUrlCode: shortUrlCode,
                })
                await finalUrl.save()
                res.status(200).json(finalUrl)
            }
        } catch (error) {
            console.log("Invalid input url");
            return res.status(500).json('Invalid input url')
        }
    }

})

module.exports = router