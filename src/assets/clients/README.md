# README - Pasta de Logos dos Clientes

Esta pasta contém os logos das empresas clientes da Politec.

## Estrutura de arquivos recomendada:

- `cliente-1.png` - Logo da primeira empresa cliente
- `cliente-2.png` - Logo da segunda empresa cliente
- `cliente-3.png` - Logo da terceira empresa cliente
- `cliente-4.png` - Logo da quarta empresa cliente
- `cliente-5.png` - Logo da quinta empresa cliente
- `cliente-6.png` - Logo da sexta empresa cliente

## Especificações técnicas:

- **Formato**: PNG ou SVG (recomendado PNG com fundo transparente)
- **Dimensões**: Mínimo 200x100px, máximo 400x200px
- **Tamanho**: Máximo 500KB por arquivo
- **Qualidade**: Alta resolução para telas retina

## Como adicionar novos clientes:

1. Adicione a imagem na pasta `src/assets/clients/`
2. Atualize o array `clients` no arquivo `src/components/Clients.tsx`
3. Adicione o novo objeto cliente com as propriedades:
   - `id`: número único
   - `name`: nome da empresa
   - `logo`: caminho da imagem
   - `website`: URL do site da empresa

## Exemplo de uso:

```tsx
{
  id: 7,
  name: "Nova Empresa",
  logo: "/src/assets/clients/nova-empresa.png",
  website: "https://novaempresa.com"
}
```
