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

	saveToStorage() {
		StorageService.save(this.coverSrc, 'books', this.coverPath);
	}

	saveToDb() {
		const { coverSrc, ...bookData } = this;
		DbService.saveBook(bookData);
	}

	save() {
		this.saveToStorage();
		this.saveToDb();
	}
}
