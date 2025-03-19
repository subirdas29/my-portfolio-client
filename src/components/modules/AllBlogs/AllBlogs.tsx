import Image from "next/image";


const AllBlogs = () => {
    return (
      <section className="py-20 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <h1 className="text-center text-5xl my-8">All Blogs</h1>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* Featured Blog Post */}
          <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white dark:bg-gray-800">
            <Image
             src="https://source.unsplash.com/random/480x360" 
             alt="" 
             width={500}
                height={500}
             className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-700" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
              <span className="text-xs text-gray-600 dark:text-gray-400">February 19, 2021</span>
              <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
              <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                Read More
              </button>
            </div>
          </a>
  
          {/* Blog Grid */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a key={item} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-white dark:bg-gray-800">
                <Image
                alt="blog"
                width={500}
                height={500}
                 role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-700" src={`https://source.unsplash.com/random/480x360?${item}`} />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                  <span className="text-xs text-gray-600 dark:text-gray-400">January 21, 2021</span>
                  <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                  <button className="px-4 py-2 bg-primary text-white dark:text-gray-900 font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300">
                    Read More
                  </button>
                </div>
              </a>
            ))}
          </div>
  
          {/* Load More Button */}
          <div className="flex justify-center">
            <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-white dark:bg-gray-800 dark:text-gray-100">
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AllBlogs;


