const router = require('express').Router();
const Url = require('../models/Url');

// @route     GET /:hashedCode
// @desc      Redirect to input/original URL
router.get('/:shortCode', async (req, res) => {
    try {
        let url = await Url.findOne({ shortUrlCode: req.params.shortCode });
        // console.log(url);
        if (url) {
            url.clicks++
            await url.save()
            return res.redirect(url.inputUrl);
        } else {
            return res.status(404).json('No url found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});

module.exports = router;