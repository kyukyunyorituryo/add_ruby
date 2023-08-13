# 自動ルビ振り
選択した文字にルビを付けるソフトウェア、Meryマクロ、アンドロイド版、Java版の３種類ある

## 自動ルビ振りマクロ

選択した文字にルビを付ける[Meryマクロ](https://www.haijin-boys.com/wiki/)。
Yahooの[ルビ振りAPI](https://developer.yahoo.co.jp/webapi/jlp/furigana/v2/furigana.html)を利用して自動でルビを振ります。

[Webサービス by Yahoo! JAPAN](https://developer.yahoo.co.jp/sitemap/)



###  説明


選択した文字に自動でふりがなを付ける、自動ルビ振りマクロ。詳細な説明は下記ページにて。

youtubeでの説明

[![ウェブ小説の自動ルビ振りのやり方](http://img.youtube.com/vi/G1RC-Xbu-qg/0.jpg)](https://www.youtube.com/watch?v=G1RC-Xbu-qg)

サイトでの説明
https://99nyorituryo.hatenablog.com/entry/2016/11/02/012204

###  設定
####  ルビタイプ
 
0:青空文庫、1:pixiv、2:BCCKS、3:でんでんマークダウン、4:HTML5、5:LaTeX、6:Re:VIEW、7:simple（ワード等）

var r = 0;//ルビタイプの指定数値を変えることでルビのタイプを選ぶことができる。

#### ルビを付けるグレードの指定
1~6:小学１年から６年、7:中学生、8:一般向けの８段階

var grade =1;

同様に数値を変えることで設定を変える。1の場合はすべての漢字にルビをふる。

## アンドロイドアプリ版
　アンドロイドアプリ化しました。各ストアからダウンロードしてください。
 
[グーグルプレイ「ふりがな付与」](https://play.google.com/store/apps/details?id=com.websarva.wings.android.frigana)

[Amazonアンドロイドアプリ「ふりがな付与」](https://www.amazon.co.jp/exec/obidos/ASIN/B07TBFT3BG/99hatena-22/)
## Java版
自動ルビ振り
Copyright (C)　2023 https://github.com/kyukyunyorituryo/

-----------------------------------------------------------------------------------------
■紹介
-----------------------------------------------------------------------------------------
エディター上で選択した文字にルビをふるアプリケーション。青空文庫や小説家になろうやカクヨムにも使える。１００KBまで大丈夫なので、大体3万文字ぐらいはいっぺんにルビがつく。完全に正しいルビとは限らないのでチェックは必要だけど、現代語なら9割以上はただしいはず。


-----------------------------------------------------------------------------------------
■使用しているAPI
-----------------------------------------------------------------------------------------


Yahooのルビ振りAPI(https://developer.yahoo.co.jp/webapi/jlp/furigana/v2/furigana.html)

を利用して自動でルビを振ります。

Webサービス by Yahoo! JAPAN(https://developer.yahoo.co.jp/sitemap/)


-----------------------------------------------------------------------------------------
■インストール
-----------------------------------------------------------------------------------------
ここからダウンロード
https://github.com/kyukyunyorituryo/add_ruby/releases

Windows版はFurigana-1.0.msiのファイルで実行すると"C:\Program Files\Furigana"にインストールされる。Furigana.exeをダブルクリックすると起動する。
そのほかのOSはJava17以上が必要

JAVAのインストール
https://adoptium.net/temurin/releases/
Windowsの場合はOperating System：Windows、Architecture：x64、Package Type：JRE、Version：17を選んでインストールしてください。

Furigana.jarをダブルクリックすると起動する。
-----------------------------------------------------------------------------------------
■使い方
-----------------------------------------------------------------------------------------


msiのインストーラー版は"C:\Program Files\Furigana"のフォルダー内のFurigana.exeをダブルクリックすると起動する。

jar版はFurigana.jarをダブルクリックして実行します。 　またはコンソールから "java -jar Furigana.jar" でも実行可。 　※javaが見えなければフルパスで指定 　　例: "C:\Program Files\AdoptOpenJDK\jre-11.0.5.10-hotspot\bin/java.exe" -jar Furigana.jar




　エディター上で選択した文字にルビをふるアプリケーション。青空文庫や小説家になろうやカクヨムにも使える。１００KBまで大丈夫なので、大体3万文字ぐらいはいっぺんにルビがつく。完全に正しいルビとは限らないのでチェックは必要だけど、現代語なら9割以上はただしいはず。

JIS X 0208コード以外の文字が含まれていると、エラーが出て止まる。

例えば：軀銳閱旣强契戶吳娛歲產尙稅說絕脫彥姬

■例として

「漢字にふりがなを振る」

　Furiganaを起動後は「ふりがなの種類」に青空文庫、「ふりがなの量」小学一年生のすべての漢字にふりがなを振るに設定されている。青空文庫は「小説家になろう」やカクヨムなどルビと同じ。

「ふりがなの種類」

0:青空文庫、1:pixiv、2:BCCKS、3:でんでんマークダウン、4:HTML5、5:LaTeX、6:Re:VIEW、7:simple（ワード等）

「ふりがなの量」

1~6:小学１年から６年、7:中学生、8:一般向けの８段階




■WEB小説にふりがなを振る
WEB小説サイトは


自動ルビ振りアプリのJava版を作ってみた


https://99nyorituryo.hatenablog.com/entry/2023/05/02/002803



動作要件：Java17以上が必要
