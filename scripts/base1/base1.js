/**
 * graphql 基础查询
 *
 * @author wujohns
 * @date 17/9/6
 */
'use strict';

const fs = require('fs');
const _ = require('lodash');
const graphqlTools = require('graphql-tools');
const graphql = require('graphql').graphql;

const print = require('../utils').print;

// 通过文件读取的方式载入 graphql schema 的配置
const typeDefs = fs.readFileSync('./schema.graphql').toString();

// mock 的数据
const authors = [
    { id: 1, nickname: 'aaa' },
    { id: 2, nickname: 'bbb' },
    { id: 3, nickname: 'ccc' }
];

/**
 * resolvers
 * 利用graphql解析出的查询对象对数据源进行相关操作
 */
const resolvers = {
    Query: {
        authorById: (blank, select) => _.find(authors, select),
        authorByNickname: (blank, select) => _.find(authors, select),
        author: (blank, select) => _.find(authors, select)
    }
};

// 构建可供操作的 schema 对象
const schema = graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

// 通过 id 查询 author
const queryById = `
    query {
        authorById(id: 2) {
            id
            nickname
        }
    }
`;

// 通过 nickname 查询 author
const queryByNickname = `
    query {
        authorByNickname(nickname: "ccc") {
            id
            nickname
        }
    }
`;

// 同时通过 id 与 nickname 查询 author（也可以只通过 id 或 nickname 查询）
const query = `
    query {
        author(id: 1, nickname: "aaa") {
            id
            nickname
        }
    }
`;

graphql(schema, queryById).then((result) => print(result));
graphql(schema, queryByNickname).then((result) => print(result));
graphql(schema, query).then((result) => print(result));