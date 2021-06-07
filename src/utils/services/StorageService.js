import { supabase } from '../../supabaseClient.js';

export default class StorageService {
	static async save(file, bucket, path) {
		await supabase.storage.from(bucket).upload(path, file);
	}

	static async get(bucket, path) {
		const { data, error } = await supabase.storage.from(bucket).download(path);
		return data;
	}
}