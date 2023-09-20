import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../src/components/layouts/Header";

test("Affichage Header", () => {
    render(<Header />)
    expect(screen.getAllByRole('link')).toHaveLength(4)
})