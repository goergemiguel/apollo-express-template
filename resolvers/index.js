import authorQueries from "./author/queries.js"
import authorMutations from "./author/mutations.js"

export default {
	Query: {
		...authorQueries,
	},
	Mutation: {
		...authorMutations,
	},
}
