# graphql-server-with-prisma
A GraphQL server using prisma which will be used as backend for the clothstore on line webshop.
endpoint: https://eu1.prisma.sh/anoldwebsite-760554/clothstoreprisma/dev
Admin panel: 
https://eu1.prisma.sh/anoldwebsite-760554/clothstoreprisma/dev/_admin

Local host: Use command node src/index.js
http://localhost:4000/

Video tutorial made during this project: https://www.youtube.com/watch?v=1TnBAf0MfDg 
///////////////////////////////////////
mutation createItem {
  createItem(name: "newItem2", price: 200, imageUrl: "some url 2", collectionId: "ckcvvpuh55ib80973umexvwd3") {
    id
    name
    price
    imageUrl
    collection {
      id
    }
  }
}
/////////////////////////////////////
query getAllCollections {
  collections {
    id
    title
    items {
      id
      name
    }
  }
}
/////////////////
query{
  collections {
    id
    title
    items {
      id
      name
      price
      imageUrl
    }
  }
}
/////////////////////////////////////////////
query{
  collections {
    id
    title
  }
}
//////////////////////////////////////
query getCollection {
	collection(where: {id: "ckcsxtbuwfqxz0a50dm2wjmrh"}) {
    id
    title
    items {
      id
      name
      price
      imageUrl
      collection {
        id
        title
      }
    }
  }
}
/////////////////////////////////////////////
query getAllItems {
  items {
    name
    collection {
      title
    }
    price
    id
    imageUrl
  }
}
////////////////////////////////////////////
query getAnItem {
	item(where: {id: "ckcsy1ktre3mm0973uatubav2"}){
    id
    name
    price
    imageUrl
    collection {
      title
    }
  }
}
////////////////////////////////////////////
query{
  collections{
    id
  }
}
////////////////////////////////////////////
