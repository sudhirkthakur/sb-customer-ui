export interface Customer {
  id: string;
  rev: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  mobileNumber: number;
  gender: string;
  countryOfBirth: string;
  countryofResidence: string;
  customerSegment: string;
  addresses?: Addresses[];
}

export interface Addresses {
  addrLine1: string;
  addrLine2: string;
  addrLine3: string;
  addrLine4: string;
  countryCode: string;
  zipCode: number;
  state: string;
  city: string;
}
