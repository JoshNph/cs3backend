import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Joshua',
            email: 'admin@mail.com',
            password: bcrypt.hashSync('admin', 8),
            isAdmin: true
        },
        {
            name: 'Generic User',
            email: 'user@mail.com',
            password: bcrypt.hashSync('user', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Cat Litter',
            description: 'Tight clumping formula with pangkabuhayan showcase',
            category: 'Pet Care',
            image: '../images/product-4.jpg',
            price: 738,
            stock: 3520,
            brand: 'Scoop Away',
            rating: 4.5,
            reviewers: 5,
            sold: 1200,
            isActive: true
        },
        {
            name: 'Non-slip Sandals',
            description: 'Classic slippers para \'di ka na madulas at masaktan pang muli',
            category: 'Men\'s',
            image: '/images/product-5.jpg',
            price: 347,
            stock: 3,
            brand: 'Sandugo',
            rating: 3.7,
            reviewers: 76,
            sold: 279,
            isActive: true
        },
        {
            name: 'Jamawar Shawl',
            description: 'Shawl made in Kashmir na kailangan mo dahil malamig na naman Pasko mo',
            category: 'Women\'s',
            image: '/images/product-2.jpg',
            price: 2526,
            stock: 12,
            brand: 'South Korea',
            rating: 5,
            reviewers: 26,
            sold: 38,
            isActive: true
        },
        {
            name: 'Fidget Spinner',
            description: 'Concentration improver para \'di mo na siya isipin',
            category: 'Toy\'s, Games & Collectibles',
            image: '/images/product-3.jpg',
            price: 240,
            stock: 0,
            brand: 'Cool Clean',
            rating: 3.5,
            reviewers: 5360,
            sold: 1365,
            isActive: true
        },
        {
            name: 'Alienware X15 Gaming Laptop',
            description: 'Budget meal na laptop para makapag-FB. Magsawa kang i-like \'yung mga post niya.',
            category: 'Electronics',
            image: '/images/product-1.jpg',
            price: 125495,
            stock: 420,
            brand: 'Alienware',
            rating: 4.2,
            reviewers: 192,
            sold: 269,
            isActive: true
        },
        {
            name: 'Binoculars',
            description: 'Hi, Marites!',
            category: 'Hobbies',
            image: '/images/product-6.jpg',
            price: 1517,
            stock: 75000,
            brand: 'SkyGenius',
            rating: 5,
            reviewers: 4600,
            sold: 973000,
            isActive: true
        },
        {
            name: 'Bonnet for Babies',
            description: 'Cute bonnet for babies',
            category: 'Babies & Kids',
            image: '/images/product-7.jpg',
            price: 39,
            stock: 40509,
            brand: 'Generic',
            rating: 4.1,
            reviewers: 769,
            sold: 3695,
            isActive: true
        },
        {
            name: 'Essenso Microground Coffee 3in1',
            description: 'Arguably, the best tasting 3in1 coffee in the planet',
            category: 'Groceries',
            image: '/images/product-8.jpg',
            price: 229,
            stock: 12763,
            brand: 'San Miguel Foods',
            rating: 5,
            reviewers: 1100,
            sold: 1270,
            isActive: true
        },
        {
            name: 'Glade hang it fresh Cool Fresh',
            description: 'Make your home smell fresh',
            category: 'Make Up & Fragrance',
            image: '/images/product-11.jpg',
            price: 273,
            stock: 3000,
            brand: 'Johnson',
            rating: 4.3,
            reviewers: 86,
            sold: 1000,
            isActive: true
        },
        {
            name: 'Chalk for Billiards/Pool',
            description: 'Play like \'The Magician\'',
            category: 'Sports & Travel',
            image: '/images/product-9.jpg',
            price: 47,
            stock: 70509,
            brand: 'Generic',
            rating: 3.6,
            reviewers: 134,
            sold: 298,
            isActive: true
        },
        {
            name: 'Face Mask - Black (50 pcs)',
            description: 'Disposable surgical face mask. Stay safe, friends.',
            category: 'Health & Personal Care',
            image: '/images/product-10.jpg',
            price: 35,
            stock: 60304,
            brand: 'WJF',
            rating: 4.8,
            reviewers: 318000,
            sold: 576000,
            isActive: true
        },
        {
            name: 'Cat Litter',
            description: 'Tight clumping formula',
            category: 'Pet Care',
            image: '/images/product-1.jpg',
            price: 240,
            stock: 2,
            brand: 'Cool Clean',
            rating: 4.5,
            reviewers: 5,
            sold: 1000,
            isActive: false
        },
        {
            name: 'Snorlax Bean Bag',
            description: 'Pokeflute not included',
            category: 'Home & Living',
            image: '/images/product-12.jpg',
            price: 2171,
            stock: 10,
            brand: 'The Pokemon Company',
            rating: 5,
            reviewers: 6,
            sold: 6,
            isActive: true
        },
        {
            name: 'Cat Litter',
            description: 'Tight clumping formula',
            category: 'Pet Care',
            image: '/images/product-1.jpg',
            price: 240,
            stock: 2,
            brand: 'Cool Clean',
            rating: 4.5,
            reviewers: 5,
            sold: 1000,
            isActive: false
        }
    ]
}

export default data;