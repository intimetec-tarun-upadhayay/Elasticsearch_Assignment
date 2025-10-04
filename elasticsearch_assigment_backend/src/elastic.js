const { Client } = require("@elastic/elasticsearch");

const client = new Client({
    cloud: {
        id: "Book-Search:YXNpYS1zb3V0aDEuZ2NwLmVsYXN0aWMtY2xvdWQuY29tOjQ0MyQ1YzgwOTBiMWQxZTY0NGU1OGRhODUzZDY3ODNhMDIzMSRhNGU5MjM2YjMyNTY0NzE4YTFjYzFlMWY1ZTA3ZTQ3Yg=="
      },
      auth: {
        username: "elastic",
        password: "LbdpjHpKnfVH04AulDZrQnio"
      }
});

(async () => {
  try {
    const health = await client.cluster.health();
    console.log("Connected to Elasticsearch:", health.status);
  } catch (error) {
    console.error("Elasticsearch connection failed:", error.message);
  }
})();

module.exports = client;
