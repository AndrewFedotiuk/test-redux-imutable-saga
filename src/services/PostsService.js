export default class PostsService {
	#API_BASE = 'https://jsonplaceholder.typicode.com/';
	
	getResource = async (url) => {
		return await fetch(`${this.#API_BASE}${url}`);
	}
	
	getPostById = async (userId) => {
		return await this.getResource(`posts?userId=${userId}`)
			.then((response) => response.json());
	}
}