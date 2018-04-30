
export class ViewRestaurant {
    id: string;
    info: RestaurantInfo;
    specials: string[];
    constructor(data: ViewRestaurantInterface) {
        this.id = data.id;
        this.info = new RestaurantInfo(data.info);
        this.specials = data.specials;
    }
}

export interface ViewRestaurantInterface {
    id: string;
    info: RestaurantInfo;
    specials: string[];
}

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

    public static hasSpecialsForDay(container: WeeklySpecialsContainer, day: Day): boolean {
        switch (day) {
            case (Day.Monday): {
                return container.mondaySpecials ? true : false;
            }
            case (Day.Tuesday): {
                return container.tuesdaySpecials ? true : false;
            }
            case (Day.Wednesday): {
                return container.wednesdaySpecials ? true : false;
            }
            case (Day.Thursday): {
                return container.thursdaySpecials ? true : false;
            }
            case (Day.Friday): {
                return container.fridaySpecials ? true : false;
            }
            case (Day.Saturday): {
                return container.saturdaySpecials ? true : false;
            }
            case (Day.Sunday): {
                return container.sundaySpecials ? true : false;
            }
        }
    }

    public static getSpecialsForDay(container: WeeklySpecialsContainer, day: Day): string[] {
        switch (day) {
            case (Day.Monday): {
                return container.mondaySpecials;
            }
            case (Day.Tuesday): {
                return container.tuesdaySpecials;
            }
            case (Day.Wednesday): {
                return container.wednesdaySpecials;
            }
            case (Day.Thursday): {
                return container.wednesdaySpecials;
            }
            case (Day.Friday): {
                return container.wednesdaySpecials;
            }
            case (Day.Saturday): {
                return container.wednesdaySpecials;
            }
            case (Day.Sunday): {
                return container.wednesdaySpecials;
            }
        }
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

