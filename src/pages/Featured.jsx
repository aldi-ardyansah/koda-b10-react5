
function Featured() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mt-8 mb-4">
        Featured Articles
      </h1>
      <p className="text-neutral-600 font-serif text-base">
        Explore our curated selection of featured articles, handpicked for their insightful content and engaging storytelling.
      </p>
      <article className="py-8 flex flex-col gap-2 items-center mt-10">
        <span className="font-medium text-neutral-900">No featured stories</span>
        <span className="font-medium text-neutral-900">Featured stories from the publications you follow will appear here.</span>
      </article>
    </div>
  );
}

export default Featured;