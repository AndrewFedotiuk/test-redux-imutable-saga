import {postParser} from './parsers/posts';

export default class PostsService {
  constructor(service){
    this.service = service;
  }
  getPostById = async (userId) => {
    const data = await this.service.getData(`posts?userId=${userId}`);
    return data?.map(postParser);
  };
}
