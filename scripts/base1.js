/**
 * graphql 基本结构
 *
 * @author wujohns
 * @date 17/8/2
 */
'use strict';

const Graphql = require('graphql'),
GraphQLObjectType = Graphql.GraphQLObjectType,
GraphQLSchema = Graphql.GraphQLSchema,
GraphQLInt = Graphql.GraphQLInt;

const graphql = Graphql.graphql;

/**
 * 数据来源
 */
let count = 0;

/**
 * 创建的 graphql 表
 */
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                resolve: () => count
            }
        }
    })
});

/**
 * graphql 查询
 */
const query = 'quer RootQueryType { count }';

/**
 * 执行查询
 */
graphql(schema, query).then((result) => {
    console.log(result);
});