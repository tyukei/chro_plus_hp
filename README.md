# CHRO_PLUS_HP
Homepage for CHRO_PLUS
production: https://chroplus.xyz/
stage: https://tyukei.github.io/chro_plus_hp/

# File Path

- .github: github action files
- production: if you want to upload files to ftp server, you can use this folder
- stage: if you want to upload files to github page, you can use this folder
- work/generate-ai: theses files are made by gamma which is generate ai web site tool
- work/scratch: theses files are made by hand coding inspired by generate-ai files

# Branch rule

- main: for production, if you push to main branch, it will be deployed to ftp server by github action
- develop: for development, if you push to develop branch, it will be deployed to github page by github setting
- feature/xxxx: for feature developmen, even if you push to feature branch, nothing will be deployed


