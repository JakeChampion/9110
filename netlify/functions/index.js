export default async () => {
   return new Response("hello", {headers: {foo: "é"}})
 }

export const config = {
  path: "/*"
}
