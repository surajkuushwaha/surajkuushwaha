import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
    "Suraj Kushwaha — SDE II | Backend Architect | Agentic AI & High-Scale Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#0a0a0a",
                    padding: "80px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "24px",
                    }}
                >
                    <div
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            backgroundColor: "#262626",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fafafa",
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    >
                        SK
                    </div>
                    <span
                        style={{
                            marginLeft: "16px",
                            color: "#a3a3a3",
                            fontSize: "20px",
                        }}
                    >
                        surajkuushwaha.com
                    </span>
                </div>
                <h1
                    style={{
                        fontSize: "64px",
                        fontWeight: 700,
                        color: "#fafafa",
                        lineHeight: 1.1,
                        margin: "0 0 24px 0",
                    }}
                >
                    Suraj Kushwaha
                </h1>
                <p
                    style={{
                        fontSize: "28px",
                        color: "#a3a3a3",
                        margin: "0 0 40px 0",
                        lineHeight: 1.4,
                    }}
                >
                    SDE II | Backend Architect | Agentic AI & High-Scale Systems
                </p>
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                    }}
                >
                    {[
                        "50M+ req/week",
                        "200+ brands",
                        "Agentic AI",
                        "Go & Node.js",
                    ].map((tag) => (
                        <span
                            key={tag}
                            style={{
                                padding: "8px 16px",
                                borderRadius: "6px",
                                backgroundColor: "#1a1a1a",
                                border: "1px solid #262626",
                                color: "#d4d4d4",
                                fontSize: "18px",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        ),
        { ...size }
    );
}
