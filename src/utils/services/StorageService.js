import { supabase } from '../../supabaseClient.js';

export default class StorageService {
	static async save(file, bucket, path) {
		let { data, error } = await supabase.storage.from(bucket).upload(path, file);
		if (error) {
			console.error(error);
		}
	}

	static async get(bucket, path) {
		let { data, error } = await supabase.storage.from(bucket).download(path);
		if (error) {
			console.error(error);
		}
		return data;
	}
}
