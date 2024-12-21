export default function ArticleList({ title, children }) {
    return (
        <div className="bg-very-dark-blue p-6 col-span-1 sm:py-9">
            <h2 className="mb-8 text-soft-orange font-bold text-4xl sm:text-5xl">{title}</h2>
            <div className="divide-y divide-dark-grayish-blue">
                {children}
            </div>
        </div>
    )
}