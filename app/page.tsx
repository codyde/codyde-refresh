import FeaturedPost from "@/components/FeaturedPost";
import Hero from "@/components/hero";
import Image from "next/image";
import { featuredPosts } from "../lib/featuredPosts";
import { spotlightPublications as pubs } from "../lib/spotlightPublications";
import { spotlightVideos as videos } from "../lib/youTubeVideos";
import SpotlightArticle from "@/components/SpotlightArticle";
import YouTubeCard from "@/components/YouTube";


export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-center px-4 lg:px-24 bg-slate-900">
      <Hero />
      <div className="">
        <p className="text-5xl font-semibold pt-4">📰 Featured Posts</p>
        <div className="my-8 grid lg:flex lg:flex-row gap-x-8 gap-y-8">
          {featuredPosts.map((post) => (
            <FeaturedPost title={post.title} date={post.date} />
          ))}
        </div>
        <p className="text-5xl font-semibold pt-4">📑 Spotlight Publications</p>
        <div className="my-8 grid space-y-4">
          {pubs.map((article, idx) => (
            <SpotlightArticle key={idx} {...article} />
          ))}
        </div>
        <p className="text-5xl font-semibold pt-4">🎥 Video Content</p>
        <div className="grid my-8 lg:grid-cols-4">
          {videos.map((video, idx) => (
            <YouTubeCard key={idx} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
