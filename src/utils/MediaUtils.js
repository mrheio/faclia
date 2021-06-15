export default class MediaUtils {
	static toImage(imageBlob) {
		return URL.createObjectURL(imageBlob);
	}
}
