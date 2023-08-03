import { Observable, Subscriber } from "rxjs";
import AdvertType from "../model/AdvertType";
import AdvertsService from "./AdvertsService";
import { error } from "console";

const POLLER_INTERVAL = 3000;

class Cache {

    cacheString: string = ''

    setCache(adverts: AdvertType[]): void {
        this.cacheString = JSON.stringify(adverts)
    }

    reset(): void {
        this.cacheString = ''
    }

    isEqual(adverts: AdvertType[]): boolean {
        return this.cacheString === JSON.stringify(adverts);
    }

    getCache(): AdvertType[] {
        return !this.isEmplty() ? JSON.parse(this.cacheString) : []
    }

    isEmplty(): boolean {
        return this.cacheString.length == 0
    }
}

export default class AdvertsServiceRest implements AdvertsService {

    private observable: Observable<AdvertType[] | string> | null = null;
    private cache: Cache = new Cache()
    constructor(private url: string) { }

    async addAdvert(advert: AdvertType): Promise<Boolean> {
        return this.fetchRequest("POST", "adverts", JSON.stringify({...advert, otherDetails: JSON.stringify(advert.otherDetails)}));
    }

    deleteAdvert(ID: any): Promise<Boolean> {
        return this.fetchRequest("DELETE", `adverts/${ID}`);
    }

    updateAdvert(ID: any, advert: AdvertType): Promise<Boolean> {
        return this.fetchRequest("PUT", `adverts/${ID}`, JSON.stringify({...advert, otherDetails: JSON.stringify(advert.otherDetails)}));
    }

    getAdverts(): Observable<AdvertType[] | string> {
        if (this.observable == null) {
            this.observable = new Observable<AdvertType[] | string>((subscriber) => {
                if (this.cache.isEmplty()) {
                    // Запрос
                    try {
                        this.startAdvertsSubscription(subscriber)
                    } catch (error: any) {
                        subscriber.next(error)
                    }
                } else {
                    // восстановление из кэша
                    subscriber.next(this.cache.getCache())
                    console.log('Restored from cache');  
                }
                const intervalID = setInterval(() => this.startAdvertsSubscription(subscriber), POLLER_INTERVAL)
                return () => clearInterval(intervalID);
            })
        }
        return this.observable
    }

    getAdvertsByPrice(maxPrice: number): Promise<AdvertType[]> {        
        return this.fetchRequest("GET", `adverts/byPrice/${maxPrice}`);
    }

    async getAdvertsByCategory(category: string): Promise<AdvertType[]> {
        return this.fetchRequest("GET", `adverts/${category}`);
    }

    getCategories(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }

    private async startAdvertsSubscription(subscriber: Subscriber<string | AdvertType[]>) {

        this.fetchRequest("GET", 'adverts')
            .then(async (adverts: Promise<AdvertType[]>) => {
                const advs = await adverts;
                return advs
            })
            .then((adverts: AdvertType[]) => {
                if (!this.cache.isEqual(adverts)) {
                    this.cache.setCache(adverts)
                    subscriber.next(adverts)
                } else {
                    console.log(adverts);
                    
                    console.log('no changes in data');
                }
            })
            .catch(error => {
                console.log(error);
                subscriber.next(error)
            })
    }

    private async fetchRequest(method: string, path: string, body?: string): Promise<any> {

        const headers: HeadersInit = {
            "Content-Type": "application/json",
        };

        try {
            const response = await fetch(`${this.url}${path}`, {
                method,
                headers,
                body
            })

            if (!response.ok) {
                // throw this.getErrorMsg(response.status, response.statusText);
                console.log('error');
            }
            return response.json()
        } catch (error: any) {
            console.log(error);

            if (error instanceof Error) {
                throw "Server is unavailable, repeat later";
            } else {
                throw error;
            }
        }
    }

}