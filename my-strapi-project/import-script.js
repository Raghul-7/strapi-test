// const axios = require("axios");

// const STRAPI_URL = "http://localhost:1337/api/posts"; // Replace 'posts' with your collection type
const API_TOKEN =
  "44054860f8f36d6bd1697d247226d3f4b95097ccf336ebeeba92d47fb5b2a53654cd326f280cac12fe88bf32f2ae109debbbe7e0737e856d07d5456cfefb581078528614312f26aee6385560a10d1b9113069eccc18f73cd2379ca17921bcb42e9c3de4cb26e3804f44a79e00ba3c5541328e8e5760ed3d062b4fac3f5776c64"; // Replace with your Strapi API token

const NewData = [
  {
    data: {
      title: "1-Understanding Strapi CMS",
      content:
        "Strapi is an open-source headless CMS that enables developers to create powerful APIs quickly. In this data we explore its features and benefits.",
      author: "Alice Johnson",
    },
  },
  {
    data: {
      title: "2-Migrating Data to Strapi",
      content:
        "Learn how to migrate data from an old CMS to Strapi. This guide provides a step-by-step process for a seamless transition.",
      author: "Bob Smith",
    },
  },
  {
    data: {
      title: "3-Customizing Strapi with Plugins",
      content:
        "Strapi's ecosystem supports a variety of plugins. Discover how to extend your CMS's functionality with plugins.",
      author: "Charlie Brown",
    },
  },
];

// const importData = async () => {
//   for (const entry of entries) {
//     try {
//       const response = await axios.post(STRAPI_URL, entry, {
//         headers: {
//           Authorization: `Bearer ${API_TOKEN}`,
//         },
//       });
//       console.log("Imported:", response.data);
//     } catch (error) {
//       console.error(
//         "Error importing data:",
//         error.response?.data || error.message
//       );
//     }
//   }
// };

// importData();

const postReq = async () => {
  try {
    for (const item of NewData) {
      const response = await fetch("http://localhost:1337/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify(item),
      });
      const data = await response.json();
      console.log("Imported:", response.data);
    }
  } catch (error) {
    console.log(error, "error while posting req");
  }
};
postReq();
