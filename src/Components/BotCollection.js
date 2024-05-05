import React from "react";

export default function botCollection({ bots, handleClick }) {
    const botsCollection = bots.map((bots) => (
        <div
            className="col-md-2 mb-4"
            key={bots.id}
            onClick={() => handleClick(bots.id)}
        >
            <div className="card">
                <div className="bot-image">
                    <img className="card-img-top" src={bots.avatar_url} alt={bots.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <i>{bots.name}</i>
                    </h5>
                    <h6>{bots.bot_class}</h6>
                    <div className="card-text">
                        <p>{bots.catchphrase}</p>
                    </div>
                    <div className="card-text">
                        <span>
                            <i className="bi bi-heart-pulse" style={{ color: "red", paddingRight: "4px" }} />
                            {bots.health}
                        </span>
                        <span>
                            <i className="bi bi-lightning-fill" style={{ color: "gold", marginLeft: "12px", paddingRight: "4px" }} />
                            {bots.damage}
                        </span>
                        <span>
                            <i className="bi bi-shield-shaded" style={{ color: "silver", marginLeft: "12px", paddingRight: "4px" }} />
                            {bots.armor}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="container">
            <h2 style={{ marginTop: "15px" }}>YOUR BOT COLLECTION</h2>
            <div className="row">{botsCollection}</div>
        </div>
    );
}