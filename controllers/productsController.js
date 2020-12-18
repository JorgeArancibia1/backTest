const axios = require('axios');

const getProducts = async (req, res) => {
	const { data } = await axios.get(`https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763`);

	res.status(200).json({
		ok: true,
		data,
    fullImage: data[0].fullImage
	});
};

module.exports = {
	getProducts,
};
