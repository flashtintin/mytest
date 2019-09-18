module.exports = {
  formatDate: (date) => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = (month >= 10) ? month : `0${month}`;
    day = (day >= 10) ? day : `0${day}`;
    hour = (hour >= 10) ? hour : `0${hour}`;
    minute = (minute >= 10) ? minute : `0${minute}`;
    second = (second >= 10) ? second : `0${second}`;

    return `${year} - ${month} - ${day} ${hour} : ${minute} : ${second}`;
  },
  /**
   * 延迟操作
   * @param time 需要延迟的毫秒数
   * @returns {Promise}
   */
  delay: time => new Promise(resolve => setTimeout(resolve, time))
};
