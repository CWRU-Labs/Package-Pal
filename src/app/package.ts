/**
 * Package interface that contains all
 * fields used in the database. It is used
 * wherever information from the API returns
 * a specific package.
 */

export interface Package {
    id: string;
    recipient: string;
    address: string;
    location: string;
    dateTimeIn: string;
    dateTimeOut: string;
    completeText: string;
    imageLoc: string;
    description: string;
}