export default function FeaturedArticle({ title, children }) {
    return (
        <article className="grid gap-x-20 gap-y-6 md:gap-y-8 md:grid-cols-2 lg:col-span-2">
            <picture className="mb-1 md:mb-0 md:col-span-2">
                <source srcSet="./images/image-web-3-desktop.jpg" media="(min-width: 768px)" />
                <img className="w-full" src="./images/image-web-3-mobile.jpg" alt={title} />
            </picture>
            <h1 className="text-very-dark-blue font-extrabold text-5xl sm:text-6xl">{title}</h1>
            <div>
                {children}
                <button className="mt-8 uppercase bg-soft-red text-very-dark-blue font-bold px-9 py-4 text-base leading-none tracking-widest hover:text-off-white hover:bg-very-dark-blue">Read more</button>
            </div>
        </article>
    );
}