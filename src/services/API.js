import PostsService from "./PostsService";
import Service from "./Service.base";

const APIService = new Service("https://jsonplaceholder.typicode.com/");
class API {
  static postsService = new PostsService(APIService);
}

export default API;
