import React from "react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App"

test("Test de validation", () => {
    render(<App />)
    const title = screen.getByText(/React/i)
    expect(title).toBeInTheDocument()
})