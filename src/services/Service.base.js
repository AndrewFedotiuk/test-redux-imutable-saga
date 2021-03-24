class Service {
  constructor(url) {
    this.URL = url;
  }

  async getData(url) {
    //--
    const response = await fetch(`${this.URL}${url}`);
    return response.json();
  }
}

export default Service;
