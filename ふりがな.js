// -----------------------------------------------------------------------------
// 自動ルビ振りツール
// 説明 選択した文字にルビをふる。
//http://99nyorituryo.hatenablog.com/entry/2016/11/02/012204
//
// 参考
// http://qiita.com/tnakagawa/items/3bce99d49b1aa3fc9a72
// 使用API
// https://developer.yahoo.co.jp/webapi/jlp/furigana/v2/furigana.html
// -----------------------------------------------------------------------------
//■設定
// ルビタイプ
//0:青空文庫、1:pixiv、2:BCCKS、3:でんでんマークダウン、4:HTML5、5:LaTeX
//6:Re:VIEW、7:simple
var r = 0;//ルビタイプの指定
//ルビを付けるグレードの指定
//1~6:小学１年から６年、7:中学生、8:一般向けの８段階
var Grade =1;
// -----------------------------------------------------------------------------
var API_URL = "https://jlp.yahooapis.jp/FuriganaService/V2/furigana";
var Appid = "dj0zaiZpPVJqcVRmNUk2S0p1SSZzPWNvbnN1bWVyc2VjcmV0Jng9MTc-";//変更する場合はappidを取得してください
var Sentence = document.selection.Text;
var ruby=[
	['｜','《','》'],//青空文庫ルビ
	['[[rb:',' > ',']]'],//pixiv
	['{','}(',')'],//BCCKS
	['{','|','}'],//でんでんマークダウン
	['<ruby>','<rt>','</rt></ruby>'],//HTML5
	['\\ruby{','}{','}'],//LaTeX
	['@<ruby>{',', ','}'],//Re:VIEW
	['','(',')'],//simple
	];
var str = "";//出力される文字

var json = yahooapi(Appid, Grade, Sentence, API_URL);
str = addruby(ruby, r,json);
function yahooapi(Appid,Grade,Sentence,API_URL){
try {
    // 「ServerXMLHTTP」オブジェクト生成
    var http = new ActiveXObject("Msxml2.ServerXMLHTTP");
    // 要求初期化
    http.open("POST", API_URL, false);
     // 要求ヘッダ設定
    http.setRequestHeader("Content-Type", "application/json");
    http.setRequestHeader('User-Agent','Yahoo AppID: ' + Appid);
    // 要求
var param_dic = {
      "id": "1234-1",
      "jsonrpc": "2.0",
      "method": "jlp.furiganaservice.furigana",
      "params": {
        "q": Sentence,
        "grade": Grade
      }
    }
    http.send(JSON.stringify(param_dic));
    // 応答結果表示
    
var x = http.responseText;
//document.selection.Text = x;

} catch (e) {
    // エラーの場合
    Alert("リクエスト失敗");
}
return x;
}
function addruby(ruby, r, json) {
json_parse=JSON.parse(json)
if(json_parse.hasOwnProperty('error')){
var error_message=json_parse.error.message
var code=json_parse.error.code
    Alert(error_message + "\nエラーコード" + code);
    return '';
}
    var elements = JSON.parse(json).result.word;
        for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                        switch (    Object.keys(elements[i]).length) {
            case 1: str += elements[i].surface; break;
            case 3:
                if (elements[i].furigana == elements[i].surface) {
                    str += elements[i].furigana;
                } else {
                    str += ruby[r][0] + elements[i].surface + ruby[r][1] + elements[i].furigana + ruby[r][2];
                } break;
            case 4:
            var subwords = elements[i].subword;
                for (var j = 0; j < subwords.length; j++) {
                    var subword = subwords[j];
                    switch (Object.keys(subword).length) {
                        case 1: str += subword.furigana; break;
                        case 3:
                            if (subword.furigana == subword.surface) {
                                str += subword.furigana;
                            } else {
                                str += ruby[r][0] + subword.surface + ruby[r][1] + subword.furigana + ruby[r][2];
                            }
                            break;

                    }
                }
                break;
        }
}
        return str;
}
    //XMLエラーの場合の処理
if (str.length==0){
//Alert(elements.length);
}
else{
document.selection.Text = str;
}
