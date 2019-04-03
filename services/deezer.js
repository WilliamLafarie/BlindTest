/*
    -- Imports --
*/
    const rp = require('request-promise');
//

/*
    -- Configuration --
*/
    // Object Prototype Javascript
    // [MDN] --> https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Prototypes_Objet

    function Deezer() {
        this.apiUrl = 'https://api.deezer.com/';
    }

    // Get Track with the ID
    Deezer.prototype.getTrack = function(id) {
        let url = 'track/' + id;
        return rp({url: this.apiUrl + url, json:true});
    };

    // Get Album with the ID
    Deezer.prototype.getAlbum = function(id) {
        let url = 'album/' + id;
        return rp({url: this.apiUrl + url, json:true});
    };
    
    // Get Artist with the ID
    Deezer.prototype.getArtist = function(id) {
        let url = 'artist/' + id;
        return rp({url: this.apiUrl + url, json:true});
    };

    // Get a list of Tracks with Album / Artist
    Deezer.prototype.findTracks = function(options, index, order) {
        let url = 'search?q=';
        let query = '';
        if (typeof options === 'object') {
            for (let key in options) {
                query = query + key + ':"' + options[key] + '" ';
            }
        } else {
            query = options;
        }
        url = url + query;

        if (index !== 0) url = url + '&index=' + index;
        if (order) url = url + '&order=' + order;

        return rp({url: this.apiUrl + url, json:true});
    };

    // Get a list of Albums with a query: Artist,...
    Deezer.prototype.findAlbums = function(query, index) {
        let url = 'search/album?q=' + query;
        if (index !== 0) url = url + '&index=' + index;

        return rp({url: this.apiUrl + url, json:true});
    };

    // Get a list of Artist with a query: Album,...
    Deezer.prototype.findArtists = function(query, index) {
        let url = 'search/artist?q=' + query;
        if (index !== 0) url = url + '&index=' + index;

        return rp({url: this.apiUrl + url, json:true});
    };

//

/*
    -- Exports --
*/
    module.exports = {Deezer};
//