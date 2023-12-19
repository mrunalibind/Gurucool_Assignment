const UrlModel = require("../models/urlModel");

function generateShortUrl(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let shortUrl = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortUrl += characters.charAt(randomIndex);
    }
  
    return shortUrl;
  }  

exports.toshortURL=async(req,res)=>{
    try {
        let {originalUrl}=req.body;
        let shortUrl=generateShortUrl();
        shortUrl=`https://shorturl/${shortUrl}`
        let url=new UrlModel({originalUrl,shortUrl})
        await url.save();
        res.status(200).send({msg:"ShortURL Created",url})
    } catch (error) {
        res.status(500).send({msg:error.msg});
    }
}

exports.redirectURL=async(req,res)=>{
    try {
        
        const {short} = req.params;
        // short=`https://shorturl/${short}`;
        // console.log(short)
        const url = await UrlModel.findOne({ shortUrl:`https://shorturl/${short}` });
        console.log(url);
        if (url) {
          res.redirect(url.originalUrl);
        } else {
          res.status(404).send({ error: 'URL not found' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
}