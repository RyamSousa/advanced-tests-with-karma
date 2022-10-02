import { Photo } from "../interfaces/photo";

export const buildPhotolist = () => {
	const photos: Photo[] = [];

	for (let i = 0; i < 8; i++) {
		photos.push({
			id: i + 1,
			url: ``,
			description: `Description ${i}`,
		});
	}
	return photos;
};
