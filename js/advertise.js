var sideAd = [{
    "href" : "/lessons/71?apilang=zh_tw",
    "title" : "每天堅持5分鐘，1個月後大不同！",
    "company" : "EF English Live 提供"
},{
  "href" : "/lessons/44?apilang=zh_tw",
  "title" : "【免費體驗】5分鐘檢測英文能力",
  "company" : "VoiceTube 提供"
},{
  "href" : "/lessons/89?apilang=zh_tw",
  "title" : "每天25分鐘，聽懂CNN",
  "company" : "EF English Live 提供"
},{
  "href" : "/lessons/94?apilang=zh_tw",
  "title" : "你知道錯在哪嗎？﹥﹥看答案",
  "company" : "EF English Live 提供"
}]

var side = document.getElementById("sidecol");

for(var i = 0; i < sideAd.length; i++)
{
  var newLi = document.createElement("li");
  var newDiv = document.createElement("div");
  newLi.appendChild(newDiv);

  var newA = document.createElement("a");
  newA.href = sideAd[i].href;
  newA.target = '_blank';
  newA.innerHTML = sideAd[i].title;

  var newDiv2 = document.createElement("div");
  newDiv2.className = 'short_company';
  newDiv2.innerHTML = sideAd[i].company;

  newDiv.appendChild(newA);
  newDiv.appendChild(newDiv2);

  side.insertBefore(newLi,null);
}
