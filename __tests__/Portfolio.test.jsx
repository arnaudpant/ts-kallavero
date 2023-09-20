import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Portfolio from "../src/components/sections/Portfolio";
import CardProject from "../src/components/sections/CardProject";
import { projects } from "../src/data/projects";

vi.mock("../src/components/sections/CardProject")

test('Affichage des cards des portfolio', () => {
    
    const card = () => {
        return <div>card-project</div>
    }
    CardProject.mockImplementation(card)


    render(<Portfolio />)
    const nbrProjects = screen.getAllByText(/card-project/i)

    expect(nbrProjects.length).toBe(projects.length)

    screen.debug()
})