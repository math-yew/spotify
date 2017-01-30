angular.module('spotify')
.service('mainService', function ($http) {


  var userName;
  var token;
  this.userName = userName;
  this.token = token;

  this.login = function (uname, tok) {
    userName = uname;
    token = tok;
    console.log("token: ", token);
  }

    // var token = "BQDcMXA6EVlsXeFKiZdak_2mnmMHwC7TOWJhrHAvpttgjJ00b0F5gEhcav0Mi5_8Dq-zIUncfT5lNiEmxPZSMla1OTFYto6wc3hNgCHBoQ5_kjBR45NDnH6x-qpYjjMruW62qntryYFvcGHDRMhm6QpPqRjd5vBir-0Ez8GLLK3oKJut8VF8hN_gINT5lTzq50dMHBg0TLHUNUOkPKqDKT5vFRuv1nzK8wlobycWy_TJr_sTxzhs33J4si2HncaVoCQPO-o1M9CszSCAHwwpAVQ3t-sZlaLBNxLC1gpFxj3xEtnPlaJESYg1MaVKdg";
    //
    // var userName = "spotifyforindie"



/////////////////////// search ///////////////////////////

  this.searchPlaylists = function(search){
  var searchPrep = search.replace(' ','+');
  var allPlaylists = 'https://api.spotify.com/v1/search?q=' + searchPrep + '&type=playlist';
  console.log('service: ', allPlaylists)
  return $http({
    method: "GET",
    url: allPlaylists,
        headers: { 'Authorization': 'Bearer ' + token },
  })
  .then(function(response){
    console.log('response: ',response)
    return response.data.playlists.items;
    })
  }
/////////////////////// playlist ///////////////////////////
  var songList = [];
this.getTracks = function(id,userid){
  var playlistName = "https://api.spotify.com/v1/users/" + userid + "/playlists/" + id + "/tracks?market=ES";

  songList = [];
console.log("start array: ",songList);
    console.log("before: ",playlistName);
  return $http({
    method: "GET",
    url: playlistName,
    headers: { 'Authorization': 'Bearer ' + token },
  }).then(function(response){
    console.log('tracks: ',response);

    for(var key in response.data.items){
      if(response.data.items[key].track.id){songList.push(response.data.items[key].track.id)}
    }
    console.log('songList',songList);
    return response
  })
}
this.songList = songList;

/////////////////////// Create ///////////////////////////


this.newPlaylist = function(name){
  var makeNew = "https://api.spotify.com/v1/users/" + userName + "/playlists";
  // var pname = "p1";

  return $http({
    method: "POST",
    url: makeNew,
    headers: { 'Authorization': 'Bearer ' + token },
    data: {"name":name,"public":false}
  }
).then(function(response){
    console.log("CREATED: ",response)
    return response;
  })
}

/////////////////////// Fill Playlist ///////////////////////////

this.addToPlaylist = function(playList){
  // var playlistID = "7qbs4o8VGnRECc1r6ZeRQ1";
  // var addSongs = ['5kPrfd9MMxfk9QhaKCuEcH', '51UsFqIs9gSo8paHAGPL4P'];
  var songTrim = songList.slice(0,85);
  var trackPrep = "spotify%3Atrack%3A"+songTrim.join(',spotify%3Atrack%3A');
  var addUrl = "https://api.spotify.com/v1/users/" + userName + "/playlists/" + playList + "/tracks?position=0&uris=" + trackPrep;
console.log(addUrl.length);
  return $http({
    method: "POST",
    url: addUrl,
    headers: { 'Authorization': 'Bearer ' + token },
  }
).then(function(response){
    return response
  })
}

//////////////////////////////////////////////////////////////////

this.cutInService = function (i) {
  songList.splice(i,1);
}

//end
})
