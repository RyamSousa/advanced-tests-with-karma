import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map, tap } from "rxjs/operators";
import { Photo } from "../interfaces/photo";
import { buildPhotolist } from "../test/build-photos-list";
import { PhotoBoardService } from "./photo-board.service";

@Injectable()
export class PhotoBoardMockService extends PhotoBoardService {
	getPhotos(): Observable<Photo[]> {
		return of(buildPhotolist());
	}
}
