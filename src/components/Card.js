export default function Card({ className, children }) {
    return (
        <div className={`rounded-xl ${className || ""}`}>
            {children}
        </div>
    );
}