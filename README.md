
## 项目说明

- UI：Element
- 前端框架：Vue
- 后端框架：Koa




## 安装依赖

### 前端

`cd vue-todos && npm i`

### 后端

`cd vue-todos/server && npm i`

### mongodb 

为了在本地把项目跑起来，需要：
1. 在 mongodb 数据库中建立一个名为 **todos** 的数据库
2. 修改 `server/routes/index.js` 中的链接命令，将数据库连接到本地


## 运行

### 前端

在项目根路径下执行 `npm run dev` 打开浏览器 `localhost:8080`

### 后端

在项目根路径下执行 `cd ./server && node ./bin/start`

### mongodb 数据库

启动数据库，控制台输出 MongoDB connected success 说明链接成功

