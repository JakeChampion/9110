export default async () => {
   return new Response("hello 🙂", {headers: {foo: "é", try: "🙂"}})
 }

export const config = {
  path: "/*"
}
