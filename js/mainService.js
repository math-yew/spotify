angular.module('spotify')
.service('mainService', function ($http) {


  var userName;
  var token;
  this.userName = userName;
  this.token = token;
  console.log("token: ", token);
  var token = "BQAz7EhHH-e59EgNbAOdIruSMSR_NZjqUltTl5Nf-HO4ZIg8HmPVjMGZ6GfmoWh7ik0Jtv8UJgnnTLbcu_bRoYel_7wE4PiQ04gsdp7NBSG4s1J9FfumBjHSygboLniHcakn_wbilyElyqh8tbT-ZA0Hb2mQ2OIxXf_9h8xyVaG3sS3_eJOVO91ZrJF4ULGePHMM5l16tB51TSDLJGdLQZJ5t7jPQVqdIyut1tuwqs2MjBUPx0xT3asj70WdVYK1okrul-kN43T6CK86k-_KqqI1efhJJ0OpUQDvIKJ_t72RXEbp6YOQang5qwIevw";

  this.login = function (uname, tok) {
    userName = uname;
    token = tok;
  }
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
  var makeNew = "https://api.spotify.com/v1/users/spotifyforindie/playlists";
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
  var addUrl = "https://api.spotify.com/v1/users/spotifyforindie/playlists/" + playList + "/tracks?position=0&uris=" + trackPrep;
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

//end
})
