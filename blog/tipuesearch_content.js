var tipuesearch = {"pages":[{"title":"About","text":"2017Fall 機械設計工程系 CADP & CP 課程倉儲: https://mde1a1.kmol.info/2017fall 課程投影片: https://mde1a1.kmol.info/2017fall/doc/trunk/index.html 課程網誌: https://mde1a1.kmol.info/2017fall/doc/trunk/blog/","tags":"misc","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/pages/about/"},{"title":"2017 Fall CP 第九週","text":"w9 期中心得 報告影片","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/40623251-2017-fall-cpb-w9.html"},{"title":"2017 Fall CP 第八週","text":"w8 Exam For 迴圈 class w8 () : def __init__ ( self , star ) : self . star = star def diamond ( self , w ) : for i in range ( 1 , w ) : print (( w - i ) * \" \" + i * self . star ) for i in range ( w ) : print ( i * \" \" + ( w - i ) * self . star ) w = w8 ( \"a\" ) w . diamond ( 10 ) Eric 6 操作影片","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/40623251-2017-fall-cpb-w8.html"},{"title":"2017 Fall CP 第七週 Exam","text":"W7 Exam 操作影片 學習心得 懂得如何將影片分享至網誌中並了解編排SOP的重要性 自評成績 60分","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/40623251-2017-fall-cpb-w7.html"},{"title":"2017 Fall CP 第六週","text":"","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/40623251-2017-fall-cpb-w6.html"},{"title":"2017 Fall CP 第五週","text":"","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/4052-2017-fall-cp-w5.html"},{"title":"2017 Fall CP 第四週","text":"","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/40623251-2017-fall-cpb-w4.html"},{"title":"2017 Fall CP 第三週","text":"將架構檔案推送至倉儲並檢視 用fossil clone+倉儲網址把有架構檔案的倉儲和自己的倉儲clone下來( https:// 後面加 帳號@ 可綁定帳號) clone下來的倉儲fossil檔 用fossil open解開至指定的資料夾裡 在有架構檔案的資料夾裡 將_FOSSIL_,_pycache_以外的檔案複製至自己的倉儲資料夾 用 fossil add .將自己的倉儲資料夾裡的檔案更新到近端的fossil檔裡 用fossil commit來推送近端的fossil檔到遠端(commit後面可+ -m \"簡述此次推送用意\") 接著用遊覽器開啟倉儲 確認是否推送成功 成功後即完成此次流程 學習心得 懂得如何推送資料至遠端倉儲 並了解每個指令的分別與單字意義","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/40623251-2017-fall-cpb-w3.html"},{"title":"2017 Fall CP 第二週","text":"本學期起各班透過一台 Ubuntu 16.04 主機, 建立 Fossil SCM 伺服器, 且每一學員發放一個 Fossil SCM 倉儲, 其中各學員可以利用 Wiki 與 Technote 紀錄學習資料外, 還可以將靜態網誌與簡報檔案放入 Files 資料區. 一乙上課內容 希望為每位學員建立倉儲的設想流程如下: 各學員可以獨立維護倉儲內容, 也可以在總管理員的權限下, 為分組學員建立帳號, 逐步導入協同設計 各學員的倉儲以修課班級命名伺服器, 以學號命名倉儲, 方便依照此一規律擷取各學員的倉儲頁面. 各學員能以電子郵件收到與新建倉儲相關的連結, 以及帳號密碼. 必須擴增 Ubuntu ulimits -n 同時開檔的設限範圍 (內定只允許同時開啟 1024 個檔案) 解決方案: 主機名稱可以透過 domain dns 中的 CNAME 別名方式處理, 因為目前所能提供出來的 IPv4/IPv6 雙支援主機, 之前已經都設定了符號名稱. fossil init 雖然提供指定管理者的 -A 選項功能, 但是無法直接指定管理者對應密碼, 因此必須建立倉儲之後, 再利用 fossil user 修改密碼, 之後再利用 Gmail 寄出通知信, 其中提供倉儲連結, 登入帳號與密碼等資訊. 建立各學員倉儲檔案的程式如下, 如前所述, 主要透過兩個 Fossil SCM 指令完成, 在 Windows 採用 Fossil SCM 2.3 版建立所有 .fossil 倉儲時, 將同時以 email 通知各學員. 各學員的 .fossil 檔案再以 sftp 送到伺服主機對應帳號所屬的目錄下. 必須要特別注意的是, 採用 Fossil SCM 2.3 版所建立的 .fossil 倉儲檔案, 在 Ubuntu 操作系統上也必須採用相同版本的 fossil, 否則舊版 fossil 可能無法開啟新版 fossil 程式所建立的倉儲檔. import os import string import random # 使用 Gmail 寄信必須導入下列模組 import smtplib import re from email.mime.text import MIMEText from email.header import Header # 用來以亂數建立密碼的韓式 def id_generator(size=6, chars=string.ascii_uppercase + string.digits): ''' source: https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python ''' return ''.join(random.choice(chars) for _ in range(size)) # 讀取學員名單, 逐一取得學員學號, 學員名單, 檢查點 1/7 student_data = open(\"2017fall_list/1b.txt\").read() student_list = student_data.splitlines() # 利用 gmail smtp 功能寄信 server = smtplib.SMTP('smtp.gmail.com:587') server.ehlo() server.starttls() # 以下必須準備好對應郵件帳號與密碼的外部檔案, 所提供的寄信帳號, 是否可以寄信, 檢查點 2/7 ''' 寄信之前必須到 https://www.google.com/settings/security/lesssecureapps 修改權限, 改為較低安全權限 否則無法使用程式寄信! ''' # 從外部檔案讀取要用來寄信的 gmail 帳號與密碼 # mail.txt 格式為: 電子郵箱,對應密碼, 以逗點隔開, 檢查點 3/7 email_data = open(\"z:/2017fall/mail.txt\").read() email, email_password= email_data.split(\",\") print(email, email_password) # 是否登入所提供寄信的電子郵箱, 4/7 server.login(email, email_password) # 不同課程名稱, 與對應主機名稱, 必須配合修改 5/7 course_title = \"計算機程式\" fossil_server = \"cpb.kmol.info\" for student_num in student_list: username = student_num repository = username + '.fossil' # 利用所提供的字串, 以亂數組成六個字元的密碼 password = id_generator(6, \"23456789abcdef\") print(student_num, \", \" , password) # 執行 dos command 指令, 建立倉儲 os.system(\"fossil init -A \" +username + \" \" + repository) print(\"已經建立倉儲 \" + repository) # 執行 dos command 指令, 修改使用者密碼 os.system(\"fossil user password \" + username + \" \" + password + \" -R \" + repository) print(\"已經修改密碼\") # 利用 Gmail 寄信, 告知各學員倉儲連結與帳號密碼 # 每一位學員收到的 output 都從這裡 reset output = \"\" # 若學號欄為空, 則不寄信 if student_num != \"\": # output 為寄給每一位學員的資料表格 mail_content = student_num+' 您好: 您在 '+course_title+' 課程中的區域網路倉儲: https://'+fossil_server+'/'+student_num+' ' mail_content += '管理帳號為:'+ student_num + ' 管理密碼為: '+ password+' ' print(student_num) print(mail_content) # 至此 mail_content 已經確定 # 在測試與實際寄送資料, 也必須配合修改, 檢查點 6/7 receiver_email = student_num + \"@gm.nfu.edu.tw\" # 測試用 #receiver_email = student_num+\"@mde.tw\" # 列出收信人 email 位址 #print(receiver_email) #message= MIMEText(mail_content,'plain','UTF-8') # 以 html 格式寄信 message= MIMEText(mail_content,'html','UTF-8') message['Subject'] = Header(course_title+\" Fossil SCM 帳號通知\", 'UTF-8') # 可以先不寄信, 確定格式正確後再開啟, 是否實際寄出信件, 檢查點 7/7 server.sendmail(\"gmail_address\", receiver_email, message.as_string()) server.quit() 各班所完成的主機: 二甲電腦輔助設計實習: https://cadpa.kmol.info 二乙電腦輔助設計實習: https://cadpb.kmol.info 一甲計算機程式: https://cpa.kmol.info 一乙計算機程式: https://cpb.kmol.info","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/2017-fall-cpb-w2.html"},{"title":"2017 Fall CP 第二週","text":"本學期起各班透過一台 Ubuntu 16.04 主機, 建立 Fossil SCM 伺服器, 且每一學員發放一個 Fossil SCM 倉儲, 其中各學員可以利用 Wiki 與 Technote 紀錄學習資料外, 還可以將靜態網誌與簡報檔案放入 Files 資料區. 一乙上課內容 希望為每位學員建立倉儲的設想流程如下: 各學員可以獨立維護倉儲內容, 也可以在總管理員的權限下, 為分組學員建立帳號, 逐步導入協同設計 各學員的倉儲以修課班級命名伺服器, 以學號命名倉儲, 方便依照此一規律擷取各學員的倉儲頁面. 各學員能以電子郵件收到與新建倉儲相關的連結, 以及帳號密碼. 必須擴增 Ubuntu ulimits -n 同時開檔的設限範圍 (內定只允許同時開啟 1024 個檔案) 解決方案: 主機名稱可以透過 domain dns 中的 CNAME 別名方式處理, 因為目前所能提供出來的 IPv4/IPv6 雙支援主機, 之前已經都設定了符號名稱. fossil init 雖然提供指定管理者的 -A 選項功能, 但是無法直接指定管理者對應密碼, 因此必須建立倉儲之後, 再利用 fossil user 修改密碼, 之後再利用 Gmail 寄出通知信, 其中提供倉儲連結, 登入帳號與密碼等資訊. 建立各學員倉儲檔案的程式如下, 如前所述, 主要透過兩個 Fossil SCM 指令完成, 在 Windows 採用 Fossil SCM 2.3 版建立所有 .fossil 倉儲時, 將同時以 email 通知各學員. 各學員的 .fossil 檔案再以 sftp 送到伺服主機對應帳號所屬的目錄下. 必須要特別注意的是, 採用 Fossil SCM 2.3 版所建立的 .fossil 倉儲檔案, 在 Ubuntu 操作系統上也必須採用相同版本的 fossil, 否則舊版 fossil 可能無法開啟新版 fossil 程式所建立的倉儲檔. import os import string import random # 使用 Gmail 寄信必須導入下列模組 import smtplib import re from email.mime.text import MIMEText from email.header import Header # 用來以亂數建立密碼的韓式 def id_generator(size=6, chars=string.ascii_uppercase + string.digits): ''' source: https://stackoverflow.com/questions/2257441/random-string-generation-with-upper-case-letters-and-digits-in-python ''' return ''.join(random.choice(chars) for _ in range(size)) # 讀取學員名單, 逐一取得學員學號, 學員名單, 檢查點 1/7 student_data = open(\"2017fall_list/1b.txt\").read() student_list = student_data.splitlines() # 利用 gmail smtp 功能寄信 server = smtplib.SMTP('smtp.gmail.com:587') server.ehlo() server.starttls() # 以下必須準備好對應郵件帳號與密碼的外部檔案, 所提供的寄信帳號, 是否可以寄信, 檢查點 2/7 ''' 寄信之前必須到 https://www.google.com/settings/security/lesssecureapps 修改權限, 改為較低安全權限 否則無法使用程式寄信! ''' # 從外部檔案讀取要用來寄信的 gmail 帳號與密碼 # mail.txt 格式為: 電子郵箱,對應密碼, 以逗點隔開, 檢查點 3/7 email_data = open(\"z:/2017fall/mail.txt\").read() email, email_password= email_data.split(\",\") print(email, email_password) # 是否登入所提供寄信的電子郵箱, 4/7 server.login(email, email_password) # 不同課程名稱, 與對應主機名稱, 必須配合修改 5/7 course_title = \"計算機程式\" fossil_server = \"cpb.kmol.info\" for student_num in student_list: username = student_num repository = username + '.fossil' # 利用所提供的字串, 以亂數組成六個字元的密碼 password = id_generator(6, \"23456789abcdef\") print(student_num, \", \" , password) # 執行 dos command 指令, 建立倉儲 os.system(\"fossil init -A \" +username + \" \" + repository) print(\"已經建立倉儲 \" + repository) # 執行 dos command 指令, 修改使用者密碼 os.system(\"fossil user password \" + username + \" \" + password + \" -R \" + repository) print(\"已經修改密碼\") # 利用 Gmail 寄信, 告知各學員倉儲連結與帳號密碼 # 每一位學員收到的 output 都從這裡 reset output = \"\" # 若學號欄為空, 則不寄信 if student_num != \"\": # output 為寄給每一位學員的資料表格 mail_content = student_num+' 您好: 您在 '+course_title+' 課程中的區域網路倉儲: https://'+fossil_server+'/'+student_num+' ' mail_content += '管理帳號為:'+ student_num + ' 管理密碼為: '+ password+' ' print(student_num) print(mail_content) # 至此 mail_content 已經確定 # 在測試與實際寄送資料, 也必須配合修改, 檢查點 6/7 receiver_email = student_num + \"@gm.nfu.edu.tw\" # 測試用 #receiver_email = student_num+\"@mde.tw\" # 列出收信人 email 位址 #print(receiver_email) #message= MIMEText(mail_content,'plain','UTF-8') # 以 html 格式寄信 message= MIMEText(mail_content,'html','UTF-8') message['Subject'] = Header(course_title+\" Fossil SCM 帳號通知\", 'UTF-8') # 可以先不寄信, 確定格式正確後再開啟, 是否實際寄出信件, 檢查點 7/7 server.sendmail(\"gmail_address\", receiver_email, message.as_string()) server.quit() 各班所完成的主機: 二甲電腦輔助設計實習: https://cadpa.kmol.info 二乙電腦輔助設計實習: https://cadpb.kmol.info 一甲計算機程式: https://cpa.kmol.info 一乙計算機程式: https://cpb.kmol.info","tags":"Course","url":"https://cpb.kmol.info/40623251/doc/trunk/blog/40623251-2017-fall-cpb-w2.html"}]};