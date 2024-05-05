import React from "react";

export default function BotSpecs({ bot, onBackClick, onEnlistClick }) {
    return (
        <div className="card"
            style={{
                justifyContent: "space-between",
                width: "50%",
                marginLeft: "480px"
            }}
        >
            <h2>
                {bot.bot_class} {bot.name.toUpperCase()} SPECIFICATIONS
            </h2>
            <div className="card-body">
                <img src={bot.avatar_url} alt={bot.name} />
                <h5 className="card-title">
                    <h4>
                        <i>{bot.name}</i>
                    </h4>
                    {bot.bot_class}
                </h5>
                <div className="card-text">
                    <p>{bot.catchphrase}</p>
                </div>
                <div className="card-text">
                    <span>
                        <i className="bi bi-heart-pulse" style={{ color: "red" }} />Health: {" "}
                        {bot.health}
                    </span>
                    <br></br>
                    <span>
                        <i className="bi bi-lightning-fill" style={{ color: "gold" }} />Damage: {" "}
                        {bot.damage}
                    </span>
                    <br></br>
                    <span>
                        <i className="bi bi-shield-shaded" style={{ color: "silver" }} />Armor: {" "}
                        {bot.armor}
                    </span>
                    <br></br>
                    <div className="card-text">
                        <p>Creation date:{bot.created_at}</p>
                        <p>Last updated:{bot.updated_at}</p>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex",
                    gap: "10px",
                    marginBottom: "20px",
                }}
            >
                <button
                    className="btn btn-primary"
                    onClick={onBackClick}
                    style={{ fontFamily: "sans-serif" }}
                >
                    Back
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => onEnlistClick(bot.id)}
                    style={{ fontFamily: "sans-serif" }}
                >
                    Enlist {bot.name}
                </button>
            </div>
        </div>
    )
}