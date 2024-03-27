const os = require('os');
const url = require('url');
console.log(os.hostname(),os.platform(),os.type());

const url = new URL ('https://www.hanbit.co.kr/store/books/look.php?p_code=B2955421742')
console.log(url.href);