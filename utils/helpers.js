// These are functions that will be available in Handlebars
module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_time: (time) => {
    const now = new Date(time);
    let period = 'am';
    let hour = now.getHours();
    if (hour > 12) {
      period = 'pm';
      hour = hour % 12;
    }
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const day = now.getDate();
    const minutes = now.getMinutes();
    return `${month}/${day}/${year} at ${hour}:${minutes} ${period}`; 

    
  }
};

