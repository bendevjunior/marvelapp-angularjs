'use strict';

const PRIV_KEY = "367b1c34d7eb06df92ae199c8c6cbc6289cace2c";
const PUBLIC_KEY = "3ef5432cf3a4f167c01a96627798d950";



 const url = 'https://gateway.marvel.com:443/v1/public/characters/:heroId'
 const ts = new Date().getTime();
 const hash = () => {
    return CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
}

angular.
  module('core.hero').
  factory('Hero', ['$resource',
    function($resource) {
      return $resource(url, {}, {
        query: {
          method: 'GET',
          url: url,
          params: {
            ts: ts,
            hash: hash(),
            apikey: PUBLIC_KEY,
          },
          isArray: false
        }
      });
    }
  ]);
