import { supabase } from '../../supabaseClient.js';

export default class DbService {
	static async saveBook(book) {
		let { data, error } = await supabase.from('books').insert(book);
		if (error) {
			console.error(error);
		}
	}

	static async getBooks() {
		let { data, error } = await supabase.from('books').select('*');
		if (error) {
			console.error(error);
		}
		return data;
	}
}
