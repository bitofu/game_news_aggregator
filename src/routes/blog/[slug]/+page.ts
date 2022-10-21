import { json } from "@sveltejs/kit"

export const load = (req: any) => {
  console.log(req);
  return {
    title: 'test title',
    content: req.url.origin,
  }
}
