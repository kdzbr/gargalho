import { test } from '@playwright/test';
import { contatoPage } from '../locators/urlWeb.json';
import { contatoPageComponents } from '../components/contatoPageComponents.json';

test('Ir para contato page da Uniao Tintas', async ({ page }) => {
    await page.goto(contatoPage);
    console.log('Acesso a página com sucesso!')
});

test('Verificar se existe o componente de Telefones', async ({ page }) => {
    await page.goto(contatoPage);
    await page.getByRole('link', { name: contatoPageComponents.telefonesComponent}).isVisible();
    console.log('Existe o componente Telefones!')
});

test('Verificar se existe o componente Logo', async ({ page }) => {
    await page.goto(contatoPage);
    await page.getByRole('link', { name: contatoPageComponents.logoComponent }).isVisible();
    console.log('Existe o componente Logo!')
});

test('Verificar se existe o componente Nome', async ({ page }) => {
    await page.goto(contatoPage)
    await page.getByPlaceholder('Nome').isVisible();
    console.log('Existe o componente Nome!')
});


test('Verificar se existe o componente Email', async ({ page }) => {
    await page.goto(contatoPage)
    await page.getByPlaceholder('E-mail').isVisible();
    console.log('Existe o componente Email!')
});

test('Verificar se existe o componente Telefone', async ({ page }) => {
    await page.goto(contatoPage)
    await page.getByPlaceholder('Telefone').isVisible();
    console.log('Existe o componente Telefone!')
});

test('Verificar se existe o componente Assunto', async ({ page }) => {
    await page.goto(contatoPage)
    await page.getByPlaceholder('Assunto').isVisible();
    console.log('Existe o componente Assunto!')
});

test('Verificar se existe o componente Mensagem', async ({ page }) => {
    await page.goto(contatoPage)
    await page.getByPlaceholder('Mensagem').isVisible();
    console.log('Existe o componente Mensagem!')
});

test('Verificar se existe o componente Botão Enviar', async ({ page }) => {
    await page.goto(contatoPage)
    await page.getByRole('button', { name: 'Enviar' }).isVisible();
    console.log('Existe o componente Botão Enviar!')
});

test('Verificar se existe o componente Contato União Tintas Email', async ({ page }) => {
    await page.goto(contatoPage);
    await page.getByRole('link', { name: contatoPageComponents.contatoUniaoTintasEmail }).isVisible();
    console.log('Existe o componente Contato União Tintas Email!')
});