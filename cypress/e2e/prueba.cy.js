/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://alejandrogt18.github.io/gestor-tareas-v3c/')

    // Registro y Login
    cy.get("[data-cy='usuario']").type("Alejandro Gonzalez Teseyra");
    cy.get("[data-cy='contraseña']").type("12345");
    cy.get('[data-cy="btn-submit"]').click();
    cy.get('[data-cy="btn-login"]').click();

    // Creacion de la Nueva Tarea
    cy.get('[data-cy="nueva-tarea"]').type("Nueva tarea agrego..");
    cy.get('[data-cy="fecha"]').type("10-05-2025");
    cy.get('[data-cy="nueva-categoria"]').type("Nueva cat..");
    cy.get('[data-cy="btn-agregar"]').click();
  })
})