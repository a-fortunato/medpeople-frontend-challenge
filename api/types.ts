interface Shift {
    date: string
    hourly_pay_in_eur: string
    number_of_hours: string
    time: string
    type: string
}

interface Address {
    street: string
    postal_code: string
    city: string
}

interface Job {
    address: Address
    available_shifts: Shift[]
    background_image: string
    campaigns: string[]
    department: string
    distance_in_km: string
    employer_description: string
    employer_name: string
    logo: string
    qualifications: string
    tasks: string
}