# /bin/bash
#用于打包静态网站，并部署到 Github

# 确保脚本抛出遇到的错误
set -e

# 重新打包组件库

npm build

# 打包生成静态文件
npm docs:build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

git init
git add .
git commit -m 'deploy'

# 部署到 https://.github.io/
git push -f git@github.com:jqw755/q-ui.git master:github-pages

# 提交所有代码到github
cd ../
git add .
git cm -m 'update'
git push
