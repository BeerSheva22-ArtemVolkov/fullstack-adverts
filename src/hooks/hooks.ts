import { useEffect, useState } from "react";
import { Subscription } from "rxjs";
import { advertsService } from "../config/service-config";
import AdvertType from "../model/AdvertType";

export function useSelectorAllAdverts() {
    const [adverts, setAdverts] = useState<AdvertType[]>([]);

    useEffect(() => {
        const subscription: Subscription = advertsService.getAdverts()
            .subscribe({
                next(advertsArray: AdvertType[] | string) {
                    console.log('adverts');
                    
                    let errorMessage: string = '';
                    if (typeof advertsArray === 'string') {
                        errorMessage = advertsArray;
                    } else {
                        setAdverts(advertsArray);
                    }
                }
            });
        return () => subscription.unsubscribe();
    }, []);
    return adverts;
}