import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardProject from "../src/components/sections/CardProject";


vi.mock("react-router-dom");

const mockCard = {
    img: "image-url",
    title: "Test Title",
    text: "Test Text",
    tech: ["Tech1", "Tech2"],
    code: "/code-url",
    demo: "/demo-url",
};

test("Rendu des cards avec les bonnes data", () => {
    render(<CardProject card={mockCard} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Text")).toBeInTheDocument();
    expect(screen.getByAltText("")).toBeInTheDocument();
    expect(screen.getByText("Tech1")).toBeInTheDocument();
    expect(screen.getByText("Tech2")).toBeInTheDocument();
});
