const images = [
    "./img/main-slider/img-slider-2/1.jpg",
    "./img/main-slider/img-slider-2/2.jpg",
    "./img/main-slider/img-slider-2/3.jpg",
    "./img/main-slider/img-slider-2/4.jpg",
    "./img/main-slider/img-slider-2/5.jpg",
    "./img/main-slider/img-slider-2/6.jpg",
    "./img/main-slider/img-slider-2/7.jpg",
];

const topSliderAsideImages = [
    "./img/banner/sidebar-banner-1.gif",
    "./img/banner/sidebar-banner-2.jpg",
];

// داده‌های نمونه محصولات
const mostSellsProducts = [
    {
        id: 1,
        name: "مانتو زنانه",
        category: "لباس زنانه",
        price: "157,000 تومان",
        image: "./img/products/07.jpg",
        rating: 5,
        discount: "20%",
    },
    {
        id: 2,
        name: "کت مردانه",
        category: "لباس مردانه",
        price: "199,000 تومان",
        image: "./img/products/017.jpg",
        rating: 3,
        discount: null,
    },
    {
        id: 3,
        name: "مانتو زنانه مدل هودی تیک تین",
        category: "لباس زنانه",
        price: "135,000 تومان",
        image: "./img/products/013.jpg",
        rating: 4,
        discount: null,
    },
    {
        id: 4,
        name: "مانتو زنانه",
        category: "لباس زنانه",
        price: "145,000 تومان",
        image: "./img/products/09.jpg",
        rating: 4,
        discount: null,
    },
    {
        id: 5,
        name: "مانتو زنانه",
        category: "لباس زنانه",
        price: "170,000 تومان",
        image: "./img/products/010.jpg",
        rating: 2,
        discount: null,
    },
    {
        id: 6,
        name: "مانتو زنانه",
        category: "لباس زنانه",
        price: "185,000 تومان",
        image: "./img/products/011.jpg",
        rating: 4,
        discount: "20%",
    },
    {
        id: 7,
        name: "تیشرت مردانه",
        category: "لباس مردانه",
        price: "54,000 تومان",
        image: "./img/products/019.jpg",
        rating: 1,
        discount: null,
    },
    {
        id: 8,
        name: "شلوار جین مردانه",
        category: "لباس مردانه",
        price: "220,000 تومان",
        image: "./img/products/020.jpg",
        rating: 4.5,
        discount: "15%",
    },
    {
        id: 9,
        name: "بلوز زنانه",
        category: "لباس زنانه",
        price: "120,000 تومان",
        image: "./img/products/021.jpg",
        rating: 3.5,
        discount: null,
    },
    {
        id: 10,
        name: "پیراهن مردانه",
        category: "لباس مردانه",
        price: "180,000 تومان",
        image: "./img/products/022.jpg",
        rating: 4.2,
        discount: "10%",
    },
];

const SuggestionProductsData = [
    {
      id: 1,
      name: 'مانتو زنانه',
      category: 'لباس زنانه',
      price: '157,000 تومان',
      image: './img/products/07.jpg',
      rating: 5,
      discount: '20%',
    },
    {
      id: 2,
      name: 'کت مردانه',
      category: 'لباس مردانه',
      price: '199,000 تومان',
      image: './img/products/017.jpg',
      rating: 5,
      discount: null,
    },
    {
      id: 3,
      name: 'مانتو زنانه مدل هودی تیک تین',
      category: 'لباس زنانه',
      price: '135,000 تومان',
      image: './img/products/013.jpg',
      rating: 4,
      discount: null,
    },
    {
      id: 4,
      name: 'مانتو زنانه',
      category: 'لباس زنانه',
      price: '145,000 تومان',
      image: './img/products/09.jpg',
      rating: 4,
      discount: null,
    },
    {
      id: 5,
      name: 'مانتو زنانه',
      category: 'لباس زنانه',
      price: '170,000 تومان',
      image: './img/products/010.jpg',
      rating: 5,
      discount: null,
    },
    {
      id: 6,
      name: 'مانتو زنانه',
      category: 'لباس زنانه',
      price: '185,000 تومان',
      image: './img/products/011.jpg',
      rating: 4,
      discount: '20%',
    },
    {
      id: 7,
      name: 'تیشرت مردانه',
      category: 'لباس مردانه',
      price: '54,000 تومان',
      image: './img/products/019.jpg',
      rating: 4,
      discount: null,
    },
    {
      id: 8,
      name: 'شلوار جین مردانه',
      category: 'لباس مردانه',
      price: '220,000 تومان',
      image: './img/products/020.jpg',
      rating: 4.5,
      discount: '15%',
    },
    {
      id: 9,
      name: 'بلوز زنانه',
      category: 'لباس زنانه',
      price: '120,000 تومان',
      image: './img/products/021.jpg',
      rating: 3.5,
      discount: null,
    },
    {
      id: 10,
      name: 'پیراهن مردانه',
      category: 'لباس مردانه',
      price: '180,000 تومان',
      image: './img/products/022.jpg',
      rating: 4.2,
      discount: '10%',
    },
  ];


  const categoryItems = [
    {
      id: 1,
      icon: './img/category/notebook-computer.png',
      title: 'کالای دیجیتال',
      categoryCount: 156000,
    },
    {
      id: 2,
      icon: './img/category/lifeline-in-a-heart-outline.png',
      title: 'آرایشی، بهداشتی و سلامت',
      categoryCount: 48000,
    },
    {
      id: 3,
      icon: './img/category/repair-tools.png',
      title: 'خودرو،ابزار و اداری',
      categoryCount: 56000,
    },
    {
      id: 4,
      icon: './img/category/hanbok.png',
      title: 'مد و پوشاک',
      categoryCount: 217000,
    },
    {
      id: 5,
      icon: './img/category/sofa.png',
      title: 'خانه و آشپزخانه',
      categoryCount: 229000,
    },
    {
      id: 6,
      icon: './img/category/school-material.png',
      title: 'لوازم تحریر و هنر',
      categoryCount: 86000,
    },
    {
      id: 7,
      icon: './img/category/baby-girl.png',
      title: 'کودک و نوزاد',
      categoryCount: 32000,
    },
    {
      id: 8,
      icon: './img/category/adventurer.png',
      title: 'ورزش و سفر',
      categoryCount: 15000,
    },
    {
      id: 9,
      icon: './img/category/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png',
      title: 'خوردنی و آشامیدنی',
      categoryCount: 22000,
    },
  ];

  const offerProducts = [
    {
      id: 1,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 200000,
      rating: 4,
      img: "./img/products/017.jpg"
    },
    {
      id: 2,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 140000,
      rating: 2,
      img: "./img/products/020.jpg"
    },
    {
      id: 3,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 250000,
      rating: 4,
      img: "./img/products/014.jpg"
    },
    {
      id: 4,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 400000,
      rating: 3,
      img: "./img/products/016.jpg"
    },
    {
      id: 5,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 320000,
      rating: 5,
      img: "./img/products/018.jpg"
    },
    {
      id: 6,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 240000,
      rating: 1,
      img: "./img/products/015.jpg"
    },
    {
      id: 7,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 160000,
      rating: 3,
      img: "./img/products/017.jpg"
    },
    {
      id: 8,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 190000,
      rating: 5,
      img: "./img/products/020.jpg"
    },
    {
      id: 9,
      name: "کت مردانه مجلسی مدل k-m-5110",
      price: 199000,
      rating: 3,
      img: "./img/products/014.jpg"
    }
  ];

  const brandImages = [
    "./img/brand/1076.png",
    "./img/brand/1078.png",
    "./img/brand/1080.png",
    "./img/brand/2315.png",
    "./img/brand/1086.png",
    "./img/brand/5189.png",
    "./img/brand/1000006973.png",
    "./img/brand/1000014452.jpg"
  ];


  const banners =[
    {
      id: 1,
      title: "تخفیف ویژه گوشی‌های هوشمند",
      discount: 20,
      image: "img/banner/medium-banner-1.jpg",
      category:"mediume"
    },
    {
      id:2,
      title: "فروش لوازم خانگی",
      discount: 15,
      image: "img/banner/medium-banner-2.jpg",
      category:"medium"
    },
    {
      id:3,
      title: "تخفیف ویژه لوازم آرایشی",
      discount: 25,
      image: "img/banner/small-banner-1.jpg",
      category:"small"
    },
    {
      id:4,
      title: "فروش ویژه لباس‌های زنانه",
      discount: 30,
      image: "img/banner/small-banner-5.jpg",
      category:"small"
    },
    {
      id:5,
      title: "تخفیف ویژه لوازم ورزشی",
      discount: 10,
      image: "img/banner/small-banner-3.jpg",
      category:"small"
    },
    {
      id:6,
      title: "فروش ویژه لوازم جانبی",
      discount: 5,
      image: "img/banner/small-banner-4.jpg",
      category:"small"
    },
    {
      id:7,
      title: " ابزار سلامت دیجیتال  ",
      discount: 20,
      image: "img/banner/large-banner.jpg",
      category:"large"
    },
  
  ]
  

  const users = [
    {
      id: 1,
      email: "ali.rezaei@example.com",
      phone: "09123456789",
      password: "hashed_password_123", // در عمل باید هش‌شده باشد (مثل bcrypt)
      username: "alirezaei",
      fullName: "علی رضایی",
      createdAt: "2024-01-10T10:00:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSJ9.1234567890abcdef", // نمونه توکن
    },
    {
      id: 2,
      email: "sara.karimi@example.com",
      phone: "09129876543",
      password: "hashed_password_456",
      username: "sarakarimi",
      fullName: "سارا کریمی",
      createdAt: "2024-02-15T12:30:00Z",
      role: "admin",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mn0.abcdef1234567890",
    },
    {
      id: 3,
      email: "mohammad.hosseini@example.com",
      phone: "09121234567",
      password: "hashed_password_789",
      username: "mohammadh",
      fullName: "محمد حسینی",
      createdAt: "2024-03-20T09:15:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M30.7890abcdef123456",
    },
    {
      id: 4,
      email: "narges.mohammadi@example.com",
      phone: "09127654321",
      password: "hashed_password_101",
      username: "nargesm",
      fullName: "نرگس محمدی",
      createdAt: "2024-04-05T14:20:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.4567890abcdef123",
    },
    {
      id: 5,
      email: "reza.yazdani@example.com",
      phone: "09122345678",
      password: "hashed_password_202",
      username: "rezayazdani",
      fullName: "رضا یزدانی",
      createdAt: "2024-05-12T11:45:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NX0.123abcdef4567890",
    },
    {
      id: 6,
      email: "fateme.ahmadi@example.com",
      phone: "09128765432",
      password: "hashed_password_303",
      username: "fatemeahmadi",
      fullName: "فاطمه احمدی",
      createdAt: "2024-06-18T16:00:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nn0.789123456abcdef0",
    },
    {
      id: 7,
      email: "hassan.shariati@example.com",
      phone: "09123487654",
      password: "hashed_password_404",
      username: "hassansh",
      fullName: "حسن شریعتی",
      createdAt: "2024-07-22T08:30:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6N30.456123789abcdef0",
    },
    {
      id: 8,
      email: "zahra.gholami@example.com",
      phone: "09126543210",
      password: "hashed_password_505",
      username: "zahragh",
      fullName: "زهرا غلامی",
      createdAt: "2024-08-30T13:10:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OH0.123456abcdef7890",
    },
    {
      id: 9,
      email: "amir.kazemi@example.com",
      phone: "09127894561",
      password: "hashed_password_606",
      username: "amirkazemi",
      fullName: "امیر کاظمی",
      createdAt: "2024-09-15T17:25:00Z",
      role: "admin",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OX0.789456123abcdef0",
    },
    {
      id: 10,
      email: "leila.mirzaei@example.com",
      phone: "09129012345",
      password: "hashed_password_707",
      username: "leilamirzaei",
      fullName: "لیلا میرزایی",
      createdAt: "2024-10-01T10:50:00Z",
      role: "user",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.456789123abcdef0",
    },
  ];
  


export {
    images,
    topSliderAsideImages,
    mostSellsProducts,
    SuggestionProductsData,
    categoryItems,
    offerProducts,
    brandImages,
    banners,
    users
}