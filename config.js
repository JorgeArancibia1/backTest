const whiteList = [
	"http://localhost:3000",
	"http://localhost:4000",
  "https://back-ripley.herokuapp.com",
  "https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763"
]

var corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = { 
  corsOptions
};
