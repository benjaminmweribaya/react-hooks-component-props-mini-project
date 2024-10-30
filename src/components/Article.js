import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    // Determine the minutes read symbol based on minutes
    const coffeeCups = "☕️".repeat(Math.ceil(minutes / 5));
    const bentoBoxes = "🍱".repeat(Math.ceil(minutes / 10));
    const minutesRead = minutes < 30 ? coffeeCups : bentoBoxes;

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{` ${minutesRead} ${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;

