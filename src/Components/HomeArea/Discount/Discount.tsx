import "./Discount.css";

export function Discount(): JSX.Element {

    function isFirstDayOfMonth(): boolean {
        const now = new Date();
        const firstMonthDay = now.getDate(); 
        return firstMonthDay === 1; // Use strict equality operator
    }

    return (
        <div className="Discount">
            {isFirstDayOfMonth() && (
                <p>Only today 25% discount</p>
            )}
        </div>
    );
}
