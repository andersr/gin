import slugify from "slugify";

export function createSlug(title: string) {
  return slugify(title, {
    strict: true,
    trim: true,
    lower: true,
  });
}
