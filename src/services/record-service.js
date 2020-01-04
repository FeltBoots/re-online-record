export default class RecordService {
  _delay = '700ms';
  _apiBase = 'https://www.mocky.io/v2';
  _cities = '5b34c0d82f00007400376066';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}/${url}?mocky-delay=${this._delay}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }

    return await res.json();
  }

  getCities = async () => {
    return await this.getResource(this._cities);
  };

  getCityInfo = async (cityId) => {
    return await this.getResource(cityId);
  };
};
