export default async (req: Request, context: Context) => {
   return new Response("hello", {headers: {foo: "é"}})
 }

export const config = {
  path: "/*"
}
