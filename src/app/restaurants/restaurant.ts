

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
    mondaySpecials: string[];
    tuesdaySpecials: string[];
    wednesdaySpecials: string[];
    thursdaySpecials: string[];
    fridaySpecials: string[];
    saturdaySpecials: string[];
    sundaySpecials: string[];
    constructor(data: any) {
        this.mondaySpecials = data.Monday ? Object.values(data.Monday).map(field => field) : null;
        this.tuesdaySpecials = data.Tuesday ? Object.values(data.Tuesday).map(field => field) : null;
        this.wednesdaySpecials = data.Wednesday ? Object.values(data.Wednesday).map(field => field) : null;
        this.thursdaySpecials = data.Thursday ? Object.values(data.Thursday).map(field => field) : null;
        this.fridaySpecials = data.Friday ? Object.values(data.Friday).map(field => field) : null;
        this.saturdaySpecials = data.Saturday ? Object.values(data.Saturday).map(field => field) : null;
        this.sundaySpecials = data.Sunday ? Object.values(data.Sunday).map(field => field) : null;
    }
}

export enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

