/**
 * graphql的视图定义语言(SDL)的相关实验
 */
'use strict';

const fs = require('fs');
const _ = require('lodash');
const graphqlTools = require('graphql-tools');
const graphql = require('graphql').graphql;

const typeDefs = fs.readFileSync('./temp.graphql').toString();

// mock 的数据
const authors = [
    { id: 1, nickname: 'aaa' },
    { id: 2, nickname: 'bbb' },
    { id: 3, nickname: 'ccc' }
];

const posts = [
    { id: 1, authorId: 1, title: 'p111', votes: 3 },
    { id: 2, authorId: 2, title: 'p222', votes: 2 },
    { id: 3, authorId: 2, title: 'p333', votes: 1 },
    { id: 4, authorId: 3, title: 'p444', votes: 7 }
];

const resolvers = {
    Author: {
        posts: (author) => _.filter(posts, { authorId: author.id })
    },
    Post: {
        author: (post) => _.find(authors, { id: post.authorId })
    },
    Query: {
        posts: () => posts,
        author: (blank, select) => _.find(authors, select)
    },
    Mutation: {
        upvotePost: (black, select) => {
            const post = _.find(posts, { id: select.postId });
            if (!post) {
                throw new Error(`Couldn't find post with id ${ select.postId }`);
            }
            post.votes += 1;
            return post;
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
            posts {
                title
                votes
            }
        }
    }
`;
graphql(schema, query).then((result) => {
    console.log(result);
});