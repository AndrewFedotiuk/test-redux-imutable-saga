import Service from "./Service.base";
import {postParser} from './parsers/posts';

export default class PostsService extends Service {
  getResource = async (url) => {
    const data = this.getData(url);
    return data.map(postParser);
  };

  getPostById = async (userId) => {
    const data = this.getData(`posts?userId=${userId}`);
    return data;
  };
}
