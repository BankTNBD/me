export default function Card({ className, children }) {
    return (
        <div className={`rounded-xl bg-[var(--color-primary-background)] ${className || ""}`}>
            {children}
        </div>
    );
}