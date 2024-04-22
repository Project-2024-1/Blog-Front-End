function formatDate(isoDateString) {
    const dateObject = new Date(isoDateString);
  
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();
  
    // Định dạng lại các thành phần của ngày thành chuỗi
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
    return formattedDate;
  }
  
export default formatDate;
  