export default class RecordService {
  data = {
    cities: [
      {
        id: "5b348105320000781bd1e422",
        name: "Приморск",
        address: "ул. Малая 9",
        phones: ["79990010101"],
        price: 1000,
      },
      {
        id: "5b3481053200007811231455",
        name: "Владивосток",
        address: "ул. Тобольская 14а",
        phones: ["79990010101", "79940178194"],
        price: 12000,
      },
    ],
    time: [
      {
        "2018-06-28": {
          "2018-06-28 10:00:00": {
            day: "2018-06-28",
            begin: "11:00",
            end: "12:00",
            date: "2018-06-28 11:00:00",
            is_not_free: false
          },
        }
      },
      {
        "2018-06-20": {
          "2018-06-28 10:00:00": {
            day: "2018-06-28",
            begin: "11:00",
            end: "12:00",
            date: "2018-06-28 11:00:00",
            is_not_free: false
          },
        }
      },
      {
        "2018-06-21": {
          "2018-06-28 11:00:00": {
            day: "2018-06-28",
            begin: "13:00",
            end: "15:00",
            date: "2018-06-28 11:00:00",
            is_not_free: false
          },
        }
      },
    ],
  };

  getCities() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data.cities);
        // reject(new Error('error'));
      }, 700);
    });
  };

  getCityInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data.time);
        // reject(new Error('error'));
      }, 700);
    });
  }
};
