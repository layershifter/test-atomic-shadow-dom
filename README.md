## Start it

#### Install dependencies

```shell
yarn install
```

#### Starting apps

```shell
# Atomic CSS

# to start an app with @microsoft/fast-element
yarn dev:fast
# to start an app with plain Shadow DOM
yarn dev:shadow
# to start an app with real DOM
yarn dev:real

# Monolithic CSS

# to start an app with plain Shadow DOM
yarn dev:mono:shadow
# to start an app with real DOM
yarn dev:mono:real
```

## Results

Use [Perfetto UI](https://ui.perfetto.dev/) to do measurements. Results show that layouting is still expensive because of classes matching process.

## Atomic CSS

### Shadow DOM (constructable stylesheets)

`Document::recalcStyle` takes 118ms 299us

![Results for Shadow DOM](./assets/shadow-dom.png)

### Shadow DOM (style tag)

`Document::recalcStyle` takes 118ms 551us

![Results for Shadow DOM with style tag](./assets/shadow-dom-style-tag.png)

### Real DOM

`Document::recalcStyle` takes 80ms 27us

![Results for real DOM](./assets/real-dom.png)

## Monolithic CSS

### Shadow DOM (constructable stylesheets)

- `UpdateLayoutTree` is 37ms 700us
- `Document::recalcStyle` is 13ms 797us

![img.png](./assets/mono-shadow-dom.png)

### Real DOM

- `UpdateLayoutTree` is 14ms 914us
- `Document::recalcStyle` is 8ms 532us

![img.png](./assets/mono-real-dom.png)
