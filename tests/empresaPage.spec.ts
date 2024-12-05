import { test } from '@playwright/test';
import { empresaPage } from '../locators/urlWeb.json';
import { empresaPageComponents } from '../components/empresaPageComponents.json';

test('Ir para contato page da Uniao Tintas', async ({ page }) => {
    await page.goto(empresaPage);
    console.log('Acesso a página com sucesso!')
});

test('Verificar se existe o componente de Telefones', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.telefonesComponent }).isVisible();
    console.log('Existe o componente Telefones!')
});

test('Verificar se existe o componente Logo', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.logoComponent }).isVisible();
    console.log('Existe o componente Logo!')
});

test('Verificar se existe o componente Empresa', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.empresaComponent }).isVisible();
    console.log('Existe o componente Empresa!')
});

test('Verificar se existe o componente Missão', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.missaoComponent }).isVisible();
    console.log('Existe o componente Missão!')
});

test('Verificar se existe o componente UdiLoja1', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.lojasComponent.udiloja1}).isVisible();
    console.log('Existe o componente UdiLoja1!')
});

test('Verificar se existe o componente UdiLoja2', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.lojasComponent.udiloja2}).isVisible();
    console.log('Existe o componente UdiLoja2!')
});

test('Verificar se existe o componente UdiLoja3', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.lojasComponent.udiloja3}).isVisible();
    console.log('Existe o componente UdiLoja3!')
});

test('Verificar se existe o componente AraLoja1', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.lojasComponent.araloja1}).isVisible();
    console.log('Existe o componente AraLoja1!')
});

test('Verificar se existe o componente AraLoja2', async ({ page }) => {
    await page.goto(empresaPage);
    await page.getByRole('link', { name: empresaPageComponents.lojasComponent.araloja2}).isVisible();
    console.log('Existe o componente AraLoja2!')
});
