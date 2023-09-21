import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from './../src/components/layouts/Footer';
import React from "react";


test('Affichage des deux liens', () => {
    render(<Footer />)

    const liensReseaux = screen.getAllByRole('link')

    expect(liensReseaux).toHaveLength(2)

    screen.debug()
})
