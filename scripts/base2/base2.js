/**
 * graphql 关联查询
 *
 * @author wujohns
 * @date 17/9/7
 */
'use strict';

const fs = require('fs');
const _ = require('lodash');
const graphqlTools = require('graphql-tools');
const graphql = require('graphql').graphql;

const print = require('../utils').print;

const typeDefs = fs.readFileSync('./schema.graphql').toString();

// mock 的数据
const authors = [
    { id: 1, nickname: 'aaa' },
    { id: 2, nickname: 'bbb' },
    { id: 3, nickname: 'ccc' }
];

const posts = [
    { id: 1, authorId: 1, title: 'p111' },
    { id: 2, authorId: 2, title: 'p222' },
    { id: 3, authorId: 2, title: 'p333' },
    { id: 4, authorId: 3, title: 'p444' }
];

const resolvers = {
    Author: {
        // Author 中关联字段部分的解析获取定义
        posts: (author) => _.filter(posts, { authorId: author.id })
    },
    Post: {
        // Post 中关联字段部分的解析定义
        author: (post) => _.find(authors, { id: post.authorId })
    },
    Query: {
        author: (blannk, select) => _.find(authors, select),
        post: (blank, select) => _.find(posts, select)
    }
};

const schema = graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

const queryAuthor = `
    query {
        author(id: 2) {
            nickname
            posts {
                title
            }
        }
    }
`;

const queryPost = `
    query {
        post(id: 4) {
            title
            author {
                nickname
            }
        }
    }
`;

graphql(schema, queryAuthor).then((result) => print(result));
graphql(schema, queryPost).then((result) => print(result));