# CHRO_PLUS_HP
Homepage for CHRO_PLUS
- production: https://chroplus.xyz/
- stage: https://tyukei.github.io/chro_plus_hp/production/index.html

# File Path

- .github: github action files
- production: if you want to upload files to ftp server and github page, you can use this folder
- work/generate-ai: theses files are made by gamma which is generate ai web site tool
- work/scratch: theses files are made by hand coding inspired by generate-ai files

# Branch rule

- main: for production, if you push to main branch, it will be deployed to ftp server by github action
- develop: for development, if you push to develop branch, it will be deployed to github page by github setting
- feature/xxxx: for feature developmen, even if you push to feature branch, nothing will be deployed


# Work flow
1. create branch with feature/xxxx
2. work on work/scratch
3. copy files to production when you finish
4. push to develop
5. check on [github page](https://tyukei.github.io/chro_plus_hp/production/index.html)
6. if there is no problem, merge to main




# 日本語
# CHRO_PLUS_HP
Homepage for CHRO_PLUS
- production: https://chroplus.xyz/
- stage: https://tyukei.github.io/chro_plus_hp/production/index.html

# ファイルパスについて
- .github: GitHub Actionsのファイルが格納されているフォルダ
- production: FTPサーバやgithubpageにアップロードするファイルをこのフォルダに入れる
- work/generate-ai: GammaというAIウェブサイトツールで生成されたファイル
- work/scratch: 手動でコーディングしたファイル、generate-ai のファイルにインスパイアされて作成

# ブランチルール

- main: 本番用ブランチ。main ブランチにプッシュすると、GitHub ActionsでFTPサーバにデプロイされます。
- develop: 開発用ブランチ。develop ブランチにプッシュすると、GitHub設定でGitHub Pagesにデプロイされます。
- feature/xxxx: 機能開発用ブランチ。feature ブランチにプッシュしても、何もデプロイされません。


# 作業手順
1. ブランチをfeature/xxxx で作成する
2. work/scratch にて作業を行う
3. 作業が完了したら、production にファイルをコピーする
4. develop にプッシュする
5. [github page](https://tyukei.github.io/chro_plus_hp/production/index.html) で確認する
6. 問題がなければ、main にマージする