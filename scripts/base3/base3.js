/**
 * graphql 数据修改
 *
 * @author wujohns
 * @date 17/9/8
 */
'use strict';

const fs = require('fs');
const _ = require('lodash');
const graphqlTools = require('graphql-tools');
const graphql = require('graphql').graphql;

const print = require('../utils').print;

const typeDefs = fs.readFileSync('./schema.graphql').toString();

// mock 数据
const authors = [
    { id: 1, nickname: 'aaa' },
    { id: 2, nickname: 'bbb' },
    { id: 3, nickname: 'ccc' }
];

const resolvers = {
    Mutation: {
        changeNickname: (blank, update) => {
            const author = _.find(authors, { id: update.id });
            if (!author) {
                throw new Error(`Couldn't find author with id ${ update.id }`);
            }
            author.nickname = update.nickname;
            return author;
        }
    }
};

const schema = graphqlTools.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

const query = `
    mutation {
        changeNickname(id: 1, nickname: "AAA") {
            nickname
        }
    }
`;

graphql(schema, query).then((result) => {
    print(result);
    console.log(authors);
});