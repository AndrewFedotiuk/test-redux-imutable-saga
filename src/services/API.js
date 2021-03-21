import PostsService from "./PostsService";

class API {
  #URL = "https://jsonplaceholder.typicode.com/";
  
  postsService = new PostsService(this.#URL);
}

export default new API();