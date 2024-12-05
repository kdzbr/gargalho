import { test } from '@playwright/test';
import { produtosPage } from '../locators/urlWeb.json';
import { produtoPageComponents } from '../components/produtosPageComponents.json';

test('Ir para contato page da Uniao Tintas', async ({ page }) => {
    await page.goto(produtosPage);
    console.log('Acesso a página com sucesso!')
});

test('Verificar se existe o componente de Telefones', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtoPageComponents.telefonesComponents }).isVisible();
    console.log('Existe o componente Telefones!')
});

test('Verificar se existe o componente Logo', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtoPageComponents.logoComponents }).isVisible();
    console.log('Existe o componente Logo!')
});

test('Verificar se existe o componente Dicas Pinturas', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtoPageComponents.dicasPinturaComponents }).isVisible();
    console.log('Existe o componente Dicas Pinturas!')
});

test('Verificar se existe o componente Catalogo Produtos', async ({ page }) => {
    await page.goto(produtosPage);
    await page.getByRole('link', { name: produtoPageComponents.catalogoProdutosComponents }).isVisible();
    console.log('Existe o componente Catalogo Produtos!')
});