export default function ArticleLine({ children }) {
    return (
        <div className="flex flex-col gap-8 lg:gap-6 xl:gap-10 lg:flex-row lg:col-span-3">
            {children}
        </div>
    );
}