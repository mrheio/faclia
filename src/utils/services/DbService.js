import { supabase } from '../../supabaseClient.js';

export default class DbService {
	static async saveBook(book) {
		let { data, error } = await supabase.from('books').insert(book);
	}

	static async getBooks() {
		let { data, error } = await supabase.from('books').select('*');
		return data;
	}
}
