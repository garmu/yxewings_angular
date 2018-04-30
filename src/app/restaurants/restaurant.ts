


export class Restaurant {
    id: string;
    ref: string;
    info: RestaurantInfo;
    weeklySpecialsContainer: any;
    constructor(data: any) {
        this.ref = data.$ref;
        this.id = data.$key;
        this.info = new RestaurantInfo(data.info);
        this.weeklySpecialsContainer = new WeeklySpecialsContainer(data.specials);
    }
}

export class RestaurantInfo {
    address: string;
    latitude: string;
    longitude: string;
    name: string;
    phone: string;
    constructor(data: any) {
        this.address = data.address;
        this.longitude = data.long;
        this.latitude = data.lat;
        this.name = data.name;
        this.phone = data.phone;
    }
}

export class WeeklySpecialsContainer {
    mondaySpecials: DailySpecials;
    tuesdaySpecials: DailySpecials;
    wednesdaySpecials: DailySpecials;
    thursdaySpecials: DailySpecials;
    fridaySpecials: DailySpecials;
    saturdaySpecials: DailySpecials;
    sundaySpecials: DailySpecials;
    constructor(data: any) {
        this.mondaySpecials = new DailySpecials(data.Monday);
        this.tuesdaySpecials = data.Tuesday;
        this.wednesdaySpecials = data.Wednesday;
        this.thursdaySpecials = data.Thursday;
        this.fridaySpecials = data.Friday;
        this.saturdaySpecials = data.Saturday;
        this.sundaySpecials = data.Sunday;
    }
}

export class DailySpecials {
    specials: string[];
    constructor (data: any) {
        this.specials = data ? Object.values(data).map(field => field) : null;
    }
}
