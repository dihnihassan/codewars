// Your task is to create userlinks for the url, you will be given a username and must return a valid link.


function generateLink(user) {
  
  let urlEncode = encodeURIComponent(user);
  
  let url = `http://www.codewars.com/users/${urlEncode}`;
  console.log(url);
  
return url;

}