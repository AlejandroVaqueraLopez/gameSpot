const fetchData = (URL,key,cont,stHeader,ndHeader) => {
	return new Promise((resolve,reject) => {

		URL = `${URL}?key=${key}&page=${cont}`;

		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Host': `${stHeader}`,
				'X-RapidAPI-Key': `${ndHeader}`
			}
		};
		fetch(URL,options)
			.then(response => response.json())
			.then((response) => {
				resolve(response);
			})
			.catch(error => console.log(error))
	})
}
export default fetchData;
