class Hydration {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.filter(data => data.userID === id);
  };

  getDailyAverageConsumption(id) {
    let userHydraData = this.getUserData(id)

    return (userHydraData.reduce((acc, day) => {
      acc += day.numOunces
      return acc
    }, 0) / userHydraData.length).toFixed(1)
  };

  getDailyConsumption(date, id) {
    let userHydraData = this.getUserData(id);

    return userHydraData.find(day => day.date === date).numOunces;
  };

  getWeekConsumption(date, id) {
    let userHydraData = this.data.filter(user => user.userID === id);

    let specificDay = userHydraData.findIndex(day => day.date === date);

    return userHydraData.slice(specificDay - 3, specificDay + 4);
  };
};

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}