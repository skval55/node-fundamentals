const { cat } = require("./step1");
const process = require("process");
const axios = require("axios");

async function webCat(url) {
  const extension = url.substring(url.lastIndexOf("."));
  if (extension == ".txt") {
    cat(url);
  } else {
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
      process.exit(1);
    }
  }
}
webCat(process.argv[2]);
