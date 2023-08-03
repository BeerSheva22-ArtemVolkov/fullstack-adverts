import { Observable } from "rxjs";
import AdvertType from "../model/AdvertType";

export default interface AdvertsService {
    addAdvert(advert: AdvertType): Promise<Boolean>;
    deleteAdvert(ID: any): Promise<Boolean>;
    updateAdvert(ID: any, advert: AdvertType): Promise<Boolean>;
    getAdverts(): Observable<AdvertType[] | string>;//Promise<AdvertType[]>;
    getAdvertsByPrice(maxPrice: number): Promise<AdvertType[]>;
    getAdvertsByCategory(category: string): Promise<AdvertType[]>;
    getCategories(): Promise<string[]>;
}