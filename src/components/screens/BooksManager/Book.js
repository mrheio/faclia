import DbService from '../../../utils/services/DbService.js';
import StorageService from '../../../utils/services/StorageService.js';

export default class Book {
	constructor(title, author, genres, coverSrc) {
		this.title = title;
		this.author = author;
		this.genres = genres;
		this.coverSrc = coverSrc;
		this.coverPath = `covers/${coverSrc.name}`;
	}

	async saveToStorage() {
		await StorageService.save(this.coverSrc, 'books', this.coverPath);
	}

	async saveToDb() {
		const { coverSrc, ...bookData } = this;
		await DbService.saveBook(bookData);
	}

	async save() {
		await this.saveToStorage();
		await this.saveToDb();
	}
}
