/**
 * ServerにJSONをポストするutil
 * @param { string } url 投げ先のurl
 * @param { object } json 投げるデータ
 * @return { Promise } 
 */
export const postJSONtoServer = (url, json) => {
  return new Promise((resolve, reject) => {
    const method = "POST";
    const body = JSON.stringify(json);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(url, {method, headers, body})
        .then( res => res.json() )
        .then( json => resolve(json))
        .catch( err => reject(err));
  });
};
