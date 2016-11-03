// -----------------------------------------------------------------------------
// 自動ルビ振りツール
// 説明 選択した文字にルビをふる。
//http://99nyorituryo.hatenablog.com/entry/2016/11/02/012204
//
// 参考
// http://qiita.com/tnakagawa/items/3bce99d49b1aa3fc9a72
// http://qiita.com/tnakagawa/items/4b501c21abcd39f30fbe
// 使用API
// http://developer.yahoo.co.jp/webapi/jlp/furigana/v1/furigana.html
// -----------------------------------------------------------------------------
//■設定
// ルビタイプ
//0:青空文庫、1:pixiv、2:BCCKS、3:でんでんマークダウン、4:HTML5
var r = 0;//ルビタイプの指定
//ルビを付けるグレードの指定
//1~6:小学１年から６年、7:中学生、8:一般向けの８段階
var Grade =1;
// -----------------------------------------------------------------------------
var API_URL = "http://jlp.yahooapis.jp/FuriganaService/V1/furigana";
var Appid = "dj0zaiZpPVJqcVRmNUk2S0p1SSZzPWNvbnN1bWVyc2VjcmV0Jng9MTc-";//変更する場合はappidを取得してください
var text = document.selection.Text;
var ruby=[
	['｜','《','》'],//青空文庫ルビ
	['[[rb:',' > ',']]'],//pixiv
	['{','}(',')'],//BCCKS
	['{','|','}'],//でんでんマークダウン
	['<ruby>','<rt>','</rt></ruby>'],//HTML5
	];
var str ="";//出力される文字
try {
    // 「ServerXMLHTTP」オブジェクト生成
    var http = new ActiveXObject("Msxml2.ServerXMLHTTP");
    // 要求初期化
    http.open("POST", API_URL, false);
     // 要求ヘッダ設定
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 要求
    var params = { appid: Appid, grade: Grade, sentence: text};
    http.send(escapeParams(params));
    // 応答結果表示
    
var x = http.responseText;
//document.selection.Text = x;

} catch (e) {
    // エラーの場合
    Alert("リクエスト失敗");
}

function escapeParams(params) {
    var param = "";
    // パラメータ数分ループ
    for (var key in params) {
        // 連結チェック
        if (param.length > 0) {
            param += "&";
        }
        // パラメータ設定
        param += encodeURIComponent(key).split("%20").join("+")
            + "=" + encodeURIComponent(params[key]).split("%20").join("+");
    }
    return param;
}
// DOMオブジェクト生成
var dom = new ActiveXObject("Msxml2.DOMDocument");
// 同期化
dom.async = false;
// パース
dom.loadXML(x);
if (dom.parseError.errorCode == 0) {
    // XML出力
    //Alert(dom.xml);
   }
    var root = dom.documentElement;
    //XMLエラー処理
//あとで
    // タグ名がWordのエレメント取得
    var elements = root.getElementsByTagName("Word");
//        Alert(elements.length);
        //
            for (var i = 0; i < elements.length; i++) {
        // エレメント取得
        var element = elements[i];
        // 子取得
        var child = element.childNodes;
       switch (element.childNodes.length){
	case 1: str += child[0].text; break;
	case 3: 
	  if(child[0].text == child[1].text){
	  str += child[0].text;
	  } else{
	  str += ruby[r][0] + child[0].text +ruby[r][1] + child[1].text+ruby[r][2] ;
	  } break;
 	 case 4:var subwords = child[3].childNodes;
 	 		for (var j = 0; j < subwords.length; j++) {
 	       var subword = subwords[j];
	         var subchild = subword.childNodes;
	              switch (subchild.length){
			case 1: str += subchild[0].text; break;
			case 3: 
				  if(subchild[0].text == subchild[1].text){
				  str += subchild[0].text;
				  } else{
				  str += ruby[r][0] + subchild[0].text + ruby[r][1] + subchild[1].text + ruby[r][2];
				  }
				  break;
				  
			}
		 }  
	  break;
	}
            }
//XMLエラーの場合の処理
if (str.length==0){
//Alert(elements.length);
}
else{
document.selection.Text = str;
}
