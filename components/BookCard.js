import ReadButton from "@/components/ReadButton";

export default function MenuCard({name, author, pages, rating=0, isRead, isBest=false, onToggle}) {

const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

    return (
        <div className="card">
            <h3>
                {name}
                {isBest && <span className="isBest">Best</span>}
            </h3>
            <p className="author">{author}</p>
            <p className="rating" style={{ letterSpacing: "2px" }}>{stars}</p>
            {pages && <p className="pages">{pages}쪽</p>}
            {isRead !== undefined && (
                <div className="card-actions">
                <ReadButton isRead={isRead} onToggle={onToggle} />
                </div>
            )}
        </div>
    )
}