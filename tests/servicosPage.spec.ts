import { test } from '@playwright/test';
import { servicosPage } from '../locators/urlWeb.json';
import { servicosPageComponents } from '../components/servicosPageComponents.json';

test('Ir para contato page da Uniao Tintas', async ({ page }) => {
    await page.goto(servicosPage);
    console.log('Acesso a página com sucesso!')
});

test('Verificar se existe o componente de Telefones', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.telefonesComponents }).isVisible();
    console.log('Existe o componente Telefones!')
});

test('Verificar se existe o componente Logo', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.logoComponents }).isVisible();
    console.log('Existe o componente Logo!')
});

test('Verificar se existe o componente Serviços', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.servicosComponents }).isVisible();
    console.log('Existe o componente Serviços!')
});

test('Verificar se existe o componente Contato Email União Tintas', async ({ page }) => {
    await page.goto(servicosPage);
    await page.getByRole('link', { name: servicosPageComponents.contatoUniaoTintasEmail }).isVisible();
    console.log('Existe o componente Contato Email União Tintas!')
});