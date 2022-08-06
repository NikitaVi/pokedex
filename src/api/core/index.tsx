import axios, {AxiosInstance, AxiosPromise} from "axios";

const BASE_URL = "https://pokeapi.co/api/v2"

export default class ApiClient {
  static instance: ApiClient;
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      timeout: 30000,
      baseURL: BASE_URL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  static getInstance(): InstanceType<typeof ApiClient> {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  static getAxios(): AxiosInstance {
    return ApiClient.getInstance().axiosInstance
  }
  static get(url: string): AxiosPromise {

    return ApiClient.getAxios()
      .get(encodeURI(url))
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Error request ${res.request.responseURL} with ${res.status} status`)
        }
        return res
      }
      )
  }
}