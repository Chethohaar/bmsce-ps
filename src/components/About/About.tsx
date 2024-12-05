import React from 'react';

export const About = () => {
  const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/zx04Kl8y4dE?rel=0&showinfo=0",
      title: "Renewable Energy Innovation"
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/dtnYMEDLKYU?rel=0&showinfo=0",
      title: "Green Technology Solutions"
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/Giek094C_l4?rel=0&showinfo=0",
      title: "Sustainable Future"
    },
    {
      id: 4,
      url: "https://www.youtube.com/embed/TCtIRAFyTIY?rel=0&showinfo=0",
      title: "Clean Energy Revolution"
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "What is Renewable Energy?",
      description: "Renewable energy is energy derived from natural sources that are replenished at a higher rate than they are consumed. Sunlight and wind, for example, are such sources that are constantly being replenished.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop",
      source: "UN Climate Change",
      link: "https://www.un.org/en/climatechange/what-is-renewable-energy"
    },
    {
      id: 2,
      title: "Green Tech Innovation: Transforming Business",
      description: "Policy investment for clean energy technologies, such as green hydrogen, carbon capture and biofuels, is gaining traction. Additional support could spur innovation and make low-carbon solutions more affordable.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop",
      source: "Moody's",
      link: "https://www.moodys.com/web/en/us/creditview/blog/Green-tech-innovation"
    },
    {
      id: 3,
      title: "Solar Deployment in Open Seas",
      description: "Commercial-scale ocean solar projects are bringing new momentum to offshore floating solar, opening up potentially limitless deployment opportunities in marine environments.",
      image: "https://imgs.search.brave.com/3sr2cvU7AVidqTcfUTaTGue2MiIlXAlkmX2SAawLPxU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2NpZW5jZWFsZXJ0/LmNvbS9pbWFnZXMv/aGVsaW9mbG9hdC0y/LmpwZw",
      source: "GreenTech Media",
      link: "https://www.greentechmedia.com/articles/read/race-on-for-commercial-deployment-of-solar-in-open-seas"
    },
    {
      id: 4,
      title: "Understanding Wind Energy",
      description: "Wind energy is electricity from the naturally flowing air in Earth's atmosphere. As a renewable resource that won't get depleted through use, its impact on climate crisis is significantly smaller.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop",
      source: "TreeHugger",
      link: "https://www.treehugger.com/what-is-wind-energy-definition-and-how-it-works-8734016"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 bg-clip-text text-transparent mb-4">
            Transforming Tomorrow with Green Technology
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-3xl mx-auto">
            Pioneering sustainable solutions for a cleaner, greener future through innovative renewable energy projects worldwide.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105"
              style={{ minHeight: '400px' }}
            >
              <div className="aspect-w-16 aspect-h-9 h-[320px]">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Posts Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <a 
                key={blog.id}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="relative h-[280px] w-full overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm text-green-400 bg-green-900/30 rounded-full">
                      {blog.source}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-2">
                    {blog.description}
                  </p>
                  
                  <div className="mt-4 flex items-center text-green-400 text-sm font-medium">
                    Read More
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Additional content placeholder */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            {/* More content will be added here based on your next requirements. */}
          </p>
        </div>
      </div>
    </section>
  );
}; 