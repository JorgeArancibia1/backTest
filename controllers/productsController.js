const axios = require("axios");

const getProducts = async (req, res) => {
	console.log("Entró ");

	try {
		const { data } = await axios.get(
			`https://simple.ripley.cl/api/v2/products?format=json&partNumbers=2000379450763`,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

    console.log(data)
		console.log("After ");

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
	} catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      error: "Error en el servicio.",
    });
  }
};

module.exports = {
	getProducts,
};
