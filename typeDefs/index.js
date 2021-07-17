import { gql } from "apollo-server-express"

import book from "./book.js"
import author from "./author.js"

const Root = gql`
type Query {
	root: String
}
type Mutation {
	root: String
}
`

export default [
	Root,
	book,
	author
]
