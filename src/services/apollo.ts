// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { setContext } from 'apollo-link-context';
// import { createHttpLink } from "apollo-link-http";

// const httpLink = createHttpLink({
//     uri: process.env.BLOG_URL,
// });

// const authLink = setContext((_, { headers }) => {
//     return {
//       headers: Object.assign(
//         headers || {},
//         {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': `Bearer ${process.env.BLOG_TOKEN}`,
//         }
//       )
//     }
// });

// const client = new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache(),
// });

// // const client = new ApolloClient({
// //     uri: "https://api-sa-east-1.hygraph.com/v2/clgl3buh53sfn01t20jvxddmi/master",
// //     cache: new InMemoryCache()
// // });

// export default client;