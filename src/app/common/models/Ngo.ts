export interface User {
    isAuthenticate: boolean,
    currentUser: {},
    loading: boolean
}

export interface Login {
    ngoemail: string,
    ngomobile: number,
    // otp:number
}

export interface LoginNgo {
    email: string,
    mobile: string
}
export interface RegisterModel {
    name: string,
    mobile: number,
    contactPerson?: string,
    website?: string,
    location?: string,
    email: string,
    city?: string,
    zip?: string,
    country?: string,
    state?: string,
    lat?: string,
    lng?: string,
    street?: string,
    foundingYear: string,
    accountNumber: string,
    accountHolderName: string,
    ifscCode: string,
    bankName: string,
    founderBio: string,
    bankAddress: string,
    founderImg: File,
    ngoLogo: File,
    loading?: boolean;
    isFounder?: boolean;
    isPassionGruAccessable?: boolean;
}
export interface Founder{
    bio: string,
    image: string,
    name: string
}