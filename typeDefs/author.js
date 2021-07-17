import { gql } from "apollo-server-express"

export default gql`
	type Author {
		firstName: String
		lastName: String
		books: [Book!]!
	}

	input AuthorInput {
		firstName: String
		lastName: String
		books: [BookInput]
	}

	type Authors {
		list: [Author!]!
		totalCount: Int
	}

	input authorWhereInput {
		firstName_contains: String
	}

	input createAuthorInput {
		firstName: String
		lastName: String
		books: [BookInput]
	}

	input updateAuthorInput {
		firstName: String
		lastName: String
		books: [BookInput]
	}

	extend type Query {
		author(id: ID): Author
		authors(where: authorWhereInput, skip: Int, limit: Int): Authors
	}

	extend type Mutation {
		createAuthor(input: createAuthorInput): Author
		updateAuthor(input: updateAuthorInput): Author
		deleteAuthor(id: ID): Author
	}
`
