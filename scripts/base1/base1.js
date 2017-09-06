/**
 * graphql schema 基础
 *
 * @author wujohns
 * @date 17/9/6
 */
'use strict';

const fs = require('fs');
const _ = require('lodash');
const graphqlTools = require('graphql-tools');
const graphql = require('graphql').graphql;

const typeDefs = fs.readFileSync('./schema.graphql').toString();

// mock 的数据
const authors = [
    { id: 1, nickname: 'aaa' },
    { id: 2, nickname: 'bbb' },
    { id: 3, nickname: 'ccc' }
];

const posts = [
    { id: 1, title: 'p111', votes: 3 },
    { id: 2, title: 'p222', votes: 2 },
    { id: 3, title: 'p333', votes: 1 },
    { id: 4, title: 'p444', votes: 7 }
];

// resolvers （这个需要做重点关注，可能为一个空对象都是可行的）
const resolvers = {
    Query: {
        // clp 权限校验部分
        author: (blank, select) => {
            console.log(select);
            return _.find(authors, select)
        }
    }
};

const schema = graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

const query = `
    query {
        author(id: 1) {
            nickname
        }
    }
`;

graphql(schema, query).then((result) => {
    console.log(JSON.stringify(result, null, 2));
});