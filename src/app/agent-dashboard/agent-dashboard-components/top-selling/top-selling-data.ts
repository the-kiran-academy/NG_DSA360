export interface Product {
    image: string,
    uname: string,
    gmail: string,
    totalAmount: number,
    status:string,
    home: number,
    personal: number,
    car: number,
    education:number
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Ram',
        gmail: 'ram@gmail.com',
        totalAmount: 269,
        status: 'danger',
        home: 35,
        personal: 95,
        car:67,
        education:69

    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Sham',
        gmail: 'sham@gmail.com',
        totalAmount: 269,
        status: 'info',
        home: 35,
        personal: 95,
        car:67,
        education:69
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Sagar',
        gmail: 'sagar@gmail.com',
        totalAmount: 269,
        status: 'warning',
        home: 35,
        personal: 95,
        car:67,
        education:69
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Kiran',
        gmail: 'kiran@gmail.com',
        totalAmount: 269,
        status: 'success',
        home: 35,
        personal: 95,
        car:67,
        education:69
    },

]
