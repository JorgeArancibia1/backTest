const axios = require("axios");

const getProducts = async (req, res) => {
	// var config = {
	//   method: 'get',
	//   url: 'https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763'
	// };

	// axios(config)
	// .then(function (response) {
	//   console.log(JSON.stringify({
	// 	ok: true,
	// 	fullImage: data[0].fullImage,
	// 	images: data[0].images,
	// 	description: data[0],
	// 	prices: data[0].prices,
	// 	warranties: data[0].warranties[0].Price[0],
	// }));
	// })
	// .catch(function (error) {
	//   console.log(error);
	// });

	const { data } = await axios.get(
		`https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763`,
		{
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json",
				"Authorization": "simple.ripley.cl",
				"Accept": "application/json",
			},
		}
	);

	if (!data) {
		res.status(403).json({
			ok: false,
			error: "Error al traer la data.",
		});
	}

	res.status(200).json({
		ok: true,
		fullImage: data[0].fullImage,
		images: data[0].images,
		description: data[0],
		prices: data[0].prices,
		warranties: data[0].warranties[0].Price[0],
	});
};

module.exports = {
	getProducts,
};
