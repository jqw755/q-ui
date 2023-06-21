# /bin/bash
# 需提前登录 npm 账户，否则无法直接发布
# 用于打包升级组件库，并发布到npm，同时自动升级项目内组件库依赖版本到最新，只需新增version版本号之后执行：sh publish.sh

# 确保脚本抛出遇到的错误
set -e

# 读取package.json中的version
# version=`jq -r .version package.json`

 # 打包构建
npm build

 # 提交代码到github
git add .
git commit -m "update"
git push

 # 发布到npm，pnpm(高性能的npm)
npm publish

# 升级 q-ui 依赖版本
npm up q-ui

# 提交版本更新代码到github
git add .
git cm -m "update"
git push

