import { config as getEnvironmentVars } from "dotenv"
import express from "express"
import { ApolloServer } from "apollo-server-express"

import typeDefs from "./typeDefs/index.js"
import resolvers from "./resolvers/index.js"

async function startApolloServer() {
	getEnvironmentVars()
	const server = new ApolloServer({ typeDefs, resolvers })
	await server.start()

	const app = express()
	server.applyMiddleware({ app })

	await new Promise((resolve) => app.listen({ port: process.env.API_PORT }, resolve))
	console.log(`🚀 Server ready at http://localhost:${process.env.API_PORT}${server.graphqlPath}`)
	return { server, app }
}

startApolloServer()
