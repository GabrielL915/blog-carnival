import type { BlogFrontmatter } from "@content/_schemas";
import type { MarkdownInstance } from "astro";
import slugify from "./slugify";
import type { CollectionEntry } from "astro:content";

export const getReadingTime = async () => {
  const globPosts = import.meta.glob<MarkdownInstance<BlogFrontmatter>>(
    "../content/blog/**/*.md"
  );

  const mapFrontmatter = new Map();
  const globPostsValues = Object.values(globPosts);
  await Promise.all(
    globPostsValues.map(async globPost => {
      const { frontmatter } = await globPost();
      mapFrontmatter.set(slugify(frontmatter), frontmatter.readingTime);
    })
  );

  return mapFrontmatter;
};

const getPostWithRT = async (posts: CollectionEntry<"blog">[]) => {
  const mapFrontmatter = await getReadingTime();
  return posts.map(post => {
    const readingTime = mapFrontmatter.get(slugify(post.data));
    return {
      ...post,
      data: {
        ...post.data,
        readingTime,
      },
    };
  });
};

export default getPostWithRT;
