# 寻标游戏

> ##node 服务端 

   - 功能 
     -  /getmarks 获取坐标点
     -  /pickup/:key 拾取一个坐标点，key由/getmarks返回
      
   - 测试地址 
     -  [http://neolx423-lbs-game.daoapp.io/](http://neolx423-lbs-game.daoapp.io)
     -  （...尼玛免费服务器每天都要手动重启一次！！！）

   - 未实现功能 
     - 用户
     - 使用redis统一管理坐标点
     - 使用mongoDB统一管理生成参数和明细登记
     - 监控策略
          1. 监控同客户移动速度是否合法
          2. 监控生成水晶数和领取数是否合法

   - 目录结构
      - project 项目目录
      - Dockerfile 镜像构建文件

----------

> ##ios 客户端

