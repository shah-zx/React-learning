const mongoose = require('mongoose')
const validate = require('validator')
const notesSchema = new mongoose.Schema({

      title: {
              type : 'string',
              required : true
      },
      description: {
            type : 'string',
            required : true
      },
      tag: {
      type : 'string',
      default : 'general'
      },
      date: {
             type : 'date',
             default : Date.now
      },


})

// "author": "https://www.facebook.com/bbcnews",
// "title": "COP26: World leaders promise to end deforestation by 2030 - BBC News",
// "description": "More than 100 nations including Brazil, Russia and Indonesia are expected to sign COP26's first major deal.",
// "url": "https://www.bbc.com/news/science-environment-59088498",
// "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/96B4/production/_121308583_gettyimages-1173062100-1.jpg",
// "publishedAt": "2021-11-02T07:57:26Z",
// "content": "By Georgina RannardBBC News\r\nImage source, Getty Images\r\nImage caption, Trees are often cut down to create grazing land to feed the world's hunger for meat\r\nMore than 100 world leaders will promise t… [+8061 chars]"
