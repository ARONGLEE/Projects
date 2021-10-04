
const getCookie = (name) => {
    let value = "; "+document.cookie;
    console.log(value);
    let parts = value.split(`; ${name}=`); // aa=xx; user_id=aaa; -> [aa=xx / aaa; abbb=ssss;]
    console.log(parts);
    if(parts.length === 2){
        return parts.pop().split(";").shift();
    }
}

const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);

    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
    console.log("aaa", document.cookie);
}

const deleteCookie = (name) => {
    let date = new Date("2020-01-01").toUTCString();

    console.log(date);

    document.cookie = name+"=; expires="+date;
    console.log("bbb", document.cookie);
}

export {getCookie, setCookie, deleteCookie};
