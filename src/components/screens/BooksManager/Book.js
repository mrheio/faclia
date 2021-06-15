import DbService from '../../../utils/services/DbService.js';
import StorageService from '../../../utils/services/StorageService.js';

export default class Book {
	constructor(book = {}) {
		this.title = book.title || '';
		this.author = book.author || '';
		this.genres = book.genres || '';
		this.about = book.about || '';
		this.coverSrc = book.coverSrc || null;
		this.coverPath = (book.coverSrc && `covers/${this.coverSrc.name}`) || '';
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
