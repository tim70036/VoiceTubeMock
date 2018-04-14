var player;

document.getElementById("fold-middle").addEventListener("click", fullScreen);

function fullScreen(){


  
  var classVal = document.getElementById("fold-middle").getAttribute("class");
  if(classVal == "fa-angle-double-right"){
    $(".mode-section").hide();
    classVal = classVal.replace("fa-angle-double-right", "fa-angle-double-left");
    document.getElementById("fold-middle").setAttribute("class", classVal);
    document.getElementById("muteYouTubeVideoPlayer").style.width = "96%";
  }else{
    $(".mode-section").show();
    classVal = classVal.replace("fa-angle-double-left", "fa-angle-double-right");
    document.getElementById("fold-middle").setAttribute("class", classVal);
    document.getElementById("muteYouTubeVideoPlayer").style.width = "47%";

  }

}

function onYouTubeIframeAPIReady() {

  player = new YT.Player('muteYouTubeVideoPlayer', {
    videoId: videoId, // YouTube 影片ID 在 getUrlPara裡設定
    width: 560,               // 播放器寬度 (px)
    height: 316,              // 播放器高度 (px)
    playerVars: {
      autoplay: 0,        // 在讀取時自動播放影片
      controls: 1,        // 在播放器顯示暫停／播放按鈕
      showinfo: 0,        // 隱藏影片標題
      modestbranding: 1,  // 隱藏YouTube Logo
      loop: 1,            // 讓影片循環播放
      fs: 0,              // 隱藏全螢幕按鈕
      cc_load_policty: 0, // 隱藏字幕
      iv_load_policy: 3,  // 隱藏影片註解
      autohide: 0         // 當播放影片時隱藏影片控制列
    },
    events: {
      'onReady': onPlayerReady,
     //'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
      'onStateChange': onPlayerStateChange,
      //'onError': onPlayerError
    }
  });
 }

function onPlayerReady(event){
  event.target.setVolume(50);
  //event.target.pauseVideo();

}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
          //alert('hello!');  //這邊是當開始播放後，需要做的動作
    }
}

function playCaptions(a, b){
  player.setVolume(50);
    player.seekTo(a, true);
    if(player.getPlayerState() ==2 || player.getPlayerState== -1)
      player.playVideo();
    setTimeout("player.pauseVideo()", Number(b)*1000);

}