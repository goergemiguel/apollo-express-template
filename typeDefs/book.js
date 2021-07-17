import { gql } from "apollo-server-express"

export default gql`
	type Book {
		title: String
		description: String
		author: Author
	}

	input BookInput {
		title: String
		description: String
		author: AuthorInput
	}
`