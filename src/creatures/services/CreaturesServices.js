import { config } from "../../config";

class CreaturesService {
  baseUrl = config.baseUrl;
  endpoint = "/creatures";

  url = `${this.baseUrl}${this.endpoint}`;

  async getAllCreatures() {
    const response = await fetch(this.url);
    console.log("response", response);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data.data;
  }
}

export default CreaturesService;
