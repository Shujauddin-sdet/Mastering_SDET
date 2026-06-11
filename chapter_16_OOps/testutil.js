export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Shujauddin"; // This is not exported. That's why you cannot import it into other classes. 