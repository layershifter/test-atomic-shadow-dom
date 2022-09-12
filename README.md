## Start it

#### Install dependencies

```shell
yarn install
```

#### Starting apps

```shell
# to start an app with @microsoft/fast-element
yarn dev:fast
# to start an app with plain Shadow DOM
yarn dev:shadow
# to start an app with real DOM
yarn dev:real
```

## Results

Use [Perfetto UI](https://ui.perfetto.dev/) to do measurements. Results show that layouting is still expensive because of classes matching process.

#### Shadow DOM

`Document::recalcStyle` takes 118ms 299us

![Results for Shadow DOM](./assets/shadow-dom.png)

#### Real DOM

`Document::recalcStyle` takes 80ms 27us

![Results for real DOM](./assets/real-dom.png)
