let mongoose = require('mongoose');

let urlSchema = mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
});

let UrlModel = mongoose.model('Url', urlSchema);

module.exports = UrlModel;
