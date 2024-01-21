export const GetCourses = () => {
    return [{
        id: 1,
        title: 'Professional Certificate Course In AI And Machine Learning',
        duration: '6 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=360&dpr=1.3',
        price: 5000
    }, {
        id: 2,
        title: 'Professional Certificate Program In Cloud Computing And DevOps',
        duration: '6 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://www.simplilearn.com/ice9/banners/Thumbnail.jpg?w=360&dpr=1.3',
        price: 6000
    }, {
        id: 3,
        title: 'Professional Certificate Program In Full Stack Development - MERN',
        duration: '6 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://www.simplilearn.com/ice9/banners/Homepage_Thumbnail_11zon.jpg?w=360&dpr=1.3',
        price: 7000
    }, {
        id: 4,
        title: 'Professional Certificate Program In Digital Marketing',
        duration: '6 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=360&dpr=1.3',
        price: 8000
    }]
}

export const GetCourses1 = () => {
    return [{
        id: 5,
        title: 'Professional Certificate Program In Big Data',
        duration: '6 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=360&dpr=1.3',
        price: 9000
    }, {
        id: 6,
        title: 'Professional Certificate Program In Cyber Security',
        duration: '6 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=360&dpr=1.3',

        price: 10000
    }, {
        id: 7,
        title: 'Professional Certificate Program In Data Science',
        duration: '6 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://www.simplilearn.com/ice9/banners/thumbnail-iit-blockchain.jpg?w=360&dpr=1.3',

        price: 11000
    }]
}

export const AddToCart = (course) => {
    let cart = GetCart();
    cart.push(course);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const GetCart = () => {
    let cart = localStorage.getItem('cart') || [];

    if (typeof cart === 'string') {
        cart = JSON.parse(cart);
    }

    return cart.filter(x => x !== null);
}

export const RemoveFromCart = (course) => {
    let cart = GetCart();
    cart = cart.filter(x => x.id !== course);
    localStorage.setItem('cart', JSON.stringify(cart));
}