export default function Header({ children }) {
    return (
        <header className="flex justify-between items-center pt-7 pb-8 sm:pt-20 sm:pb-14">
            {children}
        </header>
    );
}