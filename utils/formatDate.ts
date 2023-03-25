export default function(day, month, year){
    let today = new Date();
    let date: String;
    day = String(today.getDate());
    month = String(today.getMonth());
    year = String(today.getFullYear());
    return date = `${year}-${month}-${day}`;
}