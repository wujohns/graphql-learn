# graphql的相关学习  
需要说明的是，graphql是一种规范而非具体的实现，开源社区在此规范上有各种实现，这里选取
工具与教程都比较完善的 `Apollo` 团队整理的一套实现（这些实现都是基于js的）。

在后端实现上 `Apollo` 给出了两个工具：`graphql-tool` 与 `apollo-server`

## graphql-tool 
`graphql-tool ` 可用于构建相应的schema对象（按照graphql标准语法）

## apollo-server
`apollo-server` 则是一系列的包可和多种 `nodejs` web框架相配合提供相应的graphql服务。

## 整理基础章节的目的
`graphql` 的掌握不是很难，但由于官方的文档起步较高且其他各类参考资料要么泛泛而谈，要么一开始就是举出综合了
好几种特性案例。这些因素使得其入门过程比较痛苦，这里将 `graphql` 的基本功能依次说明，降低学习的成本。  

另外在该工程的 [scripts](/scripts/) 目录中有可直接运行的代码，在学习时可直接拿来调试实验。

## 目录
1. [graphql基础查询](/docs/1.graphql基础查询.md)  
1. [graphql关联查询](/docs/2.graphql关联查询.md)  
1. [graphql修改数据](/docs/3.graphql修改数据.md)  

## 参考
[Apollo官方文档](http://dev.apollodata.com/tools/)  
[怎样使用GraphQL - 进阶 - 2.服务端](https://segmentfault.com/a/1190000011054516)