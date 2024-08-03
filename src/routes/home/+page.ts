import { error } from '@sveltejs/kit';

const getPageData = (name: string) => {
	switch (name) {
		case 'hello-world': {
			return {
				title: 'Hello world!',
				content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
			};
		}
		case 'what': {
			return {
				title: 'What?',
				content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
			};
		}
		default: {
			return {
				title: 'Default',
				content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
			};
		}
	}
};

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return getPageData('what');
}
