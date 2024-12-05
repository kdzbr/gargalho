import { test } from '@playwright/test';
import { homePage } from '../locators/urlWeb.json';
import { homePageComponents} from '../components/homePageComponents.json';

test('Ir para home page da Uniao Tintas', async ({ page }) => {
    await page.goto(homePage);
    console.log('Acesso a página com sucesso!')
});

test('Verificar se existe o componente de Telefones', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.telefonesComponents }).isVisible();
    console.log('Existe o componente Telefones!')
});

test('Verificar se existe o componente Logo', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.logoComponents }).isVisible();
    console.log('Existe o componente Logo!')
});

test('Verificar se existe o componente Ferramentas', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.ferramentaComponent.component }).isVisible();
    await page.getByRole('link', { name: homePageComponents.ferramentaComponent.url }).isVisible();
    console.log('Existe o componente Ferramentas!')
});

test('Verificar se existe o componente Ambientes', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.ambientesComponent.component }).isVisible();
    await page.getByRole('link', { name: homePageComponents.ambientesComponent.url }).isVisible();
    console.log('Existe o componente Ambientes!')
});

test('Verificar se existe o componente Dicas Utéis', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.dicasUteisComponent.component }).isVisible();
    await page.getByRole('link', { name: homePageComponents.dicasUteisComponent.url }).isVisible();
    console.log('Existe o componente Dicas Utéis!')
});

test('Verificar se existe o componente Contato União Tintas Email', async ({ page }) => {
    await page.goto(homePage);
    await page.getByRole('link', { name: homePageComponents.contatoUniaoTintasEmail }).isVisible();
    console.log('Existe o componente Contato União Tintas Email!')
});