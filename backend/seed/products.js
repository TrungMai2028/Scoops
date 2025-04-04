import { sql } from "../config/db.js";

const SAMPLE_PRODUCTS = [
    {
        "name": "Ice Cream - 1 Scoop",
        "price": 2.90,
        "image": "https://127050986.cdn6.editmysite.com/uploads/1/2/7/0/127050986/PFC23BE7M7V6GYT4SZFOSDSR.jpeg"
    },
    {
        "name": "Ice Cream - 2 Scoops",
        "price": 3.95,
        "image": "https://www.yabdesign.com/wplive/wp-content/uploads/3623.jpg"
    },
    {
        "name": "Ice Cream - 3 Scoops",
        "price": 4.95,
        "image": "https://media.istockphoto.com/id/509681368/photo/ice-cream-3-scoops.jpg?s=612x612&w=0&k=20&c=SVDb52Svg8DJI3uv69neHwvhx92hhyn8_dQW-Nj2LAo="
    },
    {
        "name": "Flight of Cream (4 mini scoops)",
        "price": 4.10,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rYMRLG-eHRIN8R20j3EpcFLxL2MgllEoBw&s"
    },
    {
        "name": "Ice Cream Pint",
        "price": 6.25,
        "image": "https://images.ctfassets.net/j8tkpy1gjhi5/7LZFsJVztkgVc3GH5Iuq4U/fbb8dfdad280c01da976544b4059dcaf/newsletter-signup-pints.png?w=768&q=90&fm=webp"
    },
    {
        "name": "Ice Cream Quart",
        "price": 9.75,
        "image": "https://www.grahamschocolate.com/wp-content/uploads/2019/11/G-3WEB.jpg"
    },
    {
        "name": "Shake - Medium",
        "price": 4.25,
        "image": "https://img.freepik.com/premium-photo/strawberry-milk-shake_119643-41.jpg"
    },
    {
        "name": "Shake - Large",
        "price": 5.25,
        "image": "https://www.cspinet.org/sites/default/files/styles/700x530/public/2024-09/mcdonalds_mediumStrawberryShake_hero_700x530.jpg.webp?itok=w5BvHWHH"
    },
    {
        "name": "Malt",
        "price": 4.50,
        "image": "https://i1.wp.com/spicetown.fi/wp-content/uploads/Malta-Guinness-Non-Alcoholic-Malt-Drink-330-ml.jpg"
    },
    {
        "name": "Smoothie (Various Flavors)",
        "price": 4.50,
        "image": "https://hips.hearstapps.com/hmg-prod/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*"
    },
    {
        "name": "Fountain Drink - Large",
        "price": 2.00,
        "image": "https://static.wixstatic.com/media/56d2aa_07286dfa225b4d8fadd2d5b49141a7b1~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/56d2aa_07286dfa225b4d8fadd2d5b49141a7b1~mv2.jpg"
    },
    {
        "name": "Bottled Water",
        "price": 1.50,
        "image": "https://today.uconn.edu/wp-content/uploads/2018/06/GettyImages-494501198-bottledwater_cropped.jpg"
    },
    {
        "name": "Banana Split",
        "price": 5.95,
        "image": "https://www.seriouseats.com/thmb/j5Aw-T4TtTy02uI1SpszMRF7aks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240513-BananaSplit-AmandaSuarez-hero2-ca996ebfcca5477da9da82cba923efd9.jpg"
    },
    {
        "name": "Tiger Stripe Sundae",
        "price": 5.50,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQka6gwwI4RIjqV7d7U4oACo-rRdNdER5A3A&s"
    }
];

async function seedDatabase() {
  try {
    // first, clear existing data
    await sql`TRUNCATE TABLE products RESTART IDENTITY`;

    // insert all products
    for (const product of SAMPLE_PRODUCTS) {
      await sql`
        INSERT INTO products (name, price, image)
        VALUES (${product.name}, ${product.price}, ${product.image})
      `;
    }

    console.log("Database seeded successfully");
    process.exit(0); // success code
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1); // failure code
  }
}

seedDatabase();