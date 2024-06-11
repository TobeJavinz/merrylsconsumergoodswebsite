import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, inkTry1, bondpaper, notebooks, pen, thaiw, thaij, vietj, viet5451, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1, 
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: inkTry1,
        name: "Epson Inks",
      
    },
    {
        imgURL: bondpaper,
        name: "Bond Papers",
       
    },
    {
        imgURL: notebooks,
        name: "Notebooks",
        
    },
    {
        imgURL: pen,
        name: "Pens",
       
    },
    {
        imgURL: thaiw,
        name: "Thai White Rice",
       
    },

    {
        imgURL: thaij,
        name: "Thai Jasmine Rice",
       
    },
    {
        imgURL: vietj,
        name: "Vietnam 5451 & 504 Rice",
       
    },
    {
        imgURL: viet5451,
        name: "Vietnam Jasmine Rice",
       
    },
   

];

export const services = [
    {
        imgURL: truckFast,
        label: "Affordable shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Epsone Inks", link: "/" },
            { name: "Bond Papers", link: "/" },
            { name: "Notebooks", link: "/" },
            { name: "Pens", link: "/" },
            { name: "Rice", link: "/" },
            
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Vision", link: "/aboutus" },
            { name: "Mision", link: "/aboutus" },
          
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "mcgoodstrading.13@gmail.com", link: "mailto:mcgoodstrading.13@gmail.com" },
            { name: "+639488123567", link: "tel:+639488123567" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];