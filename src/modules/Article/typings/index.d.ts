declare namespace Post {

	interface articleListing {
		loading: boolen;
		data: Article[];
		index: number;
		comment: Comments[];
	}

	interface Article {
		userId: string;
    	id: number;
    	title: string;
    	body: string;
		comments: Comments[];
	}

	interface Comments {
		postId: string;
    	id: number;
    	name: string;
    	email: string;
		body: string;
	}
}
