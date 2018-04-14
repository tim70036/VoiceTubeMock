//先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
var url = location.href;

//再來用去尋找網址列中是否有資料傳遞(QueryString)
if(url.indexOf('?')!=-1)
{
    var id = "";
    var file = ""
    //在此直接將各自的參數資料切割放進ary中
    var ary = url.split('?')[1].split('&');
    //此時ary的內容為：
    //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'
    
    //下迴圈去搜尋每個資料參數
    for(i=0;i<=ary.length-1;i++)
    {
        //如果資料名稱為id的話那就把他取出來
        if(ary[i].split('=')[0] == 'id'){
            id = ary[i].split('=')[1];
        }
            
        if(ary[i].split('=')[0] == 'file'){
            file = ary[i].split('=')[1];
        }
            
    }
    
}

console.log("id: "+id);
console.log("file: "+file);

/* Set  videoId for player.js */
var videoId = id;

/* Loading caption after parsing url */
script = document.createElement('script');
script.setAttribute("type", "text/javascript");
script.setAttribute("src", "js/captions/" + file + ".js");
//script.setAttribute("src", "js/captions/caption1234.js");
document.head.appendChild(script);