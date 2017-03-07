# add_ruby
選択した文字にルビを付ける[Meryマクロ](http://www.haijin-boys.com/wiki/)。
Yahooの[ルビ振りAPI](http://developer.yahoo.co.jp/webapi/jlp/furigana/v1/furigana.html)を利用して自動でルビを振ります。


## 説明
選択した文字に自動でふりがなを付ける、自動ルビ振りマクロ。詳細な説明は下記ページにて。
http://99nyorituryo.hatenablog.com/entry/2016/10/17/205029

## 設定
###  ルビタイプ
 
0:青空文庫、1:pixiv、2:BCCKS、3:でんでんマークダウン、4:HTML5、5:LaTeX

var r = 0;//ルビタイプの指定数値を変えることでルビのタイプを選ぶことができる。

### ルビを付けるグレードの指定
1~6:小学１年から６年、7:中学生、8:一般向けの８段階
var grade =1;

同様に数値を変えることで設定を変える。1の場合はすべての漢字にルビをふる。
