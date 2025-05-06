// 4. Use Node.js dns module to get the IP address of google.com.
const dns = require("dns");
const domain = "google.com";        
dns.lookup(domain, (err, address) => {
  if (err) {
    console.error("Error occurred:", err);
  } else {
    console.log(`IP address of ${domain}: ${address}`);
  }
});
